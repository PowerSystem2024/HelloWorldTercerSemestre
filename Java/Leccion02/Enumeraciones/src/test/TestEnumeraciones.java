
package test;

import enumeraciones.Continentes;
import enumeraciones.Dias;

public class TestEnumeraciones {
    public static void main(String[] args) {
//        System.out.println("Dia 1: "+Dias.LUNES);//Las enumeraciones se tratan como cadenas
//        indicarDiaSemana(Dias.MARTES);
    //No se deven utilizar comillas, se acceden a traves del operador de punto
    
        System.out.println("Continentes N° 4: " + Continentes.AMERICA);
        System.out.println("N° de países en el 1er continente: "
                + Continentes.AFRICA.getPaises());
        System.out.println("N° de habitantes en el 1er continente: "
                + Continentes.AFRICA.getHabitantes());
        System.out.println("N° de países en el 2do continente: "
                + Continentes.EUROPA.getPaises());
        System.out.println("N° de habitantes en el 2do continente: "
                + Continentes.EUROPA.getHabitantes());
        System.out.println("N° de países en el 3er continente: "
                + Continentes.ASIA.getPaises());
        System.out.println("N° de habitantes en el 3er continente: "
                + Continentes.ASIA.getHabitantes());
        System.out.println("N° de países en el 4to continente: "
                + Continentes.AMERICA.getPaises());
        System.out.println("N° de habitantes en el 4to continente: "
                + Continentes.AMERICA.getHabitantes());
        System.out.println("N° de países en el 5to continente: "
                + Continentes.OCEANIA.getPaises());
        System.out.println("N° de habitantes en el 5to continente: "
                + Continentes.OCEANIA.getHabitantes());
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