const readline = require("readline-sync")

let planejado = 40
let realizado = readline.questionFloat("Informe as horas que estudou: ")

let diferenca = planejado - realizado

console.log("====== RESULTADO ======")

if(realizado >= planejado){
    console.log("Parabéns!! Você cumpriu a meta")
}else{
    console.log(`Faltaram ${diferenca} horas para completar a tarefa`)
}