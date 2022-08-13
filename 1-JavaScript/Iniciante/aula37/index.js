//For Clássico - geralmente com iteráveis (array ou string)
//For in - Retorna o índice ou chave (string, array ou objetos)
//For of - Retorna o valor em si (iteráveis, arrays ou strings)

const nome = ['Luiz', 'Otávio', 'Henrique'];

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}


console.log('-------------------------------------')


for (let i in nome) {
    console.log(nome[i])
}


console.log('-------------------------------------')

for (let valor of nome) {
    console.log(valor);
}

console.log('-------------------------------------')


nome.forEach(function (valor, indice, array){
    console.log(valor, indice, array)
})


console.log('-------------------------------------')
