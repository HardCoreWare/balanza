$(document).ready(function(){

    cecosTable = new CecosTable();
    let switched=false;

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

    $("#btnSwitch").click(function(){

        if(switched){
            $("#formRead").show();
            $("#formAdd").hide();
            switched=true;
        }

        else{
            $("#formRead").show();
            $("#formAdd").hide();
            switched=false;
        }



    });





});