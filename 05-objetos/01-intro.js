//Programación clásica
/* let email = "correo@gmail.com";
let nombre = "Augusto";
let direccion = {
  calle: "Street 33",
  numero: 15,
}; */

//Programacion orientada a objetos Poo Oop
let user = {
  email: "correo@gmail.com",
  nombre: "Augusto",
  direccion: {
    calle: "Street 33",
    numero: 15,
  },
  activo: true,
  recuperarUser: function () {
    // funcion anónima
    document.write(user.email,"<br>");
    document.write(user.nombre,"<br>");
    document.write(user.direccion.calle,"<br>");
    document.write(user.direccion.numero,"<br>");
    document.write(user.activo,"<br>");
  },
};
user.recuperarUser()

