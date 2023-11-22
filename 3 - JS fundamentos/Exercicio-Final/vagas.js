const vagas = [];

function listarVagas() {
  const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
    textoFinal += indice + ". ";
    textoFinal += vaga.nome;
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n";
    return textoFinal;
  }, "");

  alert(vagasEmTexto);
}

function novaVaga() {
  const nome = prompt("Informe o nome da vaga.");
  const descricao = prompt("Informa uma descrição para vaga");
  const dataLimite = prompt(
    "Informe uma data limite para a vaga(dd/mm/aaa) para a vaga "
  );
  const confirmacao = confirm(
    "Deseja salvar a vaga com essas descrições: " +
      "\nNome: " +
      nome +
      "\nDescrição: " +
      descricao +
      "\nData Limite: " +
      dataLimite
  );
  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] };
    vagas.push(novaVaga);
    alert("Vaga criada!");
  }
}

function exibirVagas() {
  const indice = prompt("Informe o indice da vaga que deseja visualizar.");
  const vaga = vagas[indice];

  const candidatosEmTextos = vaga.candidatos.reduce(
    (textoFinal, candidato) => textoFinal + "\n - " + candidato,
    ""
  );

  alert(
    "Vaga nº " +
      indice +
      "\nNome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData Limite: " +
      vaga.dataLimite +
      "\nQuantidade de candidatos: " +
      vaga.candidatos.length +
      "\nCandidatos inscritos: " +
      candidatosEmTextos
  );
}

function inscreverCandidatos() {
  const candidato = prompt(
    "Informe do candidato que deseja se inscrever na vaga"
  );
  const indice = prompt("Informe o indice da vaga que deseja se inscrever");
  const vaga = vagas[indice];

  const confirmacao = confirm(
    "Deseja inscrever o candidato " +
      candidato +
      " na vaga " +
      indice +
      "?" +
      "\nNome: " +
      vaga.nome +
      "NDescrição: " +
      vaga.descricao +
      "\nData Limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    vaga.candidatos.push(candidato);
    alert("Inscrição realizada!");
  }
}

function excluirVaga() {
  const indice = prompt("Informe o indice da vaga que deseja excluir");
  const vaga = vagas[indice];

  const confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga " +
      indice +
      "?" +
      "\nNome: " +
      vaga.nome +
      "NDescrição: " +
      vaga.descricao +
      "\nData Limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    vagas.splice(indice, 1);
    alert("Vaga excluida.");
  }
}

function exibirMenu() {
  let menu = prompt(
    `Bem vindo ao cadastro de vagas de emprego! \nO que deseja?
  \n1. Listar vagas \n2. Criar vaga \n3. Visualizar vaga \n4. Inscrever candidato a uma vaga \n5. Excluir vaga \n6. Sair`
  );

  return menu;
}

function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();
    switch (opcao) {
      case "1":
        opcao = listarVagas();
        break;
      case "2":
        opcao = novaVaga();
        break;
      case "3":
        opcao = exibirVagas();
        break;
      case "4":
        opcao = inscreverCandidatos();
        break;
      case "5":
        opcao = excluirVaga();
        break;
      case "6":
        alert("Encerrando o programa");
        break;
      default:
        alert("Opção invalida!");
        break;
    }
  } while (opcao !== "6");
}

executar();
