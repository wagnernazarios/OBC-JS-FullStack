// exercicio feito com base na aula de resolução

function calcularTringulo(base, altura) {
  base = prompt("Informe o valor da base");
  altura = prompt("Informe o valor da altura");
  return (base * altura) / 2;
}

function calcularRetangulo(base, altura) {
  base = prompt("Informe o valor da base");
  altura = prompt("Informe o valor da altura");
  return base * altura;
}

function calcularQuadrado(lado) {
  lado = prompt("Informe o valor de um dos lados");
  return lado * lado;
}

function calcularTrapezio(baseMaior, baseMenor, altura) {
  baseMaior = parseFloat(prompt("Informe o valor da base maior"));
  baseMenor = parseFloat(prompt("Informe o valor da base menor"));
  altura = prompt("Informe o valor da altura");
  return ((baseMaior + baseMenor) * altura) / 2;
}

function calcularCirculo(raio, pi = 3.14) {
  raio = prompt("Informe o valor do raio");
  return pi * calcularRetangulo(raio, raio);
}

function exibirMenu(menu) {
  menu = prompt(
    "Bem-vindo a Calculadora Geometrica!" +
      "\n Qual forma geometrica deseja calcular a área: \n1. Tringulo \n2.Retangulo \n3.Quadrado \n4. Trapézio \n5. Circulo \n\n6. Para sair"
  );

  return menu;
}

let resultado = "";
let opcao = "";

do {
  opcao = exibirMenu();

  switch (opcao) {
    case "1":
      resultado = calcularTringulo();
      alert("O resultado do calculo do triangulo é: " + resultado);
      break;

    case "2":
      resultado = calcularRetangulo();
      alert("O resultado do calculo do Retangulo é: " + resultado);
      break;
    case "3":
      resultado = calcularQuadrado();
      alert("O resultado do calculo do Quadrado é: " + resultado);
      break;
    case "4":
      resultado = calcularTrapezio();
      alert("O resultado do calculo do Trapezio é: " + resultado);
      break;
    case "5":
      resultado = calcularCirculo;
      alert("O resultado do calculo da area do Circulo é: " + resultado);
      break;
    case "6":
      alert(" Encerrando o programa...");
      break;

    default:
      alert("Opção inválida!");
      break;
  }
} while (menu !== "6");
