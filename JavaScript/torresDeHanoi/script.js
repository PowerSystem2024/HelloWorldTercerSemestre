let pasos = [];
let totalDisks = 3;
let animacionEnCurso = false;

const torreA = document.getElementById('A');
const torreB = document.getElementById('B');
const torreC = document.getElementById('C');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const diskCountSelect = document.getElementById('diskCount');

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
  for (let [origen, destino] of pasos) {
    await new Promise(res => setTimeout(res, 700));
    moverDisco(origen, destino);
  }
  animacionEnCurso = false;
}

function iniciarJuego() {
  if (animacionEnCurso) return;
  limpiarTorres();
  totalDisks = parseInt(diskCountSelect.value);
  pasos = [];
  crearDiscos(totalDisks);
  hanoi(totalDisks, 'A', 'C', 'B');
  ejecutarMovimientos();
}

function reiniciarJuego() {
  if (animacionEnCurso) return;
  limpiarTorres();
  pasos = [];
  crearDiscos(parseInt(diskCountSelect.value));
}

startBtn.addEventListener('click', iniciarJuego);
resetBtn.addEventListener('click', reiniciarJuego);

// Inicialización por defecto
crearDiscos(totalDisks);
