// Variables globales y referencias DOM
let n = 4;
let generator = null;
let soluciones = [];
let currentIndex = 0;
const solucionesAnimadas = new Set();

const boardDiv = document.getElementById('board');
const indicesDiv = document.getElementById('indices');

// Generador de soluciones del problema n-reinas
function* generateNQueens(n) {
  const queens = [];
  const cols = new Set();
  const diag1 = new Set();
  const diag2 = new Set();

  function* backtrack(row) {
    if (row === n) {
      yield [...queens];
      return;
    }
    for (let col = 0; col < n; col++) {
      if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) continue;

      queens.push(col);
      cols.add(col);
      diag1.add(row - col);
      diag2.add(row + col);

      yield* backtrack(row + 1);

      queens.pop();
      cols.delete(col);
      diag1.delete(row - col);
      diag2.delete(row + col);
    }
  }

  yield* backtrack(0);
}

// Funciones para manejar el estado y avance de soluciones
function inicializarGenerador() {
  generator = generateNQueens(n);
  soluciones = [];
  currentIndex = 0;
  obtenerSiguiente(); // Genera la primera solución automáticamente
}

function obtenerSiguiente() {
  const result = generator.next();
  if (!result.done) {
    soluciones.push(result.value);
    currentIndex = soluciones.length - 1;
    mostrarSolucion();
  } else if (soluciones.length === 0) {
    mostrarSinSolucion();
  }
}

// Funciones de renderizado y animación
function renderBoard(queenPositions) {
  boardDiv.innerHTML = '';
  boardDiv.style.gridTemplateColumns = `repeat(${n}, 40px)`;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      const isLight = (row + col) % 2 === 0;
      cell.classList.add(isLight ? 'light' : 'dark');
      if (queenPositions && queenPositions[row] === col) {
        cell.textContent = '♛';
      }
      boardDiv.appendChild(cell);
    }
  }
}

function animarColocacionDeReinas(queenPositions) {
  boardDiv.innerHTML = '';
  boardDiv.style.gridTemplateColumns = `repeat(${n}, 40px)`;

  const celdas = [];
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      const isLight = (row + col) % 2 === 0;
      cell.classList.add(isLight ? 'light' : 'dark');
      celdas.push(cell);
      boardDiv.appendChild(cell);
    }
  }

  let fila = 0;
  function colocarSiguiente() {
    if (fila >= n) return;
    const col = queenPositions[fila];
    const index = fila * n + col;
    celdas[index].textContent = '♛';
    fila++;
    setTimeout(colocarSiguiente, 300);
  }

  colocarSiguiente();
}

function mostrarSolucion() {
  const solucion = soluciones[currentIndex];
  const clave = solucion.join(',');

  document.getElementById('contador').textContent = `Solución ${currentIndex + 1} de ${soluciones.length}`;
  indicesDiv.textContent = solucion.map((col, row) => `${row}:${col}`).join('\n');

  if (!solucionesAnimadas.has(clave)) {
    solucionesAnimadas.add(clave);
    animarColocacionDeReinas(solucion);
  } else {
    renderBoard(solucion);
  }
}

function mostrarSinSolucion() {
  renderBoard(null);
  indicesDiv.textContent = `No hay soluciones para n = ${n}`;
  document.getElementById('contador').textContent = 'Sin soluciones';
}

// Función principal de actualización
function actualizar() {
  document.getElementById('titulo-tablero').textContent = `Tablero con Solución para n = ${n}`;
  inicializarGenerador();
}

// Manejadores de eventos
document.getElementById('anterior').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    mostrarSolucion();
  }
});

document.getElementById('siguiente').addEventListener('click', () => {
  if (currentIndex + 1 < soluciones.length) {
    currentIndex++;
    mostrarSolucion();
  } else {
    obtenerSiguiente();
  }
});

document.getElementById('form-n').addEventListener('submit', function(e) {
  e.preventDefault();
  const input = document.getElementById('n-input').value;
  const value = parseInt(input, 10);
  if (Number.isInteger(value) && value > 0) {
    n = value;
    actualizar();
  } else {
    alert('Por favor, introduzca un número entero mayor que cero.');
  }
});

// Inicialización
actualizar();
