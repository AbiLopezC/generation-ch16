/*  Funciones como objetos */

function miFuncion(a=6 , b=7){
    let res= 0; //propiedad
    res = (a * b); //accion o proceso
    return res;
}

console.log(typeof miFuncion);


//me muestra los objetos como cadenas de cracteres
var miFuncionTexto = miFuncion.toString();
console.log( miFuncionTexto );