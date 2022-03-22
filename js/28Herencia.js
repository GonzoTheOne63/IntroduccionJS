// HerenciaEnJavaScript

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  formatearProducto() {
    return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
  }
  obtenerPrecio() {
    console.log(this.precio);
  }
}

const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto("Laptop", 300);

/* console.log(producto2);
console.log(producto3); */

// Herencia
class Libro extends Producto {  // Esta heredando desde "PRODUCTO" todo el constructor
    constructor(nombre, precio, isbn) {
        super(nombre, precio);  // Trae las propiedades que tiene el padre
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto() } y su ISBN es ${this.isbn}`;
    }  // tambien lo hereda desde PRODUCTO por eso va con"SUPER".
    obtenerPrecio() {
      super.obtenerPrecio();
      console.log('Y si hay en existencia');
    }
}

const libro = new Libro('JavaScript la Revolución', 120, '910313981389139');
console.log(libro.formatearProducto());
console.log(libro.obtenerPrecio());
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
