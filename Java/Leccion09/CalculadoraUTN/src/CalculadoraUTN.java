import java.util.Scanner;

public class CalculadoraUTN {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        while (true){ // Ciclo infinito
            System.out.println("******* Aplicación Calculadora *******");
            mostrarMenu();
            try {
                var operacion = Integer.parseInt(entrada.nextLine());
                if (operacion >= 1 && operacion <= 4) {

                    ejecutarOperacion(operacion, entrada);

                } // Fin del if
                else if (operacion == 5) {
                    System.out.println("Hasta pronto...");
                    break; // Rompe el ciclo y sale
                } else {
                    System.out.println("Opción Errónea: " + operacion);
                }
                // Salto de Línea antes de repetir menú
                System.out.println();
            } catch (Exception e) { // Fin Try, Comienza Catch
                System.out.println("Ocurrió un error: " + e.getMessage());
                System.out.println();
            }
        } // Fin while

        entrada.close();

    } // Fin de main

    private static void mostrarMenu(){
        // Mostramos el menú
        System.out.println("""
                    1. Suma
                    2. Resta
                    3. Multiplicación
                    4. División
                    5. Salir
                    """);
        System.out.print("Ingresar opción: ");
    } // Fin metodo mostrarMenu

    private static void ejecutarOperacion(int operacion, Scanner entrada){
        System.out.print("Ingresar valor para operando 1: ");
        var operando1 = Double.parseDouble(entrada.nextLine());
        System.out.print("Ingresar valor para operando 2: ");
        var operando2 = Double.parseDouble(entrada.nextLine());
        double resultado;

        switch (operacion) {
            case 1 -> { // Suma
                resultado = operando1 + operando2;
                System.out.println("Resultado de la suma es: " + resultado);
            }
            case 2 -> { // Resta
                resultado = operando1 - operando2;
                System.out.println("Resultado de la resta es: " + resultado);
            }
            case 3 -> { // Multiplicación
                resultado = operando1 * operando2;
                System.out.println("Resultado de la multiplicación es: " + resultado);
            }
            case 4 -> { // División
                resultado = operando1 / operando2;
                System.out.println("Resultado de la división es: " + resultado);
            }
            default -> System.out.println("Operación Errónea: " + operacion);
        } // Fin switch
    } // Fin metodo ejecutarOperacion

} // Fin de clase
