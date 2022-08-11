// class define la parte abstracta de la orientacion a objetos

class persona{

//por fuera de la clase, cuando se llama al constructor, se va a ingresar el valor que va a llegar hasta el atributo this.nombre

    constructor(nombre ='Lola',apellido){
        this._nombre= nombre;
        this._apellido= apellido;
    }
//metodo get retoma algo que ya esta en otro algo
    get nombre(){
        return this._nombre; // el _ lo hace publico
    }

//le da un valor a un atributo
    set nombre(nombre){
        this._nombre= nombre;
    }

}

let persona1= new persona('Maria', 'Perez');

console.log(persona1);
persona1.nombre='Hugo Sanchez';
console.log(persona1.nombre);

let persona2= new persona('Marco', 'Benitez');
console.log(persona2);

