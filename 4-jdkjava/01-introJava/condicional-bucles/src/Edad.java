import java.util.Scanner;

public class Edad {
    public static void main(String[] args) {

        System.out.println("esta es la clase edad");
        //determinar si alguiene s mayor de edad


        Scanner escaner= new Scanner(System.in);
        System.out.println("escribe tu edad");
        int edad = escaner.nextInt();
        escaner.close();
        if (edad>=18){
            System.out.println("es mayor de edad");
        }
        else
        {
            System.out.println("no es mayor de edad");
        }
        //operqador ternario (condicion 1) ? if : else;
       String resultado= (edad>=18)?"eres mayor de edad" :"eres menor de edad";
        System.out.println(resultado);

    }
}
