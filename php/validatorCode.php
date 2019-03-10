<?php

if(isset($_COOKIE['user'])){

    require_once 'php/PdoCrud.php';
    require_once 'php/LoginModel.php';

    $loginModel = new LoginModel(new PdoCrud('localhost','root','','BALANZA'));

    $validate = $loginModel->validateSession();

    if($validate){

        echo('<h1>BIENVENIDO</h1><br><br>');

        echo('<a href = "http://localhost/login/logout.php">CERRAR SESION</a>');

    }

    else{

        echo("ACCESO DENEGADO");
        header("Location: http://localhost/login/login.php");
        die();
    
    }




}

else{

    echo("ACCESO DENEGADO");
    header("Location: http://localhost/login/login.php");
    die();

}

?>