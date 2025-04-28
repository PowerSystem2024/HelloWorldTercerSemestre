'use strict';
try {
   let x = 10; // Lo traemos con alt + flecha hacia arriba o hacia abajo
    miFunción();
    throw 'Mi error'; //Maneja tipo string

}
catch(error){ // Catchamos el error
    console.log(typeof(error));
}
finally {
    console.log('Termina la revisión de errores'); //Termina la revisión de errores
}


//La ejecución ahora continua...
console.log('Continuamos...'); // Esto no se llega a ver por que esta bloqueado

let resultado = 5;
try {

    //y = 5;
    if(isNaN(resultado)) throw 'No es un número'; // Si no es un número lanzamos un error
    else if(resultado === '') throw 'Es una cadena vacía'; // Si es una cadena vacía lanzamos un error
    else if (resultado <= 0) throw 'Es un número negativo'; // Si es un número negativo lanzamos un error
    else if(resultado >= 0) throw 'Es un número positivo'; // Si es un número positivo lanzamos un error.

} catch(error) {

    console.log(error); // Mostramos el error
    console.log(error.name); // Mostramos el nombre del error
    console.log(error.message); // Mostramos el mensaje del error
}
finally {   
    console.log('Termina la revisión de errores 2'); //Termina la revisión de errores
}