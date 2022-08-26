const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2, [7, 8, 9], "Luiz");
console.log(a3);

const a4 = [10, 11, 12];
const a5 = [43, 432, 423];
const a6 = [...a4, "Luiz", ...a5, ...[643, 6, 43, 63]];
console.log(a6);
