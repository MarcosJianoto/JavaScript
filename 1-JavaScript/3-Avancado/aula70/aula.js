// Factory functions / Constructor functions
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  Object.freeze(this);
}

//{} <- this(palavra chave)
const p1 = new Pessoa("Luiz", "Miranda");
delete p1.nome;
const p2 = new Pessoa("Maria", "Miranda");
console.log(p1, p2);
