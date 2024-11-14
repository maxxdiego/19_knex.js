const database = require("./database");

// UPDATE

database
  .where({ id: 5 })
  .update({
    preco: 40
  })
  .table("games")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
