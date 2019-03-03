$(document).ready(function(){

    $.ajax({

        url:"http://35.243.156.112/plataforma/balanza/informe/indice",
        method:"GET",
        data:"",
        success:function(response){

            const importTable = new ImportTable();

            if(importTable.validate(response)){

                data = JSON.parse(response);
                importTable.readData(data);
                importTable.writeTable("#datatable");
                
            }

            else{

                alert("datos vacios");
                
            }

            /************************************************************************************************************/

            $("#btnImport").click(function(){

                $.ajax({

                    url:'http://35.243.156.112/plataforma/balanza/informe/importar',
                    mehtod:'GET',
                    data:'',
                    success:function(success){

                        window.location.replace("http://35.243.156.112/balanza/importar.php");

                    }

                });

            });

        }



    });

});