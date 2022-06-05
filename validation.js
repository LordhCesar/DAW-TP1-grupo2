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
let tarjeta = document.getElementsByName("tarjeta");

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




let visa = document.getElementById("visa");
visa.addEventListener("click", function(){
  alert("3 Cuotas sin interés")
});

let master = document.getElementById("master");
master.addEventListener("click", function(){
  alert("6 Cuotas sin interés")
});

let american = document.getElementById("american");
american.addEventListener("click", function(){
  alert("12 Cuotas sin interés")
});



const form = document.getElementById("form");
form.addEventListener("submit", function (e){
  
  e.preventDefault(); 
  
  let error = false;
  let mensajesError = "";
  
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

  if (email.value == confirmationEmail.value) {
    error = true;
    mensajesError += "Los emails no coinciden\n";
    email.className = "error";
    confirmationEmail.className = "error";
    document.getElementById("errorConfirmationEmail").innerHTML = "Los emails no coinciden";
  }
  
  
  let select = false;
  for (i in tarjeta) {
    if (tarjeta[i].checked) {
      select = true;
    }
  }

  if (!select) {
    error = true;
    mensajesError += "Debe seleccionar una tarjeta\n";
    document.getElementById("errorTarjeta").innerHTML = "Debe seleccionar una tarjeta";
  } else {
    document.getElementById("errorTarjeta").innerHTML = "";
  }


  
  if (error) {
    alert(mensajesError);
  } else {
    this.submit();
  }
  
  
});

