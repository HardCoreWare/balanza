
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="A fully featured admin theme which can be used to build CRM, CMS, etc.">
        <meta name="author" content="Coderthemes">

        <!-- App Favicon -->
        <link rel="shortcut icon" href="assets/images/favicon.ico">

        <!-- App title -->
        <title>Multiva</title>

        <!-- App CSS -->
        <link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="assets/css/core.css" rel="stylesheet" type="text/css" />
        <link href="assets/css/components.css" rel="stylesheet" type="text/css" />
        <link href="assets/css/icons.css" rel="stylesheet" type="text/css" />
        <link href="assets/css/pages.css" rel="stylesheet" type="text/css" />
        <link href="assets/css/menu.css" rel="stylesheet" type="text/css" />
        <link href="assets/css/responsive.css" rel="stylesheet" type="text/css" />
        <link href="assets/css/summary.css" rel="stylesheet" type="text/css" />
        <link href="assets/css/tablas.css" rel="stylesheet" type="text/css" />
        <script src="assets/js/modernizr.min.js"></script>
        <script src="assets/plugins/chart.js/chart.min.js"></script>

    </head>


    <body class="fixed-left">

        <!-- Begin page -->
        <div id="wrapper">

            <!-- Top Bar Start -->
            <div class="topbar">

                <!-- LOGO -->
                <div class="topbar-left">
                    <a href="index.html" class="logo"><span>Multi<span>va</span></span><i class="zmdi zmdi-layers"></i></a>
                </div>

                <!-- Button mobile view to collapse sidebar menu -->
                <div class="navbar navbar-default" role="navigation">
                    <div class="container">

                        <!-- Page title -->
                        <ul class="nav navbar-nav navbar-left">
                            <li>
                                <button class="button-menu-mobile open-left">
                                    <i class="zmdi zmdi-menu"></i>
                                </button>
                            </li>
                            <li>
                                <h4 class="page-title">CUENTAS MAYORES</h4>
                            </li>
                        </ul>

                    </div>
                    <!-- end container -->
                </div>
                <!-- end navbar -->
            </div>
            <!-- Top Bar End -->


            <!-- ========== Left Sidebar Start ========== -->
            <div class="left side-menu">           
                
                <div class="sidebar-inner slimscrollleft">

                    <!-- User -->
                    <div class="user-box">
                        <div class="user-img">
                            <img src="assets/images/logo.jpg" alt="user-img" title="Mat Helme" class="img-circle img-thumbnail img-responsive">
                            <div class="user-status offline"><i class="zmdi zmdi-dot-circle"></i></div>
                        </div>
                        <h5><a href="#">Multiva</a> </h5>
                        <ul class="list-inline">
                            <li>
                                <a href="#" >
                                    <i class="zmdi zmdi-settings"></i>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="text-custom">
                                    <i class="zmdi zmdi-power"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!-- End User -->

                    <!--- Sidemenu -->
                    <div id="sidebar-menu">
                        <span class="text-muted menu-title">MENU DE NAVEGACION</span>
                        <ul>
                            <li class="has_sub">
                                <a href="javascript:void(0);" class="waves-effect"><i class="fa fa-gear"></i> <span>CONFIGURACION</span> <span class="menu-arrow"></span></a>
                                <ul class="list-unstyled">
                                    <li><a href="cuentas.php">Cuentas</a></li>
                                    <li><a href="cecos.php">Cecos</a></li>
                                </ul>
                            </li>
                            <li class="has_sub">
                                <a href="javascript:void(0);" class="waves-effect"><i class="fa fa-file"></i> <span>INFORME</span><span class="menu-arrow"></span></a>
                                <ul class="list-unstyled">
                                    <li><a href="editables.php">Editables</a></li>
                                    <li><a href="importar.php">Importar</a></li>
                                    <li><a href="informe.php">Informe Actual</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div class="clearfix"></div>
                    </div>
                    <!-- Sidebar -->
                    <div class="clearfix"></div>

                </div>

            </div>
            <!-- Left Sidebar End -->


            <!-- ============================================================== -->
            <!-- Start right Content here -->
            <!-- ============================================================== -->
            <div class="content-page">
                <!-- Start content -->
                <div class="content">
                    <div class="container">


                    <div class="row">
                        	<div class="col-sm-12" id="userForm" hidden>
                        		<div class="card-box">

                                    <div class="dropdown pull-right"></div>

                        			<h4 class="header-title m-t-0 m-b-30">Confirmar usuario y password para continuar</h4>

                        			<div class="row">

                                        <!-- Select Anualidad -->
                        				<div class="col-lg-3">
                        					<form class="form-horizontal" role="form">

                                                <div class="form-group">
	                                                <label class="col-sm-2 control-label">Usuario</label>
	                                                <div class="col-sm-10">
	                                                    <input type="text" class="form-control" id="textUser">
	                                                </div>
                                                </div>

	                                        </form>
                                        </div>
                                        <!-- end col -->
                                        <div class="col-lg-3">
                        					<form class="form-horizontal" role="form">

                                                <div class="form-group">
	                                                <label class="col-sm-2 control-label">Password</label>
	                                                <div class="col-sm-10">
                                                        <input type="password" class="form-control" id="textPassword">
	                                                </div>
                                                </div>

	                                        </form>
                                        </div>
                                        <!-- end col -->
                        				<div class="col-lg-3">
                        					<form class="form-horizontal" role="form">
                                                <div class="form-group">
	                                                <div class="col-sm-10">
                                                        <input class="btn btn-block btn-danger" type="button" value="CONFIRMAR" id="btnConfirm">
	                                                </div>
                                                </div>
	                                        </form>
                                        </div>
                                        <!-- end col -->
                                        <div class="col-lg-3">
                        					<form class="form-horizontal" role="form">
                                                <div class="form-group">
	                                                <div class="col-sm-10">
                                                        <input class="btn btn-block btn-primary" type="button" value="CANCELAR" id="btnCancel">
	                                                </div>
                                                </div>
	                                        </form>
                                        </div>
                                        <!-- end col -->
                                    </div>
                                    <!-- end row -->
                        		</div>
                            </div>
                            <!-- end col -->
                        </div>
                        <!-- End row -->

                        <div class="row">
                            <div class="col-sm-12">
                                <div class="card-box table-responsive">
                                    <div class="dropdown pull-right">

                                    </div>

                                    <h4 class="header-title m-t-0 m-b-30">Seleccionar las cuentas que desea hacer editables, posteriormente hacer click en actualizar</h4>
                                    
                                    <div class="col-lg-4">
                                        <form class="form-horizontal" role="form">
                                            <div class="form-group">
                                                <div class="col-sm-10">
                                                    <input class="btn btn-block btn-warning" type="button" value="ACTUALIZAR CUENTAS" id="btnUpdate">
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <!-- end col -->

                                    <table id="datatable" class="table table-stripped">



                                    </table>

                                </div>
                            </div><!-- end col -->
                        </div>
                        <!-- end row -->


                    </div> 
                    <!-- container -->

                </div> <!-- content -->

                <footer class="footer">
                    2018 © Multiva.
                </footer>

            </div>
            <!-- End content-page -->


            <!-- ============================================================== -->
            <!-- End Right content here -->
            <!-- ============================================================== -->


        </div>
        <!-- END wrapper -->

        <script>
            var resizefunc = [];
        </script>

        <!-- jQuery  -->
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/detect.js"></script>
        <script src="assets/js/fastclick.js"></script>
        <script src="assets/js/jquery.slimscroll.js"></script>
        <script src="assets/js/jquery.blockUI.js"></script>
        <script src="assets/js/waves.js"></script>
        <script src="assets/js/jquery.nicescroll.js"></script>
        <script src="assets/js/jquery.scrollTo.min.js"></script>

        <!-- App js -->
        <script src="assets/js/jquery.core.js"></script>
        <script src="assets/js/jquery.app.js"></script>

        <!-- Developed -->
        <script src="assets/js/conversion.js"></script>
        <script src="assets/js/accounttable.js"></script>
        <script src="assets/js/userform.js"></script>
        <script src="assets/js/accountrequest.js"></script>

        <script>



        </script>

    </body>
</html>