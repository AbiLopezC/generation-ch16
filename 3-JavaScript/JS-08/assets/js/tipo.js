/* ORIENTACION A OBJETOS */

let cadena = 'Esto es una cadena';

//definiendo un objeto a traves de un CONSTRUCTOR
//define como un String a la cadena
//String esta definida como una clase, empieza con mayuscula, asi que es una clase
let cadena_obj = new String('Esto es otra cadena obj'); 

console.log(cadena);
console.log(cadena_obj);


/* Tipo numero */

let numero = 13;
let numero_obj= new Number(13.13);
console.log(numero);
console.log(numero_obj);

//los objetos tienen propiedades, una de esas propiedades son los metodos

/* tipo arreglo */
//los array son tipos de dato unico o compuesto

//aca decimos que es un objeto, que contiene primitivos, no se ven diferencias

let arreglo= ['2', '3', '5','7'];
let arreglo_obj= new Array('1', '4','6','8','9');
console.log(arreglo);
console.log(arreglo_obj);


/* tipo predefinido*/

let tiempo = new Date();
console.log(tiempo);

//estatico -> clase que no necesita un objeto, ya esta predefinido

console.log(Math);

//los objetos literales no tienen clases declaradas 
let obj_literal= {

    nombre: 'juan',
    edad: 35
}
//todo constructor es una funcion de una clase
//su funcion es crear un objeto
// 1 - es un metodo o funcion que puede estar o no declarado en una clase
//es el primer metodo de una clase

//la clase object es la clase base
//con ella se puede modificar el contenido de un objeto, verlo, o imprimirlo
let obj_constructor = new Object();
obj_constructor.nombre = 'Dora';
obj_constructor.edad =23;

console.log(obj_literal);
console.log(obj_constructor);

  
    obj_literal['nombr'];
    let llave= 'nombr';
console.log('esto es con llave' + obj_literal[llave]);