let valor=0;
let res1;
let res2;
let opcion;
/* console.log("calculo de grados seleccione 1= Celsius a Fahrenheit y Kelvin 2= Fahrenheit a Celsius Kelvin 3= Kelvin a Celsius y Fahrenheit"); */
opcion=2;

function celsius(){
    valor= Number( prompt("ingrese la temperatura en celsius"));
    res1= (valor*9/5)+32;
    res2 = (valor + 273.15);
    return(valor, res1, res2);
}

function Fahrenheit(){
    valor=Number( prompt("ingrese la temperatura en Fahrenheit"));
    res1= (valor-32)*5/9;
    res2= (res1 + 273.15);
    return(valor, res1, res2);
}
function kelvin()
{
    valor=Number( prompt("ingrese la temperatura en Kelvin"));
        res1= valor-273.15;
        res2= (res1*9/5)+32 ;
        return(valor, res1, res2);
}

switch (opcion) {
    case 1:
       celsius();
        alert (valor + " °C = " + res1 + "F = " + res2 + "K ");
     
        break;

     case 2:
       Fahrenheit();
        alert (valor + " F = " + res1 + "°C = " + res2 + "K ");
    
        break;

    case 3:
        kelvin();
        alert (valor + " K " + res1 + "°C " + res2 + "F ");
     
        break;
            
    default:
        break;
}

