 // 1)
a = 10
b = 10              

console.log(b)  /* O primeiro log irá imprimir na tela o valor da variavel b, sendo o 10, 
como mostra a atrbuição do valor na linha 3 */

b = 5             
console.log(a, b) /* O segundo log irá imprimir o valor de a e o valor de b, mas repare que na linha
 anterior outro valor foi atribuido na variavel b substituindo o 10, sendo assim, aparecera na tela os valores de 10 e 5.*/


 // 2)

 a = 10
 b = 20
 c = a
 b = c
 a = b
 
 console.log(a, b, c)  /* rolou uma susbstituição manera dos valores e os valores que será imprimido é o mesmo, sendo eles, o 10.*/

 /* **Exercícios de escrita de código** */

 // 1)
  
 let nome;
 console.log(typeof nome); 
                            /*Undefined tipo da variavél indefinido, pois não há nenhum valor atribuido a ela*/
 let idade;
 console.log(typeof idade); 

 nome = prompt ("Qual seu nome?");     /*O prompt deu erro não entendi o motivo :( */
 idade = prompt ("Qual sua idade?");
 console.log(typeof(nome, idade));
                            /*String, pois a atribuição é um texto em ambas variaveis*/
console.log(`Olá ${nome}, você tem ${idade} anos`)

 // 2)

 let endereco = prompt ("1. Qual o seu endereço?")
 console.log(`Resposta: ${endereco}`);
 let cor = prompt ("2. Qual sua cor favorita?")
 console.log(`Resposta: ${cor}`);
 let bichinho = prompt ("3. Qual o seu bichinho preferido?")
 console.log(`Resposta: ${bichinho}`);
 let lembranca = prompt ("4. Qual a sua melhor lembrança?")
 console.log(`Resposta: ${lembranca}`);
 let mae = prompt ("5. Qual o nome da sua mãe?")
 console.log(`Resposta: ${mae}`);
 
 // 3)

 let comidasPreferidas = ['Todo tipo de batata', 'Lasanha', 'Macarrão', 'Bolinho', 'Açai' ]
 console.log("Essas são minhas comidas preferidas")
 console.log( comidasPreferidas[0])
 console.log( comidasPreferidas[1])
 console.log( comidasPreferidas[2])
 console.log( comidasPreferidas[3])
 console.log( comidasPreferidas[4])

 const comida = prompt("Qual sua comida preferida?");

  // 4)

let perguntas = ["Você está usando uma roupa preta hoje?", "Você gosta de azeitona?", "E de cachorrinhos?","Você come arroz com frequencia?"]
let respostas = ["True", "False"]
console.log(perguntas[0], respostas[0])
console.log(perguntas[1], respostas[1])
console.log(perguntas[2], respostas[0])
console.log(perguntas[3], respostas[0])
