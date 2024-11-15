const database = require("./database");

// JOIN COM WHERE

database
.select(["games.*", "estudios.nome as est_nome"])
.table("games")
.innerJoin("estudios", "estudios.game_id", "games.id")
.where("games.id", 5)
.then(data => {
  console.log(data)
}).catch(error => {
  console.log(error)
})

