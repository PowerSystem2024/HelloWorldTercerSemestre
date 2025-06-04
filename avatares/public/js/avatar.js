let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    // Obtiene el botón de selección de personaje
    let botonPersonajeJugador = document.getElementById("boton-personaje");
    // Agrega el event listener para manejar el click en el botón
    botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);

    // Botones de ataque - usando los IDs correctos del HTML
    let botonPunio = document.getElementById('boton-punio')
    botonPunio.addEventListener('click', ataquePunio)
    
    let botonPatada = document.getElementById('boton-patada')
    botonPatada.addEventListener('click', ataquePatada)
    
    let botonBarrida = document.getElementById('boton-barrida')
    botonBarrida.addEventListener('click', ataqueBarrida)

    // Botón reiniciar
    let botonReiniciar = document.getElementById('boton-reiniciar').querySelector('button')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

// Función que maneja la selección del personaje del jugador
function seleccionarPersonajeJugador() {
    let inputZuko = document.getElementById("zuko");    
    let inputKatara = document.getElementById("katara");
    let inputAang = document.getElementById("aang");
    let inputToph = document.getElementById("toph");

    let spanPersonajeJugador = document.getElementById("personaje-jugador");

    if (inputZuko.checked) {
        spanPersonajeJugador.innerHTML = "Zuko";
    } else if (inputKatara.checked) {
        spanPersonajeJugador.innerHTML = "Katara";
    } else if (inputAang.checked) {
        spanPersonajeJugador.innerHTML = "Aang";
    } else if (inputToph.checked) {
        spanPersonajeJugador.innerHTML = "Toph";
    } else {
        alert('Por favor selecciona un personaje');
        return;
    }
    
    seleccionarPersonajeEnemigo();
}

// Función para seleccionar aleatoriamente el personaje del enemigo
function seleccionarPersonajeEnemigo() {
    let personajeAleatorio = aleatorio(1, 4);
    let spanPersonajeEnemigo = document.getElementById("personaje-enemigo");
    
    if (personajeAleatorio == 1) {
        spanPersonajeEnemigo.innerHTML = "Zuko";
    } else if (personajeAleatorio == 2) {
        spanPersonajeEnemigo.innerHTML = "Katara";
    } else if (personajeAleatorio == 3) {
        spanPersonajeEnemigo.innerHTML = "Aang";
    } else {
        spanPersonajeEnemigo.innerHTML = "Toph";
    }
}

// Funciones de ataque del jugador - adaptadas a los nuevos botones
function ataquePunio() {
    ataqueJugador = 'Puño'
    ataqueAleatorioEnemigo()
}

function ataquePatada() {
    ataqueJugador = 'Patada'
    ataqueAleatorioEnemigo()
}

function ataqueBarrida() {
    ataqueJugador = 'Barrida'
    ataqueAleatorioEnemigo()
}

// Función para generar ataque aleatorio del enemigo
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3) // Solo 3 opciones ahora

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'Puño'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'Patada'
    } else {
        ataqueEnemigo = 'Barrida'
    }
    
    // Después de generar ambos ataques, evaluar el combate
    combate()
}

