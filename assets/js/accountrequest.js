$(document).ready(function(){

    $.ajax({

        url:'http://35.243.156.112/balanza/cuentas.php',
        method:'POST',
        data:'',
        success:function (response) {
            
            const data = JSON.parse(response);
            const table = new AccountTable();
            table.readData(data);
            table.writeTable("#datatable");

        }

    });

});