
//Exercícios de interpretação de código
/*
1.  Leia o código abaixo
    ```jsx
    const usuarios = [
        { nome: "Amanda Rangel", apelido: "Mandi" },
        { nome: "Laís Petra", apelido: "Laura" },
        { nome: "Letícia Chijo", apelido: "Chijo" }
    ]
    
    const novoArrayA = usuarios.map((item, index, array) => {
        console.log(item, index, array)
    })
    // ```
    
    a) O que vai ser impresso no console?
    
    Resposta: nome e o apelido em um novo array mostrando o array original
2. Leia o código abaixo
    ```jsx
    const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" },
    ]
    const novoArrayB = usuarios.map((item, index, array) => {
       return item.nome
    })
    console.log(novoArrayB)
   ```
    a) O que vai ser impresso no console?
    Resposta: vai mostar em um novo arrayB apenas item nome, os nomes Amanda Rangel, Laís Petra, Letícia Chijo
    3. Leia o código abaixo
    
    ```jsx
 
    const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" },
    ]
    const novoArrayC = usuarios.filter((item, index, array) => {
       return item.apelido !== "Chijo"
    })
    console.log(novoArrayC)
 ```
    a) O que vai ser impresso no console?
    Resposta: em um novo arrayC ira mostra item apelidos diferente de chijo, então menos chijo, apelidos Mandi, Laura.
*/
//Exercícios de escrita de código
/*1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens 
abaixo utilizando as funções de array **map** e **filter:**
    ```jsx
    const pets = [
       { nome: "Lupin", raca: "Salsicha"},
       { nome: "Polly", raca: "Lhasa Apso"},
       { nome: "Madame", raca: "Poodle"},
       { nome: "Quentinho", raca: "Salsicha"},
       { nome: "Fluffy", raca: "Poodle"},
       { nome: "Caramelo", raca: "Vira-lata"},
    ]
    ```
    a) Crie um novo array que contenha apenas o nome dos doguinhos
    b) Crie um novo array apenas com os [cachorros salsicha]
    c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
    A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"
*/

//a)
const pets = [
    { name: "Lupin", raca: "Salsicha"},
    { name: "Polly", raca: "Lhasa Apso"},
    { name: "Madame", raca: "Poodle"},
    { name: "Quentinho", raca: "Salsicha"},
    { name: "Fluffy", raca: "Poodle"},
    { name: "Caramelo", raca: "Vira-lata"},
 ]
 const newArray = pets.map((item) => {
    return item.name
 })

 console.log(newArray)

//b)
 const petsDual = [
    { name: "Lupin", raca: "Salsicha"},
    { name: "Polly", raca: "Lhasa Apso"},
    { name: "Madame", raca: "Poodle"},
    { name: "Quentinho", raca: "Salsicha"},
    { name: "Fluffy", raca: "Poodle"},
    { name: "Caramelo", raca: "Vira-lata"},
 ]

const petSausage = petsDual.filter((petsDual) =>{
    return petsDual.raca === "Salsicha"
})
 console.log('Nome de dogs Salsicha', petSausage)

//c

const petsThree = [
    { name: "Lupin", raca: "Salsicha"},
    { name: "Polly", raca: "Lhasa Apso"},
    { name: "Madame", raca: "Poodle"},
    { name: "Quentinho", raca: "Salsicha"},
    { name: "Fluffy", raca: "Poodle"},
    { name: "Caramelo", raca: "Vira-lata"},
 ]

 const petDiscount = petsThree.filter((petsThree) => {
    return petsThree.raca === "Poodle"
}).map((petsThree) => {
    return petsThree.name
})

console.log("Você ganhou um cupom de desconto de 10% para tosar a:", petDiscount[0])
console.log("Você ganhou um cupom de desconto de 10% para tosar o:", petDiscount[1])


