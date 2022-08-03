/* Tipos de datos */

'use strict' //interpreta todo de forma estricta :v

//tipos de variaables
let a; //alcance locaL
const b = 0; //constante, alcance local
var c; //ya no se usa y alcance global

 /* 
 Scope-contexto
 espacio en el que vive la variable
  */


// string
let cadena = "Hola mundo";

//Number
let numero = 6;
let n1 = 5.89;
let n2 = -2.3;

//Boolean

let boleano = true;
let boleano2= false;

//undefined - indefinido
let variable;
/* console.log(variable); */

//null
let vacio = null;

//NaN -Not a number
//no es un numero

/*  Plantillas literales
templates strings
literal strings
interpolacion
*/

console.log(`esta es una cadena ${5+4}`);
console.log("esta es una cadena normal ${5+4}");

let nombre = `Abi`;

console.log("Mi nombre es " + nombre); //concatenar
console.log(`me llamo ${nombre}`);    //interpolar


/* arreglos - maatrices - array */

let arr = [1, "A", null, undefined, [true, false]];

//notacion de corchetes
console.log(arr[4][0]);

if (arr.length >= 5)
{
    console.log("es verdad");
}

if (arr[4][0] == true)
{
    console.log("es verdad");
}

let arr2= new Array("B", 2);

console.log(arr2);

 
/* objetos */
const persona ={
    nombre: `Abi`,
    edad: 24,
    hobbies: ["plantitas", "coleccionar ponnys", "museos", "ver series", "animes"],
    auto: {
        marca: "nissan",
        modelo: "aveo",
        year: 2021
    },
    saludar: function (){
        return "saludar";
    }
};

//notacion de punto
console.log( `Mi nombre es ${persona.nombre}`);

console.log(`mi hobbie es ${persona.hobbies[1]}`);

console.log(`La marca de mi carro es ${persona.auto.marca}`);

console.log(persona.saludar());
