const database = require("./database");

// INNER JOIN - Tabela 1:1

// database
// .select(["games.id as g_id", "estudios.id as est_id", "games.nome as g_nome", "estudios.nome as est_nome"])
// .table("games")
// .innerJoin("estudios", "estudios.game_id", "games.id")
// .then(data => {
//   console.log(data)
// }).catch(error => {
//   console.log(error)
// })

database
.select(["games.*", "estudios.nome as est_nome"])
.table("games")
.innerJoin("estudios", "estudios.game_id", "games.id")
.then(data => {
  console.log(data)
}).catch(error => {
  console.log(error)
})