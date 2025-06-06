const { PrismaClient } = require("@prisma/client");
const fs = require("fs/promises");
const path = require("path");

const prisma = new PrismaClient();

async function main() {
  // Eliminar todo antes
  await prisma.libro.deleteMany();

  // Cargar libros
  const filePath = path.join(__dirname, "booksForSale.json");
  const data = await fs.readFile(filePath, "utf-8");
  const libros = JSON.parse(data);

  for (const libro of libros) {
    await prisma.libro.create({ data: libro });
  }

  console.log("Seed completado desde cero");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
