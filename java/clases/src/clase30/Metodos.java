package clase30;

public class Metodos {
    public static void datos(Perro[] perros) {
        for(Perro perro : perros) {
            System.out.println("\n" + "Nombre: " + perro.getNombre());
            System.out.println("Edad: " + perro.getEdad());
            System.out.println("Raza: " + perro.getRaza());
            System.out.println("Tamaño: " + perro.getTamano());
            System.out.println("Color: " + perro.getColor() + "\n");
        }
    }
}
