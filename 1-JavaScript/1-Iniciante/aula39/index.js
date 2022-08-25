// laço for a gente geralmente sabe o tamanho do elemento.
// quando usamos while ou do while é por que não sabemos quantas vezes o laço irá ocorrer até terminar.
function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}

console.log("------------------------------------");

do {
  rand = random(min, max);
  console.log(rand);
} while (rand !== 10);
