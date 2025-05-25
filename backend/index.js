const path = require("path");
const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("./src/generated/prisma");

const app = express();
const port = 4848;

const prisma = new PrismaClient();
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "src", "assets")));

app.get("/books", async (req, res) => {
  try {
    const libros = await prisma.libro.findMany();
    res.json(libros);
  } catch (error) {
    console.error("Error al obtener libros:", error);
    res.status(500).json({ error: "Error al obtener libros" });
  }
});

app.listen(port, () => {
  console.log(`Escuchando el puerto ${port}`);
});
