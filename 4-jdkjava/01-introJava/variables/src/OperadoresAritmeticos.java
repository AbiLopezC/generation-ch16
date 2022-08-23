import java.sql.SQLOutput;
import java.util.Scanner;

public class OperadoresAritmeticos {

    public static void main(String[] args) {
        int i= 5, j=4, suma=i+j;
        System.out.println("suma= " + suma);
        System.out.println("i+j= "+ (i+j));
        System.out.println("i+j= concatendao"+ i+j);

        int resta= i-j;
        System.out.println("resta= "+ resta);
        System.out.println("i -j = " + (i-j));

        int mult= i*j;
        System.out.println("mult= "+ mult);
        System.out.println("i *j = " + (i* j));

        float div= i/j;
        System.out.println("div= "+ div);
        System.out.println("i/j = " + (i/j));
        
        float div1=(float)i/(float)j;
        System.out.println("div1 = " + div1);
        System.out.println("div1 = " + (float)i/(float)j);
        
        
        int residuo= i%j;
        System.out.println("residuo = " + residuo);
        
        residuo=8%5;
        System.out.println("residuo = " + residuo);


        Scanner scanner =new Scanner(System.in);

        System.out.println(" Cual es tu edad: ");
        String dato = scanner.next();
        int edad = Integer.parseInt(dato);
        System.out.println(" Cual es tu nombre: ");
        String nombre = scanner.next();
        System.out.println("Mi nombre y edad es : " + nombre +" "+ edad);

    }
}
