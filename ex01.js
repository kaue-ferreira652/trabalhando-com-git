// const readline = require('readline-sync')
// let nome = readline.question("Digite o seu nome:")
// console.log(`Seu nome é: ${nome}`)

// Importa a biblioteca readline-sync
const readline = require('readline-sync')
// Solicita os dados dos usuários
let nome = readline.question("Informe seu nome: ")
let curso = readline.question("Informe o curso: ")
let idade = readline.questionInt("Informe a sua idade: ")

console.log('======== SISTEMA DE REGISTRO ========')
console.log(`Nome do usuário: ${nome}`)
console.log(`Curso do usuário: ${curso}`)
console.log(`Idade do usuário: ${idade}`)

