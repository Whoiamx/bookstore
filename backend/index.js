const path = require("path");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const { createUser, loginUser } = require("./src/auth/auth");
const { PORTCONFIG, SECRET_JWT_KEY } = require("./config");

const allowedOrigins = [
  "http://localhost:3000",
  "https://bookstore-eta-tawny.vercel.app",
];
const app = express();
const port = PORTCONFIG || 3232;
const prisma = new PrismaClient();

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/assets", express.static(path.join(__dirname, "src", "assets")));

app.use((req, _res, next) => {
  const token = req.cookies["access-token"];
  req.session = { user: null };

  if (token) {
    try {
      req.session.user = jwt.verify(token, SECRET_JWT_KEY);
    } catch (_e) {}
  }
  next();
});

const shuffleArray = (array) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

app.get("/books", async (req, res) => {
  const { query } = req;
  const limit = parseInt(query.limit);

  try {
    if (limit) {
      const librosLimit = await prisma.libro.findMany({
        take: limit,
      });
      const randomBooks = shuffleArray(librosLimit);
      return res.json(randomBooks);
    } else {
      const libros = await prisma.libro.findMany();
      return res.json(libros);
    }
  } catch (error) {
    console.error("Error al obtener libros:", error);
    return res.status(500).json({ error: "Error al obtener libros" });
  }
});

app.get("/book", async (req, res) => {
  const { search } = req.query;

  if (!search) {
    return res.status(400).json({ error: "Parámetro 'search' requerido" });
  }

  try {
    const libro = await prisma.libro.findFirst({
      where: {
        titulo: {
          contains: search,
          mode: "insensitive",
        },
      },
    });

    if (!libro) {
      return res.status(404).json({ message: "No se encontraron libros" });
    }

    return res.json(libro);
  } catch (error) {
    console.error("Error al buscar libros:", error);
    return res.status(500).json({ error: "Error al buscar libros" });
  }
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    const userId = await createUser({ username, password });
    res.status(201).json({ message: "Usuario creado", userId });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const user = await loginUser(req.body);

    const token = jwt.sign(
      { id: user.id, username: user.username },
      SECRET_JWT_KEY,
      { expiresIn: "2h" }
    );

    // 👇 SameSite ‘None’ + secure true → cookie cross-site
    res.cookie("access-token", token, {
      httpOnly: true,
      secure: true, // Render usa HTTPS
      sameSite: "None", // necesario cross-site
      maxAge: 1000 * 60 * 60 * 2,
    });

    return res.json({
      message: "Login exitoso",
      username: user.username,
    });
  } catch (err) {
    return res.status(401).json({ error: err.message });
  }
});

app.post("/logout", (_req, res) => {
  res
    .clearCookie("access-token", {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    })
    .json({ message: "Deslogueado" });
});

app.post("/protected", (req, res) => {
  const user = req.user;
  if (!req.session.user) return res.sendStatus(403);
  return res.json({
    ok: true,
    user: req.session.user,
    message: "Sesión válida",
    username: user.username,
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});
