import java.sql.Struct;

public class Arreglos {

    public static void main(String[] args) {
        //Arreglos
        //No se pueden mezclar tipos de datos

              //   List<Integer>
             //   Map<Strinf,Integer>
        int[] numeroAleatoreo={1,2,3,4,5,6,7};
        String[] valores= {"hola", "adios", "etc"};

        // byte otrosNumeros[]={1,2,3}
        char[] caracteres= new char[4];
        caracteres[0]='h';
        caracteres[1]='o';
        caracteres[2]='l';
        caracteres[3]='a';
        System.out.println( numeroAleatoreo.length);
        System.out.println( valores[2]);
        System.out.println(caracteres);

        //for Each

        for(String elemento: valores){
            System.out.println(elemento);
        }

        for (int numero : numeroAleatoreo){
            System.out.println(numero);
        }



    }
}
