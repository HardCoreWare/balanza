class ModularReport{

    constructor(){

        this.data={

            headers:[],

            datasets:[

                {
                    title:"GASTOS PAGADOS",
                    tables:[    
                        {
                            label:"FACTOR HUMANO",
                            matrix:[],
                            subtotals:[]

                        },
                        {
                            label:"GASTOS GENERALES",
                            matrix:[],
                            subtotals:[]
                        }
                    ],
                    totals:[]

                },
                {
                    title:"GASTOS NO PAGADOS",
                    tables:[    
                        {
                            label:"FACTOR HUMANO",
                            matrix:[],
                            subtotals:[]
                        }
                    ],
                    totals:[]

                }
            ]
        };
        
    }

    readData(data){

        data.forEach(row => {

            let line=[];
            line.push({value:row.Id,key:"none"});
            line.push({value:row.Concepto,key:"none"});
            line.push({value:row.Cuenta,key:"none"});

            row.Montos.forEach(ammount=>{

                line.push({value:ammount.Monto.toString(),key:row.Id+"-"+ammount.Module});

            });

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

        for(let i=0; i<this.data.datasets.length; i++){

            const dataset = this.data.datasets[i];

            for (let j = 0; j< dataset.tables.length; j++) {

                const table = dataset.tables[j];

                table.matrix.forEach(line=>{

                    for (let k = 0; k < line.length; k++) {

                        const cell = line[k];



                        
                    }

                })
                
            }

        }


    }

}