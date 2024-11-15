const database = require("./database");

// TRANSACTIONS

async function testeTransacao() {
  try {
    await database.transaction(async (trans) => {
      await trans.insert({ nome: "Qualquer nome" }).into("estudios");
      await trans.insert({ nome: "Pyxerelia" }).into("estudios");
      await trans.insert({ nome: "Mojang" }).into("estudios");
      await trans.insert({ nome: "Gearbox" }).into("estudios");
    });
  } catch (error) {
    console.log(error);
  }
}

testeTransacao();
