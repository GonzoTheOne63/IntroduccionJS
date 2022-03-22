// forEach Se usa UNICAMENTE en ARRAYS se ejecuta una vez por cada elemento

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500, marca: 'PHILIPS'},
    { nombre: 'Televisión 50 Pulgadas', precio: 700, marca: 'SONY'},
    { nombre: 'Tablet', precio: 300, marca: 'SAMSUNG'},
    { nombre: 'Audifonos', precio: 200, marca: 'LOGITEC'},
    { nombre: 'Teclado', precio: 50, marca: 'LOGITEC'},
    { nombre: 'Celular', precio: 500, marca: 'LG'},
    { nombre: 'Bocinas', precio: 300, marca: 'SONY'},
    { nombre: 'Laptop', precio: 800, marca: 'HITACHI'}
];

/* // ForEach iterar 
carrito.forEach( function() {
    console.log('Una vez por cada elemento')
});
carrito.forEach( function(producto) {
    console.log(producto.precio),
    console.log(producto.nombre)
});
carrito.forEach(producto => console.log(producto.precio, producto.nombre)); */



// map generar nuevo arreglo
/* const arreglo2 = carrito.map( producto => `${producto.nombre} - ${producto.precio}`);

console.log(arreglo2); */


// ForEach
carrito.forEach((producto) => console.log(producto.nombre));

// Map
/* const arreglo2 = carrito.map((producto) => producto.nombre); */
const arreglo2 = carrito.map(producto => `${producto.nombre} - $${producto.precio} - ${producto.marca}`);


console.log(arreglo2);
