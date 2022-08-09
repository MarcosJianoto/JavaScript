console.log("-------------------------------------------------------");

/*
Primitivos (imutáveis) - string, number, boolean, undefined e null --- ainda falta ver -bigint- e -symbol-
*/

console.log("-------------------------------------------------------");

0123;
let nome = "Luiz";
nome[0] = "R";
console.log(nome[0], nome);

console.log("-------------------------------------------------------");

let a = "A";
let b = a; // Cópia
console.log(a, b);

a = "Outra coisa";
console.log(a, b);

console.log("-------------------------------------------------------");

//valores passados por referência( mutável) - array, object, function - passados por referência
let c = [1, 2, 3];
let d = [...c];
let e = d;
console.log(c, d);

c.push(4);
console.log(c, d);

d.pop();
console.log(c, d);

d.pop();
console.log(c, d, e);

c.push("Luiz");
console.log(c, d, e);

console.log("-------------------------------------------------------");

const f = {
  nome: "Luiz",
  sobrenome: "Otávio",
};
const g = { ...f };

g.nome = "João";
console.log(f);
console.log(g);

console.log("-------------------------------------------------------");

console.log("-------------------------------------------------------");
