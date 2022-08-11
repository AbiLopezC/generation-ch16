let x=10;
console.log(x.length);

let persona={
    nombre: 'Maria',
    apellido: 'Perez',
    correo: 'maria@gmail.com', 
    edad: 25,
    idioma: 'es',

    //metodo get -> metodo accesor 
    //para acceder a los atributos del objeto
    //
    get leng (){
        return this.idioma.toUpperCase();
    },
    //metodo set
    set leng(lang){
        this.idioma=lang.toLowerCase();
    }
}

console.log(persona.leng);


persona.lang= 'ES';


console.log(persona.idioma);