/*
Entre 0 - 11  = Bom dia
Entre 12 - 17 = Boa tarde
Entre 18 - 23 = Boa noite
*/ 

//IF pode ser usado sozinho
//ELSE IF não pode ser executado sozinho, sempre que utilizamos a palavra else precisamos de IF antes
//Eu posso ter quantos ELSE IFs no sistema eu QUISER na checagem.
//Só posso ter 1 'ELSE' na checagem
//podemos usar condições sem ELSE IF, utilizando apenas IF e ELSE

const hora = 25;

if (hora >= 0 && hora <= 12) {
  console.log('Bom dia');
} else if(hora >= 12 && hora <= 17) {
  console.log('Boa tarde')
} else if( hora >= 18 && hora <= 23){
  console.log('Boa noite')
} else {
  console.log('Olá')
}

console.log("---------------------------------------------------------");

const tenhoGrana = NaN
if(tenhoGrana) {
  console.log('Vou sair de casa')
} else {
  console.log('Não vou sair de casa')
}

console.log("---------------------------------------------------------");

const maeDeixouSair = false
if(maeDeixouSair) {
  console.log('yes baby como on')
}else {
  console.log('Close baby, Close')
}

console.log("---------------------------------------------------------");