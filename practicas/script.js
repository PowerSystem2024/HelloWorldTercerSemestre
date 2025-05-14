function jugar(contadores) {
    const opciones = ["piedra", "papel", "tijera"];
    let jugador = prompt("Elige: piedra, papel o tijera");

    while (jugador === null || !opciones.includes(jugador.toLowerCase())) {
        jugador = prompt("Entrada inválida. Por favor, elige: piedra, papel o tijera");
    }

    jugador = jugador.toLowerCase();
    const computadora = opciones[Math.floor(Math.random() * 3)];

    if (jugador === computadora) {
        alert("¡Empate! Ambos eligieron " + jugador);
        contadores.empates++;
    } else if (
        (jugador === "piedra" && computadora === "tijera") ||
        (jugador === "papel" && computadora === "piedra") ||
        (jugador === "tijera" && computadora === "papel")
    ) {
        alert("¡Ganaste! " + jugador + " le gana a " + computadora);
        contadores.victoriasJugador++;
    } else {
        alert("¡Perdiste! " + computadora + " le gana a " + jugador);
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
        "Resultados finales:\n" +
        "Victorias del jugador: " + contadores.victoriasJugador + "\n" +
        "Victorias de la computadora: " + contadores.victoriasComputadora + "\n" +
        "Empates: " + contadores.empates
    );
}

console.log("¡Bienvenido al juego de piedra, papel o tijera!");
iniciarJuego();
console.log("¡Gracias por jugar! Hasta la próxima.");