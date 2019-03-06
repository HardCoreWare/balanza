$(document).ready(function(){


    $("#cecosRadio").click(function(){

        let option=$(this).val();

        alert(option);

    });


    $.ajax({

        url:'http://35.243.156.112/plataforma/balanza/cecos/indice',
        method:'GET',
        success:function(response){

            while(!response){}

            const data = JSON.parse(response);
            cecosTable = new CecosTable();
            cecosTable.readData(data);
            cecosTable.writeTable("#datatable");

        }

    });


});