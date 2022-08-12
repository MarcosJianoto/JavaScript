// atribuição via desestruturação(objetos)
const pessoa = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 30,
  endereco: {
    rua: "Av Brasil",
    numero: 320,
  },
};

console.log("----------------------------------------------");

const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, sobrenome, resto);
 