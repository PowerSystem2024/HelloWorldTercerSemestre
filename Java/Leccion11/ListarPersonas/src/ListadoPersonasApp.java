import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ListadoPersonasApp {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        // Definimos la lista fuera del ciclo while
        List<Persona> personas = new ArrayList<>();
        // Empezamos con el menú
        var salir = false;
        while(!salir){
            mostrarMenu();
            try{
                salir = ejecutarOperacion(entrada, personas);
            } catch(Exception e){
                System.out.println("Ocurrió un error: " + e.getMessage());
            }
            System.out.println();
        }
    } // Fin metodo main

    private static void mostrarMenu(){
        // mostramos las opciones
        System.out.print("""
                ******* Listado de Personas *******
                1. Agregar
                2. Listar
                3. Salir
                """);
        System.out.print("Ingresar una de las opciones: ");
    } // Fin del metodo mostrar menu

    private static boolean ejecutarOperacion(Scanner entrada, List<Persona> personas){
        var opcion = Integer.parseInt(entrada.nextLine());
        var salir = false;
        // Se revisa la opción ingresada a través de un switch
        switch (opcion){
            case 1 -> { // Agregar una persona a la lista
                System.out.print("Ingresar nombre: ");
                var nombre = entrada.nextLine();
                System.out.print("Ingresar número de teléfono: ");
                var tel = entrada.nextLine();
                System.out.print("Ingresar correo electrónico: ");
                var email = entrada.nextLine();
                // Se crea el objeto persona
                var persona = new Persona(nombre, tel, email);
                // Se agrega la persona a la lista
                personas.add(persona);
                System.out.println("La lista tiene: " + personas.size() + " elementos.");
            } // Fin del caso 1

            case 2 -> { // Listar a las personas
                System.out.println("Listado de Personas: ");
                // Mejoras con lambda y el metodo de referencia
                //personas.forEach((persona) -> System.out.println(persona));
                personas.forEach(System.out::println); // Metodo de referencia
            } // Fin del caso 2

            case 3 -> { // Salir del ciclo
                System.out.println("Hasta pronto!");
                salir = true;
            }// Fin del caso 3

            default -> System.out.println("Opción incorrecta: " + opcion);

        } // Fin del Switch

        return salir;

    } // Fin del metodo ejecutarOperacion

} // Fin de la clase ListadoPersonasApp