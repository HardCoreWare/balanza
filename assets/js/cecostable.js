class CecosTable{

    readData(data){

        this.headers=["MODULO","CECO","INCLUIR"];
        this.data=data;

    }

    writeTable(divId){

        let table='';
        let body='';
        let head='';

        head+='<thead><tr>';

        this.headers.forEach(header=>{

            head+='<th>';
            head+=header;
            head+='</th>';

        })

        head+='</tr></thead>';


        body+='<tbody>';

        this.data.forEach(row => {

            body+='<tr>';

                body+='<td>';
                body+=row.Modulo;
                body+='</td>';

                body+='<td>';
                body+=row.Kostl;
                body+='</td>';

                body+='<td>';
                body+='<';
                body+='input type="checkbox" ';
                body+=' class="check-account" ';
                body+='id="u';
                body+=row.Id;
                body+='"';

                if(row.Incluido=="1"){

                    body+=' checked';

                }

                body+='>';
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

        $(divId).html(table);

    }



}