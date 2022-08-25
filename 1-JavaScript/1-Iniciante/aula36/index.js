//for in -> lê os índices ou chaves do objeto

const frutas = ['Pera', 'Maçã', 'Uva']

//for (let i = 0; i < frutas.length; i++) {
//console.log(frutas[i])
//}

for (let indice in frutas) {
    console.log(frutas[indice])
}

console.log('-------------------------------------------------------')

const pessoa = {
    nome: 'Marcos',
    sobrenome: 'Otávio',
    idade: 30
}

for (let chave in pessoa) {
   console.log(chave, pessoa[chave])
}