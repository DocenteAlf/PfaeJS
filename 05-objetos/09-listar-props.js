const punto = {
  x: 10,
  y: 15,
  dibujar() {
    // es lo mismo que  dibujar: function () {
    console.log("Dibujando");
  },
};

//delete punto.dibujar;
//punto.dibujar();// 09-listar-props.js:11 Uncaught TypeError: punto.dibujar is not a function

if ("dibujar" in punto) {
  punto.dibujar();
} else {
  console.log("punto no tiene el métodp dibujar");
}

console.log(Object.keys(punto)); //metodos de clase o estaticos

for (let llave of Object.keys(punto)) {
  //metodos de clase o estaticos
  console.log(llave, punto[llave]);
}

for (let entry of Object.entries(punto)) {
  //metodos de clase o estaticos
  console.log(entry);
}

for (let llave in punto) {
  console.log(llave, punto[llave]);
}
