function datos_personales(opcionElegir){

  opcionElegir= prompt("Ingrese una opcion: OPCION 1 DATOS PERSONALES, OPCION 2 DATOS ALUMNOS ");

  switch (opcionElegir){
 
   case '1':

   document.write("Escogiste ingresar datos de profesor <br>");

   nombreProfesor = prompt("Ingrese el nombre del profesor <br>");

   apellidoProfesor = prompt("Ingrese el apellido del profesor <br>");

   document.write("Los datos registrados del profesor son Nombre: "+ nombreProfesor,"Apellidos: "+apellidoProfesor, "<br>");

   break;


   case '2':

   document.write("Escogiste ingresar datos del alumno  <br>");

   nombreAlumno = prompt("Ingrese nombre del alumno <br>");

   apellidoAlumno = prompt("Ingrese el apellido del alumno <br>");

   document.write("Los datos registrados del alumno son Nombre: "+ nombreAlumno,"Apellidos: " + apellidoAlumno +"<br>");

  break;

  




  default:

  document.write("Escoge una opcion Valida");


  }


}

function datos_profesionales(opcionElegir){

    opcionElegir = prompt("Ingrese una opcion: OPCIÓN 1 asignaturas a impartir, OPCIÓN 2 materias alumnos, OPCION 3 NOTAS ALUMNO");


 switch (opcionElegir) {



 case '1':

   document.write("Escogiste ingresar materias de profesor de  profesor <br>");

   materiaProfesor = prompt("Ingrese la materia del profesor <br>");

   document.write("Los datos registrados de la materia del profesor son"+ materiaProfesor, "<br>" );

    break;

  case '2':

    document.write("Escogiste ingresar materias del alumno <br>");

    materiaAlumno = prompt("Ingrese la materia del alumno <br>");

   document.write("Los datos registrados de la materia del alumno son: "+materiaAlumno, "<br>");

    break;


    case '3':

  document.write("Escogiste ingresar notas");

  notas_1 = prompt("ingrese nota 1 <br>");

  notas_2 = prompt("ingrese nota 2 <br>");

  notas_3 = prompt("ingrese nota 3 <br>");

  totalNotas = notas_1 + notas_2 + notas_3 / 3 ;

  //promedio = totalNotas / 3 ;

  document.write("la nota 1 es : "+ notas_1+ "<br>");

  document.write("la nota 2 es : "+ notas_2+"<br>" );
  
  document.write("la nota 3 es : "+ notas_3+"<br>" );

  document.write("la suma de las notas es "+ totalNotas+ "<br>");

  document.write("el promedio de las notas es: "+ promedio+ "<br>");




  default:

    document.write ("Escoge una opcion invalida");

    }


  
}