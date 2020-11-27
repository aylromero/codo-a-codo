package clase32;

import java.sql.*;

public class Main {
    public static void main(String[] args) {
        // Conexión
        String url = "jdbc:mysql://localhost:3306/usuarios";
        String user = "root";
        String password = "1234";

        // Campos db
        String campoId = "id";
        String campoNombre = "nombre";
        String campoApellido = "apellido";
        String campoEmail = "email";

        // Consultas
        String consultaSelect = "SELECT * FROM usuarios"; // acá adentro vamos a poner la consulta
        String consulta2 = "SELECT * FROM usuarios where id = 1;";
        String queryUpdate = "UPDATE usuarios set nombre = 'Jane' where id = 1";
        // "SELECT * FROM usuarios where id = ?;"
        String queryPreparedStatement = "SELECT * FROM usuarios WHERE id = ? AND nombre = ?;";

        try {
            // Conexión
            Connection mysql = DriverManager.getConnection(url, user, password);

            // Statement
            Statement hojaVirtual = mysql.createStatement();
            ResultSet resultado = hojaVirtual.executeQuery(consultaSelect);

            // Mostrar Datos
            System.out.println("---------- Select ----------");
            while (resultado.next()) { // nos movemos a la siguiente fila y preguntamos si hay información válida
                System.out.print(resultado.getInt(campoId) + ": ");
                System.out.print(resultado.getString(campoNombre) + " ");
                System.out.print(resultado.getString(campoApellido) + " ");
                System.out.println(resultado.getString(campoEmail) + " " + "\n");
            }

            resultado = hojaVirtual.executeQuery(consulta2);
            System.out.println("---------- Select consulta 2 ----------");
            while (resultado.next()) {
                System.out.print(resultado.getInt(campoId) + ": ");
                System.out.print(resultado.getString(campoNombre) + " ");
                System.out.print(resultado.getString(campoApellido) + " ");
                System.out.println(resultado.getString(campoEmail) + " " + "\n");
            }

            // Update
            hojaVirtual.executeUpdate(queryUpdate);
            resultado = hojaVirtual.executeQuery(consulta2);
            System.out.println("---------- Update ----------");
            while (resultado.next()) {
                System.out.print(resultado.getInt(campoId) + ": ");
                System.out.print(resultado.getString(campoNombre) + " ");
                System.out.print(resultado.getString(campoApellido) + " ");
                System.out.println(resultado.getString(campoEmail) + " " + "\n");
            }

            // PreparedStatement
            PreparedStatement queryPrepared = mysql.prepareStatement(queryPreparedStatement);
            queryPrepared.setInt(1, 4);
            queryPrepared.setString(2, "Katy");
            resultado = queryPrepared.executeQuery();
            System.out.println("---------- PreparedStatement ----------");
            while (resultado.next()) {
                System.out.print(resultado.getInt(campoId) + ": ");
                System.out.print(resultado.getString(campoNombre) + " ");
                System.out.print(resultado.getString(campoApellido) + " ");
                System.out.println(resultado.getString(campoEmail) + " " + "\n");
            }

        } catch (SQLException error) {
            System.out.println("Error");
            error.printStackTrace();
        }

    }
}
