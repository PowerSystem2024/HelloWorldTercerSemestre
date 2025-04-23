
package mundopc;

import ar.com.system2023.mundopc.*;

public class MundoPC {
    public static void main(String[] args) {
        Monitor monitorHP = new Monitor("HP", 13); // Importar la clase
        Teclado tecladoHP = new Teclado("Bluetooth", "HP");
        Raton ratonHP = new Raton("Bluetooth", "HP");
        Computadora computadoraHP = new Computadora("Computadora HP", monitorHP, tecladoHP, ratonHP);
        
        // Creamos otros objetos de diferente marca
        Monitor monitorGamer = new Monitor("Gamer", 32);
        Teclado tecladoGamer = new Teclado("Bluetooth", "Gamer");
        Raton ratonGamer = new Raton("Bluetooth", "Gamer");
        Computadora computadoraGamer = new Computadora("Computadora Gamer", monitorGamer, tecladoGamer, ratonGamer);
        
        Orden orden1 = new Orden(); // Inicializamos el arreglo vacío
        Orden orden2 = new Orden(); // Una nueva lista para el objeto orden2
        orden1.agregarComputadora(computadoraHP);
        orden1.agregarComputadora(computadoraGamer);
        
        Computadora computadoraVarias = new Computadora("Computadora de diferentes marcas", monitorHP, tecladoGamer, ratonHP); 
        orden2.agregarComputadora(computadoraVarias);
        
        orden1.mostrarOrden();
        orden2.mostrarOrden();
        
        // Crear más objetos de tipo computadora con todos sus elementos
        // Completar una lista en el objeto orden1 que llegue a los 10 elementos 
        // Probar de esta manera los métodos al máximo rendimiento
        
        Monitor monitor1 = new Monitor("Dell", 24);
        Teclado teclado1 = new Teclado("USB", "Dell");
        Raton raton1 = new Raton("USB", "Dell");
        Computadora computadora1 = new Computadora("Computadora Dell", monitor1, teclado1, raton1);

        Monitor monitor2 = new Monitor("Asus", 27);
        Teclado teclado2 = new Teclado("Bluetooth", "Asus");
        Raton raton2 = new Raton("Bluetooth", "Asus");
        Computadora computadora2 = new Computadora("Computadora Asus", monitor2, teclado2, raton2);

        Monitor monitor3 = new Monitor("Lenovo", 21);
        Teclado teclado3 = new Teclado("USB", "Lenovo");
        Raton raton3 = new Raton("USB", "Lenovo");
        Computadora computadora3 = new Computadora("Computadora Lenovo", monitor3, teclado3, raton3);

        Monitor monitor4 = new Monitor("Acer", 19);
        Teclado teclado4 = new Teclado("Bluetooth", "Acer");
        Raton raton4 = new Raton("Bluetooth", "Acer");
        Computadora computadora4 = new Computadora("Computadora Acer", monitor4, teclado4, raton4);

        Monitor monitor5 = new Monitor("MSI", 34);
        Teclado teclado5 = new Teclado("USB", "MSI");
        Raton raton5 = new Raton("USB", "MSI");
        Computadora computadora5 = new Computadora("Computadora MSI", monitor5, teclado5, raton5);

        Monitor monitor6 = new Monitor("Samsung", 28);
        Teclado teclado6 = new Teclado("Bluetooth", "Samsung");
        Raton raton6 = new Raton("Bluetooth", "Samsung");
        Computadora computadora6 = new Computadora("Computadora Samsung", monitor6, teclado6, raton6);

        Monitor monitor7 = new Monitor("LG", 23);
        Teclado teclado7 = new Teclado("USB", "LG");
        Raton raton7 = new Raton("USB", "LG");
        Computadora computadora7 = new Computadora("Computadora LG", monitor7, teclado7, raton7);

        Monitor monitor8 = new Monitor("BenQ", 29);
        Teclado teclado8 = new Teclado("Bluetooth", "BenQ");
        Raton raton8 = new Raton("Bluetooth", "BenQ");
        Computadora computadora8 = new Computadora("Computadora BenQ", monitor8, teclado8, raton8);

        Monitor monitor9 = new Monitor("Philips", 22);
        Teclado teclado9 = new Teclado("USB", "Philips");
        Raton raton9 = new Raton("USB", "Philips");
        Computadora computadora9 = new Computadora("Computadora Philips", monitor9, teclado9, raton9);

        Monitor monitor10 = new Monitor("ViewSonic", 26);
        Teclado teclado10 = new Teclado("Bluetooth", "ViewSonic");
        Raton raton10 = new Raton("Bluetooth", "ViewSonic");
        Computadora computadora10 = new Computadora("Computadora ViewSonic", monitor10, teclado10, raton10);

        orden1.agregarComputadora(computadora1);
        orden1.agregarComputadora(computadora2);
        orden1.agregarComputadora(computadora3);
        orden1.agregarComputadora(computadora4);
        orden1.agregarComputadora(computadora5);
        orden1.agregarComputadora(computadora6);
        orden1.agregarComputadora(computadora7);
        orden1.agregarComputadora(computadora8);
        
        // Al límite máximo de 10 computadoras
        orden1.mostrarOrden();
        
        // Límite superado
        orden1.agregarComputadora(computadora9);
        orden1.agregarComputadora(computadora10);

        orden1.mostrarOrden();



        
    }
}
