const express = require("express");
const cors = require("cors");
const books = require("./booksForSale.json");

const port = 4848;
const app = express();

app.use(cors());

app.get("/books", (req, res) => {
  res.send(books);
});

app.listen(port, () => {
  console.log(`Escuchando el puerto ${port}`);
});
