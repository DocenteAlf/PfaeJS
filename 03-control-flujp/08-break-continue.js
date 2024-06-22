
//break salir del loop
//continue saltar una iteración

let contador = 0;
while (contador < 6){
   contador++
   if (contador === 2){
      continue;
   }
   if (contador === 4){
      break;
   }
   document.write(contador,"<br>")
}

