# Descripcion

Books Store es una aplicación fullstack que clona una tienda de libros online. El frontend está desarrollado con Next.js, mientras que el backend utiliza Node.js y Express, con conexión a una base de datos para gestionar libros, usuarios y compras. La app permite explorar el catálogo, ver detalles de cada libro y realizar operaciones típicas de un ecommerce, como agregar productos al carrito y simular compras.

# Correr en Dev

1. Clonar el repositorio
2. Instalar dependencias `npm install`
3. Correr el proyecto `npm run dev `

**_ En el backend en desarrollo _**

4. Prender el contenedor de Docker
5. Ejecutar `docker compose up -d` para levantar la base de datos de desarrollo
6. Levantar la base de datos postgres en Table Plus de desarrollo
7. Correr las migraciones de Prisma (en caso de que agreguemos modelos de tablas de la base de datos) `npx prisma migrate dev --name init`

# Correr en prod
