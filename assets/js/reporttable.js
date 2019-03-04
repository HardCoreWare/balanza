class Report{

    readData(data){

        this.dataset={

            pagado:{



            },
            noPagado:{

                

            }

        };

        data.forEach(row => {

            if((row.Super_Concepto=="FACTOR HUMANO"||row.Super_Concepto=="FACTOR HUMANO PASIVOS")&&(row.Pagado=="1")){

                console.log(row);

            }

            else if(row.Super_Concepto=="FACTOR HUMANO"){

                

            }

            else{



            }
            
        });
        
    }



}