/* URL a consumir */
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/"


/* Elementos del DOM */
const imgPokemon = document.getElementById("img-pokemon");

const idPokemon = document.getElementById("id-pokemon");

const nombrePokemon = document.getElementById("nombre-pokemon");

//se agrega para asignar la parte de habilidades

const listaHabilidades = document.getElementById("lista-habilidades");

//se agregan los tipos
const listaTipos= document.getElementById("lista-tipos");

//para el formulario
const formulario = document.getElementById("buscador-pokemon")
console.log(formulario);

/* EVENTOS */
formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    const inputPokemon =document.getElementById("busqueda-pokemon");

    console.log(inputPokemon.value);

const nuevaBusqueda = urlPokemon + inputPokemon.value
  console.log(nuevaBusqueda);

  obtenerPokemon(nuevaBusqueda);
}
)



/* Funciones */
async function obtenerPokemon(url) {

    try{
        const respuesta = await fetch(url)
        const datos = await respuesta.json()
    
        /* Se buscan los objetos en la api */
       const pokemon = {
            nombre: datos.forms[0].name,
            habilidades: datos.abilities,
            id: datos.id,
            tipos: datos.types,
            imagen: datos.sprites.other["official-artwork"].front_default
        } 
    
    
        //imagen nombre y ID
        imgPokemon.src = pokemon.imagen;
        idPokemon.textContent = `ID: ${pokemon.id}` ;
         //cONCATENAMOS EL VALOR JALADO CON EL ID:
        nombrePokemon.textContent = pokemon.nombre;
    
        //habilidades
    
        
        //innerHTML agrega elementos
        let template= ``
    
        //con ciclo for 
        for(let i=0; i<pokemon.habilidades.length; i++){
    
            const nombreHabilidad= pokemon.habilidades[i].ability.name;
    
            /* PARA PODER HACER LA INTERPOLACION, SON COMILLAS `${ }` DE ESTAS "ALTGR+ }"  */
    
            template += `<li class="list-group-item"> ${nombreHabilidad} </li>`
        }
    
        listaHabilidades.innerHTML = template;
    
        //TIpos
    
        template= ``;
    
        //usando forEach, con funcion flecha, recorre por si solo 
        pokemon.tipos.forEach((tipo)=>{
      
            const nombreTipo=tipo.type.name;
           
            template += `<li class="list-group-item">${nombreTipo}</li> `
        })
        listaTipos.innerHTML = template;

    }
    catch(e){
        alert("pokemon no valido")

    }
    

}
/* obtenerPokemon(urlPokemon)
 */