package EjerciciosResumen;

public class Animal {

    private String raza;
    private String nombre;
    private int edad;

    public Animal() {
    }

    public Animal(String nuevoNombre){
        nombre=nuevoNombre;

    }

    public Animal(String pablo, int i, String poodle) {
    }

    public int getEdad(){
        return edad;
    }

    public void setEdad (int nuevaEdad){
        
        edad=nuevaEdad;
    }

    public String getNombre() {
        return nombre;
    }

    public void setRaza(String raza) {
    }

    public String getRaza() {
        return raza;
    }

    public void setNombre(String rawr) {
    }
}
