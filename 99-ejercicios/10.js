/**
 * Crear array de longitud N, u que sus elementos sea numers de 1 hasta N
 * 
 */

let longitud=7;
function crearArray(n){
   if (n<=0) {return []}
   let array=[]
   for(contador=1; contador<=n; contador++){
      array[contador-1]=contador;
   }
   return array;
}
let resultado= crearArray(longitud);
console.log(resultado)

for(contador=0; contador<resultado.length; contador++){
   document.write(resultado[contador],"<br>");
}