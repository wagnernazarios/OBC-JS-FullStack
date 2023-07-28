const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];
//adicionando elemento no final do array
arr.push("Sauron");
console.log(arr);
//adicionando elemento no começo do array
arr.unshift("Golum");
let tamanho = arr.unshift("Golum");
console.log(arr);
console.log(tamanho);

//removendo elemento no final do array
const ultimoElemento = arr.pop();

console.log(ultimoElemento);
console.log(arr);
