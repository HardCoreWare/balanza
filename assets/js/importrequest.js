$(document).ready(function(){

    $.ajax({

        url:"http://35.243.156.112/plataforma/balanza/informe/indice",
        method:"GET",
        data:"",
        success:function(response){

            const importTable = new ImportTable();

            if(importTable.validate()){


            }

        }


    });

});