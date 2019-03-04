$(document).ready(function(){

    $.ajax({

        url:'http://35.243.156.112/plataforma/balanza/resumen/indice',
        method:'GET',
        data:'',
        success:function (response) {

            while(!response){



            }

            console.log(response);

            if(response=="empty"){

                window.location.replace("http://35.243.156.112/balanza/importar.php");

            }

            else{

                const data = JSON.parse(response);
                const report = new ModularTable();
                report.readData(data);
                report.writeTable("#datatable");

            }



        }

    });


});