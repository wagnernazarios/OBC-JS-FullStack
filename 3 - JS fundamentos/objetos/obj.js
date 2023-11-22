let obj = {
  name: "wagner",
  idade: 26,
};

console.log(obj.name);

//para criar uma propriedade de forma dinamica
obj.prop = "ola " + obj.name;

console.log(obj.prop);

//se o valor da variavel for identico a uma das chaves o JS vai entender que é a mesma coisa
let nothing = "prop";

console.log(obj[nothing]);

console.log(obj.prop === obj[nothing]);

const pessoa = {};

pessoa.nome = "Wagner";
pessoa.idade = 29;
pessoa.colegas = ["Maju", "Jean", "Weller"];
pessoa.endereco = {
  Rua: "Feliciano Sodré",
  Bairro: "Varzea",
  Cidade: "Rio de Janeiro",
};

console.log(pessoa);
