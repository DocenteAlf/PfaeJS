/**
 * crear algoritmo que tome un array de pares y
 * devuelva un array de objetos
 */

 let pares = [
    [1,{name:"Nicolas"}],
    [2,{name:"Felipe"}],
    [3,{name:"Juan Carlos"}],
 ];

/* let array = [
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
 ]; */
 

 
 function toCollection(array) {
   let coleccion=[];
   for (indice in array){
      elemento=array[indice];
      coleccion[indice]=elemento[1];
      coleccion[indice].id=elemento[0];
   }
   return coleccion;
 }
 
 let resultado = toCollection(pares);
 console.log(resultado);
 document.write(resultado[0].id + " , ")
 document.write(resultado[0].name+"<br>")
 document.write(resultado[1].id + " , ")
 document.write(resultado[1].name+"<br>")
 document.write(resultado[2].id + " , ")
 document.write(resultado[2].name+"<br>")