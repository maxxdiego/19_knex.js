const database = require("./database");

// ASSOCIATED INSERT - Tabela 1:1

database
.insert({
  nome: "Blizzard",
  game_id: "5"
})
.table("estudios")
.then(data => {
  console.log(data)
}).catch(error => {
  console.log(error)
})