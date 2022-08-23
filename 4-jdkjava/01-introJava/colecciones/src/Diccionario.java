import java.lang.invoke.StringConcatFactory;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.Scanner;

public class Diccionario {
    public static void main(String[] args) {
        /*
         *  Crear una clase llamada Diccionario
         *  Crear un programa en Java que realice lo siguiente:
         *  Crear un diccionario Español-Inglés, que contenga al menos 20 palabras (con traducción).
         *  Utilizar un objeto HashMap para almacenar los pares de palabras.
         *  Escoger al azar 5 palabras del mini diccionario.
         *  Pedir al usuario que teclee la palabra en inglés y que se imprima la traducción
         * Extra:
         *  Pedir al usuario que teclee la traducción al inglés de cada una de las palabras y comprobará si son correctas.
         *  Al final debe mostrar por consola cuántas respuestas correctas e incorrectas tiene el usuario.

         * */

        System.out.println("Diccionario");
        Map<String,String> diccionario= new HashMap<String,String>();
        diccionario.put("Bumblebee","Abejorro");
        diccionario.put("Phenomenal","Extraordinario");
        diccionario.put("Unicorn","Unicornio");
        diccionario.put("Blood","Sangre");
        diccionario.put("Cloud","Nube");
        diccionario.put("Century","Siglo");
        diccionario.put("Flower","Flor");
        diccionario.put("Bird","Pajaro");



        Scanner input = new Scanner(System.in);
        Random random = new Random();


        for (int i=0; i<random.NextInt(); i++){
            Object llaves=diccionario.keySet().toArray()[i];
            Object valor=diccionario.values().toArray()[i];

            System.out.println("Escriba " +  valor + " en ingles");
            String palabra = input.nextLine();
            System.out.println("usted escribio "+ palabra);
            System.out.println(llaves + "-" + diccionario.get(llaves));
        }



    }
}
