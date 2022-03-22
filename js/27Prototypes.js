// Prototypes 

// PROTOTYPES crea funciones que solo se utilizan en un objeto en específicos. 
function Cliente(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}
Cliente.prototype.formatearCliente = function() {
  return `El Cliente ${this.nombre} ${this.apellido}`;
}

function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}

Producto.prototype.formatearProducto = function() {
  return `El Producto ${this.nombre} tiene un costo de: $ ${this.precio}`;
}
const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('LapTop"', 300);
const cliente = new Cliente('Goin', 'Bar');

console.log(producto2);
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(cliente.formatearCliente());