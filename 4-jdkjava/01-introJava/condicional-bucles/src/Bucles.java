import java.util.Objects;
import java.util.Scanner;

public class Bucles {
    public static void main(String[] args) {
        System.out.println("bucles");

        for(int i=0;i<=10;i++){

            System.out.println(i);
        }

        String condicion="";
        Scanner sc= new Scanner(System.in);

        // == != estamos comparando datos primitivos

        while(!Objects.equals(condicion, "hola" ) )
        {
            System.out.println("saludame");
            condicion=sc.next();
        }


        //do while
        //ejecuta la accion 1 vez y luego evalua
        do{
            System.out.println("saludame x2");
            condicion= sc.next();

        } while(!Objects.equals(condicion, "hola"));



    }
}
