import java.util.HashSet;
import java.util.Set;

public class Coleccion2 {
    public static void main(String[] args) {
        //SET
        //hashset
        //no guardan los valores en el orden qn el que s evan guardando

        Set<String> miSet= new HashSet<>();

        miSet.add("Juan");
        miSet.add("Pedro");
        miSet.add("Luis");
        miSet.add("Felipe");

        System.out.println(miSet);

        boolean persona=miSet.remove("Felipe");
        System.out.println(miSet);





    }
}
