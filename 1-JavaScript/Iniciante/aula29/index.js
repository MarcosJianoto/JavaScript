const data = new Date("1987-04-21 00:00:00");
const diaSemana = data.getDay();
let diaSemanaTexto;

if (diaSemana === 0) {
  diaSemanaTexto = "Domingo";
} else if (diaSemana === 1) {
  diaSemanaTexto = "Segunda-feira";
} else if (diaSemana === 2) {
  diaSemanaTexto = "Terça-feira";
} else if (diaSemana === 3) {
  diaSemanaTexto = "Quarta-feira";
} else if (diaSemana === 4) {
  diaSemanaTexto = "Quinta-feira";
} else if (diaSemana === 5) {
  diaSemanaTexto = "Sexta-feira";
} else if (diaSemana === 6) {
  diaSemanaTexto = "Sábado";
} else {
  diaSemanaTexto = "";
}

console.log(diaSemana, diaSemanaTexto);

console.log("---------------------------------------------------");

const datas = new Date("1997-05-20 00:00:00");
const diaSemanas = data.getDay();
let diaSemanaText;

switch (diaSemanas) {
  case 0:
    diaSemanaText = "Domingo";
    break;
  case 1:
    diaSemanaText = "Segunda-Feira";
    break;
  case 2:
    diaSemanaText = "Terça-Feira";
    break;
  case 3:
    diaSemanaText = "Quarta-Feira";
    break;
  case 4:
    diaSemanaText = "Quinta-Feira";
    break;
  case 5:
    diaSemanaText = "Sexta-Feira";
    break;
  case 6:
    diaSemanaText = "Sábado";
    break;
  default:
    diaSemanaText = "";
}

console.log(diaSemanas, diaSemanaText);

console.log("---------------------------------------------------");
function getDiaSemanaTexto(diaSemana2) {
  let diaSemanaTexts;
  switch (diaSemana2) {
    case 0:
      diaSemanaTexts = "Domingo";
      return diaSemanaTexts;
    case 1:
      diaSemanaTexts = "Segunda";
      return diaSemanaTexts;
    case 2:
      diaSemanaTexts = "Terça";
      return diaSemanaTexts;
    case 3:
      diaSemanaTexts = "Quarta";
      return diaSemanaTexts;
    case 4:
      diaSemanaTexts = "Quinta";
      return diaSemanaTexts;
    case 5:
      diaSemanaTexts = "Sexta";
      return diaSemanaTexts;
    case 6:
      diaSemanaTexts = "Sábado";
      return diaSemanaTexts;
    default:
      diaSemanaTexts = "";
  }
}

const datacs = new Date('1987-04-26')
let diaSemana2 = data.getDay()
const diaSemanaTexts = getDiaSemanaTexto(diaSemana)

console.log(diaSemana,diaSemanaText,datacs)