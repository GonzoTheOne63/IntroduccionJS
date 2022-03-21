/* function sumar(n1, n2) {
  return n1 + n2;
}  


const resultado = sumar(2, 3);
  // Nombrar los parámetros a criterio
  console.log(resultado);

 */

  let total = 0;

  function agregarCarrito(precio) {
    return total += precio;
  }

  total = agregarCarrito(200);
  total = agregarCarrito(600);
  total = agregarCarrito(700);
  total = agregarCarrito(400);
 
  console.log(total);