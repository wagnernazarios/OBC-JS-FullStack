// São funções que chamam elas mesma e se repete.

function dividir(num) {
  console.log(num);
  if (num % 2 === 0) {
    dividir(num / 2);
  } else {
    return num;
  }
}

dividir(36);
