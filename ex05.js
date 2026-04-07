const readline = require('readline-sync')

let objetivo = 500
let dinheiroGuardado = readline.questionFloat("Informe o valor guardado: ")

let diferenca = objetivo - dinheiroGuardado

console.log("====== RESULTADO ======")

if(dinheiroGuardado >= objetivo){
    console.log("Parabéns!! Você atingiu a meta")
} else{
    console.log(`Faltaram ${diferenca} para atingir o objetivo`)
}