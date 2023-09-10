let pessoa = {
  nome: "Wagner",
  idade: 29,
  dizerOla() {
    // return "Ola, " + this.nome;
    console.log("Ola, mundo. Meu nome é " + this.nome + "!");
  },
};

console.log(pessoa);

pessoa.dizerOla();
