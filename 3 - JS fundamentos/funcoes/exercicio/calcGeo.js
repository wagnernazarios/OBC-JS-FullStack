// exercicio feito sozinho

function calcularTriangulo(base, altura) {
  return (base * altura) / 2;
}
function calcularRetangulo(base, altura) {
  return base * altura;
}
function calcularQuadrado(lado) {
  return calcularRetangulo(lado, lado);
}
function calcularTrapezio(baseMaior, baseMenor, altura) {
  return calcularTriangulo(baseMaior + baseMenor, altura);
}
function calcularCirculo(raio, pi = 3.14) {
  return pi * calcularRetangulo(raio, raio);
}

let menu = "";
do {
  menu = prompt(
    "Bem-vindo a Calculadora Geometrica!" +
      "\n Qual forma geometrica deseja calcular a área: \n1. Tringulo \n2.Retangulo \n3.Quadrado \n4. Trapézio \n5. Circulo \n\n6. Para sair"
  );

  switch (menu) {
    case "1":
      1;
      let baseTringulo = prompt(
        "Voce escolheu calcular a area do Tringulo! \nFavor, informar o valor da base"
      );
      let alturaTringulo = prompt("Agora, favor, informar o valor da altura");
      alert(
        "O resultado do calculo do triangulo é: " +
          calcularTriangulo(baseTringulo, alturaTringulo)
      );
      break;

    case "2":
      let baseRetangulo = prompt(
        "Voce escolheu calcular a area do Retangulo! \nFavor, informar o valor da base"
      );
      let alturaRetangulo = prompt("Agora, favor, informar o valor da altura");
      alert(
        "O resultado do calculo do Retangulo é: " +
          calcularRetangulo(baseRetangulo, alturaRetangulo)
      );
      break;
    case "3":
      let lado = prompt(
        "Voce escolheu calcular a area do Quadrado! \nFavor, informar o valor de um dos lados"
      );
      alert("O resultado do calculo do Quadrado é: " + calcularQuadrado(lado));
      break;
    case "4":
      let baseMaior = parseFloat(
        prompt(
          "Voce escolheu calcular a area do Trapézio! \nFavor, informar o valor da base maior"
        )
      );
      let baseMenor = parseFloat(
        prompt("Agora, favor, informar o valor da base menor")
      );
      let alturaTrapezio = prompt("Por fim, favor, informar o valor da altura");
      alert(
        "O resultado do calculo do Trapezio é: " +
          calcularTrapezio(baseMaior, baseMenor, alturaTrapezio)
      );
      break;
    case "5":
      let raio = prompt(
        "Voce escolheu calcular a area do Circulo! \nFavor, informar o valor da raio"
      );
      alert("O resultado do calculo do Circulo é: " + calcularCirculo(raio));
      break;
    case "6":
      alert(" Encerrando o programa...");
      break;

    default:
      alert("Opção inválida!");
      break;
  }
} while (menu !== "6");
