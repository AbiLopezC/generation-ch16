
//url para consumir
const urlAleatoreo= "https://api.thecatapi.com/v1/images/search"

//elememntos del dom

const imagenGato= document.getElementById("img-gato");
const btn= document.getElementById("btn-gato")
console.log(btn);

//ebventos

btn.addEventListener("click", ()=> 
{
    console.log("boton presionado");
    obtenerGatoAleatoreo(urlAleatoreo);

})

//funciones
async function obtenerGatoAleatoreo(url){
    const respuesta= await fetch(url)
    const datos= await respuesta.json()

    console.log(datos);
    console.log(datos[0].url);
    

    imagenGato.src= datos[0].url
    imagenGato.alt= "foto gato"
}

/* obtenerGatoAleatoreo(urlAleatoreo) */