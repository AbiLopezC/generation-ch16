//casa piscis
let saldo = 10000;
function consulta(){
    
    let retirar = prompt("Cuánto desea retirar?: ");
    saldo = saldo - retirar;
    return saldo
}
console.log("Saldo restante: "+ consulta()); 
console.log("Saldo restante: "+consulta());