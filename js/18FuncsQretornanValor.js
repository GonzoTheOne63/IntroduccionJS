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
  function calcularImpuesto(total) {
    return 1.15 * total;  // Asi calcula total de compra MÁS impuesos incluido
  }

  total = agregarCarrito(200);
  total = agregarCarrito(600);
  total = agregarCarrito(700);
  total = agregarCarrito(400);
 
  console.log(total);

  const totalApagar = calcularImpuesto(total);

  /* console.log(totalApagar); // Asi nos devuelve el TOTAL + IMPUESTO */
  console.log(`El total a pagar con impuestos es de: $${totalApagar}`);