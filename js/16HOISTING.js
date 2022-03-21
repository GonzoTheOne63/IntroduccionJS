// HOISTING JScript se ejecuta en 2 vueltas 1° registro y 2° ejecución
operacion();
function operacion() { // Inincia con 'FUNCTION' y sigue su NOMBRE
    console.log(10 / 10);  // CUERPO de la función
    console.log(10 * 10);
    console.log(10 + 10);
    console.log(10 - 10);
}



// EXPRESIÓN DE LA FUNCIÓN 
calculo();
const calculo = function() { 
    console.log( 3 + 3);
    console.log( 3 * 3);
    console.log( 3 / 3);
    console.log( 3 - 3);
}
