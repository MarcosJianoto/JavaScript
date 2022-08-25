// new Date(0);
// geralmente iniciar desde 1970 1 de janeiro

function relogio() {
  function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-br", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  const relogio = document.querySelector(".relogio");
  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
  }

  document.addEventListener("click", function (e) {
    const el = e.target;

    if (el.classList.contains("zerar")) {
      clearInterval(timer);
      relogio.innerHTML = "00:00:00";
      relogio.classList.remove("pausado");
      segundos = 0;
    }

    if (el.classList.contains(iniciar)) {
      relogio.classList.remove("iniciar");
      clearInterval(timer);
      iniciaRelogio();
    }

    if (el.classList.contains(pausar)) {
      clearInterval(timer);
      relogio.classList.add("pausado");
    }
  });
}
relogio();