let menu = prompt(
  "Bem vindo ao menu! \nEscolha uma das opções abaixo. \nOpção 1 - Ver o menu novamente \nOpção 2 - Dar uma olhada nas novidades  \nOpção 3 - Pedir outro menu\nOpção 4 - Olha outra sessão \nOpção 5 - Encerrar"
);

do {
  switch (menu) {
    case "1":
      alert("Voce escolheu a opção 1! \nVeja o menu novamente!");
      break;
    case "2":
      alert("Voce escolheu a opção 2 \nDar uma olhada nas novidades  ");
      break;
    case "3":
      alert("Voce escolheu a opção 3 \n Pedir outro menu");
      break;
    case "4":
      alert("Voce escolheu a opção 4 \n Olha outra sessão");
      break;
    default:
      alert("Opção invalida");
      break;
  }

  menu = prompt(
    "Bem vindo novamente ao menu! \nEscolha uma das opções abaixo. \nOpção 1 - Ver o menu novamente \nOpção 2 - Dar uma olhada nas novidades  \nOpção 3 - Pedir outro menu\nOpção 4 - Olha outra sessão \nOpção 5 - Encerrar"
  );
} while (menu != "5");

alert("Encerrando o programa...");
