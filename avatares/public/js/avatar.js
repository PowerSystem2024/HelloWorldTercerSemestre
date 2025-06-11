/**
 * JUEGO DE COMBATE AVATAR - LA LEYENDA DE AANG
 * =============================================
 * 
 * Este es un juego de combate por turnos basado en Avatar: La Leyenda de Aang
 * donde el jugador selecciona un personaje y lucha contra un enemigo usando
 * diferentes tipos de ataques.
 * 
 * MECÁNICAS DEL JUEGO:
 * - Cada jugador tiene 3 vidas
 * - Hay 3 tipos de ataque: Puño, Patada y Barrida
 * - Lógica de ventajas: Puño > Barrida > Patada > Puño
 * - El primer jugador en perder todas sus vidas pierde el juego
 */

// ================================
// VARIABLES GLOBALES DEL JUEGO
// ================================

let ataqueJugador    // Almacena el ataque seleccionado por el jugador
let ataqueEnemigo    // Almacena el ataque generado aleatoriamente para el enemigo
let vidasJugador = 3 // Contador de vidas del jugador (inicia en 3)
let vidasEnemigo = 3 // Contador de vidas del enemigo (inicia en 3)

// ================================
// FUNCIÓN PRINCIPAL DE INICIALIZACIÓN
// ================================

/**
 * Función que se ejecuta al cargar la página
 * Configura todos los event listeners necesarios para el funcionamiento del juego
 */
function iniciarJuego() {
    // Event listener para el botón de selección de personaje
    let botonPersonajeJugador = document.getElementById("boton-personaje");
    botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);

    // Event listeners para los botones de ataque
    let botonPunio = document.getElementById('boton-punio')
    botonPunio.addEventListener('click', ataquePunio)
    
    let botonPatada = document.getElementById('boton-patada')
    botonPatada.addEventListener('click', ataquePatada)
    
    let botonBarrida = document.getElementById('boton-barrida')
    botonBarrida.addEventListener('click', ataqueBarrida)

    // Event listener para el botón de reiniciar
    let botonReiniciar = document.getElementById('boton-reiniciar').querySelector('button')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

// ================================
// FUNCIONES DE SELECCIÓN DE PERSONAJES
// ================================

/**
 * Maneja la selección del personaje del jugador
 * Verifica qué radio button está seleccionado y actualiza la interfaz
 */
function seleccionarPersonajeJugador() {
    // Obtener referencias a todos los radio buttons de personajes
    let inputZuko = document.getElementById("zuko");    
    let inputKatara = document.getElementById("katara");
    let inputAang = document.getElementById("aang");
    let inputToph = document.getElementById("toph");

    // Elemento donde se mostrará el nombre del personaje seleccionado
    let spanPersonajeJugador = document.getElementById("personaje-jugador");

    // Verificar cuál personaje fue seleccionado
    if (inputZuko.checked) {
        spanPersonajeJugador.innerHTML = "Zuko";
    } else if (inputKatara.checked) {
        spanPersonajeJugador.innerHTML = "Katara";
    } else if (inputAang.checked) {
        spanPersonajeJugador.innerHTML = "Aang";
    } else if (inputToph.checked) {
        spanPersonajeJugador.innerHTML = "Toph";
    } else {
        // Si no hay personaje seleccionado, mostrar alerta y salir de la función
        alert('Por favor selecciona un personaje');
        return;
    }
    
    // Una vez seleccionado el personaje del jugador, seleccionar el del enemigo
    seleccionarPersonajeEnemigo();
}

/**
 * Selecciona aleatoriamente el personaje del enemigo
 * Usa la función aleatorio() para generar un número entre 1 y 4
 */
