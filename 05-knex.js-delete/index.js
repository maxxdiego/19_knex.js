const database = require("./database");

// DELETE

database
  .where({ id: 3 })
  .delete()
  .table("games")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
