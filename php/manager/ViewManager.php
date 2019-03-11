<?php

class ViewManager{

    public static function loginManager(){

        if(isset($_POST['password'])&&isset($_POST['nickname'])){

            $nickname=$_POST['nickname'];
            $password=$_POST['password'];

            $loginModel= new LoginModel(new PdoCrud('localhost','root','','BALANZA'));
            $loginModel->login($nickname,$password);
            $loginModel->detachMySql();

        }

    }

    public static function logoutManager(){

        $loginModel= new LoginModel(new PdoCrud('localhost','root','','BALANZA'));
        $loginModel->logout();
        $loginModel->detachMySql();
        
        header("Location: http://35.243.156.112/balanza/public/login.php");
        die();

    }

    public static function sessionManager(){

        if(isset($_COOKIE['user'])){

            $loginModel = new LoginModel(new PdoCrud('localhost','root','','BALANZA'));
            $validate = $loginModel->validateSession();
        
            if($validate){
        
                echo('wellcome');
        
            }
        
            else{
        
                header("Location: http://35.243.156.112/balanza/public/login.php");
                die();
            
            }
        
        }
        
        else{

            header("Location: http://35.243.156.112/balanza/public/login.php");
            die();
        
        }

    }
    
}


?>