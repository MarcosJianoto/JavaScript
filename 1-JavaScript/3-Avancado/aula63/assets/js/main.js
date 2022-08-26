//               -5      -4        -3         -2        -1
//                0       1         2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']

//nomes.splice(índice, delete, elementos a serem excluidos)
//pop
const removidos = nomes.splice(0, 0, 'Marcos')
console.log(nomes, removidos)