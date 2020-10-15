// Exercícios de interpretação

/* 
Ex. 1 

    Na 1º linha está uma função conversorDeMoeda que recebe como parametro valorEmDolar, dentro desta função existe 
uma constante cotacao que imprime uma mensagem na tela e recebe um valor em Number que o usuario digitará. 
No final da função é retornado uma string concatenado ao valorEmDolar multiplicado (*) por cotacao. 
    Fora da função é declarado uma constante meuDinheiro que recebe a função conversorDeMoeda e um parametro de valor qualquer, por exemplo: (100)
logo abaixo é acionado ao programa para imprimir na tela através do console.log a constante meuDinheiro.

exemplo: cotacao = 5,52 reais

--- saida: 552,48 ---


Ex.2

    Na 1º linha é declarada uma função investeDinheiro que recebe dois parametros tipoDeInvestimento e valor,
dentro desta função é declarada uma variavel valorAposInvestimento e logo abaixo um switch.
O switch irá guardar as strings do tipoDeInvestimento em cases com um resultante valorPosInvestimento referente a cada tipo. 
    Fora do switch é retornado o valorPosInvestimento do switch e fora da função é declarado duas variáveis novoMontente e segundoMontante 
que recebem de atribuição a invocação da função investeDinheiro, logo após é chamado dois console.log e as variáveis são impressas.

Ex. 3 

    

*/


// Exercícios de Lógica de Programação

/* 1) while, for e for of. */

let contador = 0;

while( contador < 5 ){
 console.log(`contador = ${contador}`);
 contador += 1;
}
console.log("ACABOU !!!!");


/* 2) 

const booleano1 = true
const booleano2 = false
const booleano3 = !booleano2 - true
const booleano4 = !booleano3 - false

a) true && false && false

b) (true && false) || !false

c) (false || true) && (false || true)

d) !(true && false) || !(false && false)

e) !(false) && !(true) || (!true && true && true) */


/* 3) O código não funcionava, pois faltava a ação do usuario de digitar um valor implementado na nº linha
  e o incremento da variavél i na nº linha. */ 

let quantidadeDeNumerosPares = prompt("Digite um número: ")
let i = 0
while(i <= quantidadeDeNumerosPares){
    console.log(i*2)
    i++
}
    
    
// 4) 
    
let triangulo = (a, b, c) =>{
  if(a === b && b === c){
    return "O triângulo possui todos os lados iguais, portanto, é um Equilátero!"
  }
  else if(a === b || b === c || c === a ){
    return "O triângulo possui dois lados iguais, portanto, é um Isósceles!"
  }
  else{
    return "O triângulo possui todos os lados diferentes, portanto, é um  Escaleno!"
  }
}
triangulo(2, 3, 4)
    
    
// 5) 
    
let doisNumeros = (num1, num2) =>{
  if(num1 > num2){
    console.log(`O maior é: ${num1}`)
  }
  else if(num2 > num1){
    console.log(`O maior é: ${num2}`)
  }
  else{
    console.log(`Os números são iguais: ${num1} e ${num2}`)
  }
    
    
  if(num1 % num2 === 0){
    console.log(`O ${num1} é divisível por ${num2}`)
  }
  else{
    console.log(`O ${num1} não é divisível por ${num2}`)
  }
    
    
  if(num2 % num1 === 0){
    console.log(`O ${num2} é divisível por ${num1}`)
  }
  else{
    console.log(`O ${num2} não é divisível por ${num1}`)
  }
    
        
  if(num1 > num2){
    let diferenca = num1 - num2
    console.log(`A diferença entre os eles é de ${diferenca}`)
  }
  else if(num2 > num1){
    let diferenca = num2 - num1
    console.log(`A diferença entre eles é de ${diferenca}`)
  }
  else{
    console.log("Os números são iguais")
  }
        
}
doisNumeros(10, 20)


// Exercícios de Objetos

// 1) 

let criaRetangulo = (lado1, lado2) =>{
  let infos = {
    largura: lado1,
    altura: lado2,
    perimetro: (2 * (lado1 + lado2)),
    area: (lado1 * lado2)
  }
  console.log(infos)
}
criaRetangulo(10, 20)

// 2)

let filmePreferido = {
  titulo: "Toy Story",
  ano: "franquia iniciada em 1995",
  diretor: "John Lasseter",
  atoresAtrizes: ["Joan Cusack", " Tom Hanks", " Annie Potts", " e Tim Allen"]
}
console.log(`Venha assistir ao filme ${filmePreferido.titulo}, ${filmePreferido.ano},
dirigido por ${filmePreferido.diretor} e estrelado por ${filmePreferido.atoresAtrizes}.`)

// 3)  


// Exercícios de função

// 1)

