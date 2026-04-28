const readline = require('readline-sync')

let aulaTotal = readline.question("Quantas aulas teve no curso: ")
let aulasAssistidas = readline.question("Aulas que o aluno assistiu: ")
let percentual =  ( 100 *  aulasAssistidas) / aulaTotal

console.log("====== RESULTADO ======")
if(percentual >= 100){
    console.log('Parabéns! Curso concluído')
}else if(percentual >= 50 && percentual <= 100){
    console.log('Você está avançando bem')

}else{
    console.log('Você ainda está no começo do curso')
}

