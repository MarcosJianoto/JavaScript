// construtora -> molde(classe)
class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + " " + this.sobrenome;
  }
}

Pessoa.prototype.nomeCompleto = function() {
  return this.nome + " " + this.sobrenome;
}

//instância
const pessoa1 = new Pessoa("Luiz", "O."); //<- Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'a');
const data = new Date(); // Date = Função construtora

console.dir(pessoa1);
console.dir(data);
