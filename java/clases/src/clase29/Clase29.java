package clase29;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Scanner;

public class Clase29 {
    public static void main(String[] args) throws IOException {
        int x = 5;
        String dia;
        String tipo;

        switch (x) {
            case 1:
                dia = "Lunes";
                break;
            case 2:
                dia = "Martes";
                break;
            case 3:
                dia = "Miércoles";
                break;
            case 4:
                dia = "Jueves";
                break;
            case 5:
                dia = "Viernes";
                break;
            case 6:
                dia = "Sábado";
                break;
            case 7:
                dia = "Domingo";
                break;
            default:
                dia = "Día inválido";
        }

        switch (x) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                tipo = "día laboral";
                break;
            case 6:
            case 7:
                tipo = "fin de semana";
                break;
            default:
                tipo = "día inválido";
        }
        System.out.println(dia + " es un " + tipo);

        Scanner sc = new Scanner(System.in);
        int a;
        int b;
        int c = 2;
        int d = 6;

        System.out.println("Ingrese un número: "); // imprimimos un msj antes de leer el número
        a = sc.nextInt(); // acá leemos el número
        System.out.println("Ingrese otro número: ");
        b = sc.nextInt();

        System.out.println("La suma es: " + (a + b));

        System.out.println("-------- Operadores Aritméticos ----------");

        int num1 = 10, num2 = 5, num3, num4, num5, num6;
        String str = "Hola", str2 = "Chau";

        // Operador + y -
        System.out.println("num1 + num2 = " + (num1 + num2));
        System.out.println("num1 - num2 = " + (num1 - num2));

        // Operador * y /
        System.out.println("num1 * num2 = " + (num1 * num2));
        System.out.println("num1 / num2 = " + (num1 / num2));

        // Operador %
        System.out.println("num2 % num1 = " + (num2 % num1));

        System.out.println("-------- Operadores unarios ----------");
        boolean condicion = true;

        // operador de pre-incremento: el valor se incrementa y después se calcula el resultado
        num3 = ++num1;
        System.out.println("Valor de num3: " + num3);

        // operador post-incremento: el valor se usa para calcular el resultado y después se incrementa
        num4 = num2++;
        System.out.println("Valor de num4: " + num4);

        // operador de pre-decremento: el valor se disminuye primero y después se calcula el resultado
        num5 = --num4;
        System.out.println("Valor de num5: " + num5);

        // operador post-decremento: el valor se usa por primera vez para calcular el resultado y después se disminuye
        num6 = num5++;
        System.out.println("Valor de num6: " + num6);

        System.out.println("-------- Operadores de asignación ----------");

        a = a + 1;
        b = b - 1;
        c = c * 2;
        d = d / 2;

        System.out.println("a, b, c, d = " + a + "," + b + "," + c + "," + d);

        a += 1;
        b -= 1;
        c *= 2;
        d /= 2;

        System.out.println("a, b, c, d = " + a + "," + b + "," + c + "," + d);

        System.out.println("-------- Operadores relacionales ----------");

        a = 5;
        b = 10;

        System.out.println("a == b" + (a == b)); // false
        System.out.println("a < b" + (a < b)); // true
        System.out.println("a <= b" + (a <= b)); // true
        System.out.println("a > b" + (a > b)); // false
        System.out.println("a >= b" + (a >= b)); // false
        System.out.println("a != b" + (a != b)); // true

        System.out.println("-------- Operadores lógicos ----------");
        String r = "admin";
        String y = "12345";

        System.out.println("Ingrese un usuario: ");
        String usuario = sc.next();
        System.out.println("Ingrese una contraseña: ");
        String contrasena = sc.next();

        if ((usuario.equals(r) && contrasena.equals(y) || (usuario.equals(y) && contrasena.equals(r)))) {
            System.out.println("Bienvenido");
        } else {
            System.out.println("Error");
        }

        System.out.println("-------- Operador ternario ----------");
        // resultado = (condicion) ? primerValor : segundoValor;
        int num7 = 1;
        int num8 = 20;
        System.out.println("El " + ((num7 > num8) ? "num7 es mayor al num8" : "num8 es mayor al num7"));

        if (num7 > num8) {
            System.out.println("El num7 es mayor");
        } else {
            System.out.println("El num8 es mayor");
        }

        FileInputStream in = new FileInputStream("datos.txt");

        int txt;

        while ((txt = in.read()) != -1) { /* creamos la vairable txt que va a almacenar cada byte que va a ir leyendo,
        entonces el código se va a ir repitiendo mientras la condición sea true, la condición es que guarde en la
        variable txt el byte leído y que después compruebe si el byte es distinto de -1, entonces el programada va a
        imprimir el valor del byte más un espacio */
            System.out.printf("%d ", txt);
        }
        in.close(); // cerramos el flujo

    }
}
