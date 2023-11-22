function calcular(a, b, operacao) {
  console.log("Realizan do uma operação");
  const resultado = operacao(a, b);
  return resultado;
}

function somar(x, y) {
  console.log("Realizando uma soma!");
  return x + y;
}

// a função calcular recebe a função somar como parametro para o operacao e que somará os dois primeiros valores.
console.log(calcular(5, 3, somar));

// adicionando uma funcão anonima direto no parametro
console.log(
  calcular(8, 4, function (x, y) {
    console.log("Realizando uma subtração!");
    return x - y;
  })
);

function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  });
}

const lista = ["Maçã", "Banana", "Laranja", "Limão"];

//exibir cada elemento com o for
for (let i = 0; i < lista.length; i++) {
  exibirElemento(lista[i], i, lista);
}

// exibir cada elemento de forma dinamica
lista.forEach(exibirElemento);

//usando funções anonimas no forEach
lista.forEach(function (elemento, indice, array) {
  console.log({ elemento, indice, array });
});
