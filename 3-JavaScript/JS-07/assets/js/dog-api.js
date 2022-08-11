
//url para consumir
const urlAleatoreo= "https://dog.ceo/api/breeds/image/random"

//elememntos del dom

const imagenPerrito=document.getElementById("img-perrito");
const btn= document.getElementById("btn-perrito")
console.log(btn);

//ebventos

btn.addEventListener("click", ()=> 
{
    console.log("boton presionado");

})

//funciones
async function obtenerPerritoAleatoreo(url){
    const respuesta= await fetch(url)
    const datos= await respuesta.json()

    console.log(datos);
    console.log(datos.message);
    console.log(datos.status);

    imagenPerrito.src= datos.message
}

obtenerPerritoAleatoreo(urlAleatoreo)