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

                line.push({value:ammount.Monto,key:row.Id+"-"+ammount.Module});

            });

            if((row.Pagado=="1")&&(row.Super_Concepto=="FACTOR HUMANO"||row.Super_Concepto=="FACTOR HUMANO PASIVOS")){

                this.data.datasets[0].tables[0].matrix.push(line);

            }
            else if((row.Pagado=="1")&&(row.Super_Concepto=="FACTOR HUMANO"||row.Super_Concepto=="FACTOR HUMANO PASIVOS")){

                this.data.datasets[0].tables[0].matrix.push(line);

            }
            else{

                this.data.datasets[0].tables[0].matrix.push(line);

            }

        });


    }

}