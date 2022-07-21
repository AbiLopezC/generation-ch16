//funciones


//funcion definida
/* 
function sumar (numero1, numero2){
    console.log("Voy a sumar");
    console.log("el resultado de la suma es:" + (numero1 + numero2)); 
    }

    sumar(4,5);
 */
/* 
function sumar (numero1, numero2){
numero1= parseInt(prompt("escribe el numero1"));
numero2= parseInt(prompt("escribe el numero2"));
console.log("Voy a sumar");
console.log("el resultado de la suma es:" + (numero1 + numero2));

}

sumar(); 
*/

//ejercio 2 con funciones

/* function calcularsueldo(sueldoingresado, diasSemana){
   
    let nombre = prompt("Escribe tu nombre")
console.log(nombre);

const sueldo = sueldoingresado;
//const diasSemana = 6;
const semanasMes = 4;

console.log("Sueldo semanal: " + (sueldo * diasSemana));
console.log("Sueldo semanal: " + (sueldo * diasSemana * semanasMes));
return semanasMes;
}

let mes=calcularsueldo(100,2);
console.log(mes); */

//calculadora de porcentajes

function calcularPorcentaje (numero, porcentaje){
    let resultado=numero* porcentaje;
    return {resultado,numero, porcentaje};
}

let resultadoFuncion= calcularPorcentaje(100,0.40);
console.log(resultadoFuncion.resultado);