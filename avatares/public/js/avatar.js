// Agregar en la función seleccionarPersonajeJugador() una estructura de control que identifique el personaje que se ha elegido y a través del alert() mostrar nuestra selección

function iniciarJuego() {
    // Obtiene el botón de selección de personaje
    let botonPersonajeJugador = document.getElementById("boton-personaje");
    // Agrega el event listener para manejar el click en el botón
    botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);
}

// Función que maneja la selección del personaje del jugador
function seleccionarPersonajeJugador() {
    //  Obtiene el input radio que está seleccionado
    // let personajeSeleccionado = document.querySelector('input[name="personaje"]:checked');

    // 'input[name="personaje"]:checked':
    //  Es un selector compuesto que busca:
    //  Un elemento <input>
    //  Que tenga el atributo name="personaje"
    //  Y que esté seleccionado (:checked)
    
    //  Verifica si se seleccionó algún personaje
    // if (personajeSeleccionado) {
    //      Obtiene el id del personaje seleccionado
    //     let nombrePersonaje = personajeSeleccionado.id;
    //      Muestra un mensaje con el personaje seleccionado
    //     alert('Seleccionaste a ' + nombrePersonaje);
    // } else {
    //      Muestra mensaje de error si no se seleccionó ningún personaje
    //     alert('Por favor selecciona un personaje');
    // }

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

// Función para generar un número aleatorio entre min y max
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);