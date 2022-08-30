package h_abstracta;

public class EjemploFiguras {

    public static void main(String[] args) {

    Triangulo t= new Triangulo(3,1);
        System.out.println(t);

    //con setter y getter
    t.setAltura(2);
       t.setBase(5);

        System.out.println("triangilo area con set y get -> "+ t.area());



    Circulo c= new Circulo(2);

        System.out.println( c);

        c.setRadio(3);

        System.out.println("circulo area con set y get ->" +c.area());
    }
}
