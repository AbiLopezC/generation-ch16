import java.io.ByteArrayInputStream;

public class EjemploVariables {
    public static void main(String[] args) {
        String nombre = "Abi";
        String saludo = "esto es un ejemplo de variables";

        System.out.println(saludo + "  " + nombre);

        char espacio = '\u0020';
        char caracter = 'a';

        float tamañoMax = Character.MAX_VALUE;
        float tamañoMin = Character.MIN_VALUE;

        System.out.println("espacio=" + espacio);
        System.out.println("char corresponde en bytes: " + Character.BYTES);
        System.out.println("char Tamaño: " + Character.SIZE);
        System.out.println("char maax en bytes: " + tamañoMax);
        System.out.println("char min en bytes: " + tamañoMin);

        int numEntero = 2;
        System.out.println("numero Entero=" + numEntero);
        System.out.println("Int corresponde en bytes: " + Integer.BYTES);
        System.out.println("Int Tamaño: " + Integer.SIZE);
        System.out.println("Int maax en bytes: " + Integer.MAX_VALUE);
        System.out.println("Int min en bytes: " + Integer.MIN_VALUE);

        float numFloat = 0.0000000000000015f;
        System.out.println("numFloat= " + numFloat);
        System.out.println("Float corresponde en bytes: " + Float.BYTES);
        System.out.println("Float  Tamaño: " + Float.SIZE);
        System.out.println("Float  maax en bytes: " + Float.MAX_VALUE);
        System.out.println("Float  min en bytes: " + Float.MIN_VALUE);


        double numDouble = 3.444444E39;
        System.out.println("numDouble= " + numDouble);
        System.out.println("Double corresponde en bytes: " + Double.BYTES);
        System.out.println("Double  Tamaño: " + Double.SIZE);
        System.out.println("Double  maax en bytes: " + Double.MAX_VALUE);
        System.out.println("Double  min en bytes: " + Double.MIN_VALUE);

        boolean valBool = (3 - 2 == 4);

        System.out.println("Valor Boleano= " + valBool);



        System.out.println("Long corresponde en bytes: " +Long.BYTES );
        System.out.println("Long  Tamaño: " + Long.SIZE );
        System.out.println("Long  maax en bytes: " + Long.MAX_VALUE );
        System.out.println("Long  min en bytes: " + Long.MIN_VALUE );


        System.out.println("Short corresponde en bytes: " +Short.BYTES );
        System.out.println("Short Tamaño: " + Short.SIZE );
        System.out.println("Short  maax en bytes: " + Short.MAX_VALUE );
        System.out.println("Short  min en bytes: " + Short.MIN_VALUE );

        var miVar='2';
        System.out.println("miVar= " + miVar);


    }



}
