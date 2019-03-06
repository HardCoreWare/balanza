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

        $("#formRead").show();
        $("#formUpdate").hide();
        $("#formAdd").hide();
        $("#formDelete").hide();

        cecosTable.deleteTable("#datatable");
        $('.dynamic-title').html("Centros de Costo");

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

        $("#formRead").hide();
        $("#formUpdate").show();
        $("#formAdd").hide();
        $("#formDelete").hide();

        cecosTable.deleteTable("#datatable");
        $('.dynamic-title').html("Seleccione los centros de costo que desea incluir");

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

    $("#btnDelete").click(function(){

        $("#formRead").hide();
        $("#formUpdate").hide();
        $("#formAdd").hide();
        $("#formDelete").show();
        cecosTable.deleteTable("#datatable");
        $('.dynamic-title').html("Seleccione los centros de costo que desea incluir");

        $.ajax({

            url:'http://35.243.156.112/plataforma/balanza/cecos/indice',
            method:'GET',
            success:function(response){
    
                while(!response){}
    
                const data = JSON.parse(response);
                cecosTable.readData(data);
                cecosTable.setOperation(2);
                cecosTable.writeTable("#datatable");
    
            }
    
        });

    });

    $("#btnAdd").click(function(){

        $("#formRead").hide();
        $("#formUpdate").hide();
        $("#formAdd").show();
        $("#formDelete").hide();

        cecosTable.deleteTable("#datatable");
        $('.dynamic-title').html("Seleccione los centros de costo que desea incluir");

        $.ajax({

            url:'http://35.243.156.112/plataforma/balanza/cecos/indice',
            method:'GET',
            success:function(response){
    
                while(!response){ }
                const data = JSON.parse(response);
                cecosTable.readData(data);
                cecosTable.setOperation(2);
                cecosTable.writeTable("#datatable");
    
            }
    
        });

    });






});