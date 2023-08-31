let fila = [];

let opçao = "";

do {
  let pacientes = "";

  for (let i = 0; i < fila.length; i++) {
    pacientes += i + 1 + "º -  " + fila[i] + "\n";
  }

  opçao = prompt(
    "Pacientes:" +
      "\n" +
      pacientes +
      "Escolha a ação que deseja fazer:" +
      "\n 1 - Novo Paciente" +
      "\n 2 - Atender Paciente" +
      "\n 3 - Sair"
  );

  switch (opçao) {
    case "1":
      const novoPaciente = prompt("Digite o nome do novo paciente");
      fila.push(novoPaciente);
      let indice = fila.indexOf(novoPaciente);
      pacientes += indice + 1 + "º -  " + novoPaciente + "\n";
      break;

    case "2":
      const retirar = fila.shift();
      const pacienteAtendido = alert("Paciente " + retirar + "foi atendido!");
      break;

    case "3":
      alert("Finalizando o programa!");
      break;

    default:
      alert("Opção Invalida!");
  }
} while (opçao !== "3");
