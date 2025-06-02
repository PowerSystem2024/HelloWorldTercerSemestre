let pasos = [];
let totalDisks = 3;
let animacionEnCurso = false;
let moveCounter = 0;

const torreA = document.getElementById('A');
const torreB = document.getElementById('B');
const torreC = document.getElementById('C');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const diskCountSelect = document.getElementById('diskCount');
const moveCounterDisplay = document.getElementById('moveCounter');

function crearDiscos(n) {
  for (let i = n; i >= 1; i--) {
    const disco = document.createElement('div');
    disco.classList.add('disk');
    disco.dataset.size = i;
    torreA.appendChild(disco);
  }
}

function limpiarTorres() {
  torreA.innerHTML = '';
  torreB.innerHTML = '';
  torreC.innerHTML = '';
}

function moverDisco(origenId, destinoId) {
  const origen = document.getElementById(origenId);
  const destino = document.getElementById(destinoId);
  const disco = origen.lastElementChild;
  if (disco) {
    destino.appendChild(disco);
  }
}

function hanoi(n, origen, destino, auxiliar) {
  if (n === 1) {
    pasos.push([origen, destino]);
  } else {
    hanoi(n - 1, origen, auxiliar, destino);
    pasos.push([origen, destino]);
    hanoi(n - 1, auxiliar, destino, origen);
  }
}

async function ejecutarMovimientos() {
  animacionEnCurso = true;
  moveCounter = 0;
  actualizarContador();
  for (let [origen, destino] of pasos) {
    await new Promise(res => setTimeout(res, 700));
    moverDisco(origen, destino);
    moveCounter++;
    actualizarContador();
  }
  animacionEnCurso = false;
}

function actualizarContador() {
  moveCounterDisplay.textContent = `Movimientos: ${moveCounter}`;
}

function iniciarJuego() {
  if (animacionEnCurso) return;
  limpiarTorres();
  totalDisks = parseInt(diskCountSelect.value);
  pasos = [];
  moveCounter = 0;
  actualizarContador();
  crearDiscos(totalDisks);
  hanoi(totalDisks, 'A', 'C', 'B');
  ejecutarMovimientos();
}

function reiniciarJuego() {
  if (animacionEnCurso) return;
  limpiarTorres();
  pasos = [];
  moveCounter = 0;
  actualizarContador();
  crearDiscos(parseInt(diskCountSelect.value));
}

startBtn.addEventListener('click', iniciarJuego);
resetBtn.addEventListener('click', reiniciarJuego);

// Inicialización por defecto
crearDiscos(totalDisks);
actualizarContador();
