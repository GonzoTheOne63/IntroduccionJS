// Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];  // Arreglo plano

const carrito = [  // Array con objetos []
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800}
];

// forEach se ejecuta una vez por cada elemento en el array
/* meses.forEach(function(mes) {
    console.log(mes);
}); */

meses.forEach(function(mes) {
  // Aqui aplica el FILTER
  if (mes == "Marzo") {
    console.log("Marzo si existe");
  }
});  

// INCLUDES funciona para ARRAY plano no para ARRAA de objetos
/* let resultado = meses.includes('Diciembre'); 
let resultado1 = meses.includes('Enero'); 
    console.log(resultado);
    console.log(resultado2); */

// SOME ideal para arreglo de objetos
resultado = carrito.some(function(producto) {
    /* return producto.nombre === 'Celular' */  // Devuelve truel
    return producto.nombre === 'Celular PRO' // Devuelve false
});
 
console.log(resultado);

// REDUCE va a devolver la suma del 'producto' + 'precio'
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0); // Solo funciona cuando inicia con '0'

resultado = carrito.reduce((total, producto) => total + producto.precio, 0); // ARROWFUNCTION

console.log(resultado);


// FILTER el más útil devuelve solo lo que yo solicite
resultado = carrito.filter(function(producto) {
    /* return producto.precio > 400 */  // Que sea '>' MAYOR QUE
    return producto.precio < 200 // Que sea '<' MENOR QUE
});

console.log(resultado);

resultado = carrito.filter(function(producto) {
    /* return producto.nombre === 'Celular' */ // Que sea '===' SOLO QUE
    return producto.nombre !== 'Celular' // '!==' NEGAR para devolver lo que NO ES
}); 



console.log(resultado);