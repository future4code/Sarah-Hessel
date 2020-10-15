console.log("Bem-vindo ao Blackjack Game!")

let pontuacaoUsu
let pontuacaoPC

let jogo = confirm("Quer iniciar uma nova rodada?")
   if(jogo){
      let carta1Usu = comprarCarta()
      let carta2Usu = comprarCarta()
      let carta1PC = comprarCarta()
      let carta2PC = comprarCarta()
      
      if(carta1Usu.texto && carta2Usu.texto === "A"){
         carta1Usu = comprarCarta()
         carta2Usu = comprarCarta()
      }
      else if(carta1PC.texto && carta1PC.texto === "A"){
         carta1Pc = comprarCarta()
         carta2Pc = comprarCarta()
      }
      confirm(`Suas cartas são ${carta1Usu.texto} ${carta2Usu.texto}. A carta revelada do computador é ${carta1PC.texto}.`
      + "\n"+ "Deseja comprar mais uma carta?")
      
      pontuacaoUsu = carta1Usu.valor + carta2Usu.valor
      pontuacaoPc = carta1PC.valor + carta2PC.valor

      while(pontuacaoUsu < 21 ){

      }
       + "\n"+ "Deseja comprar mais uma carta?")
      
      
       pontuacaoUsu = carta1Usu.valor + carta2Usu.valor
       pontuacaoPc = carta1PC.valor + carta2PC.valor

      console.log(`Usuário - cartas: ${carta1Usu.texto} ${carta2Usu.texto}  - pontuação ${pontuacaoUsu} `)
      console.log(`Usuário - cartas: ${carta1PC.texto} ${carta2PC.texto}  - pontuação ${pontuacaoPc} `)

      if(pontuacaoUsu > pontuacaoPc){
         console.log("Usuário ganhoou! Meus parabéns ;D ")
      }
      else if(pontuacaoPc > pontuacaoUsu){
         console.log("O computador ganhoou! ~hehe~ irei dominar o mundo!! *cof cof* quanta poeira no meu HD ")
      }
      else if(pontuacaoUsu === pontuacaoPc){
         console.log("Deu empate! menos mal ne :p")
      }

   }
   else{
      console.log("O jogo acabou!")
   }




/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    

 * 
 * 
 * 
 */