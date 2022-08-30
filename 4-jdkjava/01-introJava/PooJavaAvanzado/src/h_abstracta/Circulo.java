package h_abstracta;

public class Circulo extends FIgurasGeometricas{
private float radio;




    public Circulo(float radio) {

        super ("Circulo");
        this.radio = radio;
    }

    public float getRadio() {

        return radio;
    }

    public void setRadio(float radio) {
        this.radio = radio;
    }

    @Override
    public float area() {

        //casteo si son del mismo tipo
        //parseo si son diferentes
        //casting es para transformar datos de tipo primitivo
        // parse es para pasar objetos a enteros
        return (float) (Math.PI*Math.pow(radio,2));


    }
}
