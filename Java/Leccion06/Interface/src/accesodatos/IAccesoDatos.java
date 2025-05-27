
package accesodatos;

// una clase interface no hereda de la clase object
public interface IAccesoDatos {
    int MAX_REGISTRO = 10;  // Este atributo es public, final y static -> constante
    // no se puede dejar sin inicializar, hay que inicializarlo obligatoriamente
    // esto es porque un interface no tiene constructores
    // cualquier metodo de un interface es publico y abstracto
    
    // Metodo Insertar es abstracto y sin cuerpo
    void insertar();
    // no tiene llaves
    
    void listar();
    
    void actualizar();
    
    void eliminar();
    
}
