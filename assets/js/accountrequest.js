
$(document).ready(function(){

    $.ajax({

        url:'http://35.243.156.112/plataforma/balanza/cuentas/indice',
        method:'GET',
        data:'',
        success:function (response) {

            let stage=1;

            console.log(response);
            
            const responseData = JSON.parse(response);
            const table = new AccountTable();
            table.readData(responseData);
            table.writeTable("#datatable");

            //
            $("#btnUpdate").click(function(){

                if(stage === 1){

                    $("#userForm").show();
                    stage=2;

                    $("#btnConfirm").click(function(){

                        const userForm = new userForm("#textUser","#textPassword");
                        let prevention = userForm.preventEmpty();

                        if(){

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

                else{



                }




            });

        }

    });

});