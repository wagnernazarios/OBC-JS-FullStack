/*## Cadastro de Imóveis

Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

- Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
- O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
- O menu deve ter a opção de salvar um imóvel.
- Para salvar um novo imóvel o programa deve pedir as seguintes informações:
    - Nome do proprietário.
    - Quantidade de quartos.
    - Quantidade de banheiros.
    - Se possui garagem.
- O menu também deve ter a opção de mostrar todos os imóveis salvos.*/

let imoveis = [];

let menu = "";

do {
  menu = prompt(
    "Bem vindo ao cadastro de imoveis!" +
      "\nTotal de imoveis: " +
      imoveis.length +
      "\n\nEscolha uma opção: \n1. Novo Imovel \n2.Lista de imoveis cadastrados \n3.Sair"
  );

  switch (menu) {
    case "1":
      let imovel = {};

      imovel.proprietário = prompt("Informe o nome do proprietério");
      imovel.quartos = prompt("Informe o número de quartos do imovel");
      imovel.banheiros = prompt("Informe o número de banheiro do imóvel");
      imovel.garagem = prompt("Informe se há garagem.");

      let confirmacao = confirm("Os dados estão corrretos?");
      if (confirmacao) {
        alert("Imovel cadastrado!");
        imoveis.push(imovel);
      } else {
        alert("Voltando ao menu");
      }
      break;
    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Lista de imoveis cadastrados : " +
            (i + 1) +
            "\n\nNome do proprietário: " +
            imoveis[i].proprietário +
            "\nNumero de quartos: " +
            imoveis[i].quartos +
            "\nNumer de banheiros: " +
            imoveis[i].banheiros +
            "\nHá garagem? " +
            imoveis[i].garagem
        );
      }
      break;
    case "3":
      alert("Encerrando o programa...");
      break;

    default:
      alert("Opção invalida!");
      break;
  }
} while (menu !== "3");
