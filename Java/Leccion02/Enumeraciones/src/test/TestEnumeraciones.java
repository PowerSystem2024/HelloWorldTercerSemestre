
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
                System.out.println("Primer día de la semana.");
                break;
            case MARTES:
                System.out.println("Segundo día de la semana.");
                break;
            case MIERCOLES:
                System.out.println("Tercero día de la semana.");
                break;
            case JUEVES:
                System.out.println("Cuarto día de la semana.");
                break;
            case VIERNES:
                System.out.println("Quinto día de la semana.");
                break;
            case SABADO:
                System.out.println("Sexto día de la semana.");
                break;
            case DOMINGO:
                System.out.println("Séptimo día de la semana.");
                break;
            default:
                System.out.println("Dia no válido. Por favor, ingrese un día correcto.");
                break;
        }
    }
}