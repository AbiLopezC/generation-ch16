package EjerciciosResumen;

public class EjemploAnimal {

    public static void main(String[] args) {

        Animal miAnimal = new Animal("Pablo", 5, "poodle");
        miAnimal.setEdad(3);
        miAnimal.setRaza("Puddle");
        System.out.println("EL nombre es: " + miAnimal.getNombre());
        System.out.println("tiene " + miAnimal.getEdad() + "años y es " + miAnimal.getRaza());

        Animal animalito = new Animal();
        animalito.setRaza("chihuahua");
        System.out.println("animalito es + " + animalito.getRaza() + "se llama "+ animalito.getNombre()+ "y tiene" + animalito.getEdad() + "años");

    }

    }
