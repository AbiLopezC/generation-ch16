const url= "https://dog.ceo/api/breeds/image/random";

//respuesta de la peticion
fetch(url).then((respuesta)=> {
    console.log(respuesta);
})

//obtener la informacion de la peticion

//forma 1
fetch(url)
.then((respuesta)=> respuesta.json())
.then((datos)=>{

    console.log(datos);

}).catch((error)=>{

    console.log(error);
})

//forma2

async function obtenerPerritoAleatoreo() {
    const respuesta=await fetch (url);
    const datos= await respuesta.json()

    console.log(datos);
    
}

obtenerPerritoAleatoreo()

