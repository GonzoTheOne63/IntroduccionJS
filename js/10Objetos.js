// Objetos
const nombreProducto = "Monitor 20 Pulgadas";
const precio = 300;
const disponible = true;

const producto = {
    nombreProducto : "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,   
}
/* console.log(producto);

console.log(producto.nombreProducto);
console.log(producto.disponible);
console.log(producto.precio);

console.log(producto["nombreProducto"]);
console.log(producto["precio"]);
console.log(producto["disponible"]); */

// Agregar nuevas propiedades
producto.imagen = 'imagen.jpg'; 

// Eliminar propiedades e usa "delete"
delete producto.disponible;
console.log(producto);