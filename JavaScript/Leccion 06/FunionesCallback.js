setTimeout(miFuncionCallback, 30000)

setTimeout(function(){console.log("Saludo asincrono 2")}, 40000)

setTimeout(() => console.log("Saludo asincrono 3"), 50000)

let reloj = () => {
    let fecha = new Date();
    console.log(` ${fecha.getHours}:${fecha.getMinutes}:${fecha.getSeconds}`);
}

setInterval(reloj, 1000) // Llamamos a la función reloj cada segundo