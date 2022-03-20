// "use strict"; // Correr JS en modo estricto
// Objetos
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}
/* Object.freeze(producto); // Impide agregar elementos
const newLocal = producto.imagen = 'imagen.jpg';

console.log(Object.isFrozen(producto)); */

Object.seal(producto);

producto.imagen = 'imagen.jpg';

console.log(Object.isSealed(producto));

producto.precio = 'NUEVO PRECIO'; 

delete producto.precio;

console.log(producto);

// FREEZE no permite ni agregar ni quitar
// SEAL no permite ni agregar ni quitar pero si modificar