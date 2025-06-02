# 🗼 Torres de Hanoi - Visualización Interactiva

Este proyecto implementa el clásico juego de **Torres de Hanoi** con una interfaz visual animada, contador de movimientos y selección de discos. Ideal para fines educativos o recreativos.

---

## 🎮 ¿Cómo jugar?

1. Seleccioná la cantidad de discos (3 a 6).
2. Hacé clic en **Iniciar** para ver cómo se resuelve automáticamente.
3. El botón **Reiniciar** vuelve a generar los discos en la torre A.
4. El **contador de movimientos** se actualiza durante la animación.

---

## 🧠 ¿Qué es el problema de las Torres de Hanoi?

Es un problema matemático que consiste en mover una pila de discos desde una torre origen hasta una torre destino, utilizando una torre auxiliar, cumpliendo estas reglas:

- Solo se puede mover un disco a la vez.
- No se puede colocar un disco grande sobre uno más pequeño.

---

## 📁 Estructura del código

### `index.html`
Contiene la estructura del juego:
- `<select>` para elegir la cantidad de discos.
- Botones de control.
- 3 torres representadas por divs.

### `styles.css`
Aplica un estilo moderno y llamativo:
- Gradientes, sombras y animaciones suaves.
- Diseño responsive y visualmente atractivo.
- Discos con colores personalizados según su tamaño.

### `script.js`
Contiene la lógica principal:

#### Variables clave:
```js
let pasos = [];              // Guarda los movimientos calculados
let totalDisks = 3;          // Número de discos seleccionados
let animacionEnCurso = false;
let moveCounter = 0;         // Contador de movimientos
