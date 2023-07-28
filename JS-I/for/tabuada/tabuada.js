let numero = parseInt(
  prompt(
    "Bem vindo! Esse é o robo de tabuada, insira um numero que ele irá exibir a tabuada do número." +
      "\nDe qual numero deseja ver a tabuada?"
  )
);

let operador = prompt(
  "Para qual operação deseja a tabuada: " +
    "\n1 = Soma" +
    "\n2 = Subtração" +
    "\n3 = Multiplicação" +
    "\n4 = Divisão"
);

let resultado = "";

switch (operador) {
  case "1":
    for (let i = 0; i <= 20; i++) {
      resultado += "\n" + numero + " + " + i + " = " + (numero + i);
    }
    alert("A tabuada de " + numero + " é:" + resultado);

    break;
  case "2":
    for (let i = 0; i <= 20; i++) {
      resultado += "\n" + numero + " - " + i + " = " + (numero - i);
    }
    alert("A tabuada de " + numero + " é:" + resultado);

    break;
  case "3":
    for (let i = 0; i <= 20; i++) {
      resultado += "\n" + numero + " x " + i + " = " + numero * i;
    }
    alert("A tabuada de " + numero + " é:" + resultado);

    break;
  case "4":
    for (let i = 0; i <= 20; i++) {
      resultado += "\n" + numero + " : " + i + " = " + numero / i;
    }
    alert("A tabuada de " + numero + " é:" + resultado);

    break;
  default:
    alert("Opção invalida");
}
