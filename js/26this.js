// This HACE referencia hacia el objeto que se va a llamar
const reservacion = {  // =ObjetLiteral
    nombre: 'Goin',
    apellido: 'Bar',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de $${this.total}`);
    }
}
reservacion.informacion();


const reservacion2 = {
    nombre: 'Magie',
    apellido: 'De Bar',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de $${this.total}`);
    }
}

reservacion.informacion();
reservacion2.informacion();