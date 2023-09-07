function calcularMedia(a, b) {
  const media = (a + b) / 2;
  return media;
}

const resultado = calcularMedia(8, 5);

console.log(resultado);

function criarProduto(nome, preco) {
  const produto = {
    nome,
    preco,
    estoque: 1,
  };
  return produto;
}

const notebook = criarProduto("Lenovo Ideapad 3200", 2500);
//console.log(notebook);

//retornando uma expressão sem variavel
function areaRetangular(base, altura) {
  return base * altura;
}

console.log(areaRetangular(3, 5));

//usando uma função para calcular outra
function areaQuadrada(lado) {
  return areaRetangular(lado, lado);
}

console.log(areaQuadrada(9));

// qualquer coisa apos o return não é executado
function ola() {
  let texto = "...";
  return texto;
  texto = "Ola,mundo";
  console.log(texto);
}

console.log(ola());

//multiplos return dentro da função
function maioridade(idade) {
  if (idade > 18) {
    return "Voce é de maior";
  } else {
    return "Voce é de menor";
  }
}

console.log(maioridade(22));
