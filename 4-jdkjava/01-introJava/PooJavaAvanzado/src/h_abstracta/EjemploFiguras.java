package h_abstracta;

public class EjemploFiguras {

    public static void main(String[] args) {

    Triangulo t= new Triangulo(0,0);
       t.setAltura(2);
       t.setBase(5);

        System.out.println("t es el objeto de Triangulo= " + t.area());

        Circulo c= new Circulo();
        c.setRadio(15.4f);
        System.out.println("el area del circulo = "+ c.area());


    }
}
