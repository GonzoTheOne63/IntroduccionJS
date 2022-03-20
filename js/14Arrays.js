// Arreglos o Arrays

const numeros = [70,20,15,40,50]; // Los "[]" demuestran ser Array
console.table(numeros);


const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril');
console.log(meses);
const meses2 = ['Mayo', 'Junio', 'Julio', 'Agosto'];
console.table(meses2);

const arreglo = ["Hola", 10, true, "si", null, {nombre: "Goin", ocupacion: "Programador"}, [1, 2, 3, 4, 5]];
console.log(arreglo);

// Acceder a los valores de un arreglo
// console.log(numeros[0]);
console.log(numeros[4]);
console.log(numeros[2]);
console.log(numeros[5]);
console.log(numeros[1]);

// Conocer la extensión de un arreglo
console.log(meses.length);

numeros.forEach( function(numero) {
   console.log(numero);
}); // forEach automatiza la busqueda

numeros.push(60,70,80); // Al final del arreglo
numeros.unshift(-10,-20,-30); // al inicio del arreglo

console.table(numeros);

/* const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']; */

// meses.pop(); // elimina el último elemento
// meses.shift(); // elimina el primer elemento

// meses.splice(2, 1);
// console.table(meses);

// RestOperator o Spread Operator

const nuevoArreglo = ['Junio', ...meses];
console.log(nuevoArreglo);
