$(document).ready(function(){

    cecosTable = new CecosTable();

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

    $("#btnAdd").click(function(){


        $("#formRead").hide();
        $("#formAdd").show();

        cecosTable.deleteTable("#datatable");
        $('.dynamic-title').html("Dar click en la operacion deseada");

        $.ajax({

            url:'http://35.243.156.112/plataforma/balanza/cecos/indice',
            method:'GET',
            success:function(response){
    
                while(!response){ }
                const data = JSON.parse(response);
                cecosTable.readData(data);
                cecosTable.writeTable("#datatable");
    
            }
    
        });

    });

});