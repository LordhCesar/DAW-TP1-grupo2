let entradas = document.getElementById("entradas");
entradas.addEventListener("blur", validarEntradas);
let apellido = document.getElementById("apellido");
apellido.addEventListener("blur", validarApellido);
let nombre = document.getElementById("nombre");
nombre.addEventListener("blur", validarNombre);
let email = document.getElementById("email");
email.addEventListener("blur", validarEmail);
let confirmationEmail = document.getElementById("confirmationEmail");
confirmationEmail.addEventListener("blur", validarConfirmationEmail);


function validarEntradas() {
    if (entradas.value == "") {
        entradas.className = "error";
        document.getElementById("errorEntradas").innerHTML = "Debe ingresar una cantidad de entradas";
        // alert("Debe ingresar una cantidad de entradas");
      }else{
        entradas.className = "";
        document.getElementById("errorEntradas").innerHTML = "";
    }
  };

function validarApellido() {
    if (apellido.value == "") {
        apellido.className = "error";
        document.getElementById("errorApellido").innerHTML = "Debe ingresar un apellido";
        // alert("Debe ingresar un apellido");
    }else{
        apellido.className = "";
        document.getElementById("errorApellido").innerHTML = "";
    }
  };

  function validarNombre() {
    if (nombre.value == "") {
        nombre.className = "error";
        document.getElementById("errorNombre").innerHTML = "Debe ingresar un nombre";
        // alert("Debe ingresar un nombre");
    }else{  
      document.getElementById("errorNombre").innerHTML = "";
        nombre.className = "";
    }
  };

  function validarEmail() {
    if (email.value == "") {
        email.className = "error";
        document.getElementById("errorEmail").innerHTML = "Debe ingresar un email";
        // alert("Debe ingresar un email");
    }else{
        document.getElementById("errorEmail").innerHTML = "";
        email.className = "";
    }
  };

  function validarConfirmationEmail() {
    if (confirmationEmail.value == "") {
        confirmationEmail.className = "error";
        document.getElementById("errorConfirmationEmail").innerHTML = "Debe ingresar el email";
        // alert("Debe ingresar el email");
    }else{
        document.getElementById("errorConfirmationEmail").innerHTML = "";
        confirmationEmail.className = "";
    }
  };


// let visa = document.getElementById("visa");
// visa.addEventListener("click", clic);



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
    document.getElementById("errorEntradas").innerHTML = "Debe ingresar una cantidad de entradas";
  }
  if (apellido.value == "") {
    error = true;
    mensajesError += "Debe ingresar el apellido\n";
    apellido.className = "error";
    document.getElementById("errorApellido").innerHTML = "Debe ingresar un apellido";
  }
  if (nombre.value == "") {
    error = true;
    mensajesError += "Debe ingresar el nombre\n";
    nombre.className = "error";
    document.getElementById("errorNombre").innerHTML = "Debe ingresar un nombre";
  }
  if (email.value == "") {
    error = true;
    mensajesError += "Debe ingresar un email\n";
    email.className = "error";
    document.getElementById("errorEmail").innerHTML = "Debe ingresar un email";
  }
  if (confirmationEmail.value == "") {
    error = true;
    mensajesError += "Debe confirmar el email ingresado\n";
    confirmationEmail.className = "error";
    document.getElementById("errorConfirmationEmail").innerHTML = "Debe ingresar el email";
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
