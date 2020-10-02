// 1.
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

/* a) o código está incrementando valores na varivavél i, 
   dentro do laço esse valor será somado com valor dentro do valor enquanto o i for menor que 5.

   b) 1 3 6 '10' o resultante é 10.
*/

// 2.
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

/* a) [19, 21, 23, 25, 27, 30]

   b) Sim, mas seria necessário criar um contador auxiliar, por exemplo: let contador = 0.
*/

// Desafio 1
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}

/* a) O programa irá imprimir na tela 4 linhas, 
diminuindo a cada linha a quantidade de 'asteriscos' de 1 a 4.
*/

// Escrita do código

// 3.
const arrayOriginal = [1, 3, 5, 7, 8, 9, 10]

// a)
for(let i = 0; i < arrayOriginal.length; i++){
    console.log(`Numeros: ${arrayOriginal[i]}`)
}
/*  for(let i = 0; i < arrayOriginal.length; i++){
    let numeros = arrayOriginal[i]
    console.log(numero)}

    for(let numero of arrayOriginal){      // no array FOR OF é usado para atribuir para cada indice um valor.
    console.log(numero)}
*/ 

// b)
for(let i = 0; i < arrayOriginal.length; i++){
    let elemento = arrayOriginal[i]
      console.log(elemento / 10)
}

// c)
const numeroPar = []
for(let numero of arrayOriginal){
    if(numero%2===0){
        numeroPar.push(numero)
    }
}
console.log(numeroPar)

// d)
let contador = 0;
for(let numero of arrayOriginal){
    console.log("O elemento do index é " + contador + " é " + numero)
    contador++
}

// e)
let valorMaximo = -Infinity // ou 0 (zero)
let valorMinimo = Infinity // o infinito é maior que qualquer numero :D

for(let numero of arrayOriginal){
    if(numero > valorMaximo){
        valorMaximo = numero
    }
    if(numero < valorMinimo){
        valorMinimo = numero
    }
}
console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`)

// Desafio 2

// Desafio 3
Math.floor(Math.random()*100)