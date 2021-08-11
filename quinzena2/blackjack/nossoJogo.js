/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
   window.alert("Bem vindo ao BlackJack!")

//Aqui o usuário escolhe se ele irá ou não dar inicio ao jogo. Caso ele digite ok, inicia uma nova rodada, caso contrário ele receberá uma mensagem do sistema.
let start = confirm("Vamos começar uma nova rodada?");
console.log((start))
if (start == true) {
   startGame();
}else{
   window.alert("O jogo acabou! Uma pena, quem sabe na próxima. :(");
}

//Esta função executa o jogo. 
//Player1 é o usuário e Player2 é o sistema/computador. 

   function startGame(){
    let player1Carta1 = comprarCarta();
    console.log("Sua primeira carta é:  " + player1Carta1.texto )
    let player2Carta1 = comprarCarta();
    console.log("A primeira carta do seu oponente é:  " + player2Carta1.texto)
    let player1Carta2 = comprarCarta();
    console.log("Sua segunda carta é:  " + player1Carta2.texto)
    let player2Carta2 = comprarCarta();
    console.log("A segunda carta do seu oponente é:  " + player2Carta2.texto)

    let resultado1 = player1Carta1.valor + player1Carta2.valor
    let resultado2 = player2Carta1.valor + player2Carta2.valor
    if (resultado1 > resultado2) {
      console.log("Usuário - cartas: " + player1Carta1.texto + player1Carta2.texto + " -  " + resultado1)
      console.log("Computador - cartas: " + player2Carta1.texto + player2Carta2.texto + " -  " + resultado2)
      console.log("O usuário ganhou.")
      console.log("Parabéns, você ganhou com um total de:  " + resultado1 + "  pontos.")
    }else if(resultado1 < resultado2){
      console.log("Poxa, seu oponente ganhou com um total de:  " + resultado2 + "  pontos.")
   }else {
      console.log("Houve empate.")
      console.log("Vocês empataram, pois a pontuação de ambos foi: " + resultado1)
   }
}

