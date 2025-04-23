# Proyecto MundoPC - Tercer Semestre Leccion 03-POO

## Polimorfismo aplicado

Se aplica polimorfismo a través de la clase `DispositivoEntrada`, que es la clase padre de `Raton` y `Teclado`. Gracias a esto:

- `Raton` y `Teclado` heredan los mismos atributos y métodos.
- Podemos tratarlos como un solo tipo dentro de la clase `Computadora`, sin importar cuál se use.

### Beneficios:

- Código más reutilizable y escalable.
- Permite agregar nuevos dispositivos fácilmente, manteniendo la compatibilidad.

---

##  Clase Orden

La clase `Orden` maneja múltiples objetos de tipo `Computadora`, que a su vez contienen objetos polimórficos (`Raton`, `Teclado`). Aunque `Orden` no usa polimorfismo directamente, se beneficia de la estructura generalizada de los objetos.

---

##  Estructura de clases

- `DispositivoEntrada` (clase base)
  - `Raton`
  - `Teclado`
- `Monitor`
- `Computadora`
- `Orden`

---

## Instrucciones para prueba

1. Ejecutá el archivo `.js` en el navegador o con Node.js.
2. Observá la salida en consola.
3. Se muestran dos órdenes con computadoras y sus componentes.

---

Grupo HelloWorld : *[Joaquin Peralta, Carlos Ariel Diaz Cattoni, Juan Bisaguirre]*
