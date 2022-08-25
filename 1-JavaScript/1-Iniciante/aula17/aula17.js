// função no javascript utilizamos a palavrinha FUNCTION
function saudacao(nome) {
    console.log(`Bom dia ${nome}!`)
}

saudacao('Luiz')

console.log('-------------------------------------------------------')

function saudacao2(nome2) {
    console.log(`Buenos diazitos ${nome2}!`)
}

saudacao2('Juanito')
saudacao2('Jesus')

console.log('-------------------------------------------------------')

function saudacao3(nome3){
    console.log(`Mas é claro que o sol vai voltar ${nome3}!`)
}

saudacao3('amanhã')
saudacao3('hoje')

console.log('-------------------------------------------------------')

function saudacao4(nome4){
    console.log(`Tudo que voce quiser é ${nome4}`)
}

saudacao4('AGORA PORRA')
saudacao4('amanhã infelizmente :c')

console.log('-------------------------------------------------------')

function saudacao5(nome5){
    return `Juanito jones ${nome5}`
}

const variavel = saudacao5('Madamucho Papi')
console.log(variavel)

console.log('-------------------------------------------------------')

function soma(x, y) {
    const resultado = x + y
    return resultado
}

console.log(soma(2, 2))
console.log(soma(3, 5))
console.log(soma(7, 5))

console.log('-------------------------------------------------------')

function soma2(c, v){
    const resultado = c * v
    return resultado
}
console.log(soma2(4, 6))

console.log('-------------------------------------------------------')

function soma3(u, i) {
    const resultadex = u / i
    return resultadex
}

console.log(soma3(55, 99))

console.log('-------------------------------------------------------')

function soma4(o = 0, j = 0) {
    const resultadu = o + j
    return resultadu
    //após return nada será executado
    console.log('Olá Mundo')
}

const resultadu = soma4(5)
console.log(resultadu)

console.log('-------------------------------------------------------')

const raiz = function (n) {
    return n ** 0.5
};

console.log(raiz(9))
console.log(raiz(25))
console.log(raiz(46))

console.log('-------------------------------------------------------')

const raiz2 = m => m / 0.5
console.log(raiz2(15))

//nao utilizamos a palavra function nesse caso, utilizamos => 
//veio para facilitar nossa vida, ARROW Function, pois parece uma flecha

console.log('-------------------------------------------------------')

//| function | const | return | 