package clase27;

public class Main {

    public static void siguienteNumero(int n) { // definimos un método que recibe como argumento un número
        n = n + 1; // incrementamos el número
        System.out.println("El número que le sigue a la variable a es: " + n); // imprimimos ese valor
    }

    public static void main(String[] args) {
        System.out.println("Hola, Mundo!"); // todas las sentencias terminan en punto y coma
        /* esto es
            un comentario
         */
        int a = 20; // creamos una variable primitiva que se llama "a"
        siguienteNumero(a);
        System.out.println("El valor de a es: " + a); // imprimimos

        // if - else - if else
        int x = 10;

        if (x > 5) {
            System.out.println("La variable x es mayor a 5");
        }

        if (x > 15) {
            System.out.println("La variable x es mayor a 15");
        } else {
            System.out.println("La variable x es menor a 15");
        }

        if (x >= 100) {
            System.out.println("La variable x es mayor o igual a 100");
        } else if (x >= 50) {
            System.out.println("La variable x es mayor o igual a 50");
        } else if (x >= 20) {
            System.out.println("La variable x es mayor o igual a 20");
        } else {
            System.out.println("La variable x no es mayor a 20");
        }
    }
}

