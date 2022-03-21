// Métodos de propiedad funciones que mantienen la información en un solo objeto
const reproductor = {
    reproducir : function(id) { // Propiedad -> función
        console.log(`Reproduciendo Canción con el ID: ${id}`)
    },
    pausar: function() {
        console.log('"Pausando...>"')
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}`)
    },
}  // Todo dentro de las '{}' es el objeto

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la canción: ${id}`)
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('"Trios, Voces y Guitarras"');
reproductor.reproducirPlaylist('"Trios, Voces y Guitarras"');