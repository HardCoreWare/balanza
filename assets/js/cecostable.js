class CecosTable{

    readData(data){

        this.data=data;
        this.headers=[];

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