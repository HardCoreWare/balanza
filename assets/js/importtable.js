class ImportTable{

    constructor(){



    }

    validate(response){

        if (response=="false"){

            return false;

        }

        else{

            return true;

        }

    }

    readData(data){

        this.size=data.length;
        this.headers=[];
        this.matrix=[];

        if(this.size){

            let set=true;

            data.forEach(row => {

                if(set){

                    set = false;

                    this.headers.push("#");
                    this.headers.push("Cuenta");
                    this.headers.push("SuperConcepto");
                    this.headers.push("Concepto");

                    row.Montos.forEach(ammount=>{

                        this.headers.push(ammount.Modulo);

                    });

                }

                let line=[];

                line.push({value:row.Id,key:"none"});
                line.push({value:row.Cuenta,key:"none"});
                line.push({value:row.Super_Concepto,key:"none"});
                line.push({value:row.Concepto,key:"none"});

                row.Montos.forEach(ammount => {

                    line.push({value:ammount.Monto,key:row.Id+"-"+ammount.Modulo});

                });

                this.matrix.push(line);

            });

        }

    }

    writeTable(){



    }

}