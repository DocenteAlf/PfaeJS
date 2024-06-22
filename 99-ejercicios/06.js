/**
 * crear un algoritmo que devuelva la cantidad de números positivos de un array
 */

let array = [2, 5, 7, 15, -5, -100, 55];
function cuantosPositivos(arr) {
   let acumulador=0;
   for(elemento of arr){
      if(elemento>=0) acumulador++;
   }
   return acumulador;
}
let resultado = cuantosPositivos(array);
document.write(resultado);