function seleccionarPersonajeEnemigo() {
    let personajeAleatorio = aleatorio(1, 4); // Generar número aleatorio
    let spanPersonajeEnemigo = document.getElementById("personaje-enemigo");
    
    // Asignar personaje basado en el número aleatorio
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

// ================================
// FUNCIONES DE ATAQUE DEL JUGADOR
// ================================

/**
 * Maneja el ataque de Puño del jugador
 * Establece la variable ataqueJugador y procede con el ataque enemigo
 */
function ataquePunio() {
    ataqueJugador = 'Puño'
    ataqueAleatorioEnemigo() // Generar ataque enemigo y proceder al combate
}

/**
 * Maneja el ataque de Patada del jugador
 * Establece la variable ataqueJugador y procede con el ataque enemigo
 */
function ataquePatada() {
    ataqueJugador = 'Patada'
    ataqueAleatorioEnemigo() // Generar ataque enemigo y proceder al combate
}

/**
 * Maneja el ataque de Barrida del jugador
 * Establece la variable ataqueJugador y procede con el ataque enemigo
 */
function ataqueBarrida() {
    ataqueJugador = 'Barrida'
    ataqueAleatorioEnemigo() // Generar ataque enemigo y proceder al combate
}

// ================================
// FUNCIÓN DE ATAQUE ALEATORIO DEL ENEMIGO
// ================================

/**
 * Genera un ataque aleatorio para el enemigo
 * Después de generar el ataque, inicia la función de combate
 */
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3) // Solo 3 opciones de ataque disponibles

    // Asignar tipo de ataque basado en el número aleatorio
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'Puño'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'Patada'
    } else {
        ataqueEnemigo = 'Barrida'
    }
    
    // Después de generar ambos ataques, evaluar el resultado del combate
    combate()
}

// ================================
// FUNCIÓN PRINCIPAL DE COMBATE
// ================================

/**
 * Función principal que maneja la lógica de combate
 * Compara los ataques de jugador y enemigo para determinar el ganador
 * 
 * LÓGICA DE VENTAJAS:
 * - Puño le gana a Barrida
 * - Patada le gana a Puño  
 * - Barrida le gana a Patada
 */
function combate() {
    // Obtener referencias a los elementos de vidas en el HTML
    let spanVidasJugador = document.querySelector('#seleccionar-ataque .vidas:first-of-type')
    let spanVidasEnemigo = document.querySelector('#seleccionar-ataque .vidas:last-of-type')
    
    // Limpiar mensajes anteriores para evitar acumulación excesiva
    limpiarMensajes()
    
    // Mostrar información del combate actual
    crearMensaje("⚔️ Tú atacaste con: " + ataqueJugador + " | Enemigo atacó con: " + ataqueEnemigo)
    
    // EVALUACIÓN DEL COMBATE
    if (ataqueJugador == ataqueEnemigo) {
        // CASO 1: EMPATE - Ambos jugadores usaron el mismo ataque
        crearMensaje("🤝 ¡EMPATE! Ambos atacaron con " + ataqueJugador)
        crearMensaje("💙 Vidas restantes - Tú: " + vidasJugador + " | Enemigo: " + vidasEnemigo)
        
    } else if (
        (ataqueJugador == 'Puño' && ataqueEnemigo == 'Barrida') ||
        (ataqueJugador == 'Patada' && ataqueEnemigo == 'Puño') ||
        (ataqueJugador == 'Barrida' && ataqueEnemigo == 'Patada')
    ) {
        // CASO 2: JUGADOR GANA - Su ataque vence al del enemigo
        vidasEnemigo-- // Reducir vidas del enemigo
        spanVidasEnemigo.innerHTML = vidasEnemigo // Actualizar interfaz
        crearMensaje("🎉 ¡GANASTE LA RONDA! Tu " + ataqueJugador + " venció a la " + ataqueEnemigo + " del enemigo")
        crearMensaje("💙 Vidas restantes - Tú: " + vidasJugador + " | Enemigo: " + vidasEnemigo)
        
    } else {
        // CASO 3: ENEMIGO GANA - Su ataque vence al del jugador
        vidasJugador-- // Reducir vidas del jugador
        spanVidasJugador.innerHTML = vidasJugador // Actualizar interfaz
        crearMensaje("💀 ¡PERDISTE LA RONDA! La " + ataqueEnemigo + " del enemigo venció a tu " + ataqueJugador)
        crearMensaje("💙 Vidas restantes - Tú: " + vidasJugador + " | Enemigo: " + vidasEnemigo)
    }
    
    // Agregar separador visual entre rondas para mejor legibilidad
    crearMensaje("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
    
    // Verificar si el juego ha terminado (algún jugador llegó a 0 vidas)
    revisarVidas()
}

// ================================
// FUNCIONES DE GESTIÓN DE MENSAJES
// ================================

/**
 * Limpia mensajes antiguos para evitar acumulación excesiva
 * Mantiene solo los últimos 5 mensajes si hay más de 10
 */
function limpiarMensajes() {
    let sectionMensajes = document.getElementById('mensajes')
    let mensajes = sectionMensajes.querySelectorAll('p')
    
    // Si hay más de 10 mensajes, eliminar los más antiguos
    if (mensajes.length > 10) {
        for (let i = 0; i < mensajes.length - 5; i++) {
            mensajes[i].remove()
        }
    }
}

/**
 * Crea y muestra un mensaje de combate en la pantalla
 * @param {string} resultado - El mensaje a mostrar
 */
function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    
    // Configurar contenido y estilos del mensaje
    parrafo.innerHTML = resultado
    parrafo.style.margin = '8px 0'
    parrafo.style.padding = '5px'
    parrafo.style.borderLeft = '3px solid #4fd1c7'
    parrafo.style.paddingLeft = '10px'
    
    // Agregar mensaje al contenedor
    sectionMensajes.appendChild(parrafo)
    
    // Hacer scroll automático para mostrar el mensaje más reciente
    sectionMensajes.scrollTop = sectionMensajes.scrollHeight
}

