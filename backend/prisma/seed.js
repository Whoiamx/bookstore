const { PrismaClient } = require("../src/generated/prisma");
const path = require("path");
const fs = require("fs");

const prisma = new PrismaClient();

async function main() {
  const jsonPath = path.join(__dirname, "..", "src", "booksForSale.json");
  const jsonData = fs.readFileSync(jsonPath, "utf8");
  const books = JSON.parse(jsonData);

  for (const book of books) {
    await prisma.libro.create({
      data: {
        titulo: book.titulo,
        autor: book.autor,
        descripcion: book.descripcion,
        genero: book.genero,
        imagen: book.imagen,
        categoria: book.categoria,
        slug: book.slug,
        cantidad: book.cantidad,
        precio: book.precio,
      },
    });
  }

  console.log("Seed completado con éxito.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
