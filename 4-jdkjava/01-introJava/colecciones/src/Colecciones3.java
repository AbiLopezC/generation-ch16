import com.sun.source.doctree.SeeTree;

import java.awt.*;
import java.util.*;
import java.util.List;

public class Colecciones3 {
    public static void main(String[] args) {
        //clases wrapper
        //nos serive para  poder usar metodos (set, list,etc) con los datos primitivos
        //int ->Integer
        //char -> Character
        //float -> Float
        //double-> Double

        System.out.println("ArrayList");

        List<String> comidas=new ArrayList<String>();
        comidas.add("Pozole");
        comidas.add("Tostadas");
        comidas.add("Ceviche");
        comidas.add(2,"Esquite");

        System.out.println(comidas);

        List<Integer> numeros= new ArrayList<Integer>(Arrays.asList(1,2,3,4));
        System.out.println(numeros);

        System.out.println("----------------------------");

        System.out.println("HashSet");

        Set<String> ciudades =new HashSet<String>();
        ciudades.add("GDL");
        ciudades.add("CDMX");
        ciudades.add("MTY");

        System.out.println(ciudades);
        Set<Boolean> verdad= new HashSet<Boolean>(Arrays.asList(true,false,true,false));
        System.out.println(verdad);

        System.out.println("----------------------------");
        System.out.println("HashMap");

        //Nos permiten guardar oares de valores
        //llave:valor
        //HashMap<Llave, Valor>

        Map<Integer,String> alumnos= new HashMap<Integer,String>();
        alumnos.put(1,"Maria Sanchez");
        alumnos.put(2,"Pedro Lopez");
        alumnos.put(3,"Mariana Cruz");
        alumnos.put(4,"Luis Martinez");
        alumnos.put(5,"Luis Martinez");

        System.out.println(alumnos);
        System.out.println(alumnos.size());
        System.out.println(alumnos.values());
        System.out.println(alumnos.keySet());
        System.out.println(alumnos.get(2));

        //for normal
        for (int i=0; i<alumnos.size(); i++){
            Object llaves=alumnos.keySet().toArray()[i];
            System.out.println(alumnos.get(llaves));
        }

        //forEach
        for(Integer llave:alumnos.keySet()){
            System.out.println(llave + "-" + alumnos.get(llave));
        }








    }
}
