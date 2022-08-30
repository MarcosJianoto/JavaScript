// Factory functions / Constructor functions
function criaPessoa(nome, sobrenome) {
  return {
    nome, 
    sobrenome,
    nomeCompleto(){
      return `${this.nome} ${this.sobrenome}`
    },
  };
}

const p1 = criaPessoa('Luiz', 'Otávio')
console.log(p1.nomeCompleto())