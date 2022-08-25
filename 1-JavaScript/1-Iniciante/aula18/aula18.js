const array = [1, 2, 3];
array.push(4);
array[0] = "Luiz";
console.log(array);

console.log("-------------------------------------------------------");

const marcos = [2, 3, 4];
marcos.push(5);
marcos.unshift(5, 412421, 421, 412, 412, 4, 214, 21);
console.log(marcos);

console.log("-------------------------------------------------------");

let muriel = [2, 4, 5];
console.log(muriel);
muriel = "Marcos";
console.log(muriel);

console.log("-------------------------------------------------------");

//apenas não podemos reatribuir com const
const nome01 = "Luiz";
const sobrenome01 = "Miranda";
const idade01 = 25;

const nome02 = "Maria";
const sobrenome02 = "Oliveira";
const idade02 = 55;

console.log(nome01);

console.log("-------------------------------------------------------");

//[[ ARRAY]] {{OBJETOS}} | Colchetes é Array | Chaves é objeto
const pessoa7 = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 25,
};

console.log(pessoa7.sobrenome);
console.log(pessoa7.idade);

const pessoa2 = {
  nome: "Maria",
  sobrenome: "Oliveira",
  idade: 55,
};

console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa2.idade);

console.log("-------------------------------------------------------");

function criaPessoa(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
  };
}

const pessoa3 = criaPessoa("Luiz", "Miranda", 66);
console.log(pessoa3.nome);

console.log("-------------------------------------------------------");

function criaPessoa02(nome, sobrenome, sexo, idade) {
  return {
    nome,
    sobrenome,
    sexo,
    idade,
  };
}

const pessoa4 = criaPessoa02("Marcos", "Santos", "Masculino", 24);
console.log(pessoa4);

console.log("-------------------------------------------------------");

function criaHumano(nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
}

const pessoa001 = criaHumano("Murihha", "fhaugd", 24);
const pessoa002 = criaHumano("Mrhsauirh", "fashuiha", 14412);
const pessoa003 = criaHumano("Joao", "Otavio", 25);
const pessoa004 = criaHumano("junior", "mfas", 15);
const pessoa005 = criaHumano("hfuafhf", "fsafsa", 26);

console.log(pessoa001.nome, pessoa002.sobrenome, pessoa003.idade);

const pessoa10 = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 25,

  fala() {
    console.log(`a minha idade atual é ${this.idade}`);
  },

  incrementaIdade() {
    this.idade++;
  },
};

pessoa10.fala();
pessoa10.incrementaIdade();
pessoa10.fala();
pessoa10.incrementaIdade();
pessoa10.incrementaIdade();
pessoa10.incrementaIdade();
pessoa10.incrementaIdade();
pessoa10.fala();

console.log("-------------------------------------------------------");

console.log("-------------------------------------------------------");

console.log("-------------------------------------------------------");

console.log("-------------------------------------------------------");
