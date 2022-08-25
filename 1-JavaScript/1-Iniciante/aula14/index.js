//IEEE  754-2008
let num1 = 0.7 //number
let num2 = 0.1 //number

num1 = ((num1 * 100) + (num2 * 100)) / 100// 0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100// 0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100// 0.8


console.log(num1)
console.log(Number.isInteger(num1))

num1 = Number(num1.toFixed(2))
console.log(num1)

/*
num1 = num1.toFixed(2)

//console.log(num1.toString() + num2)
//console.log(typeof num1)
//console.log(num1.toString())
// para conseguir a versão binária, colocamos um 2 depois de toString (no método)

console.log(num1.toFixed(2))
//toFixed utilizamos para conseguir um numero com as casas decimais reduzidas( definimos quantas casas serão )

console.log(Number.isInteger(num1))
//Number.isInteger ---- recebemos se o valor é inteiro ou não, iremos receber TRUE ou FALSE

let temp = num1 * 'Ola'
console.log(Number.isNaN(temp))
//not a number acontece quando nossa conta está errada de alguma forma, no caso, um number x uma string
//Number.isNan (quando der verdadeiro, significa que SIM, não deu certo a conta.)
console.log(Number.isNaN(num1))//nesse caso, deu false, pois num1 é um NUMBER.
*/