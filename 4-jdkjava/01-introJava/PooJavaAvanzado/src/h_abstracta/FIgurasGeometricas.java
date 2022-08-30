package h_abstracta;

public abstract class FIgurasGeometricas {

    private String nombre;
    private int numero;

    //metodo abstacto: solo tiene una declaracion, solo define el nombre

    //abstracto porque no hay definicion del metodo

    public abstract float area();

    public FIgurasGeometricas(String nombre){
        this.nombre= nombre;
    }
    @Override
    public String toString() {
        return  nombre+ " area con constructor -> "+  area();
    }
}
