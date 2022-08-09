/*

Operadores lógicos
&& -> AND -- Todas precisam ser verdadeiras
|| -> OR - apenas uma precisa ser verdadeira
! -> NOT

*/

console.log(true && true && true && false);
console.log(true && false);
console.log(true || false);
console.log(false || true);

console.log("-------------------------------------------------------------");

const expressao = true && false && true && true;
console.log(expressao);

console.log("-------------------------------------------------------------");

const express = true || false;
console.log(express);

console.log("-------------------------------------------------------------");

const marcos = false || (true && true);
console.log(marcos);

console.log("-------------------------------------------------------------");

const fmasfsa = false && true && true && false;
console.log(fmasfsa);

console.log("-------------------------------------------------------------");

const usuario = "Marcos";
const senha = '123456'

const vaiLogar = usuario === 'Marcos' && senha === '123456'
console.log(vaiLogar)

console.log
("-------------------------------------------------------------");

console.log(!true)


console.log
("-------------------------------------------------------------");

