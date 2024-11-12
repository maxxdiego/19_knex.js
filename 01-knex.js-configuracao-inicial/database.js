const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "root",
    password: "admin",
    database: "knexjs",
  },
});

module.exports = knex;
