//factory function (função fábrica)
//constructor function (função construtora)

function criaPessoa(nome, sobrenome, alt, peso) {
  return {
    nome,
    sobrenome,
    fala(assunto) {
      return `${this.nome} está ${assunto}.`;
    },
    altura: alt,
    peso,
    imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Marcos", "Santos", 1.8, 80);
console.log(p1.imc())
const p2 = criaPessoa("Maria", "Joaquina", 1.6, 50);
console.log(p2.fala("falando sobre JS"));
console.log(p2.imc())
