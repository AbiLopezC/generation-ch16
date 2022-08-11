//variables que simulan los pedidos

const saludo= "Hola mundo";

const datos=[
    {
        nombre: "Karen",
        apellido: "Lopez"
    },
    {
        nombre: "Karen",
        apellido: "Lopez"
    },
    {
        nombre: "Karen",
        apellido: "Lopez"
    }
]

//funcion para simular una peticion

function obtenerDatos(){

    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            if(false){
            resolve (datos);}

            else{
                reject("no se pudo obtener datos")
            }
        }, 2000)

    })
   
    
}
obtenerDatos().then((datos) => {
    console.log(datos);
}).catch((error)=>{
    console.log("existe un error en la peticion 1");
    console.log(error);

})

//forma #2 - fucnioneas asincronas - await async

async function funcionAsincrona() {
   try{
    
    const datos = await obtenerDatos()
    console.log(datos);
   } catch(error){
    console.log(error);
   }
   

    
}

funcionAsincrona()