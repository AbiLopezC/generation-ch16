package h_abstracta;

public class Triangulo extends FIgurasGeometricas{



    private float base;
    private float altura;



    public Triangulo(float base, float altura) {
        super("Triangulo");
        this.base = base;
        this.altura = altura;
    }

    @Override
    public float area() {


        return (getBase()*getAltura())/2;
    }


    //setters y getters
    public float getBase() {
        return base;
    }

    public void setBase(float base) {
        this.base = base;
    }

    public float getAltura() {
        return altura;
    }

    public void setAltura(float altura) {
        this.altura = altura;
    }
}
