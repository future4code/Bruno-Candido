// - **Exercícios de interpretação de código**

//     Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

//     1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

     
        // let valor = 0
        // for(let i = 0; i < 5; i++) {
        //   valor += i
        // }
        // console.log(valor)
     
      // R:  A ideia do loop até que seja alcançado o valor de 5.Mas como foi  inserido o valor de i o console irá imprimir o valor 10.

    // 2. Leia o código abaixo:

      
        // const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
        // for (let numero of lista) {
        //   if (numero > 18) {
        // 		console.log(numero)
        // 	}
        // }
       

    //     a) O que vai ser impresso no console?

    //  R:   Vai ser impresso numeros maiores que 18.
           
    //     b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? 
        //   Se sim, o que poderia ser usado para fazer isso?

    //  R: Acredito que não. Adicionando o  findIndex ().

    // 3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?

        
        // const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
        // let quantidadeAtual = 0
        // while(quantidadeAtual < quantidadeTotal){
        //   let linha = ""
        //   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        //     linha += "*"
        //   }
        //   console.log(linha)
        //   quantidadeAtual++
        // }

        // R:
            // *
            // **
            // ***
            // ****
    

// 1: Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

// const numeroPet = Number(prompt("Oi! Quantos bichinhos de estimação você tem?"))
// console.log(numeroPet)
// if(numeroPet === 0) { console.log("Que pena! Você pode adotar um pet!")}
// if(numeroPet > 0){
// let arrayPets = []
// for(let i = 0; i < numeroPet; i++){
// arrayPets.push(prompt("Uhu, legal, qual o nome do(s) bichinhos?"))
// }
// console.log(arrayPets)
// }



// 2:Considere que você tenha acesso a um array  (chamado de 'array original') 
// que é composto somente de números. Baseando-se nisso, crie 
// uma função para cada um dos itens abaixo, realizando as operações pedidas:

//A) Escreva um programa que **imprime** cada um dos valores do array original.


// let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
//     for (let b = 0; b < arrayOriginal.length; b++) {
//         console.log(arrayOriginal[b])
//     }

//B) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

// let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
//     for (let b = 0; b < arrayOriginal.length; b++) {
//         console.log((arrayOriginal[b] / 10))
//     }


//C) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

// let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
//     let newArray = arrayOriginal.filter(index => { 
//         if( index % 2 == 0){
//         return index;
//      }
//     })

//     for (let b = 0; b < newArray.length; b++) {
//         console.log((newArray ))
//     }

//D) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.


// let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55].forEach(arrayString);
// function arrayString(element, index) {
//     console.log("O elemento do índex   " + index + "  é: " + element);
// }


//E) Escreva um programa que imprima no console o maior e o menor números contidos no array original

// let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
// let max = 0;

// let min = arrayOriginal[0];
// for(let b = 0; b < arrayOriginal.length; b++){
//     if(arrayOriginal[b] > max){
//         max = arrayOriginal[b]
//     }
//     if(arrayOriginal[b] < min){
//         min = arrayOriginal[b]
//     }
// }

// console.log('maximo: ' + max);
// console.log('minimo: ', min);