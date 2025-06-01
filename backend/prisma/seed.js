const { PrismaClient } = require("@prisma/client");
const { initialData } = require("../seedUsers");
const prisma = new PrismaClient();

async function main() {
  const users = initialData.users.map((user) => ({
    ...user,
    image: null,
    emailVerified: null,
  }));

  await prisma.user.createMany({
    data: users,
    skipDuplicates: true, // opcional: evita errores por duplicados
  });

  console.log("✅ Users seeded!");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding users:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
