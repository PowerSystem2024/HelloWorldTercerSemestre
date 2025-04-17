
package test;

import enumeraciones.Dias;


public class TestEnumeraciones {
    public static void main(String[] args) {
        System.out.println("Dia 1: "+Dias.LUNES);//Las enumeraciones se tratan como cadenas
        indicarDiaSemana(Dias.MARTES);
    //No se deven utilizar comillas, se acceden a traves del operador de punto    
    }
    public static void indicarDiaSemana(Dias dias){
        switch(dias){
            case LUNES:
                System.out.println("Primer dia de la semana: ");
                break;
            case MARTES:
                System.out.println("Segundo dia de la semana: ");
                break;
            case MIERCOLES:
                System.out.println("Tercero dia de la semana: ");
                break;
            case JUEVES:
                System.out.println("Cuarto dia de la semana: ");
                break;
            case VIERNES:
                System.out.println("Quinto dia de la semana: ");
                break;
            case SABADO:
                System.out.println("Sexto dia de la semana: ");
                break;
            case DOMINGO:
                System.out.println("Septimo dia de la semana: ");
                break;
            default:
                System.out.println("Dia no valido. Por favor ingrese un dia correcto.");
                break;
        }
    }
        
    
}
