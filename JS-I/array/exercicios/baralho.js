let baralho = [];

let menu = "";

let tamanho = "";

do {
  let cartas = "";
  for (let i = 0; i < baralho.length; i++) {
    cartas += baralho[i] + "\n";
  }
  menu = prompt(
    "Seu baralho: " +
      tamanho +
      "\n" +
      cartas +
      "\n1 - Adicionar uma Carta" +
      "\n2 - Puxar uma Carta" +
      "\n3 - Sair"
  );
  switch (menu) {
    case "1":
      const novaCarta = prompt("Informe qual carta você adicionou!");
      tamanho = baralho.unshift(novaCarta);
      break;
    case "2":
      const cartaPuxada = baralho.pop();
      if (cartaPuxada) {
        alert("Voce puxou a carta " + cartaPuxada);
      } else {
        alert("não há cartas");
      }
      break;
    case "3":
      alert("finalizando o programa");
      break;

    default:
      alert("Opção invalida!");
      break;
  }
} while (menu !== "3");
