// Promise refleja un valor que puede o no estar
const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true;

    if(auth) {
        resolve('Usuario Autenticado'); // El PROMISE si se cumple
    } else {
      reject("No se pudo iniciar sesión"); // El PROMISE no se cumple
    }
});

/* console.log(usuarioAutenticado); */  // Asi me permite ver en consola el tipo de promise

usuarioAutenticado
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error)) // Aqui se ejecuta el 'resolve'

/* usuarioAutenticado
    .then( function(resultado){
      console.log(resultado)
    }) */  
    


// En los Promises existen 3 valores
// Pending : No se ha cumplido pero tampoco se ha rechazado
// Fulfilled : Ya se cumplio
// Rejected : Se ha rechazado o no se pudo cumplir