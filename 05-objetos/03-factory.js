/* let user = {
  id: 1,
  email: "correo@gmail.com",
  nombre: "Augusto",
  activo: true,
  recuperarClave: function () {
    console.log("Recuperando clave");
  },
}; */

/* let user1 = {
   id:2,
   email: "rafa@gmail.com",
   nombre: "Rafa",
   activo: false,
   recuperarClave: function () {
      console.log("Recuperando clave");
   },
}; */

//Para evitar esta repetición usamos las factory functions

function crearUsuario(nombre, email) {
  return {
    email, // equivale a email:email,
    nombre,
    activo: true,
    recuperarClave: function () {
      console.log("Recuperando clave");
    },
  };
}

let user1 = crearUsuario("Rafa","Rafa@gmail.com");
let user2 = crearUsuario("Ramón","Ramóm@gmail.com");

console.log("user1 ", user1);
console.log("user2 ", user2);