/*
2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array
 **map** e **filter:**
    ```jsx
    const produtos = [
       { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
       { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
       { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
       { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
       { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
       { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
       { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
       { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
       { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
       { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
    ]
    ```
    a) Crie um novo array que contenha apenas o nome de cada item
    b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em 
    todos eles
    c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
    d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
    - 💡  Dica
        Para te ajudar, você pode usar o método de stirngs chamado includes() que verifica se os caracteres escolhidos
         fazem parte da sua string
        E caso não se lembre como fazer isso, não tenha medo de pesquisar no google!
    e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas 
    dos itens cujo nome contenha a palavra "Ypê"
    - 💡  Dica
        Você pode encadear o uso do map e do filter
*/
//a)
const products = [
    { name: "Alface Lavada", category: "Hortifruti", price: 2.5 },
    { name: "Guaraná 2l", category: "Bebidas", price: 7.8 },
    { name: "Veja Multiuso", category: "Limpeza", price: 12.6 },
    { name: "Dúzia de Banana", category: "Hortifruti", price: 5.7 },
    { name: "Leite", category: "Bebidas", price: 2.99 },
    { name: "Cândida", category: "Limpeza", price: 3.30 },
    { name: "Detergente Ypê", category: "Limpeza", price: 2.2 },
    { name: "Vinho Tinto", category: "Bebidas", price: 55 },
    { name: "Berinjela kg", category: "Hortifruti", price: 8.99 },
    { name: "Sabão em Pó Ypê", category: "Limpeza", price: 10.80 }
 ]

 const listItemName = products.map((produto) => {
    return produto.name
 })

 console.log(listItemName)

//b)

const productsDiscount = [
    { name: "Alface Lavada", category: "Hortifruti", price: 2.5 },
    { name: "Guaraná 2l", category: "Bebidas", price: 7.8 },
    { name: "Veja Multiuso", category: "Limpeza", price: 12.6 },
    { name: "Dúzia de Banana", category: "Hortifruti", price: 5.7 },
    { name: "Leite", category: "Bebidas", price: 2.99 },
    { name: "Cândida", category: "Limpeza", price: 3.30 },
    { name: "Detergente Ypê", category: "Limpeza", price: 2.2 },
    { name: "Vinho Tinto", category: "Bebidas", price: 55 },
    { name: "Berinjela kg", category: "Hortifruti", price: 8.99 },
    { name: "Sabão em Pó Ypê", category: "Limpeza", price: 10.80 }
 ]

const itemDiscount = productsDiscount.map((produto, index, array)=>{
 let discount = produto.price * 0.05
 produto.price = produto.price - discount

 return {
     name: produto.name,
     price: produto.price.toFixed(2)
 }
})
   console.log(itemDiscount)

//c)

const product = [
    { name: "Alface Lavada", category: "Hortifruti", price: 2.5 },
    { name: "Guaraná 2l", category: "Bebidas", price: 7.8 },
    { name: "Veja Multiuso", category: "Limpeza", price: 12.6 },
    { name: "Dúzia de Banana", category: "Hortifruti", price: 5.7 },
    { name: "Leite", category: "Bebidas", price: 2.99 },
    { name: "Cândida", category: "Limpeza", price: 3.30 },
    { name: "Detergente Ypê", category: "Limpeza", price: 2.2 },
    { name: "Vinho Tinto", category: "Bebidas", price: 55 },
    { name: "Berinjela kg", category: "Hortifruti", price: 8.99 },
    { name: "Sabão em Pó Ypê", category: "Limpeza", price: 10.80 }
 ]

 const apenasBebidas = product.filter((item) => {
   return item.categoria === "Bebidas"
 })
    console.log ( apenasBebidas )
//D
const objectArray = product.filter((produto) => {
   let object = produto.name === "Ypê"
    return object
})
   console.log(objectArray)

// //E
  const precao = product.map((valor)=>{
   return  valor.preco
})
console.log(`Compre ${novoArrayCategoriaYpe} por ${precao} `)
