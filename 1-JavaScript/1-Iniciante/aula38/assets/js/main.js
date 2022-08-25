const paragrafos = document.querySelectorAll(".paragrafos");
const ps = paragrafos.querySelectorAll("p");

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of ps) {
    //background-color não podemos ter... 
  p.style.backgroundColor = backgroundColorBody
  p.style.color = '#ffffff'
}
