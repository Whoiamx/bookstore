const path = require("path");
const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const { createUser, loginUser } = require("./src/auth/auth");

const app = express();
const port = 3232;

const prisma = new PrismaClient();
app.use(cors());
app.use(express.json());
app.use("/assets", express.static(path.join(__dirname, "src", "assets")));

const shuffleArray = (array) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

app.get("/books", async (req, res) => {
  const { query } = req;

  const limit = parseInt(query.limit);

  if (limit) {
    const librosLimit = await prisma.libro.findMany({
      take: limit,
    });

    const randomBooks = shuffleArray(librosLimit);

    res.json(randomBooks);
  } else {
    try {
      const libros = await prisma.libro.findMany();
      res.json(libros);
    } catch (error) {
      console.error("Error al obtener libros:", error);
      res.status(500).json({ error: "Error al obtener libros" });
    }
  }
});

app.get("/book", async (req, res) => {
  const { search } = req.query;

  if (!search) {
    return res.status(400).json({ error: "Parámetro 'search' requerido" });
  }

  try {
    const libros = await prisma.libro.findFirst({
      where: {
        titulo: {
          contains: search,
          mode: "insensitive",
        },
      },
    });

    if (libros.length === 0) {
      return res.status(404).json({ message: "No se encontraron libros" });
    }

    res.json(libros);
  } catch (error) {
    console.error("Error al buscar libros:", error);
    res.status(500).json({ error: "Error al buscar libros" });
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
  console.log("🔍 Entró al endpoint /login");
  const { username, password } = req.body;
  try {
    const user = await loginUser({ username, password });
    res.status(200).json({ message: "Login exitoso", user });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Escuchando el puerto ${port}`);
});
