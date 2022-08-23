public class EjercicioAsterisco {
    public static void main(String[] args) {
        String valor = "";
        for (int i=0; i<5; i++){
            valor += "*";
            System.out.println(valor);

        }


        for(int espacios = 0, asteriscos = 5; asteriscos>0; espacios++, asteriscos -= 1){

        for(int i=0; i < espacios; i++){
            System.out.print("");
        }

        for(int j=asteriscos; j > 0; j--){
            System.out.print("*");
        }
            System.out.println("");
    }

    }
}