/**
 * Crea y muestra el mensaje final del juego (victoria o derrota)
 * @param {string} resultadoFinal - El mensaje final a mostrar
 */
function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    
    // Configurar contenido y estilos especiales para el mensaje final
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
    
    // Agregar mensaje final al contenedor
    sectionMensajes.appendChild(parrafo)
    
    // Hacer scroll automático hacia el mensaje final
    sectionMensajes.scrollTop = sectionMensajes.scrollHeight
    
    // Deshabilitar botones de ataque ya que el juego terminó
    deshabilitarBotones()
}

// ================================
// FUNCIONES DE CONTROL DEL JUEGO
// ================================

/**
 * Verifica las vidas restantes y determina si el juego ha terminado
 * Si algún jugador llega a 0 vidas, declara al ganador
 */
function revisarVidas() {
    if (vidasEnemigo == 0) {
        // El jugador ganó el juego completo
        crearMensajeFinal("🎉 ¡GANASTE EL JUEGO! 🎉")
    } else if (vidasJugador == 0) {
        // El enemigo ganó el juego completo
        crearMensajeFinal("💀 ¡PERDISTE EL JUEGO! 💀")
    }
    // Si ambos jugadores tienen vidas restantes, el juego continúa
}

/**
 * Deshabilita todos los botones de ataque cuando el juego termina
 * También cambia su apariencia visual para indicar que están deshabilitados
 */
function deshabilitarBotones() {
    // Obtener referencias a todos los botones de ataque
    let botonPunio = document.getElementById('boton-punio')
    let botonPatada = document.getElementById('boton-patada')
    let botonBarrida = document.getElementById('boton-barrida')
    
    // Deshabilitar funcionalidad de los botones
    botonPunio.disabled = true
    botonPatada.disabled = true
    botonBarrida.disabled = true
    
    // Cambiar apariencia visual para indicar que están deshabilitados
    botonPunio.style.opacity = '0.5'
    botonPatada.style.opacity = '0.5'
    botonBarrida.style.opacity = '0.5'
}

window.addEventListener('DOMContentLoaded', () => {
    const botonVerReglas = document.getElementById('boton-ver-reglas');
    const botonCerrarReglas = document.getElementById('boton-cerrar-reglas');
    const seccionReglas = document.getElementById('reglas-juego');

    if (botonVerReglas && botonCerrarReglas && seccionReglas) {
        botonVerReglas.addEventListener('click', () => {
            seccionReglas.classList.remove('oculto');
        });

        botonCerrarReglas.addEventListener('click', () => {
            seccionReglas.classList.add('oculto');
        });
    }
});


/**
 * Reinicia completamente el juego recargando la página
 * Esta es la forma más sencilla de resetear todas las variables y el estado del juego
 */
function reiniciarJuego() {
    location.reload()
}

// ================================
// FUNCIONES UTILITARIAS
// ================================

/**
 * Genera un número entero aleatorio entre min y max (inclusivo)
 * @param {number} min - Valor mínimo posible
 * @param {number} max - Valor máximo posible
 * @returns {number} Número aleatorio entre min y max
 */
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// ================================
// INICIALIZACIÓN DEL JUEGO
// ================================

/**
 * Event listener que espera a que la página se cargue completamente
 * antes de ejecutar la función iniciarJuego()
 */
window.addEventListener("load", iniciarJuego);