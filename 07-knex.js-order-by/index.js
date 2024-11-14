const database = require("./database");

// ORDER BY

database
.select()
.table("games")
// preco ou nome
.orderBy("preco", "desc") // asc
.then(data => {
  console.log(data)
}).catch(error => {
  console.log(error)
})