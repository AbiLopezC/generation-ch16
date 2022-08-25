package MiFecha;

public class Fecha {

    private int dia;
    private int mes;
    private int year;


    public int getDia() {
        return dia;
    }

    public int getMes() {
        return mes;
    }

    public int getYear() {
        return year;
    }

    public void setDia(int dia) {
        this.dia = dia;
    }

    public void setMes(int mes) {
        this.mes = mes;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String formaF(){
        return ""+ getDia()+"/"+getMes()+"/"+getYear();
    }
}
