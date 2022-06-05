<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Confirmacion</title>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
        }
        table, th, td {
            border:double 3px black;
            }
        .center {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>
  </head>
  <body>
    <%
        dim equipo
        equipo = request.QueryString("equipo")
        dim ubicacion
        ubicacion = request.QueryString("ubicacion")
        dim entradas
        entradas = request.QueryString("entradas")
        dim precio
        precio = request.QueryString("precio")
        dim nombre
        nombre = request.QueryString("nombre")
        dim apellido
        apellido = request.QueryString("apellido")
        dim email
        email = request.QueryString("email")
        dim confirmationEmail
        confirmationEmail = request.QueryString("confirmationEmail")
        dim tarjeta
        tarjeta = request.QueryString("tarjeta")
    %>

    <div class="center">
        <table>
        <tr>
        <td>Encuentro: <% response.write(equipo) %> </td>
        <td>Ubicacion: <% response.write(ubicacion) %> </td>
        <td>Cantidad: <% response.write(ubicacion) %></td>
        <td>Precio: <% response.write(precio) %></td>
        </tr>
        <tr>
        <td>Apellido: <% response.write(apellido) %> </td>
        <td>Nombre: <% response.write(nombre) %> </td>
        <td>E-Mail: <% response.write(email) %> </td>
        <td>Tarjeta: <% response.write(tarjeta) %> </td>
        </tr>
        </table>
    </div>


  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/220px-QR_code_for_mobile_English_Wikipedia.svg.png" alt="Logo" width="150" height="150">

  </body>
</html>
