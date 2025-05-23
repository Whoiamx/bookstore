const path = require("path");
const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const port = 4848;

app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "src", "assets")));

app.get("/books", (req, res) => {
  const filePath = path.join(__dirname, "src", "booksForSale.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error leyendo JSON:", err);
      return res.status(500).json({ error: "Error leyendo archivo JSON" });
    }

    try {
      const books = JSON.parse(data);
      res.json(books);
    } catch (parseError) {
      console.error("Error parseando JSON:", parseError);
      res.status(500).json({ error: "Error parseando JSON" });
    }
  });
});

app.listen(port, () => {
  console.log(`Escuchando el puerto ${port}`);
});
