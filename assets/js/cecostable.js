class CecosTable{

    readData(data){

        this.data=data;
        this.headers=["EMPRESA","CECO","INCLUIDO","ELIMINAR"];

    }

    writeTable(divId){



        let table='';
        let body='';
        let head='';

        head+='<thead><tr>';

        this.headers.forEach(header=>{

            head+='<th>'+header+'</th>';

        })

        head+='</tr></thead>';


        body+='<tbody>';

        this.data.forEach(row => {

            body+='<tr>';
            body+='<td>'+row.Modulo+'</td>';
            body+='<td>'+row.Kostl+'</td>';
            body+='<td>'

            if(row.Incluido==="1"){

                body+='<a class="include-action" id= "'+row.Id+'-0'+'" ><i class="fa fa-check-square"></i></a>';

            }
            else{

                body+='<a class="include-action" id= "'+row.Id+'-1'+'" ><i class="fa fa-times-rectangle"></i></a>';

            }

            body+='</td>';
            
            body+='<td>'
            body+='<a class="delete-action"><i class="fa fa-trash"></i></a>';
            body+='</td>';

            body+='</tr>';
            
        });



        body+='</tbody>';
        table+=head;
        table+=body;

        this.data=null;

        $(divId).html(table);

    }

    deleteTable(divId){

        $(divId).html('');

    }

}