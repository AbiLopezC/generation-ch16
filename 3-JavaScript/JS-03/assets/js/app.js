/* Control de flujo  */

/*  Condicionales */

/* If */
let condicion="A";
if (condicion == "A" )
{ 
    /* Codigo que se cumple si cumple la condicion */
console.log("cumple la condicion A");
}
else if (condicion == "B"){

    console.log("cumple la condicion B");
}
else if (condicion == "C"){

    console.log("cumple la condicion B");
}
else {
    console.log("no cumple con ninguna condicion ");
}

function dividir(a, b)
{
    if (b == 0){
        console.log("no se puede realizar la operacion");
    }
    else{
        console.log(a /b);
    }
}

dividir( 10, 2)


/* Switch */
let nuevaCondicion = "Hola";

switch (nuevaCondicion) {
    case "Hola":
        console.log("Buenos dias");
        break;
    case "Adios":
        console.log("nos vamos");
        break;
        default:
            console.log("Opcion no valida");
        break;
    
}

let elegir= "dividir";
switch(elegir){

    case "sumar":
        console.log("Vamos a sumar");
        break

    case "restar":
        console.log("Vamos a restar");
        break

    case "dividir":
        console.log("Vamos a dividir");
        break

    case "multiplicar":
        console.log("Vamos a multiplicar");
        break

    default:
        console.log("No entiendo");
}


if(elegir === "sumar"){

    console.log("Vamos a sumar");

}else if(elegir == "restar"){

    console.log("Vamos a restar");

}else if(elegir == "dividir"){

    console.log("Vamos a dividir");

}else if(elegir == "multiplicar"){

    console.log("Vamos a multiplicar");

} else {

    console.log("No entiendo");

}


