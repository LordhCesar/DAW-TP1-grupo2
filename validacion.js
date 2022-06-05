const form = document.getElementById("form");
form.addEventListener("submit", enviar);

function enviar() {
  e.preventDefault(); //prevenir accion por defecto

  let error = false;
  let mensajesError = "";
  resetear();

  //logica de validacion

  if (document.getElementById("nombre").value == "") {
    error = true;
    mensajesError += "<p>El campo nombre es obligatorio</p>";
    document.getElementById("nombre").className = "error"; //className agrega una clase
  }

  if (document.getElementById("apellido").value.length == 0) {
    error = true;
    mensajesError += "<p>El campo apellido es obligatorio</p>";
    document.getElementById("apellido").className = "error"; //className agrega una clase
  }

  if (document.getElementById("provincia").value == "0") {
    error = true;
    mensajesError += "<p>Selecciona una provincia</p>";
  }

  if (!document.getElementById("condiciones").checked) {
    error = true;
    mensajesError += "<p>Es obligatorio que aceptes los terminos</p>";
  }

  // getEelementById es el unico que devueve un unico elemento, todos los demas getElements devuelven un array
  let opciones = document.getElementsByName("sexo");
  let seleccionado = false;
  for (i in opciones) {
    if (opciones[i].checked) {
      seleccionado = true;
    }
  }
  if (!seleccionado) {
    error = true;
    mensajesError += "<p>Es obligatorio que indiques tu sexo</p>";
  }

  //si hay errorer que se muestren
  //Si no los hay, que el formulario se envie
  if (error) {
    document.getElementById("mensaje").innerHTML = mensajesError;
  } else {
    //this hace referencia a quien dispara el evento, o sea al objeto
    this.submit();
  }

  function resetear() {
    document.getElementById("nombre").className = "";
    document.getElementById("apellido").className = "";
  }
}
