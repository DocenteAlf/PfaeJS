//switch (valor){
//   case valor1:
//       acciones;
//       break;
//   case valor2:
//       acciones;
//       break
//   defaul:
//       acciones;
//}

let accion = "guardar";

switch (accion) {
  case "listar":
  document.write("acción de listar");
    break;
  case "guardar":
    document.write("acción de guardar");
    break;
  default:
    document.write("accion por defecto");
}
