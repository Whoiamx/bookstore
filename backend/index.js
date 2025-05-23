const path = require("path");
const express = require("express");
const cors = require("cors");
const books = require("./src/booksForSale.json");

const app = express();
const port = 4848;

app.use(cors());

// Aquí servís la carpeta assets que está en src/assets
app.use("/assets", express.static(path.join(__dirname, "src", "assets")));

app.get("/books", (req, res) => {
  res.send(books);
});

app.listen(port, () => {
  console.log(`Escuchando el puerto ${port}`);
});
