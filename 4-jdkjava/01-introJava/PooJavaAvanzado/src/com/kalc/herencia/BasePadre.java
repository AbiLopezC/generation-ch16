package com.kalc.herencia;

public class BasePadre {
    private int a;
    private double b;
    private String c;


    //constructor
    public BasePadre() {

    }

    public void vizualizarA(){
        System.out.println("obj h-> soy un metodo de la clase BasePadre");
    }

    public void vizualizarABC(){
        System.out.println("obj ho-> soy otro metodo de la clase BasePadre");


    }

    //metodos get y set
    public int getA() {
        return a;
    }

    public void setA(int a) {
        this.a = a;
    }

    public double getB() {
        return b;
    }

    public void setB(double b) {
        this.b = b;
    }

    public String getC() {
        return c;
    }

    public void setC(String c) {
        this.c = c;
    }
}
