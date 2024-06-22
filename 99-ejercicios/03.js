//construir una funcion que nos permita recuperar un elemento por su indice
// validar que sea mayor que 0 y que el elemento exista

function getbyIdx(arr, idx) {
  if (idx < 0 || arr.length <= idx) return "Elemento no existe";
  return arr[idx];
}
let resultado = getbyIdx([1, 2], 1);
document.write(resultado);
