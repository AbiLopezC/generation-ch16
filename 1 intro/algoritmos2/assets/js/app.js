/* 

function algoritmos ()
{
    console.log("hola mundo");

}

algoritmos (); */

//ARREGLOS

let num=[1,2,3];
//console.log(num);

//USAR UN ARREGLO

const arr=[1,2,3,4,5];

//NOTACION DE CORCHETES
//console.log(arr[3]);
/* 
arr[5]=25;
arr[6]=5;
arr[6]=9;
arr[10]=29;
arr[7]=8;

console.log(arr); */

//PROPIEDADES DE LOS ARREGLOS 
//descripcion de nuestro arreglo
//console.log(arr.length);

//METODOS
// acciones que puede realizar un arreglo

const frutas=["manzana", "platano"];
console.log(frutas);

//push()
//agrega un valor al final del arreglo
let fruta="totonja";
frutas.push("naranja");
frutas.push(fruta);
console.log(frutas);

//pop()
//elimina el ultimo elemento de un array
let frutaborrada= frutas.pop();
console.log(frutas);
console.log(frutaborrada);

//unshift()
//agrega un elemento al inicio del arreglo
let devolver=frutas.unshift("uva","pera");
console.log(frutas);
console.log(devolver);

//shift()
//elimina un elemento al inicio del arreglo
let quitada=frutas.shift();
console.log(frutas);
console.log(quitada);