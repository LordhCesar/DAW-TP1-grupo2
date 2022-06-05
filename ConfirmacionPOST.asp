<%
    response.cookies("equipo")=request.Form("equipo")
    response.cookies("ubicacion")=request.Form("ubicacion")
    response.cookies("entradas")=request.Form("entradas")
    response.cookies("precio")=request.Form("precio")
    response.cookies("nombre")=request.Form("nombre")
    response.cookies("apellido")=request.Form("apellido")
    response.cookies("email")=request.Form("email")
    response.cookies("confirmationEmail")=request.Form("confirmationEmail")
    response.cookies("tarjeta")=request.Form("tarjeta")
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
        equipo = request.Form("equipo")
        dim ubicacion
        ubicacion = request.Form("ubicacion")
        dim entradas
        entradas = request.Form("entradas")
        dim precio
        precio = request.Form("precio")
        dim nombre
        nombre = request.Form("nombre")
        dim apellido
        apellido = request.Form("apellido")
        dim email
        email = request.Form("email")
        dim confirmationEmail
        confirmationEmail = request.Form("confirmationEmail")
        dim tarjeta
        tarjeta = request.Form("tarjeta")
        dim precioFinal
        precioFinal = precio * entradas
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
