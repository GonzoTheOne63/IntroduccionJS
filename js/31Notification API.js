
const boton = document.querySelector('#boton');
boton.addEventListener('click', function() {
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es ${resultado}`) )
})



if(Notification.permission == 'granted') {
    new Notification("Alerta de notificación", {
      icon: "img/Maggy1.png",
      body: "Código con Goin, los mejores tutoriales. No dejes de visitarnos"
    })
}

// Notification API