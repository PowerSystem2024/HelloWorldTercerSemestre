// Agregar en la función seleccionarPersonajeJugador() una estructura de control que identifique el personaje que se ha elegido y a través del alert() mostrar nuestra selección

// Función que maneja la selección del personaje del jugador
function seleccionarPersonajeJugador() {
    // Obtiene el input radio que está seleccionado
    let personajeSeleccionado = document.querySelector('input[name="personaje"]:checked');

    //'input[name="personaje"]:checked':
    //Es un selector compuesto que busca:
    // Un elemento <input>
    // Que tenga el atributo name="personaje"
    // Y que esté seleccionado (:checked)
    
    // Verifica si se seleccionó algún personaje
    if (personajeSeleccionado) {
        // Obtiene el id del personaje seleccionado
        let nombrePersonaje = personajeSeleccionado.id;
        // Muestra un mensaje con el personaje seleccionado
        alert('Seleccionaste a ' + nombrePersonaje);
    } else {
        // Muestra mensaje de error si no se seleccionó ningún personaje
        alert('Por favor selecciona un personaje');
    }
}

// Obtiene el botón de selección de personaje
let botonPersonajeJugador = document.getElementById("boton-personaje");
// Agrega el event listener para manejar el click en el botón
botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);