const readline = require('readline-sync')

let idadeMínima = 18
let idade = readline.question("Informe sua idade: ")

console.log("====== Lista de Pessoas ======")

if(idade >= idadeMínima){
    console.log('Pode entrar para a festa')
}else{
    console.log('Você não pode entrar por aqui, VAI EMBORA!!')
}

