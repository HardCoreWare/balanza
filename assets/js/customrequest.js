
class CustomPost{

    postCustom(){

        

    }

}

class CustomGet{


    getCustom(url,dataTable,postRequest){

        $.ajax({
            url:url,
            method:'GET',
            data:'',
            success:function(response){

                //parseamos respuest
                const data = JSON.parse(response);

                //instanciamos tabla
                let table = dataTable;

                //leemosm datos para la tabla
                table.readData(data);
                table.writeTable("#datatable");

                post=postRequest;

                
            }

        });

    }

}