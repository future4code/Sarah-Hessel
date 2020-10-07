// --------Interpretação de códigos--------
// 1)

function minhaFuncao(variavel) {
	return variavel * 5
}
console.log(minhaFuncao(2))
console.log(minhaFuncao(10))


// a) Vai ser impresso no console a variavel digitada pelo usuario na linha 6 e 7, vezes o número 5.
// b) O resultado não seria impresso no console, pois só é impresso por meio do console.log.


// 2) 

let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Soter"];

const outraFuncao = function(array) {
	for (let i = 0; i < 2; i++) {
		console.log(array[i])
	}
}
outraFuncao(arrayDeNomes)


// a) Vai ser impresso no console os dois primeiros indices do arrayDeNomes.
// b) 


// 3) 

const metodo = (array) => {
    let arrayFinal = [];
  
    for (let x of array) {
          if (x % 2 === 0) {
          arrayFinal.push(x * x)
          }
    }
    return arrayFinal;
  }
  


// --------Códigos escritos-------- 

// 4) a)

function informacoes(){
  console.log("Eu sou Sarah, tenho 18 anos, moro em Minas Gerais e sou estudante da Labenu!")
}
informacoes()


// b)

function informacoes(){
  const nome = prompt("Qual seu nome? ")
  const idade = Number(prompt("Idade: "))
  const localidade = prompt("Localidade: ") 
  let estudante = prompt("É estudante? SIM/NÃO ")

  if(estudante === "SIM" ){
   estudante = "sou"
  }
  else if(estudante === "NÃO" || "NAO"){
   estudante = "não sou"
  }
  console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${localidade} e ${estudante} estudante da Labenu!`)
}
informacoes()


// 5) a)

let somaDeDoisNum = function (num1, num2){    // FUNCAO NÃO NOMEADA, atribui a função a uma variavel.
    return num1 + num2 
}             
somaDeDoisNum(4, 5)

/* 
    FUNCAO NOMEADA

function somaDeDoisNum (num1, num2){
    let soma = num1 + num2
    return soma
}
somaDeDoisNum(4, 5)

    ARROW FUNCTION

let somaDeDoisNum = (num1, num2) => {
    return num1 + num2 
}             
somaDeDoisNum(4, 5)

*/


// b)

let maiorMenor = (num1, num2) =>{
  if(num1 > num2){
    return (`O ${num1} é maior/igual a ${num2}.`)
  }
  else{
    return(`O ${num1} é menor que o ${num2}.`)
  }
}
maiorMenor(5, 3)


// c)

let repetirDezVezes = (frase) => {
  for(i = 0; i < 10; i++){
    console.log(frase)
  }
}
repetirDezVezes("Sou a frase atrevida, vou aparecer no seu terminal 10 vezes! :p")


// 6)

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// a) 

let contadorDeArray = (array) =>{
  return array.length
}
contadorDeArray(array)


// b)

let verificandoNumeroPar = (numero) =>{
  if (numero % 2 === 0){
    return true;             // Correção: para quando for chamar a função em outra função, estar explicito o true e o false.
    // return "true, é par"; 
  }
  else{
    return false;
    // return "false, é ímpar";
  }
}
verificandoNumeroPar(2)


// c)

let contatadorDePares = (array) =>{
  let numPares = []
  for(let i = 0; i < array.length; i++){
    if (array[i] % 2 === 0){
      numPares.push(array[i])
    }
  }
  return numPares.length
}
contatadorDePares(array)


// d) 

let contatadorDePares = (array) =>{
  let numPares = []
  for(let i = 0; i < array.length; i++){
    if (verificandoNumeroPar(array[i])){
      numPares.push(array[i])
    }
  }
  return numPares.length
}
contatadorDePares(array)


// --------DESAFIOS--------

// 1) a)

let arrowFunction = (parametro) =>{
  console.log(parametro)
}
arrowFunction(2)


// b)

let arrowFunction2 = (param1, param2) =>{
  const soma = param1 + param2;
  arrowFunction(soma)
}
arrowFunction2(2, 3)


// 2) 

const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

// a) ---Faltando a multi por 2---

let numParesEMulti2 = (numeros) =>{
  let paresEMulti2 = []
  for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2===0){
      paresEMulti2.push(numeros[i])
    }
  }
  console.log(paresEMulti2)
}
numParesEMulti2(numeros)


// b) 


