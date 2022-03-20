const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}


// RestOperator o SpreadOperator
const nuevoProducto = {...producto, ...medidas};

console.log(producto);
console.log(nuevoProducto);