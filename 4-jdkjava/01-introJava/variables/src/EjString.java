import java.sql.SQLOutput;

public class EjString {
    public static void main(String[] args) {
        String curso="Curso en java";
        String nombre="Abi";
        String resultado= new String( "Curso en java");
        System.out.println("resultado= " + resultado);

        boolean esigual= curso== resultado;
        System.out.println("es igual= " + esigual);

        esigual= curso.equals(resultado);
        System.out.println("esigual= " + esigual);

        String concat= curso+ "con"+ nombre;
        System.out.println("concat = " + concat);
        String dia= "jueves";
        String concat1 = concat.concat(" ").concat(dia);


        System.out.println("concat1= "+ concat1);
    }

}
