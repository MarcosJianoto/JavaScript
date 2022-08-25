const h1 = document.querySelector(".container h1");
const data = new Date();
h1.innerHTML = data.toLocaleDateString("pt-BR", {dateStyle: 'full'});


console.log('---------------------------------------------------------------------')


function getDiaSemanaTexto(diaSemana){
    const diasSemana = ['Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo']
    return diasSemana[diaSemana]
}

console.log('---------------------------------------------------------------------')