// EXERCICIO 1

// const bool1 = true
// const bool2 = false
// const bool3 =! bool2

// let resultado = bool1 && bool2
// console.log ("a.", resultado)
// // resultado é falso por que && é verdadeiro só se todos elementos for true

// resultado = bool1 && bool2 && bool3
// console.log ("b.", resultado)
// // resultado é falso.

// resultado =! resultado && (bool1 || bool1)
// console.log ("c.", resultado)
// // resultado é verdadeiro

// console.log ("e.", tipo de resultado)
// // resultado é um tipo booleano

// EXERCICIO 2

// let array
// console.log ('a.', array)
// // aparece vazio, indefinido

// array = null
// console.log ('b.', array)
// // aparece nulo

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log ('c.', array.length)
// // aparece que o array possui 11 elementos

// deixe i = 0
// console.log ('d.', array [i])
// // resposta é 0 dentro do array

// array [i + 1] = 19
// console.log ('e.', array)
// // o valor do elemento 1 do array que era 4 foi substituido por 19

// const valor = array [i + 6]
// console.log ('f.', valor)
// resposta é 9

// EXERCICIO 1 DE ESCRITA DE CODIGO
// const minhaIdade = prompt ("Qual sua idade?")
// const idadeAmigo = prompt ("Qual a idade do (a) seu (ua) melhor amigo (a)?")

// let resposta = (minhaIdade)> (idadeAmigo)
// let diferença = Number (minhaIdade) - Number (idadeAmigo)

// console.log ("Sua idade é maior do que a do seu melhor amigo" + resposta)
// console.log ("difereça de idade" + diferença)


// EXERCICIO 2

// let numeroPar = prompt ("Digite um número par")

// deixe o resultado = Number (numeroPar)% 2
// console.log (resultado)
 // o resultado da sobra da divisão sempre vai ser 0 quando o numero for par dividido por 2
 // mostra um numero impar ele deixa uma sobra de divisão

 // EXERCICIO 3

// deixe listaDeTarefas = []

// deixar tarefaUm = prompt ("Digite a primeira tarefa que você precisa fazer hoje")
// deixe a tarefaDois = prompt ("Digite a segunda tarefa que você precisa fazer hoje")
// deixar tarefaTres = prompt ("Digite a terceira tarefa que você precisa fazer hoje")

// listaDeTarefas.push (tarefaUm)
// listaDeTarefas.push (tarefaDois)
// listaDeTarefas.push (tarefaTres)
// console.log (listaDeTarefas)

// let i = prompt ("Qual indice das terefas você ja ocorreu? 0, 1 ou 2")

// listaDeTarefas.splice (Number (i), 1)
// console.log (listaDeTarefas)

// EXERCICIO 4

// const nomeDoUsuario = prompt ("Qual o seu nome?")
// const emailDoUsuario = prompt ("Qual o seu e-mail?")

// const resposta = ("O e-mail" + emailDoUsuario + "foi cadastrado com sucesso. Seja bem-vinda (o)," + nomeDoUsuario + "!")
// console.log (resposta)