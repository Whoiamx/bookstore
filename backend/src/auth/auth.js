const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const prisma = new PrismaClient();

function validateUsername(username) {
  if (typeof username !== "string")
    throw new Error("username debe ser un string");
  if (username.length < 6)
    throw new Error("username debe tener al menos 6 caracteres");
}

function validatePassword(password) {
  if (typeof password !== "string")
    throw new Error("password debe ser un string");
  if (password.length < 6)
    throw new Error("password debe tener al menos 6 caracteres");
}

async function createUser({ username, password }) {
  validateUsername(username);
  validatePassword(password);

  const existing = await prisma.user.findUnique({ where: { username } });
  if (existing) throw new Error("username ya creado");

  const id = crypto.randomUUID(); // Genera UUID v4 random

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: { id, username, password: hashedPassword },
  });

  return id;
}

async function loginUser({ username, password }) {
  const user = await prisma.user.findUnique({ where: { username } });
  if (!user) throw new Error("Usuario no encontrado");

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) throw new Error("Contraseña incorrecta");

  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

module.exports = {
  createUser,
  loginUser,
};
