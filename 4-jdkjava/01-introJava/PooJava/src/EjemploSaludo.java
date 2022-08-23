public class EjemploSaludo {
    public static void main(String[] args) {
        Saludo objSaludo;
        objSaludo= new Saludo();
        objSaludo.saludar();

        Saludo objSaludo0= new Saludo();

        System.out.println(objSaludo.saludar0());
        System.out.println("este es otro objeto -> " + objSaludo0.saludar0());



    }
}