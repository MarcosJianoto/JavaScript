

// Operação ternária ? :
// (condicao) ? 'valor para verdadeiro' : 'Valor para falso'


const pontuacaoUsuario = 999;

if (pontuacaoUsuario >= 1000) {
  console.log("Usuario VIP");
} else {
  console.log("Usuario normal");
}

console.log("-------------------------------------------------------------");

const pontuacao = 1000;
const nivelUsuario = pontuacao >= 1000 ? "Usuario VIP" : "Usuario normal";
console.log(nivelUsuario)


console.log("-------------------------------------------------------------");

const batata = 500
const batataCompleta = batata >= 400 ? 'Doidao' : 'Locao'
console.log(batataCompleta)


console.log("-------------------------------------------------------------");

const Joao = 1000
const JoaoMarino = Joao >= 500 ? 'Juanito': 'Batatito'


console.log("-------------------------------------------------------------");

const corUsuario = undefined;
const corPadrao = corUsuario || 'Preta';
console.log(corPadrao)