$(document).ready(function(){

    $.ajax({

        url:'http://35.243.156.112/plataforma/balanza/resumen/indice',
        method:'GET',
        data:'',
        success:function (response) {

            const data = JSON.parse(response);
            const report = new ModularReport();
            report.readData(data);
            const modularTable = new ModularTable();
            modularTable.writeTable("#datatable0",report.getHeaders(),report.getMatrix(0,0),"");
            const modularTable = new ModularTable();
            modularTable.writeTable("#datatable1",report.getHeaders(),report.getMatrix(0,1),"");

        }

    });


});