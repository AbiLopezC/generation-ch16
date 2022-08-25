package MiSaludo;

import MiEjemploJava.Persona;
import MiSaludo.Saludo;

public class EjemploSaludo {
    public static void main(String[] args) {
        Saludo objSaludo; //declarar el objeto
        objSaludo= new Saludo(); //crear el objeto con new
        objSaludo.saludar(); //llamar al método

        Saludo objSaludo0= new Saludo();

        System.out.println(objSaludo.saludar0());
        System.out.println("este es otro objeto -> " + objSaludo0.saludar0());


        Persona objPersona= new Persona();

    }
}