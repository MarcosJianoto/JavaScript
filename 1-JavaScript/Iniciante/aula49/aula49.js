//Declaração de função (Function Hoisting)
falaOi();
function falaOi() {
  console.log("OIE");
}

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function () {
  console.log("Sou um dado.");
};
souUmDado();

// Arrow function
const funcaoArrow = () => {
  console.log("sou uma arrow function");
};
funcaoArrow();

//Dentro de um objeto

const obj = {
    falar() {
        console.log('estou falando...')
    }
};
obj.falar();