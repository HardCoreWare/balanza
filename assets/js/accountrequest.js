class AccountRequest{

    loadAccounts(url,dataTable){

        $.ajax({

            url:url,
            method:'GET',
            data:'',
            success:function(response){

                this.table=dataTable;
                const data = JSON.parse(response);
                this.table.readData(data);
                this.table.writeTable("#datatable");

            }


        });

    }

    updateAccounts(){

        let updatetable=[];

        $("#btnUpdate").click(function(){

            $(this).prop('value','ACTUALIZANDO');

            for (let i = 1; i <=52; i++){

                const id = "#a"+String(i);

                let editable;

                if($(id).is(':checked')){

                    editable="1"

                }

                else{

                    editable="0"

                }


                let cell={

                    value: editable,

                    id: i.toString()

                }

                updatetable.push(cell);

        
            }

            const params = JSON.stringify(updatetable);


            $.ajax({

                url:'http://localhost/plataforma/balanza/cuentas/editable',
                method:'POST',
                data:{'req':params},
                success:function(response){

                    console.log(response);
                    //window.location.href = "http://35.243.156.112/multiva/cuentas.php";

                }

            });



        });

    }


}