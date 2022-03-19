// String o Cadenas de Texto

const tweet = "Bodas de plata Margarita & Gonzalo";
const producto = "Monitor de 20 Pulgadas";
const producto2 = "Monitor de 20\""; /* para mostrar ("-pulgadas)/
/* const producto2 = String("Monitor de 30 Pulgadas");
const producto3 = new String("Monitor de 50 Pulgadas"); */ // No son comunes


/* console.log(typeof producto); // Sirve para saber que tipo de objeto tengo (número, texto o bouleano)
console.log(typeof producto2);
console.log(typeof producto3); 
 */

console.log(tweet);
console.log(tweet.length);
console.log(producto);
console.log(producto.length); /* Devuelve la cantidad de carácteres */
console.log(producto2);

// IndexOf me ayuda a saber posición de una palabra en el código
console.log(tweet.indexOf("Margarita")); // posición 15 
console.log(producto.indexOf("Monitor")); // posición 0 1a letra=0
console.log(producto.indexOf("Tablet")); // -1 = no existe

// Includes revuelve "true" o "false"
console.log(tweet.includes("Margarita")); // true 
console.log(producto.includes("Monitor")); // true
console.log(producto.includes("Tablet")); // false
