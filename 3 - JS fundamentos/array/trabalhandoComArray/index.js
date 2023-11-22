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

//adicionando elemento no começo do array  e exibindo o tamanho
let tamanho = arr.unshift("Golum");
console.log(arr);
console.log(tamanho);

//removendo elemento no final do array
let ultimoElemento = arr.pop();

console.log(arr);
console.log(ultimoElemento);

//removendo o elemento do inicio do array
let primeiroElemento = arr.shift();
console.log(arr);
console.log(primeiroElemento);

//para pesquisar por um elemento
let nome = arr.includes("Sam");
console.log(nome);

//para persquisar pelo indice

let indice = arr.indexOf("Gandalf");
console.log(indice);

//para cortar um array

let hobbits = arr.slice(0, 4);
console.log(hobbits);
const outros = arr.slice(-4);
console.log(outros);

//para concatenar elementos/arrays
const sociedade = hobbits.concat(outros);
console.log(sociedade);

//para substituir elementos

const elementoRemovido = sociedade.splice(indice, 1, "Gandalf, o cinzento");
console.log(sociedade);
console.log(elementoRemovido);

//para iterar sobre o array

for (let i = 0; i < sociedade.length; i++) {
  const elementos = sociedade[i];
  console.log(elementos + " se encontra na posição " + i);
}
