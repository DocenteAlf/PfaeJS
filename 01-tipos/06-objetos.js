// PERSONAJE DE TV
let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;

let personaje = {}; // objeto literal
console.log(personaje);

personaje = {
  nombre: "Tanjiro",
  anime: "Demon Slayer", // par llave-valor o propiedad
  edad: 16,
};
console.log(personaje);
document.write(personaje.nombre+"<br>");
document.write(personaje["anime"]+"<br>");

personaje.edad = 14;
console.log(personaje);

let llave = "edad";
personaje[llave] = 13;
console.log(personaje);

delete personaje.anime;
console.log(personaje);
