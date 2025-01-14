# Knex.js (Query builder para Node.js)

![NPM](https://img.shields.io/npm/l/react)

## Introdução

O Knex.js é uma biblioteca de SQL query builder para Node.js que facilita a interação com bancos de dados relacionais, como PostgreSQL, MySQL, SQLite, entre outros. Ele permite escrever consultas de banco de dados de forma programática usando JavaScript, oferecendo suporte a transações, migrações, e manipulação de esquemas de maneira fluente. O Knex também pode ser usado com diferentes ORMs ou diretamente para escrever consultas SQL, abstraindo as particularidades de cada banco de dados.

### Vantagens:

- Suporte a vários bancos de dados.
- Facilita a criação de queries complexas de forma programática.
- Migrações e controle de versões do banco de dados embutidos.
- Integração com ORMs, como Bookshelf.js e Objection.js.

### Desvantagens:

- Pode ter uma curva de aprendizado inicial.
- Consultas mais simples podem ser mais verbosas comparado ao SQL puro.
- Menor desempenho para consultas extremamente complexas em comparação ao uso direto de SQL.

## Instalando Knex.js:

```bash
npm install knex
```
## Instalando MySQL2:

```bash
npm install mysql2
```

## Configurando o Knex.js:

```bash

// database.js:

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

```

# Autor

Prof. Diego Max da Silva<br>
https://lattes.cnpq.br/4370663836049458