// Función principal de combate con la lógica de ventajas adaptada
function combate() {
    let spanVidasJugador = document.querySelector('#seleccionar-ataque .vidas:first-of-type')
    let spanVidasEnemigo = document.querySelector('#seleccionar-ataque .vidas:last-of-type')
    
    // Limpiar mensajes anteriores y mostrar el nuevo combate
    limpiarMensajes()
    
    // Mostrar los ataques realizados
    crearMensaje("⚔️ Tú atacaste con: " + ataqueJugador + " | Enemigo atacó con: " + ataqueEnemigo)
    
    // Lógica de combate adaptada:
    // Puño le gana a Barrida
    // Patada le gana a Puño  
    // Barrida le gana a Patada
    
    if (ataqueJugador == ataqueEnemigo) {
        // Empate
        crearMensaje("🤝 ¡EMPATE! Ambos atacaron con " + ataqueJugador)
        crearMensaje("💙 Vidas restantes - Tú: " + vidasJugador + " | Enemigo: " + vidasEnemigo)
    } else if (
        (ataqueJugador == 'Puño' && ataqueEnemigo == 'Barrida') ||
        (ataqueJugador == 'Patada' && ataqueEnemigo == 'Puño') ||
        (ataqueJugador == 'Barrida' && ataqueEnemigo == 'Patada')
    ) {
        // Jugador gana
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        crearMensaje("🎉 ¡GANASTE LA RONDA! Tu " + ataqueJugador + " venció a la " + ataqueEnemigo + " del enemigo")
        crearMensaje("💙 Vidas restantes - Tú: " + vidasJugador + " | Enemigo: " + vidasEnemigo)
    } else {
        // Enemigo gana
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
        crearMensaje("💀 ¡PERDISTE LA RONDA! La " + ataqueEnemigo + " del enemigo venció a tu " + ataqueJugador)
        crearMensaje("💙 Vidas restantes - Tú: " + vidasJugador + " | Enemigo: " + vidasEnemigo)
    }
    
    // Agregar separador visual entre rondas
    crearMensaje("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
    
    // Verificar si el juego terminó
    revisarVidas()
}

// Función para limpiar mensajes anteriores
function limpiarMensajes() {
    let sectionMensajes = document.getElementById('mensajes')
    // Limpiar solo si hay más de 10 mensajes para evitar scroll excesivo
    let mensajes = sectionMensajes.querySelectorAll('p')
    if (mensajes.length > 10) {
        // Mantener solo los últimos 5 mensajes
        for (let i = 0; i < mensajes.length - 5; i++) {
            mensajes[i].remove()
        }
    }
}

// Función para revisar las vidas y determinar el ganador final
function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("🎉 ¡GANASTE EL JUEGO! 🎉")
    } else if (vidasJugador == 0) {
        crearMensajeFinal("💀 ¡PERDISTE EL JUEGO! 💀")
    }
}

// Función para crear mensajes de cada round
function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultado
    parrafo.style.margin = '8px 0'
    parrafo.style.padding = '5px'
    parrafo.style.borderLeft = '3px solid #4fd1c7'
    parrafo.style.paddingLeft = '10px'
    sectionMensajes.appendChild(parrafo)
    
    // Hacer scroll automático hacia abajo para ver los mensajes más recientes
    sectionMensajes.scrollTop = sectionMensajes.scrollHeight
}

// Función para crear mensaje final del juego
function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    parrafo.style.fontWeight = 'bold'
    parrafo.style.fontSize = '1.3em'
    parrafo.style.color = '#4fd1c7'
    parrafo.style.textAlign = 'center'
    parrafo.style.padding = '15px'
    parrafo.style.border = '2px solid #4fd1c7'
    parrafo.style.borderRadius = '10px'
    parrafo.style.marginTop = '15px'
    parrafo.style.background = 'rgba(79, 209, 199, 0.1)'
    sectionMensajes.appendChild(parrafo)
    
    // Hacer scroll automático hacia abajo
    sectionMensajes.scrollTop = sectionMensajes.scrollHeight
    
    // Deshabilitar botones de ataque
    deshabilitarBotones()
}

// Función para deshabilitar los botones de ataque
function deshabilitarBotones() {
    let botonPunio = document.getElementById('boton-punio')
    let botonPatada = document.getElementById('boton-patada')
    let botonBarrida = document.getElementById('boton-barrida')
    
    botonPunio.disabled = true
    botonPatada.disabled = true
    botonBarrida.disabled = true
    
    // Cambiar el estilo visual de los botones deshabilitados
    botonPunio.style.opacity = '0.5'
    botonPatada.style.opacity = '0.5'
    botonBarrida.style.opacity = '0.5'
}

// Función para reiniciar el juego
function reiniciarJuego() {
    location.reload()
}

// Función para generar un número aleatorio entre min y max
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);