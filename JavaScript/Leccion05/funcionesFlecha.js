// Definición de una función flecha
function miFuncion() {
    console.log("Hola Mundo desde una función normal");
}
miFuncion();


let myFunction = function() {
    console.log("Saludos desde la funcion anonima");
}

//Ahora vamos a crear una funcion flecha
let miFuncionFlecha = () => {
    console.log("Saludos desde la funcion flecha");
}
miFuncionFlecha(); // Llamamos a la función flecha
// Hay mas variantes para funciones flecha como vamos a ir viendo :

//lo hacemos en una linea
const saludar = () => console.log("Saludos a todos desde esta función flecha de una línea");
saludar(); 


//otro ejemplo
const saludar2 = () => {
    return "Saludos desde esta función flecha 2";
}
console.log(saludar2());


//Simplificamos la funcion anterior
const saludar3 = () => "Saludos desde esta función flecha 3";
console.log(saludar3());

//Continuamos con otro ejemplo:
const regrsaObjeto = () => ({nombre: "Juan", apellido: "Lara"}); // Regresamos un objeto
console.log(regrsaObjeto()); 

//Funciones flecha con parámetros
const funcionParametros = (mensaje) => console.log(mensaje); // Definimos la función flecha con un parámetro
funcionParametros("Saludos desde esta funcion con parámetros"); // Llamamos a la función flecha con un parámetro

//Una funcion clasica
const funcionParametrosClasica = function(mensaje) {
    console.log(mensaje); // Definimos la función clásica con un parámetro
}
funcionParametrosClasica("Saludos desde la funcion clasica"); // Llamamos a la función clásica con un parámetro

//Se pueden omitir los parentesis en la funcion flecha de la suiguiente manera:
const funcionConParametros = mensaje => console.log(mensaje); // Definimos la función flecha sin paréntesis
funcionConParametros("Otra forma de trabajar con funcion flecha"); // Llamamos a la función flecha sin paréntesis

//ahora vemos funciones fechas con varios parámetros:
//Podemos abrir la funcion y tener mas cosas dentro para trabajar:

const funcionParametros2 = (op1, op2 )=>{
    let resultado = op1 + op2; // Definimos la variable resultado
    return resultado;
}
console.log(funcionParametros2(3, 5)); // Llamamos a la función flecha con dos parámetros y mostramos el resultado