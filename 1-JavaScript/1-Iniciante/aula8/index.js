/*
Luiz Otávio Miranda tem 30 anos, pesa 84kg
tem 1,80m de altura e seu IMC é de 25.9254
Luiz Otávio nasceu em 1980
*/

const nome = 'Marcos Aurelio'
const sobrenome = 'Jianoto dos Santos'
const idade = 25
const peso = 70
const alturaEmM = 1.80 // M
let indiceMassaCorporal  //peso / (altura * altura)
let anoNascimento

indiceMassaCorporal = peso / (alturaEmM * alturaEmM)
anoNascimento = 2022 - 

// + para unir valores

console.log(`${nome} ${sobrenome} tem  ${idade} anos, peso ${peso}kg`)
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`)
console.log(`${nome} nasceu em ${anoNascimento}`)