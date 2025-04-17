
package domain;

public class Persona {
    private final int idPersona;
    private static int contadorPersona;
    
    // Bloque de inicialización estático
    static{
        System.out.println("Ejecución de Bloque Estático");
        ++Persona.contadorPersona;
        //idPersona = 10; No es un atributo estático por esto tenemos un error
    }
    
    // Bloque de inicialización no estático (contexto dinámico)
    {
        System.out.println("Ejecución del Bloque No Estático");
        this.idPersona = Persona.contadorPersona++; // Incrementamos el atributo
    }
    
    // Los bloques de inicialización se ejecutan antes del constructor
    
    public Persona(){
        System.out.println("Ejecución del Constructor");
    }
    
    public int getIdPersona(){
        return this.idPersona;
    }
    
    
    
}
