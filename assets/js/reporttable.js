class ModularReport{

    constructor(){

        
        
    }

    readData(data){
    
        data.forEach(row => {
            
            if((row.Super_Concepto==="FACTOR HUMANO"||row.Super_Concepto==="FACTOR HUMANO PASIVOS")&&(row.Pagado==="1")){

                

            }

            else if((row.Super_Concepto==="GASTOS GENERALES")&&(row.Pagado==="1")){

                

            }

            else{



            }

        });

    }

}