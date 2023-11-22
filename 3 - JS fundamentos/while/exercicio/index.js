let turista = prompt("Qual é seu nome?");
let cidades = "";
let contagem = 0;

let jaVisitou = confirm("Voce ja alguma cidade");

while (jaVisitou) {
  let cidade = prompt("Qual cidade ja visitou!");
  cidades += "- " + cidade + "\n";
  contagem++;
  jaVisitou = confirm("Voce ja alguma outra cidade");
}

alert(
  "Seu nome é: " +
    turista +
    "\nVocê ja visitou " +
    contagem +
    " cidades." +
    "\nAs cidades visitadas foram: \n" +
    cidades
);
