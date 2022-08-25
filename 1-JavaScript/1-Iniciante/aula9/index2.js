//String, Number, Undefined, Null, Boolean, Symbol

const nome = 'Luiz' //string
const nome1 = "Luiz" //string
const nome2 = `Luiz` //string
const num1 = 10 //number
const num2 = 10.52 //number 
let nomeAluno //variável UNDEFINED  => não aponta pra local nenhum na memória
const sobrenomeAluno = null //nulo => não aponta pra local nenhum na memória
const aprovado = false //Boolean = true ou false (lógico)

let a = 2 
let b = a
console.log(a, b) //2, 2

a = 3
console.log(a, b) //3, 2

b = a
console.log(a, b) //3, 3


const c = [1, 2]
const d = c
console.log(c, d)

d.push(4)
console.log(c, d)