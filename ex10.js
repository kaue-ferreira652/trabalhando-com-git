const readline = require('readline-sync')

let TotalDePaginas = 300
console.log("----------------")
console.log("|  BIBLIOTECA  | ")
console.log("----------------")
let qtdPaginasLidas = readline.questionInt("Informe a quantidade de páginas lidas: ")
let percentual = (qtdPaginasLidas / TotalDePaginas) * 100

console.log('======= RESULTADO =======')

console.log(`O usuário leu ${percentual}% do livro`)

