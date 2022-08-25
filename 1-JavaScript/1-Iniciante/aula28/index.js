// trabalharemos com a função data
// data é uma função construtora
//função construtora sempre começa com letra maiúscula

const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const datas = new Date(0 + tresHoras + umDia); // 01/01/1970 timestap unix ou época unix
console.log(datas.toString());

console.log("---------------------------------------------------");

//não existe 60 segundos, apenas 59, pois se colocar 60 ele irá mudar para a hora seguinte
//mes começa do 0... 0 é janeiro | ano, mês, dia, horas, minutos, segundos, milissegundos.

const datass = new Date(2019, 3, 20, 15, 14, 27, 999);
console.log(datass.toString());

console.log("---------------------------------------------------");

//getDay = dia da semana... geyDate é o dia.

const data = new Date("2019-04-20 20:20:59");
console.log("Dia", data.getDate()); 
console.log("Mês", data.getMonth()); // mes começa no 0
console.log("Ano", data.getFullYear());
console.log("Hora", data.getHours());
console.log("Minutos", data.getMinutes());
console.log("Segundos", data.getSeconds());
console.log("Milisseconds", data.getMilliseconds());
console.log('dia Semana', data.getDay()) // 0 - domingo / 6 - sábado
console.log(data.toString());
console.log(Date.now())

console.log("---------------------------------------------------");

function zeroAEsquerda (num) {
  return num >= 10 ? num : `0${num}`
}

function formataData(datta){
  const dia = zeroAEsquerda(data.getDate())
  const mes = zeroAEsquerda(data.getMonth() + 1)
  const ano = zeroAEsquerda(data.getFullYear())
  const hora = zeroAEsquerda(data.getHours())
  const minuto = zeroAEsquerda(data.getMinutes())
  const segundo = zeroAEsquerda(data.getSeconds())
  const milissegundos = zeroAEsquerda(data.getMilliseconds())

  return `${dia}/${mes}/${ano} ${hora}/${minuto}/${segundo}/${milissegundos}`
}

const datta = new Date()
const dataBrasil = formataData(datta)
console.log(dataBrasil)


console.log("---------------------------------------------------");

