
// Set the date we're counting down to
var  tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate()+1);
tomorrow.setHours(0,0,0,0);

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = tomorrow - now;
    
    // Time calculations for  hours, minutes and seconds
  
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("horas").innerHTML = hours;
    document.getElementById("minutos").innerHTML = minutes;
    document.getElementById("segundos").innerHTML = seconds;
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "--EXPIRED--";
    }
}, 1000);

//formulario de contacto//

    /*function postSubmit(){
    
      var nombre = document.getElementById("nombreId").value;
      var apellido = document.getElementsByName("apellido")[0].value;
      
      var mensaje = "Gracias por comunicarte con nosotros "+ nombre + " " + apellido;
      
      document.getElementById("mensajes").innerHTML = mensaje;
    
    }
  
    function preSubmit(){
      
      var nombre = document.getElementById("nombreId").value;
      var apellido = document.getElementsByName("apellido")[0].value;
      var telefono = document.getElementsByName("telefono")[0].value;
      var email = document.getElementsByName("email")[0].value;
      
      var nombreVacio = siVacio(nombre);
      var apellidoVacio = siVacio(apellido);
      var telefonoVacio = siVacio(telefono);
      var emailVacio = siVacio(email);
      
      
      if (nombreVacio || apellidoVacio || telefonoVacio || emailVacio){
        document.getElementById("mensajes").innerHTML = "Por favor complete los datos obligatorios";
      
        return false;
      }

      postSubmit();
      
      return false;
    }
    
    function siVacio(valor){
      if (valor == "")
        return true;
      else
        return false;
    }
    
    function siVacioV2(valor){
      return valor == "";
    } */
    

    function enviar() {
  //verificamos que al enviar la contraseña y su confirmacion sean iguales

  var pass = document.getElementById("password").value;
  var compass = document.getElementById("confpassword").value;
  if (pass != compass){
   document.getElementById("alerta").innerHTML = "Su contraseña y su confirmación de contraseña deben ser identicos!";
    return false;
  }
}

  
      
 