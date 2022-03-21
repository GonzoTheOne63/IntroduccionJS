// ForLoop EJ$CUTA el código mientras la condición sea verdadera

/* console.log(1);
console.log(2);
console.log(3);
console.log(4); */ // Para evitar esto decurro a For Loop

/* for(let i = 0; i < 11; i++ ) {  // 'i' = ÍNDICE Comienza en 0, busca menor a 10 y va a incrementar de 1 a 1
     console.log(i);
} */

for(let i = 1; i <= 100; i++ ) {
     if(i % 2 === 0 ) {
        console.log(`El Número ${i} es PAR`);
} else {
         console.log(`El Número ${i} es IMPAR`);
     }
}

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

for(let i = 0; i < carrito.length; i++ ) {  // 'length' devuelve cantidad
    console.log( carrito[i].nombre,);    
}
for(let i = 0; i < carrito.length; i++ ) {  // 'length' devuelve cantidad
    console.log( carrito[i].precio);    
}
