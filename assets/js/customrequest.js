$(document).ready(function(){


    $.ajax({

        url:'http://35.243.156.112/plataforma/balanza/editables/indice',
        method:'POST',
        data:'',
        success:function (response) {

            data=JSON.parse(response);
            const table = new CustomTable();
            table.readData(data);
            table.writeTable("#datatable");

            $("#btnUpdate").click(function(){

                

            });
            
        }

    });


});