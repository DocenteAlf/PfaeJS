// 5 tipos de loop : while, do while, for, for in, for of.

// for(let propiedad in objeto){
//   expresiones
//}

// recorrer propiedades de un objeto
let user =  {
      id:1,
      nombre:"juan",
      edad: 24,    
};
for (let propiedad in user) {
  document.write(propiedad, user[propiedad],"<br>");
}
// no usar
let animales = ['foca','morsa','orca','ballena','tiburón']
for (let indice in animales) {
    document.write(indice, animales[indice],"<br>");
}