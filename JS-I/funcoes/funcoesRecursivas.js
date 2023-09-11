// São funções que chamam elas mesma e se repete.

// const input = require("readline-sync");

function dividir(num) {
  console.log(num);
  if (num % 2 === 0) {
    dividir(num / 2);
  } else {
    return num;
  }
}

// let num = input.question("Digite um numero: ");
// dividir(num);

// function dobrar(num) {
//   console.log(num);
//   dobrar(num * 2);
// }

// dobrar(num);

// fatorial é quando um numero se multiplica por ele mesmo -1 varias vezes.
//fatorial de 5: !5 == 5 * 4 * 3 * 2 * 1 = 120

function fatorial(num) {
  console.log("Número: " + num);

  if (num === 0) {
    return 1;
  } else if (num === 1) {
    return 1;
  } else {
    console.log(num + " * !" + (num - 1));
    return num * fatorial(num - 1);
  }
}

console.log(fatorial());
