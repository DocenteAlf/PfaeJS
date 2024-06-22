// 5 tipos de loop : while, do while, for, for in, for of.

// while(condicion){
//   expresiones
//}

// cuales son los pares hasta 10
let contador = 0;
while (contador < 10) {
  if (contador % 2 === 0) {
    document.write("Número par: ", contador);
  }
  //contador++;
}
document.write("fuera del while");
