$(document).ready(function(){


 $.ajax({


    url:'http://35.243.156.112/plataforma/balanza/resumen/indice',
    method:'GET',
    data:'',
    success:function (response) {

        console.log(response);

    }

 });


});