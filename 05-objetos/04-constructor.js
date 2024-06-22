// {id:1, recuperarClacv: function(){}}
function Usuario() {
  //UpperCamelCase (PascalCase) para funciones constructoras
  this.id = 1;
  this.recuperarClave = function () { //métodos no funciones
    console.log("Recuperando clave ...");
  };
}

let usuario = new Usuario(); // si no ponemos new Usuario() no devuelve nada
console.log(usuario);
