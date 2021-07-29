// Exercícios de interpretação de código 

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// // a) O que vai ser impresso no console?
// //Resposta: 10 e 50

// // b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?

// //Reposta: Não foi retornado nada no console.

//Exercícios de interpretação de código

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a. Explique o que essa função faz e qual é sua utilidade

//Resposta: Para verificar se a palavra cenoura foi inserida pelo usuario caso o mesmo digite outra palavra ela informa que é falso.

// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//      i.   `Eu gosto de cenoura`
//      ii.  `CENOURA é bom pra vista`
//      iii. `Cenouras crescem na terra`

//Resposta: Todas elas iram sair true, pois ira encontrar a "cenoura"




//1
// function dadosUsuario(){
//  console.log("Eu sou Bruno, tenho 29 anos, moro em Brasilia e sou estudante.")
// }
// dadosUsuario()

// function idadeAnosCidadeProfissao(){

//  console.log(`Eu sou ${nome}, tenho ${anos} anos, moro em ${cidade} e sou ${profissao}.`)

// }
// let nome = "Bruno"
// let anos ="29"
// let cidade = "Brasilia"
// let profissao = "Desenvolvedor"
// idadeAnosCidadeProfissao()

//2
// a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

// function calcularAdicao(altura, largura){
//      const area = altura + largura
//     console.log (area)
// }
// calcularAdicao(3, 5)
// b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
// function maiorNumero(numero1, numero2){
//  console.log(numero1 >= numero2)
// }
// maiorNumero(7, 6)
// c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
// function numeroPar(numero){
//   const n = (numero / 2)
//   console.log( n % 2 == 0 ? 'par' : 'impar')
// }
// numeroPar(8)
// d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

// let mensagem = prompt("Digite uma frase")

// function novaMensagem (){

//  console.log(mensagem.toUpperCase())
//  console.log(mensagem.length)
 
// }
// novaMensagem()

// 3
// 3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

//     ```
//     Números inseridos: 30 e 3
//     Soma: 33
//     Diferença: 27
//     Multiplicação: 90
//     Divisão: 10

// function calculos(numero1, numero2){
// console.log (numero1 + numero2)
// console.log (numero1 - numero2)
// console.log (numero1 * numero2)
// console.log (numero1 / numero2)
// }
// calculos (30,3)
// function adição(numero1, numero2){
//     return numero1 + numero2
//   }
//   console.log('adição:', adição(30,3))
  
//   function subtração(nm1, nm2){
//     return nm1-nm2
//   }
//   console.log('subtração:', subtração(30,3))
  
//   function multiplicação(mc1, mc2){
//     return mc1*mc2
//   }
//   console.log('multiplicação:', multiplicação(30,3))
  
//   function divisão(dv1, dv2){
//     return dv1/dv2
//   }
//   console.log('divisâo:', divisão(30,3))