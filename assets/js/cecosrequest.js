$(document).ready(function(){

    cecosTable = new CecosTable();

    $.ajax({

        url:'http://35.243.156.112/plataforma/balanza/cecos/indice',
        method:'GET',
        success:function(response){

            while(!response){}

            const data = JSON.parse(response);
            cecosTable.readData(data);
            cecosTable.setOperation(0);
            cecosTable.writeTable("#datatable");

        }

    });

    $("#btnRead").click(function(){

        cecosTable.deleteTable("#datatable");

        $.ajax({

            url:'http://35.243.156.112/plataforma/balanza/cecos/indice',
            method:'GET',
            success:function(response){
    
                while(!response){}
    
                const data = JSON.parse(response);
                cecosTable.readData(data);
                cecosTable.setOperation(0);
                cecosTable.writeTable("#datatable");
    
            }
    
        });

    });


    $("#btnUpdate").click(function(){

        cecosTable.deleteTable("#datatable");

        $.ajax({

            url:'http://35.243.156.112/plataforma/balanza/cecos/indice',
            method:'GET',
            success:function(response){
    
                while(!response){}
    
                const data = JSON.parse(response);
                cecosTable.readData(data);
                cecosTable.setOperation(1);
                cecosTable.writeTable("#datatable");
    
            }
    
        });

    });





});