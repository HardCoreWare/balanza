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

            case 1:
                this.headers=["MODULO","CECO","INCLUIDO"];
                break;

            case 2:
                this.headers=["MODULO","CECO","ELIMINAR"];
                break;
        
            default:
                break;
        }

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

                switch (this.operation) {
                    case 0: break;
                    case 1:

                        body+='<td><input type="checkbox" class="check-account" id="u'+row.Id+'"';
                        if(row.Incluido=="1"){body+=' checked';}else{ }
                        body+='></td>';
                        break;

                    case 2:

                        body+='<td><input type="checkbox" class="check-account" id="d'+row.Id+'"></td>';

                        break;

                
                    default: break;
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