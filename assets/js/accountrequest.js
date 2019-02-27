$(document).ready(function(){

    $.ajax({

        url:'http://35.243.156.112/plataforma/balanza/cuentas/indice',
        method:'GET',
        data:'',
        success:function (response) {
            
            const responseData = JSON.parse(response);
            const table = new AccountTable();
            table.readData(responseData);
            table.writeTable("#datatable");

            $("#btnUpdate").click(function(){

                postData = JSON.stringify(table.getData());

                $.ajax({

                    url:'http://35.243.156.112/plataforma/balanza/cuentas/actualizar',
                    method:'POST',
                    data:{"req":postData},
                    success:function (response) {

                        console.log(response);
                        
                        if(response=='success'){

                            console.log('ok');

                            window.location.href ="http://35.243.156.112/balanza/cuentas.php";

                        }

                    }

                });

            });

        }

    });

});