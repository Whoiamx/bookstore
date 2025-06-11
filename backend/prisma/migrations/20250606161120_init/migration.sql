-- CreateTable
CREATE TABLE "Libro" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "imagen" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precio" INTEGER NOT NULL,

    CONSTRAINT "Libro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Libro_slug_key" ON "Libro"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
