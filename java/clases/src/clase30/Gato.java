package clase30;

public class Gato extends Perro {
    // Propiedades
    private int peso;

    // Constructor
    public Gato(String nombre, int edad, String raza, String color, int peso) {
        super(nombre, edad, raza, color); // con super llamamos al constructor de la clase padre
        this.peso = peso;
    }

    // Getters y Setters

    // Métodos
    public void comer(int comida) {
        if (comida > 1 ) {
            this.peso++;
        }
    }
}
