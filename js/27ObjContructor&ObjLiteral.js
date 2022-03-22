// Programación Orientada a Objetos (POO

/** Object Literal */
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor es más dinámico
function Producto(nombre, precio, marca) {
  // El nombre de la "clase" (contenedor) debe estar con la 1er letra en mayúsculas
  this.nombre = nombre;
  this.precio = precio;
  this.marca = marca;
}

// Crear funciones que solo se utilizan en un objeto en especifico.
// Producto.prototype.formatearProducto = function() {
//     return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
// }

const producto2 = new Producto('Monitor Curvo de 49" ', 800, 'SONY'); /// Instancia de producto
const producto3 = new Producto('Laptop', 300, 'SONY');
const producto4 = new Producto('Celular', 400, 'MK');
const producto5 = new Producto('Laptop', 300, 'SONK');


console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);