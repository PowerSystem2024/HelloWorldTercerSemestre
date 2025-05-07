

package test;

import domain.*;


public class TestSobreescritura {
    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("Juan", 10000);
        imprimr(empleado1);
        //System.out.println("empleado1 = " + empleado1.obtenerDetalles());
        Gerente gerente1 = new Gerente("José", 5000, "Sistemas");
        imprimr(gerente1);
        //System.out.println("gerente1 = " + gerente1.obtenerDetalles());
    }
    
    public static void imprimr(Empleado empleado){
        System.out.println("empleado = " + empleado.obtenerDetalles());
    }
    
}
