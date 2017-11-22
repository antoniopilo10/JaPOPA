
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
  //verificacion

  var pass = document.getElementById("password").value;
  var compass = document.getElementById("confpassword").value;
  var dia = document.getElementById("birthd").value;
  var year = document.getElementById("birthy").value;
  
  if (pass != compass){
    document.getElementById("alerta1").innerHTML = "Su contraseña y su confirmación de contraseña deben ser identicos!";
    return false;
  }
  if (dia > 31 || dia < 1){
    document.getElementById("alerta2").innerHTML = "Ingrese un dia valido!";
    return false;
  }
  if (year > 2016 || year < 1916){
    document.getElementById("alerta3").innerHTML = "Ingrese un año valido!";
    return false;
  }
}


//flechita :D
$(document).ready(function(){

  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

});


 /**
     * Array con las imagenes y enlaces que se iran mostrando en la web
     */
    var imagenes=new Array(
        ['./resources/imagenes/xiaomi.jpg'],
        ['./resources/imagenes/cuba.jpg'],
        ['./resources/imagenes/tecnologia.png'],
        ['./resources/imagenes/paquetesrusia.jpg']
    );
 
    /**
     * Funcion para cambiar la imagen y link
     */
    function rotarImagenes()
    {
        // obtenemos un numero aleatorio entre 0 y la cantidad de imagenes que hay
        var index=Math.floor((Math.random()*imagenes.length));
 
        // cambiamos la imagen y la url
        document.getElementById("slides").src=imagenes[index];
    }
 
    /**
     * Función que se ejecuta una vez cargada la página
     */
    onload=function()
    {
        // Cargamos una imagen aleatoria
        rotarImagenes();
 
        // Indicamos que cada 5 segundos cambie la imagen
        setInterval(rotarImagenes,3900);
    }

    /*confirmacion de registro
   $(document).ready(function(){
    $("#submit").submit(function(){
      $("#mensaje").html("Registro realizado con exito!");
        $("form").hide();
    });
});

$( "form" ).submit(function( event ) {
      if ( ($( "#name" ).val() != "") && ($( "#email" ).val() != "")  ) {
        $( "#mensaje" ).text( "Registro realizado con exito!" ).show();
        return;
      }

      $( "#mensaje" ).text( "Hay campos vacios, complete todos los campos!" ).show().fadeOut( 1000 );
      event.preventDefault();
    });*/