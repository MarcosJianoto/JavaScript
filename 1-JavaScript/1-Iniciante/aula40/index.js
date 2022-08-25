//break e continue

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i in numeros) {
  let numero = numeros[i];

  if (numero === 4) {
    console.log("Pulei o numero 4 ");
    continue;
  }

  if (numero === 7) {
    console.log("7 encontrado");
    break;
  }
}
