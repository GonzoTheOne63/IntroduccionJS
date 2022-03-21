// Arrow Functions

/* const sumar2 = function(n1, n2){
    console.log(n1 + n2);
} */  // Forma normal
/* const aprendiendo = () => {  // Estructura básica de ARROW FUNCTION
    
} */

/* const sumar2 = (n1, n2) => console.log(n1 + n2); // Con ARROW FUNCTION

sumar2(5, 10);


const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`)

aprendiendo('JavaScript');
 */

// Array Methods con ARROW FUNCTION

/* const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']; */

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800}
];

// forEach con ARROW FUNCTION
/* meses.forEach( mes => {
    if(mes == 'Marzo') {
        console.log('"Marzo is OK"');
    }
}); */

let resultado;

// Some ideal para arreglo de objetos
resultado1 = carrito.some(producto => producto.nombre === 'Celular Pro'); // DEvueve false



// REDUCE normal
/* resultado1 = carrito.reduce(function(total, producto) { 
    return total + producto.precio
}, 0); */ // Forma normal
// REDUCE con ARROW FUNCTION
resultado2 = carrito.reduce((total, producto)  => total + producto.precio, 0); // Devuelve la suma de todos los productos


// FILTER con ARROW FUNCTION
resultado3 = carrito.filter(producto => producto.precio > 400); // Mayores a 400

resultado4 = carrito.filter(producto =>  producto.nombre !== 'Celular'); // Todos que no sean CELULAR

console.log(resultado);
console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
