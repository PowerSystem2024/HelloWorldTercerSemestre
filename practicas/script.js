function jugar(contadores) {
    const opciones = ["piedra", "papel", "tijera"];
    let entradaValida = false;
    let jugador;

    while (!entradaValida) {
        let entrada = prompt("Elige una opción:\n1: Piedra\n2: Papel\n3: Tijera");
        if (entrada === null) {
            alert("Juego cancelado.");
            return;
        }

        let eleccion = parseInt(entrada.trim(), 10);
        if ([1, 2, 3].includes(eleccion)) {
            jugador = opciones[eleccion - 1];
            entradaValida = true;
        } else {
            alert("Entrada inválida. Por favor, ingresa 1, 2 o 3.");
        }
    }

    const computadora = opciones[Math.floor(Math.random() * 3)];

    if (jugador === computadora) {
        alert(`¡Empate! Ambos eligieron ${jugador}.`);
        contadores.empates++;
    } else if (
        (jugador === "piedra" && computadora === "tijera") ||
        (jugador === "papel" && computadora === "piedra") ||
        (jugador === "tijera" && computadora === "papel")
    ) {
        alert(`¡Ganaste! ${jugador} le gana a ${computadora}.`);
        contadores.victoriasJugador++;
    } else {
        alert(`¡Perdiste! ${computadora} le gana a ${jugador}.`);
        contadores.victoriasComputadora++;
    }
}

function iniciarJuego() {
    let jugarOtraVez = true;
    const contadores = {
        victoriasJugador: 0,
        victoriasComputadora: 0,
        empates: 0
    };

    while (jugarOtraVez) {
        jugar(contadores);
        jugarOtraVez = confirm("¿Quieres jugar otra vez?");
    }

    alert(
        `Resultados finales:\n` +
        `Victorias del jugador: ${contadores.victoriasJugador}\n` +
        `Victorias de la computadora: ${contadores.victoriasComputadora}\n` +
        `Empates: ${contadores.empates}`
    );
}

console.log("¡Bienvenido al juego de piedra, papel o tijera!");
iniciarJuego();
console.log("¡Gracias por jugar! Hasta la próxima.");
