const form = document.getElementById("form");
form.addEventListener("submit", function (e){

  e.preventDefault(); 

  let error = false;
  let mensajesError = "";

  let entradas = document.getElementById("entradas");
  let apellido = document.getElementById("apellido");
  let nombre = document.getElementById("nombre");
  let email = document.getElementById("email");
  let confirmationEmail = document.getElementById("confirmationEmail");

  if (entradas.value == "") {
    error = true;
    mensajesError += "Debe ingresar una cantidad de entradas\n";
    entradas.className = "error";
  }
  if (apellido.value == "") {
    error = true;
    mensajesError += "Debe ingresar el apellido\n";
    apellido.className = "error";
  }
  if (nombre.value == "") {
    error = true;
    mensajesError += "Debe ingresar el nombre\n";
    nombre.className = "error";
  }
  if (email.value == "") {
    error = true;
    mensajesError += "Debe ingresar un email\n";
    email.className = "error";
  }
  if (confirmationEmail.value == "") {
    error = true;
    mensajesError += "Debe confirmar el email ingresado\n";
    confirmationEmail.className = "error";
  }




//   if (document.getElementById("apellido").value.length == 0) {
//     error = true;
//     mensajesError += "El campo apellido es obligatorio";
//     document.getElementById("apellido").className = "error"; //className agrega una clase
//   }

//   if (document.getElementById("provincia").value == "0") {
//     error = true;
//     mensajesError += "Selecciona una provincia";
//   }

//   if (!document.getElementById("condiciones").checked) {
//     error = true;
//     mensajesError += "Es obligatorio que aceptes los terminos";
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
//     mensajesError += "Es obligatorio que indiques tu sexo";
//   }



  //si hay errorer que se muestren
  //Si no los hay, que el formulario se envie
  if (error) {
    alert(mensajesError);
  } else {
    this.submit();
  }

 
});
