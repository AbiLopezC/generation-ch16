//numero divisible entre 7 y 8

/* function divisible (numero)
{
    let divisible7= numero%7;

    let divisible8= numero%8;
return {divisible7, divisible8};
}


let numero= parseInt(prompt("ingresa numero"));
let resultadoFuncion= divisible(numero);
if(resultadoFuncion.divisible7==0 && resultadoFuncion.divisible8==0)
{
    console.log(true);
}

else{
    console.log(false);
} */


function divisible (numero)
{
    let divisible7= numero%7;
    let divisible8= numero%8;

    if(divisible7==0 && divisible8==0)
{
    resultado=true;
}
else
{
   resultado=false;
} 

return (resultado);
}

let numero= parseInt(prompt("ingresa numero"));
let resultadoFuncion= divisible(numero);
console.log(resultadoFuncion);

