
package test;

import static aritmetica.Aritmetica.division;
import excepciones.OperacionException;

public class TestExcepciones {
    public static void main(String[] args) {
        //int resultado = 10/0;
        //System.out.println("resultado = " + resultado);
        int resultado = 0;
        try{
            resultado = division(10, 0);
        } catch(OperacionException e){
            System.out.println("Ocurrió un error de tipo OperacionException");
            System.out.println(e.getMessage());
        } catch(Exception e){
            System.out.println("Ocurrió un Error");
            e.printStackTrace(System.out); // Se conoce como la pila de excepciones
            System.out.println(e.getMessage());
        }
        finally{
            System.out.println("Se reviso la división entre cero.");
        }
        System.out.println("La variable de resultado tiene como valor: " + resultado);
    }
}
