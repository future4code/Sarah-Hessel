
// a) Para acessar os parametrôs, atribuimos a uma variavel o argumento com um valor de indice especifico.

// node caminho-para-o-arquivo terceiro-argumento quarto-argumento       // caminho de acesso no terminal 
// [0]          [1]                 [2]                 [3]

const name = process.argv[2] // Argumentos passados no terminal para execução do programa
const age = process.argv[3]

const addSeven = Number(age) + 7

console.log(`Olá, ${name}! Você tem ${age} anos. Daqui 7 anos você terá ${addSeven} anos `)