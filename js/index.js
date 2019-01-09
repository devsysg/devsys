
function reloj()
{
}


function relojillo()
{
}

$(document).ready(function(){

    console.log("JS Cargado");


    Alto = $( window ).height();
    console.log("El alto es:"+Alto);
    Ancho= $( window ).width();
    console.log("El ancho es:"+Ancho);
    $("#v_ancho").text("El ancho es: "+Ancho);
    $("#v_alto").text("El alto es: "+Alto);

    $(window).resize(function(){
      Alto= $( window ).height() ;
      console.log("El nuevo alto es:"+Alto);
      $("#v_ancho").text("El ancho es: "+Ancho);

      Ancho= $( window ).width() ;
      console.log("El nuevo ancho es:"+Ancho);
      $("#v_alto").text("El alto es: "+Alto);
    });




});
