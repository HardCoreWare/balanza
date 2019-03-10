<?php

if(isset($_POST['password'])&&isset($_POST['nickname'])){

    require_once 'PdoCrud.php';
    require_once 'LoginModel.php';

    $nickname=$_POST['nickname'];
    $password=$_POST['password'];

    $loginModel= new LoginModel(new PdoCrud('localhost','root','','BALANZA'));
    $loginModel->login($nickname,$password);
    $loginModel->detachMySql();

}

?>