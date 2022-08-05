//un arreglo, es una coleccion de elementos
//cada elemento en un arreglo, ocupa una poscicion
//a esa posicion se le llama indice, y comienza a partir de 0

let arr= [1, 2, 3, 4];
console.log(arr);

//propiedades-describen
//metodos- accciones que pueden realizar

console.log(arr[2]);

arr[4]= 190;

console.log(arr);

//metodos de arreglos
const arreglo= ["adios"];

//push() arregla un numero al final
arreglo.push(2);

console.log(arreglo);
let num= 500;
arreglo.push(num);

console.log(arreglo);

//unshift()
//agregar elementos al inicio 

arreglo.unshift("A");
arreglo.unshift("B");

console.log(arreglo);

//metodos para quitar elementos
//pop() elimina el ultimo elemento

let dato1= arreglo.pop();

console.log(arreglo);
console.log(dato1);

//shift - elimina el primero

let dato2= arreglo.shift();
console.log(dato2);
console.log(arreglo);

//splice()
//quita una prte de cualquier poscicion de nuestro arreglo

arreglo.splice(1,0);
console.log(arreglo);

//insertar un elemento
arreglo.splice(1,0, "dos", 234);

console.log(arreglo);

//arreglos que modifican



//arreglos que crean una copia y la modifican

//slice()
//corta partes de un arreglo
let dato3= arreglo.slice(0, 2);

//debemos indicar un rango
//genera un arreglo, con los elementos cortados

console.log(dato3);
console.log(arreglo);


