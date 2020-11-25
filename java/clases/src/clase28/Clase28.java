package clase28;

import java.util.Scanner;

public class Clase28 {
    public static void main(String[] args) { // main + tab
        // tipo de datos
        /* ------ boolean ----- */

        boolean b = true;
        if (b == true) {
            System.out.println("Hola!"); /* System es un objeto, out y print son métodos ligados
            al objeto System y ln para salto de línea -> sout + tab */

            boolean a;

            a = false;
            System.out.println("a es: " + a);

            a = true;
            System.out.println("a es: " + a);

            if (a) System.out.println("Esto se va a ejecutar");

            a = false;
            if (a) System.out.println("Esto no se va a ejecutar");
        }

        System.out.println("5 > 2 es: " + (5 > 2)); /* el resultado de un operador
        relacional es un valor booleano, el parentesis es necesario porque esta el operador
        + q tiene mayor precedencia que el > */

        // byte

        byte c = 126;
        System.out.println(c);

        c++;
        System.out.println(c); // 127

        c++;
        System.out.println(c);

        // byte d = 130; error

        char d = 'C'; // comillas simples en char
        // char z = "C"; error

        // int i = 2020, j = 2021, k = 2022; // mismo tipo

        short s = 2000;

        long l = 200L; // en mayúscula la L

        double ñ = 7.135565d; // d minuscula

        float r = 4.34f;

        System.out.println("char: " + d);

        System.out.println("short: " + s);
        System.out.println("long: " + l);
        System.out.println("double: " + ñ);
        System.out.println("float: " + r);

        // String

        String miCadena = new String("Cadena de texto");
        System.out.println(miCadena);

        String mi_cadena = "Otra cadena de texto";
        System.out.println(mi_cadena);

        /* la diferencia es que en el primer ejemplo instanciamos la clase, la creamos y en el segundo
           java crea el objeto string para esa cadena */

        miCadena = "Valor modificado";
        System.out.println(miCadena);

        // entrada de datos
        /*
        Scanner entrada = new Scanner(System.in);

        String usuario = entrada.nextLine(); /* creamos una variable y le asignamos un valor q va a ser el que
            ingresa el usuario, entonces llamamos a la instancia de Scanner que es "entrada" y con el método
            nextLine() vamos a tener una línea para ingresar esos datos */
        // System.out.println("Mi usuario es " + usuario);

        // if
        Scanner entrada = new Scanner(System.in);
        int numero = entrada.nextInt();
        if (numero > 50) {
            System.out.println("El número es ingresado es mayor a 50");
        } else {
            System.out.println("El número ingresado es menor a 50");
        }

        // switch
        switch (numero) {
            case 1:
                System.out.println("El número es 1");
                break;
            case 10:
                System.out.println("El número es 10");
                break;
            case 100:
                System.out.println("El número es 100");
                break;
            case 29483:
                System.out.println("El número es 29483");
                break;
            default:
                System.out.println("Otro número");
        }

        // For
        System.out.println("Tabla de multiplicar del: " + numero + "con For");
        for (int i = 1; i <= 10; i++) {
            System.out.println(numero + " x " + i + " = " + (i * numero));
        }

        // While
        System.out.println("Tabla de Multiplicar del: " + numero + "con While");
        int w = 1;
        while (w <= 10) {
            System.out.println(numero + " x " + w + " = " + (w * numero));
            w++;
        }
    }
}

