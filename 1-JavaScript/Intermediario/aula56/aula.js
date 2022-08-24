//factory function (função fábrica)
//constructor function (função construtora)

function criaPessoa(nome, sobrenome, alt, peso) {
  return {
    nome,
    sobrenome,

    //Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    fala(assunto = 'falando sobre NADA') {
      return `${this.nome} está ${assunto}.`;
    },

    //Setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ')
    },

    altura: alt,
    peso,
    //Getter, queremos apenas obter o valor.
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Marcos", "Santos", 1.8, 80);
const p2 = criaPessoa('Joao', 'Otavio', 1.8, 58);
const p3 = criaPessoa('Junior', 'Otavio', 1.5, 110)

console.log(p3.imc)
console.log(p1.imc)
console.log(p2.imc)