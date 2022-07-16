
 //Ejercicio 1
 let nombre = "Programación" + " Fácil. ";
 let saludo = "Les doy la bienvenida al ";
 let curso = "curso de "
 let fraseCompleta = saludo + curso + nombre;
 console.log(fraseCompleta);
 alert(fraseCompleta);




//Ejercicio 2

 let numeroString1 = "10";
 let numeroString2 = "20";
 let numeroString3 = "30";
 let concatenaNumeros = numeroString1 + " " + numeroString2 + " " + numeroString3;
 console.log(concatenaNumeros);
 alert(concatenaNumeros);




//Ejercicio 3

 let edad;
 edad = prompt("Indica tu edad");
 var sexo;
 sexo = prompt("Indica si eres hombre o mujer");
 if (sexo == 'hombre' && edad >= 18){
     alert("Podes pasar, sos mayor de edad.");
 } 
 else if (sexo == 'mujer' && edad >= 20){
     alert("Podes pasar, sos mayor de edad.");
 }
 else {
     alert("No podes pasar, sos menor de edad.");
 } 