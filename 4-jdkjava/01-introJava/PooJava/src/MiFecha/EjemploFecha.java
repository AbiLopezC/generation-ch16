package MiFecha;

import EjerciciosResumen.Animal;

public class EjemploFecha {
    public static void main(String[] args) {

        Fecha objF= new Fecha();
        objF.setDia(25);
        objF.setMes(02);
        objF.setYear(2022);
        System.out.println(objF.formaF());

    }
}
