let dinheiroInicial = parseFloat(
  prompt("Ola! Informe o valor do seu patrimônio")
);

let menu = prompt(
  "OK. O seu patrimônio é de exatos: " +
    dinheiroInicial +
    " reais. \nOque deseja fazer? \n1. Adicionar dinheiro \n2. Remover dinheiro \n3. Sair"
);

do {
  switch (menu) {
    case "1":
      let adicionar = parseFloat(
        prompt("Informe o valor que desejar adicionar ao seu patrimônio")
      );
      dinheiroInicial += adicionar;
      alert(
        "Voce adicionou " +
          adicionar +
          " reais \nSeu patrimônio é de " +
          dinheiroInicial +
          " reais"
      );
      break;

    case "2":
      let remover = parseFloat(
        prompt("Informe o valor que desejar remover do seu patrimônio")
      );
      dinheiroInicial -= remover;
      alert(
        "Voce removeu " +
          remover +
          " reais \nSeu patrimônio é de " +
          dinheiroInicial +
          " reais"
      );
      break;
    default:
      alert("Opção invalida!");
      break;
  }
  menu = prompt(
    "OK. O seu  patrimônio atual é de exatos: " +
      dinheiroInicial +
      "reais. \nOque deseja fazer? \n1. Adicionar dinheiro \n2. Remover dinheiro \n3. Sair"
  );
} while (menu !== "3");

alert("Sobrou : " + dinheiroInicial + " reais do seu patrimônio");
alert("Encerrando o programa...");
