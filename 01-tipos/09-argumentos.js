function suma(a) { // parámetro
  
  return a + 2;
}

document.write(suma(5)+"<br>"); // argumento

function suma2(a, b) { // parámetros
  
  return a + b;
}

document.write(suma2(5,6)+"<br>"); // argumentos

document.write(typeof suma+"<br>");
document.write(typeof suma2+"<br>");

function suma3(){
   return arguments;
}

console.log(suma3(1,2,3,4,5));


