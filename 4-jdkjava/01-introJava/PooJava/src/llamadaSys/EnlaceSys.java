package llamadaSys;

import EjerciciosResumen.Animal;
import MenuOp.MenuO;
import MiEjemploJava.Persona;
import MiFecha.Fecha;
import MiSaludo.Saludo;

import java.util.Scanner;

public class EnlaceSys {
    public void enlazar()

    {

        Scanner sc = new Scanner(System.in);

        MenuO menuO = new MenuO();
        menuO.menu();
        System.out.println("elija una opcion->  ");
        int op = sc.nextInt();

        do {

            switch (op) {
                case 1:
                    Saludo s = new Saludo();

                    s.saludar();
                    System.out.println(s.saludar0());
                    break;

                case 2:
                    Persona p = new Persona();
                    p.dormir();
                    p.caminar();

                    break;
                case 3:
                    Fecha f = new Fecha();

                    f.setDia(25);
                    f.setMes(02);
                    f.setYear(2022);
                    System.out.println(f.formaF());


                    break;

                case 4:
                    Animal a = new Animal();

                    a.setRaza("chihuahua");
                    a.setEdad(2);
                    a.setNombre("Rawr");
                    System.out.println(" animalito es " + a.getRaza() + " se llama " + a.getNombre() + "y tiene " + a.getEdad() + " años");


                    break;

                default:
                    System.out.println("opcion no valida");

                    break;
            }
            menuO.menu();
            System.out.println("elija una opcion o presione 5 para salir");
            op = sc.nextInt();
        }
        while (op < 5);
    }

}
