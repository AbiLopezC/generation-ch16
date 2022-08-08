console.log( document.getElementById('parrafo1'));

const parrafo1= document.getElementById('parrafo1');
console.log(parrafo1.textContent);


parrafo1.textContent = "Nuevo parrafo 1";

console.log(parrafo1.textContent);

console.log(parrafo1.style);
parrafo1.style.color= 'red';
parrafo1.style.backgroundColor= "yellow";

//querySelector()
//etiqueta = p
//clase = .parrafo
//id = #parrafo1

const parrafo2 = document.querySelector(' .parrafo');
console.log(parrafo2.textContent);

parrafo2.textContent += "\n modificano el contenido desde Js"

// \n -- inserta un salto de linea == <br>
// \t 


//querySelector(all) //lista de nodos -- node list

const parrafos= document.querySelectorAll('p');
console.log(parrafos[2]);

parrafos[2].style.fontSize= "2rem";

//css - font-Size
//js - fontSize


//Modificar los atributos del html

const enlace= document.getElementById('enlace');
console.log(enlace);

enlace.href= "https://www.youtube.com/";
enlace.target = "_blank";
enlace.textContent="enlace de youtube";

//devuelve la ultima fecha que se modifico 
console.log(document.lastModified);


console.log(parrafo2.style);
parrafo2.style.color= 'blue';
parrafo2.style.backgroundColor= "gray";
parrafo2.style.fontSize= "1rem";


//remplazar contenido

const parrafo4= document.getElementById('parrafo4');

console.log(parrafo4.nodeName);
console.log(parrafo4.textContent);
console.log(parrafo4.innerHTML); //muestra el html que esta el interior del elemento 

/* console.log(document.body.innerHTML); */

console.log(parrafo4.outerHTML); //muestra el contenido html incluyendo al elemento

/* parrafo4.outerHTML = '<a href=http://google.com">Enlace </a>'; // REMPLAZA EL CONTENIDO


parrafo4.innerHTML = '<a href=http://google.com">Enlace </a>'; // REMPLAZA EL ELEMENTO COMPLETO
 */

/* 
parrafo4.outerHTML = '<div class="elemento"> este es un div </div>'
 */

console.log(parrafo4.classList.contains("elemento"));


const cambiarColor = () => {
    parrafo4.classList.toggle('elemento');

}

cambiarColor(); //se agrega la clase
cambiarColor(); //se quita la clase