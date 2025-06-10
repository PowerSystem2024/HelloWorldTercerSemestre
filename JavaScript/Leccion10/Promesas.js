let miPromesa = new Promise((resolver, rechazar) => {
    let expression = true; // Lo traemos con alt + flecha hacia arriba o hacia abajo
    if (expression) {
       // resolver('Resolvio correctamente'); // Resolvemos la promesa
    } else {
       // rechazar('Se produjo un error'); // Rechazamos la promesa
    }
})

//miPromesa.then(
 //   valor => console.log(valor), // Si se resuelve la promesa, mostramos el valor
    // error => console.log(error) // Si se rechaza la promesa, mostramos el error
//);

//miPromesa
//    .then(valor => console.log(valor))
//    .catch(error => console.log(error));// Si se resuelve la promesa, mostramos el valor

//let promesa = new Promise( (Resolver) => {
//    setTimeout(() => {
//        Resolver('Saludos desde la promesa, callback, funcion flecha y setTimeout'); // Resolvemos la promesa después de 3 segundos
//    }, 3000); // Esperamos 3 segundos para resolver la promesa
//});

//promesa.then(valor => console.log(valor)); // Si se resuelve la promesa, mostramos el valor

async function miFuncionConPromesa(){
    return  'Saludos con promesa y asinc';
}

//miFuncionConPromesa().then(valor => console.log(valor)); // Si se resuelve la promesa, mostramos el valor
//async/await
async function funcionConPromesaYAwait() {
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await');
    });
    console.log(await miPromesa); // Esperamos a que se resuelva la promesa y mostramos el valor
}

//funcionConPromesaYAwait();

//Promesas, await, async y setTimeout
async function funcionConPromesaYAwaitYSetTimeout() {
    let miPromesa = new Promise(resolver => {
        setTimeout(() => {
            resolver('Saludos desde la promesa, callback, funcion flecha y setTimeout con await');
        }, 3000); // Esperamos 3 segundos para resolver la promesa
    });
    console.log(await miPromesa); // Esperamos a que se resuelva la promesa y mostramos el valor
}

