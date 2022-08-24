// Função construtora -> objetos
// Função fábrica -> objetos
// Construtora -> o nome sempre começa com letra maiúscula -> Pessoa (new)
function Pessoa(nome, sobrenome) {
  //Privadas
  const ID = 123456;
  const metodoInterno = function () {
    
  };

  //atributos ou método públicos pois conseguimos acessar de fora do bloco
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function () {
    console.log(this.nome + ": sou um método");
  };
}

const p1 = new Pessoa("Luiz", "Otávio");
const p2 = new Pessoa("Maria", "Oliveira");
p1.metodo();
// não podemos esquecer da palavra new
