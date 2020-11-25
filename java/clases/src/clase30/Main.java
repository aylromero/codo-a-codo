package clase30;

public class Main {
    public static void main(String[] args) {
        /*
        Perro perro1 = new Perro();
        perro1.nombre = "Luna";
        perro1.edad = 4;
        perro1.raza = "mestizo";
        perro1.tamano = "chico";
        perro1.color = "marrón";
        System.out.println("Nombre: " + perro1.nombre + "Edad: " + perro1.edad + " Raza: " + perro1.raza + " Tamaño: " + perro1.tamano + " Color: " + perro1.color);
        Perro perro2 = new Perro();
        perro2.nombre = "Firulais";
        */
        Perro pastor = new Perro("Luna", 5, "Pastor alemán", "Grande", "Negro");
        System.out.println(pastor.getNombre() + "\n" + pastor.getEdad() + "\n" + pastor.getRaza() + "\n" + pastor.getTamano() + "\n" + pastor.getColor()); // alt + 92

        Perro mestizo = new Perro("Himba", 4, "Mestizo", "Chico", "Blanco");
        Perro golden = new Perro("Perrito", 9, "Golden Retriever", "Grande", "Dorado");
        Perro chihuaha = new Perro("Pipi", 5, "Chihuahua", "Chico", "Marrón");

        Perro nuevo = new Perro("Nuevo", 5);
        Perro nuevo2 = new Perro("Nuevo2", 5, "Mestizo", "Negro");

        Gato siames = new Gato("Leo", 2, "Siamés", "Blanco", 3);
        Gato persa = new Gato("Lucas", 6, "Persa", "Gris", 2);

        Perro[] perros = {pastor, mestizo, golden, chihuaha};


        Metodos.datos(perros);

    }
}
