const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "root",
    password: "admin",
    database: "knexjs-m-m",
  },
  debug: true
});

module.exports = knex;
