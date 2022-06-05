const form = document.getElementById("form");
form.addEventListener("submit", enviar(e));

function enviar(e) {
  e.preventDefault(); //prevenir accion por defecto

  let error = false;
  let mensajesError = "";

  let entradas = document.getElementById("entradas");
  let apellido = document.getElementById("apellido");
  let nombre = document.getElementById("nombre");
  let email = document.getElementById("email");
  let confirmationEmail = document.getElementById("confirmationEmail");

  if (entradas.value == "") {
    error = true;
    mensajesError += "<p>Debe ingresar una cantidad de entradas</p>";
    entradas.className = "error";
  }
  if (apellido.value == "") {
    error = true;
    mensajesError += "<p>Debe ingresar el apellido</p>";
    apellido.className = "error";
  }
  if (nombre.value == "") {
    error = true;
    mensajesError += "<p>Debe ingresar el nombre</p>";
    nombre.className = "error";
  }
  if (email.value == "") {
    error = true;
    mensajesError += "<p>Debe ingresar un email</p>";
    email.className = "error";
  }
  if (confirmationEmail.value == "") {
    error = true;
    mensajesError += "<p>Debe confirmar el email ingresado</p>";
    confirmationEmail.className = "error";
  }




//   if (document.getElementById("apellido").value.length == 0) {
//     error = true;
//     mensajesError += "<p>El campo apellido es obligatorio</p>";
//     document.getElementById("apellido").className = "error"; //className agrega una clase
//   }

//   if (document.getElementById("provincia").value == "0") {
//     error = true;
//     mensajesError += "<p>Selecciona una provincia</p>";
//   }

//   if (!document.getElementById("condiciones").checked) {
//     error = true;
//     mensajesError += "<p>Es obligatorio que aceptes los terminos</p>";
//   }

//   // getEelementById es el unico que devueve un unico elemento, todos los demas getElements devuelven un array
//   let opciones = document.getElementsByName("sexo");
//   let seleccionado = false;
//   for (i in opciones) {
//     if (opciones[i].checked) {
//       seleccionado = true;
//     }
//   }
//   if (!seleccionado) {
//     error = true;
//     mensajesError += "<p>Es obligatorio que indiques tu sexo</p>";
//   }



  //si hay errorer que se muestren
  //Si no los hay, que el formulario se envie
  if (error) {
    //document.getElementById("mensaje").innerHTML = mensajesError;
    alert(mensajesError);
  } else {
    //this hace referencia a quien dispara el evento, o sea al objeto
    this.submit();
  }

 
}
