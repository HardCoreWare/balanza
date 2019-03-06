$(document).ready(function(){

    const cecosTable = new CecosTable();
    const cecosForm = new CecosForm();
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
            $("#datatable").show();
            $("#formAdd").hide();
            switched=false;
        }

        else{
            $("#formRead").hide();
            $("#datatable").hide();
            $("#formAdd").show();
            switched=true;
        }

    });

    $("txtCeco").keyUp(function(){

        let params = cecosForm.readSearchForm("selectSearch");
        
    });


    $("btnAdd").click(function(){



    });


});