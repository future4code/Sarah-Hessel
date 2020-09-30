// 1.
const bool1 = true
const bool2 = false
const bool3 = !bool2 // true

let resultado = bool1 && bool2
console.log("a. ", resultado) // imprimirá na tela o valor de false, pois bool1 é true e bool2 é false.

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado) // false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado) // true

console.log("e. ", typeof resultado) // booleana

// 2.
let array
console.log('a. ', array) // undefined, pois nenhum valor foi atribuido á variavel.

array = null
console.log('b. ', array) // null.

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // imprime a quantidade de índices que existe no array.

let i = 0
console.log('d. ', array[i]) // imprime o valor do indice 0.

array[i+1] = 19     
console.log('e. ', array) // imprime os valores do array a partir do indice 0.

const valor = array[i+6]
console.log('f. ', valor) // imprime na tela o valor do indice 0 até o 6.

//Exercícios escritos - Obrigatórios!

// 1.

const idade = parseInt(prompt("Qual a sua idade?"))
console.log(idade)

const idadeAmg = parseInt(prompt("Qual a idade dx sxx melhor amigx? :) "))
console.log(idadeAmg)

const pergunta = [ "Sua idade é maior que a dx sxx melhor amigx?" ]
const resposta = [true, false]
console.log(pergunta, resposta[1])

const diferenca = idade - idadeAmg
console.log(diferenca)

// 2.

const par = parseInt(prompt("Escreva um número par "))
const resto = par%2
console.log(resto)   // todo número par dividido por 2 o resultante 'resto' será 0 (zero).
                    // quando digitado um número ímpar dividido por 2 o resultante 'resto' sempre será 1 (um).

// 3.

let listaDeTarefas = [];
console.log("Qual suas 3 tarefas essenciais no seu dia-a-dia?")

let tarefa1 = prompt("Primeira tarefa: ")
let tarefa2 = prompt("Segunda tarefa: ")
let tarefa3 = prompt("Terceira tarefa: ")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)
console.log(listaDeTarefas)

let digite = prompt("Digite um valor de 0 a 3")
listaDeTarefas.splice(digite, 1)
console.log(listaDeTarefas)

// 4.

let emailDoUsuario = prompt("Digite seu email: ")
let nomeDoUsuario = prompt("Digite seu nome de usuario: ")
console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o) " + nomeDoUsuario + "!")

//Exercícios escritos - Desafio!

// 1.

let kelvin = (77 - 32)*5/9 + 273.15
console.log(kelvin + "°K")
let fahrenheit  = (80)*9/5 + 32
console.log(fahrenheit + "°F")
