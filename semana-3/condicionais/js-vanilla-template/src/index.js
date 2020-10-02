// 1.
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)                                               
if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

/* Na primiera linha é pedido para o usuário digitar um número, após isso na linha 4 o If executará esse número 
com a condição do resto da divisão por 2 ser igual a zero (par).
Caso seja true será impresso na tela "Passou no teste" caso não "Não passou no teste" */

// 2.
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) o código serve para o usuario escolher uma fruta e no final imprimir o nome e o valor do produto escolhido.
// b) O preço da fruta Maçã é R$ 2.25.
// c) O preço da fruta Pêra é R$ 5. (Sem o fechamento do break na case Pêra o valor do default será levado em conta)

// 3.
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

// a) Na primeira linha é pedido para o usuario digitar um número, do tipo Number.
// b)

//Exercícios de escrita de código

// 4.
let idade = Number(prompt("Informe sua idade "))
if(idade >= 18 ){
    console.log(" Você pode dirigir! :)")
}
else{
    console.log("Você ainda não tem idade para dirigir :(")
}

// 5.
let turno = prompt("Digite seu turno: M / V / N ")
if(turno === "M"){
    console.log("Bom dia!")
}
else if(turno === "V"){
    console.log("Boa tarde!")
}
else if(turno === "N"){
    console.log("Boa noite!")
}

// 6.
let turno = prompt("Digite seu turno: M / V / N ")
switch(turno){
    case "M":
        console.log("Bom dia!")
    break
    case "V":
        console.log("Boa tarde!")
    break
    case "N":
        console.log("Boa noite!")
    break
}

// 7.
const genero = prompt("Qual gênero de filme vão assistir? :) ")
const preco = Number(prompt("Preço dos ingressos: "))

if(genero === "Fantasia" || "fantasia" && preco <= 15){
    console.log("Bom filme!")
}
else{
    console.log("Escolha outro filme :(")
}

// Desafio

// 1.
const genero = prompt("Qual gênero de filme vão assistir? :) ")
const preco = Number(prompt("Preço dos ingressos: "))
const snack = prompt ("Qual snack que você quer comprar?")

if(genero === "Fantasia" || "fantasia" && preco <= 15){
    console.log("Bom filme!")
    console.log("...com", snack, ", yummy!")
}
else{
    console.log("Escolha outro filme :(")
}

// 2.
let nomeComp = prompt("Informe seu nome completo: ")
let jogo = prompt("Tipo de jogo: ")
let etapa = prompt("Etapa: ")
let categoria = prompt("Categoria: ")
let quantidade = prompt("Quantidade de ingressos: ")

if(jogo === "DO"){
    if(etapa === "SF"){
        if(categoria === 1){
            let valor = 1320 
        }
        else if(categoria === 2){
            let valor = 880 
        }
        else if(categoria === 3){
            let valor = 550 
        }
        else if(categoria === 4){
            let valor = 220 
        }
    }
    else if(etapa === "DT"){
        if(categoria === 1){
            let valor = 660 
        }
        else if(categoria === 2){
            let valor = 440 
        }
        else if(categoria === 3){
            let valor = 330 
        }
        else if(categoria === 4){
            let valor = 170 
        }
        
    }
    else if(etapa === "FI"){
        if(categoria === 1){
            let valor = 1980 
        }
        else if(categoria === 2){
            let valor = 1320 
        }
        else if(categoria === 3){
            let valor = 880 
        }
        else if(categoria === 4){
            let valor = 330 
        }
        
    }
}
let ingressosValorTotal = valor * quantidade;
console.log("Nome do cliente: ", nomeComp)
console.log("Tipo de jogo: ", jogo)
console.log("Etapa: ", etapa)
console.log("Categoria ", categoria)
console.log("Quantidade ", quantidade)
console.log("---Valores---")
console.log("Valor do ingresso: ", valor)
console.log("Valor total: ", ingressosValorTotal)
