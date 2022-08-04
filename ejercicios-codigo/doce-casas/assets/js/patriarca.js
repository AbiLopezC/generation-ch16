//Casa patriarca
let saldo = 10000;
let retirar;
function retiro(){
    
    let pin = Number(prompt("Digite pin de cuatro digitos: "));

    while (pin!==9183){
        console.log("pin inválido");
        pin = Number(prompt("Digite pin correcto: "));
       
    }
    if(pin===9183){
        retirar = prompt("Cuánto desea retirar?: ");
        saldo = saldo - retirar;
    
        while(retirar%200 != 0){
            retirar = prompt("Ingrese cantidad múltiplo de 200!: ");
            saldo = saldo - retirar;
        }
        if(retirar%200 === 0){
            console.log("Operación exitosa");
            let numMil, numCien, numQuin, numDos, numVein; //por definir # de cada billete que tenga cajero
            numMil = parseInt(retirar/1000);
            numQuin = parseInt((retirar - numMil*1000)/500);
            numDos = parseInt((retirar-numMil*1000-numQuin*500)/200);
            numCien = parseInt((retirar-numMil*1000-numQuin*500-numDos*200)/100);
            numVein = parseInt((retirar-numMil*1000-numQuin*500-numDos*200-numCien*100)/20);

            
            console.log("1000: " +numMil+" 500: "+numQuin+" 200: "+numDos+" 100: "+numCien+" 20: "+numVein);
            

        }
        
        

    }
    
    return saldo;
    
}

console.log("Saldo 1: ", retiro());