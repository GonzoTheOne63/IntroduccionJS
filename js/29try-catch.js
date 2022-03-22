// try&catch 
// Si JScript detecta un error ya no se ejecuta con con try & catch sigue ejecutando
const numero1 = 20;
const numero3 = 30;


console.log(numero1);

try {  // "tray" = intenta
    console.log(numero2);
} catch (error) {  // "catch" como un "dime donde está el error"
    console.log(error);
}

console.log(numero3);

// Se deben usar en situaciones muy críticas