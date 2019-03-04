$(document).ready(function(){

    $.ajax({

        url:'http://35.243.156.112/plataforma/balanza/resumen/indice',
        method:'GET',
        data:'',
        success:function (response) {

            const data = JSON.parse(response);
            const report = new ModularReport();
            report.readData(data);
            subtotal00=report.getSubtotals(0,0);

        }

    });


});