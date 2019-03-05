$(document).ready(function(){

    $.ajax({

        url:'http://35.243.156.112/plataforma/balanza/cecos/indice',
        method:'GET',
        success:function(response){

            console.log(response);

        }

    });


});