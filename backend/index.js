const path = require("path");
const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("./src/generated/prisma");

const app = express();
const port = 4848;

const prisma = new PrismaClient();
app.use(cors());
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

app.listen(port, () => {
  console.log(`Escuchando el puerto ${port}`);
});
