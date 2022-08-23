import java.util.ArrayList;
import java.util.List;

public class Coleccion {
    public static void main(String[] args){

        //list -- ArrayList
        //los valores se ordenan segun el orden en que se van agragando
      //coleccion de objetos

        List<String> meses=new ArrayList<String>();
        System.out.println(meses);

        meses.add("enero");
        meses.add("febrero");
        meses.add("marzo");
        meses.add(1,"Abril");
       String removido= meses.remove(3);


        System.out.println(meses);
        System.out.println(removido);
        System.out.println(meses.get(0));
        System.out.println(meses.size());

        for(String elemento:meses){

            System.out.println(elemento);
        }

        //List<int> numeros=new ArrayList<int>()

        //clases envolventes o wraper
        int num1=10;
        Integer num2=10;

        System.out.println(num1+10);
        System.out.println(num2-5);

        System.out.println(num2.getClass().getSimpleName());


        List<Integer> numeros=new ArrayList<Integer>();
        numeros.add(2);
        numeros.add(500);
        numeros.add(12);
        numeros.add(122);

        System.out.println(numeros);


    }

}
