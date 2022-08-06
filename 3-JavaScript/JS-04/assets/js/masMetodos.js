//sort ()
//ordena los elementos

const arr=["X", "A", "H", "a", "W", "b"];

arr.sort();

console.log(arr);

const arr2= [ "Hola", "adiós", "bienvenido", "Calle"
];

arr2.sort();
console.log(arr2);
const arr3=[5, 123, 567, 1, 80]

arr.sort((a,b) => b- a); //ordena de mayor a menor

arr3.sort((a,b) => a- b); //ordena de mayor a menor
console.log(arr3);

//funcion dclarada

function sumar(a, b) {
    return a+ b;
    
}

let a=2;
console.log(a);

//funciones expresadas

const multiplicar = function(a, b){
    return a* b;
}

console.log( multiplicar(3, 5));

//funciones flecha
const dividir= (a,b) => {
    return a/b;
}
console.log(dividir(10,2));

//forEach()
//un ciclo que recorre en automatico todo nuestro arreglo

/* const arrNumeros=[1,4,6,8,10,20,30];
/* for( let i=0; i<arrNumeros.length; i++)
{

arrNumeros[i]= arrNumeros[i]* 2;
}
    console.log(arrNumeros); 
    

arrNumeros.forEach((elemento, index)=> console.log(elemento, index));
 */

var codPostal = 28001;
1345= codPostal  ;

console.log(codPostal);