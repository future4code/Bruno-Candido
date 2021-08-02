const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}


console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

// Repostas
//A:Matheus Nachtergaele // Virginia Cavendish // Canal: Globo horario: 14H

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// Repostas
//A:nome: "Juca", idade: 3, raca: "SRD"// nome: "Juba", idade: 3, raca: "SRD" // nome: "Jubo", idade: 3, raca: "SRD"
//B: Os ...para adicionar as informações ou expandir as informações dentro de um array aonde já se esperava as informações.

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa5 = {
  nome: "Caio", 
  idade: 23, 
  backender: false,

}

console.log(minhaFuncao(pessoa5, "backender"))
console.log(minhaFuncao(pessoa5, "altura"))

// Repostas
//A:false
//B:undefined, pois não foi declarada uma variavel.


// EXERCICIO 1
 const usuario1 = {
 nome: 'Bruno',
 apelido: ["Brunão", "Nuno", "Vida"],
 }
const novoUsuario = {
  ...usuario1
}
  novoUsuario.apelido = ["Momor", "Turrão", "Bem"]
 console.log("velho", usuario1)
 console.log(`Eu sou ${usuario1.nome}, mais pode me chamar de ${usuario1.apelido}`)
 console.log("novo", novoUsuario)
 console.log(`Eu sou ${usuario1.nome}, mais pode me chamar de ${novoUsuario.apelido}`)

function minhaVida(){
   const usuario = {
 nome: 'Bruno',
 apelido: ["Brunão", "Nuno", "Vida"],
 }
 const novoApelido = {...usuario, apelido:["Momor", "Turrão", "Bem"],

}
console.log(`Eu sou ${usuario.nome}, mais pode me chamar de ${novoApelido.apelido}`)
}
minhaVida()

// EXERCICIO 2

const pessoas0 = {
  nome: "Bruno",
  idade: 29,
  profissao: "Desenvolvedor"
}
console.log(`${pessoas0.nome},${"Bruno".length}, ${pessoas0.idade},${pessoas0.profissao},${"Desenvolvedor".length}`)

let pessoas = {
  nome: "Bruno",
  idade: 29,
  profissao: "Desenvolvedor"
}
let pessoas1 = {
  nome: "Aline",
  idade: 28,
  profissao: "Professora"
}

function dadosPessoas(objetos){
 let resultado1= []
 let valores = typeof(objetos.nome)
 let quantidadeNome= objetos.nome.length
 let anosIdade = typeof(objetos.idade)
 let valorProfissao = typeof(objetos.profissao)
 let quantidadeProfissao = objetos.profissao.length

 let resultado = resultado1.push(valores, quantidadeNome, anosIdade,valorProfissao,quantidadeProfissao)
 console.log(resultado1)
}
dadosPessoas(pessoas)
dadosPessoas(pessoas1)


//EXERCICIO 3
const carrinho= []
const fruta0 = {
  nome: "Morango", 
  disponibilidade:true,
} 
const fruta1 = {
  nome: "Banana", 
  disponibilidade:true,
}
const fruta2 = {
   nome: "Abacaxi",
   disponibilidade:true,

}
function recebaFrutas(fruta0, fruta1, fruta2){
   carrinho.push(fruta0, fruta1, fruta2)
   return carrinho
}

const carrinhoConcluido = recebaFrutas(fruta0, fruta1, fruta2)
console.log(carrinhoConcluido)



