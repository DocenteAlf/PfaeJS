// según una condicion
//if (condicion) expresion; else expresion2
//if (condicion){expresion 1; expresion 2; expresion 3} 
// else {expresion 4; expresion 5; expresion 6}

let edad = 15;
if (edad > 17)  {
   document.write("Usuario mayor de edad"+"<br>");
}else{
   document.write("Usuario menor de edad"+"<br>");
}

if (edad > 17) {
   document.write("Usuario mayor de edad"+"<br>");
}else if (edad > 13){
   document.write("Usuario necesita estar acompañado de mayores"+"<br>");
} else {
   document.write("Usuario menor de edad"+"<br>");}