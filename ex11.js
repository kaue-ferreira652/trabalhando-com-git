const readline = require('readline-sync')

let tamanhoTotal = 20
let qtdBaixado = readline.questionInt("Quantos GB foram baixados?: ")
let percentual = (qtdBaixado / tamanhoTotal) * 100

console.log("========= RESULTADO =========")
console.log(`Foi baixado ${percentual}%`)

