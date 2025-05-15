const opciones = ["piedra", "papel", "tijera"];
let contadores = {
  victoriasJugador: 0,
  victoriasComputadora: 0,
  empates: 0
};

const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const tiesSpan = document.getElementById("ties");
const resultMessage = document.getElementById("result-message");
const choiceButtons = document.querySelectorAll(".choices button");
const resetButton = document.getElementById("reset-button");

choiceButtons.forEach(button => {
  button.addEventListener("click", () => {
    const jugador = button.getAttribute("data-choice");
    jugar(jugador);
  });
});

resetButton.addEventListener("click", () => {
  contadores = {
    victoriasJugador: 0,
    victoriasComputadora: 0,
    empates: 0
  };
  actualizarMarcador();
  resultMessage.textContent = "¡Haz tu elección para comenzar!";
});

function jugar(jugador) {
  const computadora = opciones[Math.floor(Math.random() * 3)];

  if (jugador === computadora) {
    resultMessage.textContent = `¡Empate! Ambos eligieron ${jugador}.`;
    contadores.empates++;
  } else if (
    (jugador === "piedra" && computadora === "tijera") ||
    (jugador === "papel" && computadora === "piedra") ||
    (jugador === "tijera" && computadora === "papel")
  ) {
    resultMessage.textContent = `¡Ganaste! ${jugador} le gana a ${computadora}.`;
    contadores.victoriasJugador++;
  } else {
    resultMessage.textContent = `¡Perdiste! ${computadora} le gana a ${jugador}.`;
    contadores.victoriasComputadora++;
  }

  actualizarMarcador();
}

function actualizarMarcador() {
  playerScoreSpan.textContent = contadores.victoriasJugador;
  computerScoreSpan.textContent = contadores.victoriasComputadora;
  tiesSpan.textContent = contadores.empates;
}

