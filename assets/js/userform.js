class UserForm{

    constructor(userId,passwordId){

        this.userId=userId;
        this.passwordId=passwordId;
        this.userData=null;

    }

    preventEmpty(){

        const data={

            user : $(this.userId).val(),
            password : $(this.passwordId).val()

        }

        if((data.user!=="")&&(data.password==!"")){

            return true;

        }

        else{

            return false

        }


    }

    getUser(){

        return this.userData;

    }

}