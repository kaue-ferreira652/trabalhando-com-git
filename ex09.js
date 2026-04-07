const readline = require('readline-sync')

let dinheiro = 100
let ValordaCompra = readline.questionFloat("Informe o valor da compra: ")
let diferenca = dinheiro - ValordaCompra

console.log("======= VALOR DAS COMPRAS =======")

if(ValordaCompra > dinheiro){
    console.log("Você pode obter o frete grátis")
}else{
    console.log(`Você não pode ter o frete grátis, adicione mais ${diferenca} Reais!`)
}
    
