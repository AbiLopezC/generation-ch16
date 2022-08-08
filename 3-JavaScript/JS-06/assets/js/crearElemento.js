//crear un elemento

const imagen= document.createElement("img");

//modificar los atributos html del elemento
imagen.src= 'https://placeimg.com/200/200/animals';
imagen.alt= 'imagenes aleatoreas de animales';




//lo insertamos en un elemento padre
document.body.appendChild(imagen);
/* 
document.body.insertAdjacentElement("afterbegin",imagen);
document.body.insertAdjacentElement("afterend",imagen);
document.body.insertAdjacentElement("beforebegin",imagen);
document.body.insertAdjacentElement("beforeend",imagen); */


//forma correcta de crear e insertar un elemento
//  1 crear un elememnto padre
// 2  seleccionar el elemento 

const padreImg= document.getElementById('padreImg');

//  3 crear el elemento 

const imagen2= document.createElement('img');

// 4 modificamos los atributos del elemento

imagen2.src="https://placeimg.com/200/200/nature";
imagen2.alt="imagenes de naturaleza";

//5 insertar elemento

padreImg.appendChild(imagen2);


//forEach -- pintar datos/ agregar

const frutas = ["toronja", "manzana", "mandarina", "limón", "granada", "melon", "platano", "guayaba"];

const listaFrutas = document.getElementById('frutas');

/* frutas.forEach((element)=> {
   const li =document.createElement('li');
   li.textContent= element;
   listaFrutas.appendChild(li);

}); */

//forma 2
frutas.forEach((el)=> {
    listaFrutas.innerHTML += `<li> ${el}</li>`;
});