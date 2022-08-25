package MiEjemploJava;

public class Persona {

    String nombre= "Abi";
    int edad = 24;
    int nss = 156378;

    public Persona() {

        //si esta vacio se esta creando un objeto abstracto
    }

    public Persona(String nuevonombre, int nuevoedad, int nuevonss) //el constructor inicializa las clases

    {
        //este constructor ya define como crear al objeto
        this.nombre = nuevonombre;
        this.edad = nuevoedad;
        this.nss = nuevonss;
    }
//La sobrecarga de constructor es una técnica en Java en la que una clase puede tener cualquier cantidad de constructores que difieran en la lista de parámetros. El compilador diferencia estos constructores teniendo en cuenta el número de parámetros en la lista y su tipo.

    //podemos elegir cuál de los constructores declarados usar, dependiendo de lo que queramos hacer con el objeto nuevo

   // la sobrecarga nos permite crear variaciones de un objeto, para no tener que estar haciendo nuevas clases cada vez que queramos agregar algún atributo nuevo

// metodo set
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public void setNss(int nss) {
        this.nss = nss;
    }
    //metodo Get para obtener
    public String getNombre() {
        return nombre;
    }

    public int getEdad() {
        return edad;
    }

    public int getNss() {
        return nss;
    }

    public void caminar() {
        System.out.println("Caminar");
    }

    public void dormir() {
        System.out.println("Dormir");
    }

}
