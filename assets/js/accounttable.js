class AccountTable{

    readData(data){

        this.data=data;

    }

    writeTable(divId){

        let table='';
        let body='';
        let head='';

        body+='<tbody>';

        this.data.forEach(row => {

            body+='<tr>';

                body+='<td>';
                body+=row.Id;
                body+='</td>';

                body+='<td>';
                body+=row.Cuenta;
                body+='</td>';

                body+='<td>';
                body+=row.Super_Concepto;
                body+='</td>';

                body+='<td>';
                body+=row.Concepto;
                body+='</td>';

                body+='<td>';
                body+='<';
                body+='input type="checkbox" ';
                body+=' class="check-account" ';
                body+='id="a';
                body+=row.Id;
                body+='"';

                if(row.Editable=="1"){

                    body+=' checked';

                }

                body+='>';
                body+='</td>';
                body+='</tr>';
            
        });

        body+='</tbody>';
        table+=body;

        this.data=null;

        $(divId).html(table);

    }

    deleteTable(divId){

        $(divId).html('');

    }


}