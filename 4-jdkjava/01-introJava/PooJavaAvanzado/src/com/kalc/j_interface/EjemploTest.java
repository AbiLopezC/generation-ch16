package com.kalc.j_interface;

import java.util.ArrayList;

public class EjemploTest {
    public static void main(String[] args) {
        //llamamos un atributo
        System.out.println(" Test.CONV= " + Test.CONV);

        //llamarlo con la lcase que implementa la interfaz
        System.out.println("Prueba.CONV = "+ Prueba.CONV);

        Prueba p= new Prueba();
        System.out.println("p.CONV = " + p.CONV);

        // instancia de referencia -> al objeto tipo interfaz
        Test ts = new Prueba();
        ts.metodo1(3);
        ts.metodo2("hola");
        System.out.println(ts.metodo2("hola"));
        p.metodoPropio();

        Test1 ts1= new Prueba();
        ts1.metodo01();
        System.out.println(ts1.metodo02());






        //pasos de la instancia
        //declaracion, creacion, llamado
    }
}
