// .push | .unshift | .pop  | .shift | delete | slice | instanceof

//             012345678910
const nome = 'Luiz Otávio'
console.log(nome[10])

console.log('-------------------------------------------------------')

//                 0        1       2
const alunos = ['Luiz', 'Maria', 'João']
console.log(alunos)
console.log(alunos[0])
console.log(alunos[2])
console.log(alunos[1])

console.log('-------------------------------------------------------')

const pessoas = ['Marcos', 'Ludmila', 'Paulo']
console.log(pessoas)
pessoas[0] = 'João'
console.log(pessoas)
pessoas[3] = 'Luiza'
console.log(pessoas)

console.log('-------------------------------------------------------')

const novasPessoas = ['Pedro', 'Paulo', 'Gustavo', 'Renan']
console.log(novasPessoas)
console.log(novasPessoas.length)
novasPessoas[novasPessoas.length] = 'Augusto'
novasPessoas[novasPessoas.length] = 'Xerif'
novasPessoas[novasPessoas.length] = 'Jhonny'
console.log(novasPessoas)
console.log(novasPessoas.length)

console.log('-------------------------------------------------------')

const pessoas2 = ['Arizona', 'Adidas', 'Matheus', 'Morpheus']
console.log(pessoas2.length)
console.log(pessoas2)
pessoas2.push('Pedrinho')
console.log(pessoas2)
pessoas2.push('joaoaoo', 'jaosjgas', 'fsafas', 'fsafsa','gasgasgsa')
console.log(pessoas2)
console.log(pessoas2.length)

console.log('-------------------------------------------------------')

const novasPessoas2 = ['Jailson', 'Filipe', 'Gustavo']
console.log(novasPessoas2)
console.log(novasPessoas2.length)
novasPessoas2.push('Aritmética')
console.log(novasPessoas2)
console.log(novasPessoas2.length)
novasPessoas2.unshift('Muriel')
console.log(novasPessoas2)
novasPessoas2.push('Margarida')
novasPessoas2.unshift('Makskas', 'Mhgauh')
console.log(novasPessoas2)

console.log('-------------------------------------------------------')

const jogadores = ['Lol', 'Quiter', 'Valorant']
jogadores.push('mikael')
jogadores.unshift('Maradona','Massachussets')
console.log(jogadores)

console.log('-------------------------------------------------------')

const familiares = ['Marcelo', 'Gudi', 'Gust']
const removido = familiares.pop()
console.log(familiares)
console.log(removido)

console.log('-------------------------------------------------------')

const fome = ['Queijo', 'Pao', 'Carne']
const removerFome = fome.shift()
console.log(fome)
console.log(removerFome)
console.log(fome.length)


console.log('-------------------------------------------------------')

const maximos = ['Maria', 'Mushe', 'Minene']
delete maximos[1]
console.log(maximos)
console.log(maximos[1])
maximos.push('Luiza', 'Eduardo')
maximos.shift()
console.log(maximos)

console.log(maximos.slice(0, -1))

console.log('-------------------------------------------------------')

const mirene = ['Miquitrandril', 'Mafsa', 'haugh']
console.log(typeof mirene)
console.log(mirene instanceof Array)


console.log('-------------------------------------------------------')

let alunets = ['hauighidu', 'ahuigd', 'hgduighd', 'gagas']
alunets = 123
console.log(typeof alunets)
console.log(alunets instanceof Array)

console.log('-------------------------------------------------------')



/* .push | .unshift | .pop  | .shift | delete | slice | instanceof
.push  --- Adicionar pessoas no final do Array
.unshift ---- Adicionar pessoas no começo do Array
.pop --- Remove o objeto do final do Array
.shift --- Remove o objeto do começo do array
console.log(pessoas.length) --- Mostra a quantidade de objetos no Array
o Push e o Unshift, consigo adicionar varias pessoas ao mesmo tempo...
delete --- ele deleta um objeto mas deixa o array VAZIO <1 empty item>
slice utilizamos para fatiar uma array, podendo escolher os objetos que queremos
instanceof , onde verificamos se o objeto é uma Array


jogadores.push(nome que será add)
jogadores.unshift(nome que será add)
jogadores.pop() --- não precisa colocar nada, ele já remove direto
jogadores.shift() -- preciso apenas abrir o método para funcionar
(conseguimos guardar o objeto removido, criando uma variável com ele)
*/

// .push | .unshift | .pop  | .shift | delete | slice | instanceof

//const não mutável = number, string, boolean, undefined, null, symbol e bigint
//arrays/ objetos = mutáveis
