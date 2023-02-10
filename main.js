let computador = Math.floor(Math.random() * 2);
console.log("o número é: " + computador);

let continuar = true;
let tentativas = 1;

alert("Vamos brincar de adivinhar o número?");

while (continuar) {
  let usuario = prompt("Digite um número de 0 a 2: ");
  if (usuario == computador) {
    switch (tentativas) {
      case 1:
        alert("Você acertou após UMA tentativa!");
        break;
      default:
        alert("Você acertou após " + tentativas + " tentativas!");
        break;
    }
    continuar = false;
  } else if (usuario < 0 || usuario > 2 || typeof usuario == "string") {
    alert("Valor inválido. Tente outra vez.");
    break;
  } else {
    alert("Continue tentando");
    tentativas += 1;
  }
}

function recarregarAPagina() {
  window.location.reload();
}
