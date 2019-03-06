$(document).ready(function(){

    cecosTable = new CecosTable();

    $("#btnRead").click(function(){

        let option=$(this).val();

        alert(option);

    });


    $.ajax({

        url:'http://35.243.156.112/plataforma/balanza/cecos/indice',
        method:'GET',
        success:function(response){

            while(!response){}

            const data = JSON.parse(response);
            cecosTable.readData(data);
            cecosTable.writeTable("#datatable");

        }

    });


});