const database = require("./database");

// INSERT (Inserindo dados no banco)

// const dados = {
//   nome: "Sea of Thieves",
//   preco: 50.67,
// };

const dados = [
  {
    nome: "Call of Dutty 2",
    preco: 60,
  },
  {
    nome: "GTA",
    preco: 40,
  },
  {
    nome: "WoW",
    preco: 120,
  },
];

const query = database
  .insert(dados)
  .into("games")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// console.log(query.toQuery());
