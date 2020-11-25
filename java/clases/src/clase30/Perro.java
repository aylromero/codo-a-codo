package clase30;

public class Perro {
    // Propiedades de la clase Perro
    private String nombre;
    private int edad;
    private String raza;
    private String tamano;
    private String color;

    // Método constructor
    public Perro(String nombre, int edad, String raza, String tamano, String color) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
        this.tamano = tamano;
        this.color = color;
    }

    public Perro(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public Perro(String nombre, int edad, String raza, String color) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
        this.color = color;
    }

    // Getters
    public String getNombre() { // public porq desde cualquier lugar vamos a querer acceder a este método q nos devuelve el nombre
        return this.nombre;

    }

    public int getEdad() {
        return this.edad;
    }

    public String getRaza() {
        return this.raza;
    }

    public String getTamano() {
        return this.tamano;
    }

    public String getColor() {
        return this.color;
    }

    // Setters
    public void setEdad(int edad) {
        this.edad = edad;
    }

    public void setNombre(String nombre) {
        if (this.edad < 1) {
            this.nombre = nombre;
        } else {
            System.out.println("No podes cambiarle el nombre al perro");
        }
    }

    /*
    public void setRaza(String raza) { // No se puede porque la propiedad raza es una constante
        this.raza = raza;
    }  */

    public static void terminal() {
        //  System.out.println(nombre); error porque nombre depende de un objeto
    }

}

