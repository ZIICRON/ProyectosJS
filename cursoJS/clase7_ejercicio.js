function Tablas(elegir_Opcion){


    var number_1;
    var number_2;
    var i;


  elegir_Opcion=prompt("Ingrese una opcion: 1 suma, 2 resta, 3 multiplicacion, 4 division, 5 cerrar ventana ");


 switch(elegir_Opcion){

 case '1':

   number_1= parseInt(prompt("Ingrese primer numero"));
   number_2= parseInt(prompt("Ingrese el segundo numero"));

    var resultado= number_1 + number_2;
    
    for(i=0; i < 11; i++ ){
        resultado= number_1 + number_2;
        document.write(" suma: ", resultado, "+", i, "=", resultado + i, "<br>");
    }

  break;


 case '2':

  var number_1;
  var number_2;

  number_1= parseInt(prompt("Ingrese primer numero"));
  number_2= parseInt(prompt("Ingrese el segundo numero"));

  var resultado= number_1 - number_2;

  for(i=0; i < 11; i++){
    resultado= number_1 - number_2;
    document.write(" resta: ", resultado, "-", i, "=", resultado - i, "<br>");
}

    break;
  
  case '3': 

  var number_1;
  var number_2;

  number_1= parseInt(prompt("Ingrese primer numero"));
  number_2= parseInt(prompt("Ingrese el segundo numero"));

  var resultado= number_1 * number_2;
  
  for(i=0; i < 11; i++ ){
    resultado= number_1 * number_2;
    document.write(" multiplicacion: ", resultado, "*", i, "=", resultado * i, "<br>");
}

   break;

   case '4':

   var number_1;
   var number_2;
 
   number_1= parseInt(prompt("Ingrese primer numero"));
   number_2= parseInt(prompt("Ingrese el segundo numero"));
 
   var resultado= number_1 / number_2;

   for( i=0; i < 11; i++ ){
    resultado = number_1 * number_2;
    document.write(" division: ", resultado, "/", i, "=", resultado / i , "<br>");
}
  break;
   
  case '5':
    close(window);
    alert("saliste del archivo");
  break;

 }


}

 