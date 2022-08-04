function miFuncion (a, b){
    return (a + b);
}

let resultado = miFuncion (3, 6);
console.log("el resultado es: " + resultado);

/* *****Funcion expresion ***** */
//o anonima
let res;

let suma= function (a, b){
    return (a + b)
};

res= suma (2, 3);
console.log("la suma es: " + res);

let resta= function (a, b){
    return (a - b)
};

 res= resta (2, 3);
console.log("la resta es: " + res);

let prod= function (a, b){
    return (a * b)
};

res= prod (2, 3);
console.log("el producto es: " + res);

let div= function (a, b){
    return (a / b)
};

res= div (2, 3);
console.log("la division es: " + res.toFixed(2));

/* self invoking - se auto invoca- no es reutilizable  */
(function (a, b)
{
    console.log("El resultado de Self invoking es: " + (a+b))
})(3, 4);
