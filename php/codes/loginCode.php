<?php

if(isset($_POST['password'])&&isset($_POST['nickname'])){

    $nickname=$_POST['nickname'];
    $password=$_POST['password'];

    $loginModel= new LoginModel(new PdoCrud('localhost','root','','BALANZA'));
    $loginModel->login($nickname,$password);
    $loginModel->detachMySql();

}

?>