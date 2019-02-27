$(document).ready(function(){

    $.ajax({

        url:'http://35.243.156.112/plataforma/balanza/cuentas/indice',
        method:'POST',
        data:'',
        success:function (response) {
            
            const data = JSON.parse(response);
            const table = new AccountTable();
            table.readData(data);
            table.writeTable("#datatable");

            $("#btnUpdate").click(function(){

                postData = table.getData();

                


            });

        }

    });

});