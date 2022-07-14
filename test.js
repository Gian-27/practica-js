let nombre = "Programación" + " Fácil.";
let saludo = "Les doy la bienvenida al ";
let de = "curso de ";
let fraseCompleta = saludo + de + nombre;

console.log(fraseCompleta);

let frase = "JavaScript " + "es un lenguaje" + " esencial para crear" + " sitios web poderosos.";
console.log(frase);

let numeroString1 = "10 ";
let numeroString2 = "20 ";
let numeroString3 = "30 ";
let concatenaNumeros = numeroString1 + numeroString2 + numeroString3;
console.log(concatenaNumeros);

let edad;
edad = prompt("Introduce tu edad");
if (edad >= 18){
 alert("Puedes entrar, eres mayor de edad.");
} else {
 alert("No puedes entrar, eres menor de edad.");
}