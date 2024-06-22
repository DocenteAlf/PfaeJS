/**
 * crear un algoritmo que devuelva el numero menor y mayor de un array
 */

let array = [2, 5, 7, 15, -5, -100, 55];
function getMenorMayor(arr) {
  let menor = arr[0];
  let mayor = arr[0];
  for (elemento of arr) {
    menor = menor < elemento ? menor : elemento;
    mayor = mayor > elemento ? mayor : elemento;
  }
  return [menor, mayor];
}
let numeros = getMenorMayor(array);
document.write(numeros[0],"<br>",numeros[1]);
