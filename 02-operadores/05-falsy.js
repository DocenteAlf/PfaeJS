//short-circuit (corta-circuito)

//en console.log
// [] || {}
// []
// [] && {}
// {}

// Falso
// false
// 0
// ''
// null
// undefined
// NaN

let nombre = "";
let username = nombre || "Anónimo";
console.log(username);
nombre = "Juan";
username = nombre || "Anónimo";
console.log(username);

function fn1() {
  console.log("funcion 1");
  return false;
}

function fn2() {
  console.log("funcion 2");
  return true;
}

let x = fn1() && fn2();
console.log(x);
