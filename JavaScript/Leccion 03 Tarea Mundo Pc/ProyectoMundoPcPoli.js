class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    getTipoEntrada() {
        return this._tipoEntrada;
    }

    getMarca() {
        return this._marca;
    }

    setTipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    setMarca(marca) {
        this._marca = marca;
    }
}

let dispositivoEntrada1 = new DispositivoEntrada("Lector DVD", "Samsung");
console.log(dispositivoEntrada1.getTipoEntrada());
console.log(dispositivoEntrada1.getMarca());
dispositivoEntrada1.setTipoEntrada("Pen Tablet");
dispositivoEntrada1.setMarca("Wacom");
console.log(dispositivoEntrada1.getTipoEntrada());
console.log(dispositivoEntrada1.getMarca());

class Raton extends DispositivoEntrada {
    static contadorRatones = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    toString() {
        return `Raton [ID: ${this._idRaton}, Tipo de Entrada: ${this._tipoEntrada}, Marca: ${this._marca}]`;
    }
}

let raton1 = new Raton("Ratón", "Logitech");
console.log(raton1.getTipoEntrada());
console.log(raton1.getMarca());
raton1.setTipoEntrada("Ratón");
raton1.setMarca("Genius");
console.log(raton1.getTipoEntrada());
console.log(raton1.getMarca());

class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    toString() {
        return `Teclado [ID: ${this._idTeclado}, Tipo de Entrada: ${this._tipoEntrada}, Marca: ${this._marca}]`;
    }
}

let teclado1 = new Teclado("Teclado", "RedDragon");
console.log(teclado1.getTipoEntrada());
console.log(teclado1.getMarca());
teclado1.setTipoEntrada("Teclado");
teclado1.setMarca("Logitech");
console.log(teclado1.getTipoEntrada());
console.log(teclado1.getMarca());

class Monitor {
    static contadorMonitores = 0;

    constructor(marca, tamanio) {
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamanio = tamanio;
    }

    getIdMonitor() {
        return this._idMonitor;
    }

    toString() {
        return `Monitor [ID: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamanio}]`;
    }
}

let monitor1 = new Monitor("Samsung", "20 pulgadas");
console.log(monitor1.getIdMonitor());
console.log(monitor1.toString());

class Computadora {
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    toString() {
        return `Computadora [ID: ${this._idComputadora}, Nombre: ${this._nombre}]\n` +
               `   ${this._monitor.toString()}\n` +
               `   ${this._teclado.toString()}\n` +
               `   ${this._raton.toString()}`;
    }
}

let computadora1 = new Computadora("Relámpago", monitor1, teclado1, raton1);
console.log(computadora1.toString());
class Orden {
    static contadorOrdenes = 0;

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    agregarComputadora(computadora) {
        this._computadoras.push(computadora);
    }

    mostrarOrden() {
        let detalleOrden = `Orden [ID: ${this._idOrden}]\n`;
        for (let computadora of this._computadoras) {
            detalleOrden += computadora.toString() + '\n';
        }
        console.log(detalleOrden);
    }
}

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.mostrarOrden();

let raton2 = new Raton("Ratón", "HP");
let teclado2 = new Teclado("Teclado", "Microsoft");
let monitor2 = new Monitor("LG", "24 pulgadas");

let computadora2 = new Computadora("Trueno", monitor2, teclado2, raton2);

let orden2 = new Orden();
orden2.agregarComputadora(computadora1);
orden2.agregarComputadora(computadora2);
orden2.mostrarOrden();
