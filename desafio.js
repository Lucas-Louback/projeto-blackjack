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

alert("Bem-vindo(a) ao jogo de BlackJack")
const inicio = confirm("Deseja começar um jogo?")
function somaMao(array) {
   let soma = 0
   for (let i = 0; i < array.length; i++) {
      soma += array[i]
   }
   return soma
}
if (inicio === true) {
   const carta1Jog = comprarCarta();
   const carta2Jog = comprarCarta();
   const carta1PC = comprarCarta();
   const carta2PC = comprarCarta();
   let maoJogadorTexto = [carta1Jog.texto, carta2Jog.texto]
   let maoJogadorValor = [carta1Jog.valor, carta2Jog.valor]
   let maoComputadorTexto = [carta1PC.texto, carta2PC.texto]
   let maoComputadorValor = [carta1PC.valor, carta2PC.valor]
   if (somaMao(maoJogadorValor > 21 || somaMao(maoComputadorValor) > 21)) {
      const carta1Jog = comprarCarta();
      const carta2Jog = comprarCarta();
      const carta1PC = comprarCarta();
      const carta2PC = comprarCarta();
      maoJogadorTexto = [carta1Jog.texto, carta2Jog.texto]
      maoJogadorValor = [carta1Jog.valor, carta2Jog.valor]
      maoComputadorTexto = [carta1PC.texto, carta2PC.texto]
      maoComputadorValor = [carta1PC.valor, carta2PC.valor]
   }
   while (confirm(`Suas cartas são ${maoJogadorTexto}. A carta revelada do computador é ${carta1PC.texto}.\nDeseja comprar mais uma carta?`) === true && somaMao(maoComputadorValor) <= 21) {
      let cartaNova = comprarCarta();
      maoJogadorTexto.push(cartaNova.texto)
      maoJogadorValor.push(cartaNova.valor)
      if (somaMao(maoComputadorValor) < somaMao(maoJogadorValor) ) {
         let cartaNova = comprarCarta()
         maoComputadorTexto.push(cartaNova.texto)
         maoComputadorValor.push(cartaNova.valor)
         if (somaMao(maoJogadorValor) > 21) {
            alert(`Usuário - Cartas: ${maoJogadorTexto} - Pontuação: ${somaMao(maoJogadorValor)}\nComputador - Cartas: ${maoComputadorTexto} - Pontuação: ${somaMao(maoComputadorValor)}\nVocê perdeu`)
            break
         }
         if (somaMao(maoComputadorValor) > 21) {
            alert(`Usuário - Cartas: ${maoJogadorTexto} - Pontuação: ${somaMao(maoJogadorValor)}\nComputador - Cartas: ${maoComputadorTexto} - Pontuação: ${somaMao(maoComputadorValor)}\nVocê Ganhou`)
            break
         }
      }

   }
   if (somaMao(maoComputadorValor) <= 21 && somaMao(maoJogadorValor <=21)){
   while (somaMao(maoComputadorValor) < somaMao(maoJogadorValor) && somaMao(maoJogadorValor) < 21) {
      let cartaNova = comprarCarta();
      maoComputadorTexto.push(cartaNova.texto)
      maoComputadorValor.push(cartaNova.valor)
   }
   }
   if (somaMao(maoJogadorValor) > somaMao(maoComputadorValor) && somaMao(maoJogadorValor) <= 21 || somaMao(maoComputadorValor) > 21 && somaMao(maoJogadorValor) <= 21) {
      alert(`Usuário - Cartas: ${maoJogadorTexto} - Pontuação: ${somaMao(maoJogadorValor)}\nComputador - Cartas: ${maoComputadorTexto} - Pontuação: ${somaMao(maoComputadorValor)}\nVocê Ganhou`)

   }
   if (somaMao(maoJogadorValor) < somaMao(maoComputadorValor) && somaMao(maoComputadorValor) <= 21) {
      alert(`Usuário - Cartas: ${maoJogadorTexto} - Pontuação: ${somaMao(maoJogadorValor)}\nComputador - Cartas: ${maoComputadorTexto} - Pontuação: ${somaMao(maoComputadorValor)}\nVocê perdeu`)
   } 
   if(somaMao(maoJogadorValor) === somaMao(maoComputadorValor) && somaMao(maoJogadorValor) <= 21){
      alert(`Usuário - Cartas: ${maoJogadorTexto} - Pontuação: ${somaMao(maoJogadorValor)}\nComputador - Cartas: ${maoComputadorTexto} - Pontuação: ${somaMao(maoComputadorValor)}\nEmpate`)
      
   }
} else {
   alert("Acabou o jogo")
}

// - [ok] O usuário deve encontrar uma mensagem de boas vindas no console ao abrir o programa
	
// - [ok] O usuário deve ser questionado se deseja iniciar uma nova rodada	

// - [ok] Se o usuário recusar iniciar uma nova rodada, o programa deve imprimir uma mensagem informando o fim do jogo	

// - [ok] Se o usuário aceitar iniciar uma nova rodada, o programa deve exibir as cartas do jogador e do computador

// - [ok] Ao final do jogo, o programa deve imprimir o resultado informando quem ganhou	

// - [ok] Implementou a verificação para impedir um par de A na primeira mão	

// - [ok] O jogo esconde a uma das cartas do computador ao início da rodada	

// - [ok] O usuário é questionado se deseja comprar mais cartas	

// - [ok] Se o usuário somar mais de 21, o mesmo perde automaticamente	

// - [ok] Se o computador somar mais de 21, o mesmo perde automaticamente	