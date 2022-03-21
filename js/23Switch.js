// SWITCH

const metodoPago = 'tarjeta';

switch(metodoPago) {
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'cheque':
        console.log('El usuario va a pagar con cheque, revisaremos los fondos primero');
        break;
    case 'efectivo':
        console.log('Pago realizado en cash');
        break;
    default:
        console.log('Aún no has pagado');
        break;
}
const tipoUsuario = 'YO';

switch (tipoUsuario) {
  case "ADMINISTRADOR":
    console.log("ACCESO TOTAL");
    break;
  case "EDITOR":
    console.log("ACCESO CON PRIVILEGIOS LIMITADOS");
    break;
  case "VISITANTE":
    console.log("ACCESO SOLO A INTERNET");
    break;
  default:
    console.log("DEBES VALIDAR ACCESO");
    break;
}
