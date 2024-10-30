console.log("Hola desde la terminal");

//Declaracion de variables (comentario lineal)
/**
 * comentario largo
 */
//let y var

//TIPOS DE DATOS PRIMITIVOS
let fullname = "Kenia Paiz";
fullname = "Maria Chacon";

//var permite sobredeclaracion de variables
var saludo = "Hola, buenas tardes";
var saludo = "Adios"; //string
let dato; //undefined
dato = null; //valor nulo
console.log(dato)
//constantes
const pi = 3.1416; //double /float
let booleano = true; //false
const dui = "0567893-8";

//scope (que tanto acceso tiene una variable)
// function sumar(){
//     let numero1 = 5; //int
//     numero1 * 5;
// }

//TIPOS DE DATOS COMPUESTOS (arreglos ([]), objetos ({}))
let frutas = ["peras","naranjas","mandarinas","fresas"];
let verduras = new Array("tomates","pepinos","cebollas");
console.log(frutas);
console.table(verduras);

//objetos (clave - valor)
let persona = {
    nombre: "Sandra Murcia",
    edad: 25,
    telefono: 75678990,
    casada: false,
    libros: ["El principito", "Aprendiendo JS","Clean Code"]
}
console.log(persona)
//concatenando con el signo +
console.log("La estudiante " + persona.nombre + ", su libro favorito es " + persona.libros[1]);

//Plantillas Literales (``)
console.log(`La estudiante ${persona.nombre}, su libro favorito es ${persona.libros[1]}`);

//DECLARANDO FUNCIONES
//funcion declarativa
saludar()
saludar()

function saludar(){
    //code
    document.write("Saludando desde una funcion");
}

//Expresiones de funcion
const despedir = function(){
    document.write("<br>Te digo adios, desde una expresion<br>");
}

//ejecutando la funcion

despedir()

//funciones de flecha
const bienvenida = () => {
    document.write("Bienvenido a la funcion flecha");
}

bienvenida()


// let num1 = 23;
// let num2 = 45;
// let suma = num1 + num2;

// let num3 = 10;
// let num4 = 5;
// let suma2 = num3 + num4;

//PARAMETROS Y ARGUMENTOS
const sumar = (a, b) => {
    //sobreescribiendo los parametros
    // a = 250;
    // b = 50;
    let resultado = a + b;
    console.log("Total de la suma es: ", resultado);
}

//asignando argumentos
sumar(30, 45)
sumar(187, 456)
sumar(2, 4)

const ingresar_notas = (array) => {
    console.table(array)
}

ingresar_notas([10,6,7,8.5,4])








