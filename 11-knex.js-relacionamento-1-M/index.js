const database = require("./database");

// RELACIONAMENTO 1:M
// PROCESSANDO DADOS EM UM ARRAY

database
  .select(["games.*", "estudios.nome as est_nome"])
  .table("games")
  .innerJoin("estudios", "estudios.game_id", "games.id")
  .then((data) => {
    const estudiosGamesArray = data;
    const game = {
      id: 0,
      nome: "",
      estudios: [],
    };

    game.id = data[0].id;
    game.nome = data[0].nome;

    data.forEach((estudio) => {
      game.estudios.push({ nome: estudio.est_nome });
    });
    console.log(game);
  })
  .catch((error) => {
    console.log(error);
  });
