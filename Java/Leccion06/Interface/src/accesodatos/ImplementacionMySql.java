

package accesodatos;

// Para implementar el comportamiento de una interface se utiliza la palabra
// reservada implements
public class ImplementacionMySql implements IAccesoDatos {

    // En realidad no lo esta sobreescribiendo, lo está implementando por primera vez
    @Override
    public void insertar() {
        System.out.println("Insertar desde MySql");
    }

    @Override
    public void listar() {
        System.out.println("Listar desde MySql");
    }

    @Override
    public void actualizar() {
        System.out.println("Actualizar desde MySql");
    }

    @Override
    public void eliminar() {
        System.out.println("Eliminar desde MySql");
    }
    
}
