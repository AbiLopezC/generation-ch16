package com.kalc.principal;

import com.kalc.herencia.BasePadre;
import com.kalc.herencia.Hija;
import com.kalc.herencia.Hijo;

import java.util.ArrayList;
import java.util.List;

public class EjemploHerencia {

    public static void main(String[] args) {

        //creando objeto h que pertenece a la clase hija
        Hija h= new Hija();
        h.vizualizarA();

        Hijo ho= new Hijo();
        ho.setA(147654);
        h.vizualizarABC();

        BasePadre objB =new BasePadre();
        objB.setA(2357);

        Object miObj= new BasePadre();




        System.out.println( "Atributo de clase base padre->  "+ objB.getA());
        System.out.println( "Atributo de Hijo->  "+ ho.getA());



    }
}
