function doblo(x) {
  console.log("O doblo de " + x + " é: " + x * 2);
}

doblo(4);

function dizerOla(nome = "Mundo") {
  console.log("Olá, " + nome + "!");
}

dizerOla("Wagner");
dizerOla();

function soma(a, b) {
  console.log(a + b);
}

soma(2, 4);

function criarUsuario(nome, email, senha, tipo = "developer") {
  const usuario = {
    nome,
    email,
    senha,
    tipo,
  };

  console.log(usuario);
}

criarUsuario("Wagner", "wagner@gmail.com", 12345);

function novoUsuario(usuario) {
  return usuario.nome;
}

let dados = {
  nome: "wagner",
  email: "naz@email.com",
};

console.log(novoUsuario(dados));
