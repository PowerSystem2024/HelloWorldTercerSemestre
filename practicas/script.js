function jugar() {
    const opciones = ["piedra", "papel", "tijera"];
    let jugador = prompt("Elige: piedra, papel o tijera");

    
    while (jugador === null || !opciones.includes(jugador.toLowerCase())) {
        jugador = prompt("Entrada inválida. Por favor, elige: piedra, papel o tijera");
    }

    jugador = jugador.toLowerCase();
    let computadora = opciones[Math.floor(Math.random() * 3)];

    if (jugador === computadora) {
        alert("¡Empate! Ambos eligieron " + jugador);
    } else if (
        (jugador === "piedra" && computadora === "tijera") ||
        (jugador === "papel" && computadora === "piedra") ||
        (jugador === "tijera" && computadora === "papel")
    ) {
        alert("¡Ganaste! " + jugador + " le gana a " + computadora);
    } else {
        alert("¡Perdiste! " + computadora + " le gana a " + jugador);
    }
}

function iniciarJuego() {
    var jugarOtraVez = true;
    while (jugarOtraVez) {
        jugar();
        jugarOtraVez = confirm("¿Quieres jugar otra vez?");
    }
}

console.log("¡Bienvenido al juego de piedra, papel o tijera!");
iniciarJuego();
console.log("¡Gracias por jugar! Hasta la próxima.");
