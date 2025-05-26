const N = 8;
  const tableroHTML = document.getElementById('tablero');

  let tablero = [];

  const movX = [2, 1, -1, -2, -2, -1, 1, 2];
  const movY = [1, 2, 2, 1, -1, -2, -2, -1];

  // Crear visualmente el tablero
  function crearTablero() {
    tableroHTML.innerHTML = '';
    tablero = [];

    for (let i = 0; i < N; i++) {
      tablero[i] = [];
      for (let j = 0; j < N; j++) {
        const casilla = document.createElement('div');
        casilla.className = 'casilla ' + ((i + j) % 2 === 0 ? 'blanca' : 'negra');
        casilla.id = `casilla-${i}-${j}`;
        tableroHTML.appendChild(casilla);
        tablero[i][j] = -1;
      }
    }
  }

  function esValido(x, y, tablero) {
    return x >= 0 && x < N && y >= 0 && y < N && tablero[x][y] === -1;
  }

  function resolverCaballo(x, y, movimiento) {
    if (movimiento === N * N) return true;

    for (let i = 0; i < 8; i++) {
      const siguienteX = x + movX[i];
      const siguienteY = y + movY[i];

      if (esValido(siguienteX, siguienteY, tablero)) {
        tablero[siguienteX][siguienteY] = movimiento;
        if (resolverCaballo(siguienteX, siguienteY, movimiento + 1)) {
          return true;
        }
        tablero[siguienteX][siguienteY] = -1; // Backtrack
      }
    }

    return false;
  }

  function mostrarSolucionAnimada() {
    let pasos = [];

    // Recolectamos las posiciones en orden
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        const paso = tablero[i][j];
        if (paso !== -1) pasos[paso] = { x: i, y: j };
      }
    }

    pasos.forEach((pos, i) => {
      setTimeout(() => {
        const casilla = document.getElementById(`casilla-${pos.x}-${pos.y}`);
        casilla.textContent = i;
        casilla.classList.add('marcada');
        if (i === 0) casilla.classList.add('inicio');
        if (i === 63) casilla.classList.add('final');
      }, i * 150); // Velocidad: 150ms por paso
    });
  }

  function iniciarTour() {
    crearTablero();
    tablero[0][0] = 0;

    if (resolverCaballo(0, 0, 1)) {
      mostrarSolucionAnimada();
    } else {
      alert("No se encontró una solución.");
    }
  }

  crearTablero();