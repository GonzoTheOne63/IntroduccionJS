// Estructuras de Control. Sirven para VALIDAR DATOS

const puntaje = 1000;  // '='Asignar variable

if(puntaje == 1000) {  // '==' Comparación '===' Comparador más ESTRICTO 
    console.log('Si, el puntaje es 1000');
    
} else {
    console.log('Si el puntaje es 1000');
}

const puntaje2 = 100;  // '='Asignar variable

if(puntaje2 == 1000) {  // '==' Comparación '===' Comparador más ESTRICTO 
    console.log('No, el puntaje no es 1000');
    
} else {
    console.log('¡Ánimo!,Tu puedes lograrlo');
}



const efectivo = 1000;
const carrito = 800;

if( efectivo > carrito ) {
    console.log('El Usuario puede pagar');
} else {
    console.log('Fondos Insuficientes');
}

const efectivo2 = 750;
const carrito2 = 800;

if( efectivo2 > carrito2 ) {
    console.log('El Usuario puede pagar');
} else {
    console.log('Fondos Insuficientes');
}


const rol = 'ADMINISTRADOR';

if(rol === 'ADMINISTRADOR') {
    console.log('Acceso a todo el sistema');
} else if(rol === 'EDITOR') {
    console.log('Eres editor, puedes entrar pero no puedes hacer mucho')
} else {
    console.log('No tienes acceso')
}

const rol2 = 'EDITOR';

if(rol2 === 'ADMINISTRADOR') {
    console.log('Acceso a todo el sistema');
} else if(rol2 === 'EDITOR') {
    console.log('Eres editor, ACCESO LIMITADO')
} else {
    console.log('No tienes acceso')
}

const rol3 = 'VISITANTE';

if(rol3 === 'ADMINISTRADOR') {
    console.log('Acceso a todo el sistema');
} else if(rol3 === 'VISITANTE') {
    console.log("SOLO INTERNET");
} else {
    console.log("SIN ACCESOS");
}
