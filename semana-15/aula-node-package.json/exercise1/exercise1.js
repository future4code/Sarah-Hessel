
// a) Para acessar os parametrôs, atribuimos a uma variavel o argumento com um valor de indice especifico.

// node caminho-para-o-arquivo terceiro-argumento quarto-argumento       // caminho de acesso no terminal 
// [0]          [1]                 [2]                 [3]
const chalk = require('chalk')
const name = process.argv[2] // Argumentos passados no terminal para execução do programa
const age = process.argv[3]
const addSeven = Number(age) + 7

 const verification = () => {
    if (name === undefined && age === undefined){
        console.log("O primeiro e o segundo argumento não foram passados")
    }else if(name === undefined){
        console.log("O primeiro argumento não foi passado")   // linha else if um pouco inutil ;/ pq o segundo argumento não existe sem o primeiro.
    }else if(age === undefined){
        console.log("O segundo argumento não foi passado")
    }
    else{
    console.log(chalk.red(`Olá, ${name}! Você tem ${age} anos. Daqui 7 anos você terá ${addSeven} anos `))
    }
 }
 verification()


