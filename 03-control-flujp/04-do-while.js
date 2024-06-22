// 5 tipos de loop : while, do while, for, for in, for of.

// do{
//   expresiones
//}while(condicion)

// cuales son los pares hasta 10
let contador = 10;
do {
  if (contador % 2 === 0) {
    document.write("Número par: ", contador);
  }
  contador++;
}while (contador < 10)

