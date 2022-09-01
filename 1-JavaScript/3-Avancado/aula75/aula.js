class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
  desconto(percentual) {
    this.preco = this.preco - this.preco * (percentual / 100);
  }
  aumento(percentual) {
    this.preco = this.preco + this.preco * (percentual / 100);
  }
}




const p1 = new Produto('Camiseta', 50);

const p2 = {
  nome: 'Caneca',
  preco: 15,
}

Object.setPrototypeOf(p2, Produto.prototype)
p2.aumento(50)

p1.desconto(15)
p1.aumento(20)

const p3 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 113,
  },
  tamanho2: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42,
  },
});
p3.preco = 103
p3.aumento(10);
console.log(p3)