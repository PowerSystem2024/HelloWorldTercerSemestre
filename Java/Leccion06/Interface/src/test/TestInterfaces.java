
package test;

import accesodatos.*;

public class TestInterfaces {
    public static void main(String[] args) {
        // Se instancia desde la implementacion no desde la interface
        IAccesoDatos datos = new ImplementacionMySql();
        datos.listar();
    }
}
