<%
    response.cookies("equipo")=request.QueryString("equipo")
    response.cookies("ubicacion")=request.QueryString("ubicacion")
    response.cookies("entradas")=request.QueryString("entradas")
    response.cookies("nombre")=request.QueryString("nombre")
    response.cookies("apellido")=request.QueryString("apellido")
    response.cookies("email")=request.QueryString("email")
    response.cookies("confirmationEmail")=request.QueryString("confirmationEmail")
    response.cookies("tarjeta")=request.QueryString("tarjeta")
%>
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
        dim ubicaciones(4) 
        ubicaciones(0)="Popular Local"
        ubicaciones(1)="Popular Visitante"
        ubicaciones(2)="Platea Local"
        ubicaciones(3)="Platea Visitante"
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
        dim precioFinal
        precioFinal = precio * entradas
        response.cookies("precio")=precioFinal
    %>

    <div class="center">
        <table>
        <tr>
        <td>Encuentro: <% response.write(equipo) %> </td>
        <td>Ubicación: <% response.write(ubicaciones(ubicacion-1)) %></td>
        <td>Cantidad: <% response.write(entradas) %></td>
        <td>Precio: <% response.write(precioFinal) %></td>
        </tr>
        <tr>
        <td>Apellido: <% response.write(apellido) %> </td>
        <td>Nombre: <% response.write(nombre) %> </td>
        <td>E-Mail: <% response.write(email) %> </td>
        <td>Tarjeta: <% response.write(tarjeta) %> </td>
        </tr>
        </table>
    </div>


	<a href="Finalizacion.asp"><img src="./img/QRcode.PNG" alt="QR" width="100" height="100"></a>

  </body>
</html>
