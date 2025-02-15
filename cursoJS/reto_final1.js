// 3D = 30bs
// 2D = 20bs
//30% menores de 15
//30 personas por sala
//censura c solo para mayores 18
//16% no incluye iva para menores

function cine_LasTapias(cine_LasTapias){
    
    //let sala_1;
    //let sala_2;
    //let sala_3;

    let persona_1;
    let monto_ticket;
    let monto_ticket_2;
    let monto_ticket_3;
    let edad;

    let D3= 20;
    let D2= 30;
    
  cine_LasTapias=prompt("Ingrese una opcion: sala_1, sala_2, sala_3, salir ");

  switch(cine_LasTapias){

   case '1': 

   persona_1= parseInt(prompt("Escribe el nro de personas que son: "));
   monto_ticket= parseInt(prompt("Escribe el monto a pagar"));
   edad= parseInt(prompt("edad que tienes: "));
   
    resultado= D3 * 0.30;

   if(edad < 15){

    document.write("El resultado es: <br>", resultado, "<br>");

   } else if(edad >= 15){

        alert("No tiene descuento es mayor de edad")
   } 

   document.write("Pagas: "+ resultado+ "<br>"  + "son: "+ persona_1+ "personas" + "<br>" + "edad que tienes: "+ edad+ "<br>" + "<br>");

break;

    case '2':

    persona_1= parseInt(prompt("Escribe el nro de personas que son: "));
    monto_ticket_2= parseInt(prompt("Escribe el monto a pagar: "));
    edad= parseInt(prompt("edad que tienes: "));

    resultado= D2 * 0,30;

    document.write("nro de personas: ", persona_1, "<br>" , "el monto es: ", resultado, "<br>", "la edad que tienen: ", edad, "<br>" );

break;

case '3':

    persona_1= parseInt(prompt("Escribe el nro de personas que son: "));
    monto_ticket_3= parseInt(prompt("Ingrese monto del ticket"));
    edad= parseInt(prompt("edad que tienes:"));
    
    resultado= D2 + 0.16;

    if(edad >= 18){

        document.write("Puedes entrar a la sala");

    }else if(edad < 18){

        alert("No puedes entrar");

    }

   document.write("nro de personas: <br>", persona_1, "el monto es: <br>", resultado, "la edad que tienen: ", edad );

    break;

    case '4':

    default:
       
    console.log('default');

    document.write("Saliste del sistema");

    break;
    
  }

}