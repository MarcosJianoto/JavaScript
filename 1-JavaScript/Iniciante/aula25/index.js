console.log("---------------------------------------------------------");

const numero = 2

if(numero >= 0 && numero <= 5) {
  console.log(`sim o ${numero} é maior ou igual a 0`)
}

console.log("---------------------------------------------------------");

const numer = 5

if(numer >= 5 && numer <= 10) {
  console.log('Joao')
}

console.log("---------------------------------------------------------");

const joao = 10
if(joao <= 5 && joao >= 10) {
  console.log('Marcos')
} else {
  console.log('O numero não está entre 0 e 5')
}

console.log("---------------------------------------------------------");

// if - se isso ocorrer ...faça isso
// else - se não ocorrer... faça isso

const nula = 60

if ( nula >= 10 ) {
  console.log('nula é maior que 10')
}

if(nula >= 0 && nula <= 5){
  console.log('Está entre 0 e 5')
}else if (nula >= 6 && nula <= 10) {
  console.log('Está entre 6 e 10')
}else if (nula >= 11 && nula <= 15) { //verdadeiro
  console.log('Está entre 11 e 15')
}else {
  console.log(`Está acima de 16, o valor é: ${nula}`)
}

console.log('Aqui vem o resto do código...')

console.log("---------------------------------------------------------");

//caso tenhamos um valor VERDADEIRO no meio do IF-else, ele irá quebrar nosso código.