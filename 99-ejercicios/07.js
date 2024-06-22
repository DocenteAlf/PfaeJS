// crear algoritmo que devuelva el precio del producto mas impuestos

function precioCompleto(precio,impuesto){
   return precio * (1+impuesto/100);
}
let resultado= precioCompleto(19.90,15);
document.write(resultado);