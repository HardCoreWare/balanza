class CecosManager{

    readSearchForm(moduleId,cecoId){

        const moduleVal=$(moduleId).val();
        const cecoVal=$(cecoId).val();

        let search={

            module:moduleVal,
            ceco:cecoVal

        }

        if(cecoVal===""){

            search.ceco="all";
            
        }

        else{



        }

        return search.module+"-"+search.ceco;

    }

    updateCeco(){

        $(".include-action").click(function(){
    
            const request ={
    
                id: ($(this).attr('id')).split("-")[1],
                value: ($(this).attr('id')).split("-")[2]
    
            }
            
            const req = JSON.stringify(request);
            
            $.ajax({
            
                url:'http://35.243.156.112/plataforma/balanza/cecos/actualizar',
                method:'POST',
                data:{"req":req},
                success:function(response){
            
                    alert(response);
            
                }
            
            });
    
        });
    
        
    }

}