<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Finalizacion</title>
    <style>
        table {
            width: 80%;
            border: solid 2px black;
            border-radius: 10px;
            padding: 5px;
            font-weight: bold;
            text-align: center;
            }
        th, td {
                padding: 10px;
                border: solid 2px black;
                border-radius: 8px;
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
        if request.cookies("equipo") <> "" then
            response.write("<h3>Datos de su reserva: </h3>")
        else
            response.write("<h3>No se encontro datos</h3>")
        end if
    %>

    <div class="center">
        <table>
        <tr>
        <td>Encuentro: <% response.write(request.cookies("equipo")) %> </td>
        <td>Ubicacion: <% response.write(request.cookies("ubicacion")) %> </td>
        </tr>
        <tr>
        <td>Cantidad: <% response.write(request.cookies("entradas")) %></td>
        <td>Precio: <% response.write(request.cookies("precio")) %></td>
        </tr>
        <tr>
        <td>Apellido: <% response.write(request.cookies("apellido")) %> </td>
        <td>Nombre: <% response.write(request.cookies("nombre")) %> </td>
        </tr>
        <tr>
        <td>E-Mail: <% response.write(request.cookies("email")) %> </td>
        <td>Tarjeta: <% response.write(request.cookies("tarjeta")) %> </td>
        </tr>
        </table>
    </div>


  </body>
</html>

        
