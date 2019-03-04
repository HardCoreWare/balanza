class ModularReport{

    constructor(){

        this.data={

            headers:["#","CUENTA","CONCEPTO"],

            datasets:[

                {
                    tables:[    
                        {
                            matrix:[],
                            subtotals:[0,0,0]

                        },
                        {
                            matrix:[],
                            subtotals:[0,0,0]
                        }
                    ]

                },
                {
                    tables:[    
                        {
                            matrix:[],
                            subtotals:[0,0,0]
                        }
                    ]

                }
            ]

        };
        
    }

    //
    readData(data){

        let set = true;

        data.forEach(row => {

            let line=[];
            line.push({value:row.Id,key:"none"});
            line.push({value:row.Cuenta,key:"none"});
            line.push({value:row.Concepto,key:"none"});

            row.Montos.forEach(ammount=>{

                line.push({value:parseFloat(ammount.Monto),key:row.Id+"-"+ammount.Modulo});

                if(set){

                    this.data.headers.push(ammount.Modulo);

                    this.data.datasets.forEach(dataset=>{

                        dataset.tables.forEach(table=>{

                            table.subtotals.push(0);

                        });

                    });

                }

            });

            set=false;

            if((row.Pagado=="1")&&(row.Super_Concepto=="FACTOR HUMANO"||row.Super_Concepto=="FACTOR HUMANO PASIVOS")){

                this.data.datasets[0].tables[0].matrix.push(line);

            }
            else if((row.Pagado=="1")&&(row.Super_Concepto=="GASTOS GENERALES")){

                this.data.datasets[0].tables[1].matrix.push(line);

            }
            else{

                this.data.datasets[1].tables[0].matrix.push(line);

            }

        });

        //
        for (let i = 0; i < this.data.datasets.length; i++) {

            const dataset = this.data.datasets[i];

            for (let j = 0; j < dataset.tables.length; j++) {

                const table = dataset.tables[j];

                table.matrix.forEach(line=>{

                    for (let k = 0; k < line.length; k++) {

                        const cell = line[k];

                        if(k>2){

                            this.data.datasets[i].tables[j].subtotals[k]+=cell.value;

                        }
                        
                    }

                });

            }
            
        }


    }

    //
    getMatrix(dataset,table){

        return this.data.datasets[dataset].tables[table].matrix;

    }

    //
    getSubtotals(dataset,table){

        return this.data.datasets[dataset].tables[table].subtotals;

    }
    
    //
    getHeaders(){

        return this.data.headers;

    }

}

class ModularTable{

    writeTable(headers,matrix,subtotals){

        let table='';
        let head='';
        let body='';
        let footer='';

        head+='<tr>';
        headers.forEach(header=>{
            head+='<th>';
            head+=header;
            head+='</th>';
        });
        head+='</tr>';

        body +='<tbody>';
        matrix.forEach(row=>{
            body+='<tr>';            
            row.forEach(cell=>{
                body+='<td>';
                body+=cell.value.toString();
                body+='</td>';
            });
            body+='</tr>';
        });
        body +='</tbody>';

        table+=head;
        table+=body;

        $("#datatable").html(table);

    }

}