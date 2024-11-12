const database = require("./database");

// SELECT (Selecionando dados do banco)
database
  // .select(["id", "preco"])
  .select()
  .table("games")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// NESTED QUERIES (Queries aninhadas)
database
  .insert({ nome: "Mists of Noyah", preco: 25 })
  .into("games")
  .then((data) => {
    database
      .select(["id", "preco"])
      .table("games")
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });
