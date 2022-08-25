const calcular = document.getElementById("calcular");

function imc() {
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");

  if (nome !== "" && altura !== "" && peso !== "") {
    const valorIMC = (peso / altura ** 2).toFixed(2);

    let classificacao = "";

    if (valorIMC <= 18.59) {
      classificacao = "abaixo do peso.";
    } else if (valorIMC >= 18.6 && valorIMC <= 24.99) {
      classificacao = "peso ideal";
    } else if (valorIMC >= 25.0 && valorIMC <= 29.99) {
      classificacao = "Levemente acima do peso";
    } else if (valorIMC >= 30.0 && valorIMC <= 34.99) {
      classificacao = "obesidade grau 1";
    } else if (valorIMC >= 35.0 && valorIMC <= 39.99) {
      classificacao = "obesidade grau 2(severa)";
    } else if (valorIMC >= 40.0) {
      classificacao = "obesidade grau 3(mórbida)";
    }

    resultado.innerText = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;
  } else {
    resultado.innerText = "Preencha todos os campos!!!";
  }
}

calcular.addEventListener("click", imc);
