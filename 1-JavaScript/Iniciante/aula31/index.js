const verdadeira = true;

//let tem escopo de bloco {....bloco}
//var só tem escopo de função

let nome = "Luiz"; //criando
var nome2 = "Luiz";

var nome2 = "Marcos";
//var = conseguimos criar duas variáveis com o mesmo nome, onde a segunda substitui a primeira
//let = não conseguimos criar duas variáveis com o mesmo nome, porém podemos mudar o valor
//const = constante, ou seja, não podemos mudar o valor, salvo em alguns casos; OBJETO e ARRAYs

if (verdadeira) {
  let nome = "Otávio"; //criando
  console.log(nome, nome2);

  if (verdadeira) {
    let nome = "Joaozinho";
    console.log(nome, nome2);
  }
}

console.log(
  "_________________________________________________________________________"
);

function falaOi() {
  var sobrenome = "Miranda";

  if (verdadeira) {
    console.log(sobrenome);
  }
}
falaOi();
