// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }



// a) Explique o que o código faz. Qual o teste que ele realiza? 
//Resposta: Codigo faz a divisão de "resto" quando se informa um numero cheio tipo "10" você passa no resto, se informa um numero "9" você não passa
// b) Para que tipos de números ele imprime no console "Passou no teste"? 
//Resposta: pares
// c) Para que tipos de números a mensagem é "Não passou no teste"?
//Resposta: impares



// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break;// BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


//a) Para que serve o código acima?
//Resposta: Para informar o preço das frutas
// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//Resposta:o preço da fruta maçã é de R$ 2,25
// c) Considere que um usuário queira comprar uma `Pêra`, 
// qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do 
// `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
//Resposta: o preço informado seria o de R$ 5


// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo?
//Resposta: Verificando se o numero que vem da prompt é maior que "0"
// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//Resposta:Considerando que o numero é maior que 0 o 10 daria a mensagem "Esse número passou no teste". Com o -10 não ira aprensentar mensagem.
// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//Resposta:Sim tem erro no console. pelo questão mensagem na linha "60"



// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

//     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

//     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

//     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, 
//     caso contrário, imprima `"Você não pode dirigir."`

//  const idade = Number(prompt("Qual sua idade?"))
//  const resposta = Number(idade)
//  if (idade >= 18){
//   console.log(" Você pode dirigir")
//  } else {
//   console.log(" Você não pode dirigir")
//  }
 
// Agora faça um programa que verifica que turno do dia um aluno estuda. 
// Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
// Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else
 
// const aluno= prompt("digite uma das Opções M, V, N !")


// if(aluno === "M"){
// console.log("Bom dia")
// }else if (aluno === "V"){
//     console.log("Boa Tarde")
// }else if(aluno === "N"){
//     console.log("Boa noite")
// } else {
//     console.log("Digite um termo correto")
// }



// Repita o exercício anterior, mas utilizando a 
// estrutura de switch case agora.


// function alunoClasse(aluno){
// switch (aluno) {
//     case "M" : 
//         console.log("Bom dia")
//         break;

//      case "V":
//      console.log("Boa tarde")
//      break;

//      case "N":
//          console.log("boa noite")
//          break;
         
//     default:
//         console.log("Digite um termo correto")
// }      
// }

// const alunoInforma = prompt("digite uma das Opções M, V, N !")

// alunoClasse(alunoInforma)



// Considere a situação: você vai ao cinema com um amigo ou amiga, 
// porém ele/ela só assistirá a um filme com você se ele for do 
// gênero fantasia e se o ingresso está abaixo de 15 reais. 
// Faça um código que pergunta ao usuário qual o gênero de 
// filme que vão assistir e outra pergunta sobre o preço do ingresso, 
// então verifique se seu amigo ou amiga vai topar assistir o filme. 
// Caso positivo, imprima no console a mensagem: "Bom filme!", caso 
// contrário, imprima "Escolha outro filme :("



// const genero = prompt("Qual o genero de filme deseja assistir?")
// const valor = Number(prompt("qual preço deseja pagar?"))
// const fantasia = genero
// function filmePerfeito(genero, valor){
// if (valor<=15 && genero === "fantasia") {
//     console.log("Bom filme!")

// }else{
//         console.log("Escolha outro filme")
//         console.log("Fantasia", genero)
//         console.log("15", valor)
// }
// }
// filmePerfeito(genero,valor)