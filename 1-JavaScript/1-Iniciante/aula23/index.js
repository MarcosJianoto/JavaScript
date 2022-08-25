/*
&& and / false and true = false
|| or / false and true = true

FALSY
*false (literalmente falso)
0
'' ou "" ou ``
null / undefined
NaN

*/
function falaOi() {
  return "Oi";
}

let vaiExecutar = "Joãozinho";

console.log(vaiExecutar && falaOi());

console.log("-------------------------------------------------------------");

function ola() {
  return "batata";
}

const executar = "potato";

console.log(executar && ola());

console.log("-------------------------------------------------------------");

console.log(0 || false || null || "Luiz Otávio" || true);

console.log("-------------------------------------------------------------");

const corUsuario = "Blue";
const corPadrao = corUsuario || "Preto";
console.log(corPadrao);

console.log("-------------------------------------------------------------");

const Cor = "Black";
const CorNat = Cor || "Pink";
console.log(CorNat);

console.log("---------------------------------------------------------");

const a = 0;
const b = null;
const c = "false"; // É uma string
const d = false;
const e = NaN;

console.log(a || b || c || d || e);

console.log ("---------------------------------------------------------");

const f = 0;
const g = null;
const h = false;
const i = false;
const j = NaN;

console.log(f||g||h||i||j)

console.log ("---------------------------------------------------------");

