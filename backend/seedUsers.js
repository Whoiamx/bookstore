const bcrypt = require("bcryptjs");

const initialData = {
  users: [
    {
      email: "gaastontimchuk@gmail.com",
      name: "Gaston",
      password: bcrypt.hashSync("12345678"),
    },
    {
      email: "gaston.timchuk@gmail.com",
      name: "Gaston",
      password: bcrypt.hashSync("12345678"),
    },
    {
      email: "pedro.aznar@gmail.com",
      name: "Pedro",
      password: bcrypt.hashSync("12345678"),
    },
    {
      email: "carlos.garcia@gmail.com",
      name: "Charly",
      password: bcrypt.hashSync("12345678"),
    },
  ],
};

module.exports = { initialData };
