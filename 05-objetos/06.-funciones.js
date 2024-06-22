function Usuario(nombre) {
  this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario;
let user = new U("Donatello");
console.log(user);

//funcion como argumento
function of(Fn, arg) {
  return new Fn(arg);
}

let user1 = of(Usuario, "Miguel Angel");
console.log(user1);

//funcion como return

function returned() {
  return function () {
    console.log("Retornando función");
  };
}

let saludo = returned();
saludo();
