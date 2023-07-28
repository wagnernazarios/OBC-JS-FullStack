let velocidade = 80;

while (velocidade > 0) {
  console.log("Sua velocidade atual é " + velocidade + "km/h.");
  velocidade -= 20;

  if (velocidade === 20) {
    break;
  }
}

console.log("O veiculo está parado!");
