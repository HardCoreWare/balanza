class CecosTable{

    readData(data){

        this.data=data;
        this.headers=[];

    }

    setOperation(operation){

        this.operation=operation;

    }

    writeTable(divId){

        switch (this.operation) {
            case 0:
                this.headers=["MODULO","CECO"];
                break;
        
            default:
                break;
        }

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

                switch (this.operation) {
                    case 0:
                        
                        break;
                    case 1:

                    body+='<td><input type="checkbox" class="check-account" id="u';
                    body+=row.Id;
                    body+='"';
    
                    if(row.Incluido=="1"){body+=' checked';}else{ }
    
                    body+='></td>';

                        break;
                
                    default:
                        break;
                }

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