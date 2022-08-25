/* 
OPERADORES ARITMÉTICOS 

* + Adição / Concatenação
* ** Potenciação
* % Resto da divisão
*/

/*

    ()
    **
    * / %
     + -

*/ 

const num1 = 5
const num2 = 2
const num3 = 10
console.log((num1 + num2) * num3)
console.log(num1 + num3 / num2)
console.log(num1 * num2 / num3)


let contador = 1
contador++
contador++
contador++
contador++
console.log(contador)


let problemas = 2
console.log(problemas--)
console.log(problemas)



/* Incremento ++
    decremento --
*/
let incremento = 50
incremento++
console.log(incremento)


/* 
Operadores de Atribuição

*/

let calculadora = 2 
calculadora **= 10
console.log(calculadora)


//NaN = Not a Number (conta está errada, facilmente resolvível)
//parseFloat e parseInt (converter para inteiro e para numero com casas decimais (quebrados))
//podemos Utilizar o Number, que irá utilizar conforme precisamos
const num5 = 10
const num6 = Number('5.8')
console.log(num5 + num6)
console.log(typeof num6)
