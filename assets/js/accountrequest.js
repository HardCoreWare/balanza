
$(document).ready(function(){

    $.ajax({

        url:'http://35.243.156.112/plataforma/balanza/cuentas/indice',
        method:'GET',
        data:'',
        success:function (response) {

            let stage=0;

            console.log(response);
            
            const responseData = JSON.parse(response);
            const table = new AccountTable();
            table.readData(responseData);
            table.writeTable("#datatable");

            //
            $("#btnUpdate").click(function(){

                if(stage){

                    alert("necesita confirmar usuario para continuar");

                }

                else{

                    $("#userForm").show();
                    stage=2;

                    let userForm = new UserForm("#textUser","#textPassword");

                    $("#btnConfirm").click(function(){

                        if(userForm.preventEmpty()){

                            alert('cool');

                        }

                        else{

                            alert('por favor llene los parametros');

                        }

                    /*
                    postData = JSON.stringify(table.getData());

                    $.ajax({

                        url:'http://35.243.156.112/plataforma/balanza/cuentas/actualizar',
                        method:'POST',
                        data:{"req":postData},
                        success:function (response) {

                            window.location.replace("http://35.243.156.112/balanza/cuentas.php");

                        }

                    });*/


                    })


                }






            });

        }

    });

});