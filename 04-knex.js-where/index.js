const database = require("./database");

// WHERE
// const query = database
//   .select(["nome", "preco"])
//   .where({ nome: "GTA" })
//   // .where({ id: "4" })
//   .orWhere({id: 2})
//   .table("games");
// console.log(query.toQuery());

// WHERE RAW
// const query = database
//   .select(["nome", "preco"])
//   // .where({ nome: "GTA" })
//   .whereRaw("nome = 'GTA' OR preco > 50")
//   .table("games");
// console.log(query.toQuery());

// MOSTRANDO OS DADOS
const query = database
  .select(["nome", "preco"])
  // .where({ nome: "GTA" })
  .whereRaw("nome = 'GTA' OR preco > 60")
  .table("games").then(data => {
    console.log(data)
  }).catch(error => {
    console.log(error)
  })

// // QUERY CRUA
database
  .raw("SELECT * FROM games;")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
