//Javascript funciona como prototipo

let x=10;
console.log(x.length);

let persona={
    nombre: 'Maria',
    apellido: 'Perez',
    correo: 'maria@gmail.com', 
    edad: 25,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

//llamar al objeto, y un atributo que no este ligado a el objeto
//asi se le pueden agregar nuevos atributos

persona.tel= '5545816893';
persona.tel1='3433929339';
console.log(persona);
console.log(persona.nombre);
console.log(persona.nombreCompleto());


/* for in */

for(varPropiedad in persona){

    console.log(persona[varPropiedad]);
}


//convierte al objeto en una cadena de caracteres

let personString= JSON.stringify(persona);
console.log(personString);

//metodos accesores GET