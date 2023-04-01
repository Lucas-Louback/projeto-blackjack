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
// console.log("Bem-vindo(a) ao jogo de BlackJack")
// const inicio = confirm("Deseja começar um jogo?")
// const carta1Jog = comprarCarta();
// const carta2Jog = comprarCarta();
// const carta1PC = comprarCarta();
// const carta2PC = comprarCarta();

// if (inicio === true) {
//    carta1Jog
//    carta2Jog
//    carta1PC
//    carta2PC
//    let pontUsuario = Number(carta1Jog.valor) + Number(carta2Jog.valor)
//    let pontComputador = Number(carta1PC.valor) + Number(carta2PC.valor)
//    console.log(`Usuário - cartas: ${carta1Jog.texto} ${carta2Jog.texto} - ${pontUsuario}`)
//    console.log(`Computador - cartas: ${carta1PC.texto} ${carta2PC.texto} - ${pontComputador}`)
//    if(pontUsuario > pontComputador && pontComputador <= 21){
//       console.log("O usuário venceu")
//    } else if(pontComputador > pontUsuario && pontComputador <=21){
//       console.log("O computador ganhou")
//    }else {
//       console.log("Empate")
//    }
// }else{
//    console.log("Fim do jogo")
// }

// - [ok] O usuário deve encontrar uma mensagem de boas vindas no console ao abrir o programa
	
// - [ok] O usuário deve ser questionado se deseja iniciar uma nova rodada	

// - [ok] Se o usuário recusar iniciar uma nova rodada, o programa deve imprimir uma mensagem informando o fim do jogo	

// - [ok] Se o usuário aceitar iniciar uma nova rodada, o programa deve exibir as cartas do jogador e do computador

// - [ok] Ao final do jogo, o programa deve imprimir o resultado informando quem ganhou	

// - [ok] Implementou a verificação para impedir um par de A na primeira mão	

// - [ ] O jogo esconde a uma das cartas do computador ao início da rodada	

// - [ ] O usuário é questionado se deseja comprar mais cartas	

// - [ ] Se o usuário somar mais de 21, o mesmo perde automaticamente	

// - [ ] Se o computador somar mais de 21, o mesmo perde automaticamente	
