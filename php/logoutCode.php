<?php

require_once 'PdoCrud.php';
require_once 'LoginModel.php';

$loginModel= new LoginModel(new PdoCrud('localhost','root','','BALANZA'));
$loginModel->logout();
$loginModel->detachMySql();

echo("ACCESO DENEGADO");
header("Location: http://localhost/login/login.php");
die();

?>