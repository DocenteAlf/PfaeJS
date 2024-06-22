/**
 * crear algoritmo que tome un array de objetos y
 * devuelva un array de pares
 */

let array = [
  {
    id: 1,
    name: "Nicolas",
  },
  {
    id: 2,
    name: "Felipe",
  },
  {
    id: 3,
    name: "Juan Carlos",
  },
];

/**
 * let pares = [
 *    [1,{id:1,name:"Nicolas"}],
 *    [2,{id:2,name:"Felipe"}],
 *    [3,{id:3,name:"Juan Carlos"}],
 * ];
 */

function toPairs(array) {
  let pares = [];
  for (indice in array) {
   let elemento = array[indice]
    pares[indice] = [elemento.id, elemento];
  }
  return pares;
}

let resultado = toPairs(array);
console.log(resultado);
document.write(resultado[0][0]+ " -> ")
document.write(resultado[0][1].id+ " , ")
document.write(resultado[0][1].name)
document.write("<br>")
document.write(resultado[1][0]+ " -> ")
document.write(resultado[1][1].id+ " , ")
document.write(resultado[1][1].name)
document.write("<br>")
document.write(resultado[2][0]+ " -> ")
document.write(resultado[2][1].id+ " , ")
document.write(resultado[2][1].name)

