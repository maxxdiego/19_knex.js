const database = require("./database");

// RELACIONAMENTO M:M

database
  .select([
    "estudios.nome as est_nome",
    "games.nome as g_nome",
    "games.preco"
  ])
  .table("games_estudios")
  .innerJoin("games", "games.id", "games_estudios.game_id")
  .innerJoin("estudios", "estudios.id", "games_estudios.estudio_id")
  .where("games.id", 17)
  // .where("estudios.id", 8)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
