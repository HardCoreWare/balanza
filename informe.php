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
        <link href="assets/css/tablas.css" rel="stylesheet" type="text/css" />
        <link href="assets/css/modals.css" rel="stylesheet" type="text/css" />
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
                                <h4 class="page-title">Informe Mensual</h4>
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
                        <ul>
                            <li class="text-muted menu-title">Menu de Navegacion</li>
                            
                            <li><a href="generar.php" class="waves-effect"><i class="fa fa-database"></i> <span> IMPORTAR DATOS</span> </a></li>
                            <li><a href="informe.php" class="waves-effect"><i class="fa fa-table"></i> <span> INFORME MENSUAL </span> </a></li>
                            <li><a href="resumen.php" class="waves-effect"><i class="fa fa-list"></i> <span>RESUMEN BALANZA</span> </a></li>
                            <li><a href="cuentas.php" class="waves-effect"><i class="fa fa-list"></i> <span>CUENTAS</span> </a></li>


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

                        <!-- Form row -->
                        <div class="row">
                        	<div class="col-sm-12">
                        		<div class="card-box">

                                    <div class="dropdown pull-right">

                                    </div>

                        			<h4 class="header-title m-t-0 m-b-30">Seleccionar parametros</h4>

                        			<div class="row">
                        				<div class="col-lg-4">
                        					<form class="form-horizontal" role="form">

	                                            <div class="form-group">
	                                                <label class="col-sm-2 control-label">Tipo</label>
	                                                <div class="col-sm-10">
	                                                    <select class="form-control" id="selectTipo">
	                                                        <option value="mensual">Mensual</option>
	                                                        <option value="acumulado">Acumulado</option>
	                                                    </select>
	                                                </div>
                                                </div>

	                                        </form>
                                        </div>
                                        <!-- end col -->

                        				<div class="col-lg-4">
                        					<form class="form-horizontal" role="form">

                                                <div class="form-group">
	                                                <label class="col-sm-2 control-label">Modulo</label>
	                                                <div class="col-sm-10">
	                                                    <select class="form-control" id="selectModulo">
	                                                        <option value = "BANCO">Banco</option>
	                                                        <option value = "CASA">Casa</option>
	                                                        <option value = "GRUPO">Grupo</option>
	                                                        <option value = "OPERADORA">Operadora</option>
	                                                        <option value = "SAVELLA">Savella</option>
	                                                        <option value = "SERVICIOS">Servicios</option>
	                                                    </select>
	                                                </div>
                                                </div>

	                                        </form>
                                        </div>
                                        <!-- end col -->

                        				<div class="col-lg-4">
                        					<form class="form-horizontal" role="form">

                                                <div class="form-group">
	                                                <div class="col-sm-10">
                                                        <input class="btn btn-block" type="button" value="INFORME" id="btnInforme">
	                                                </div>
                                                </div>

	                                        </form>
                                        </div>
                                        <!-- end col -->

                        			</div><!-- end row -->
                        		</div>
                        	</div><!-- end col -->
                        </div>
                        <!-- End row -->

                        <!---->
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card-box" hidden id="chartDiv">
                                    <div class="dropdown pull-right">

                                        <a class="table-close" data-toggle="dropdown" aria-expanded="false">

                                            <i class="fa fa-window-close"></i>
                                            
                                        </a>

                                    </div>

                                    <h4 class="header-title m-t-0 m-b-30" id="">Bar chart</h4>

                                    <div class="row">

                                        <div class="col-lg-2">
                                        </div>

                                        <div class="col-lg-8">

                                            <canvas id="myChart" width="200" height="60"></canvas>

                                        </div>

                                        <div class="col-lg-2">
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                        <!-- End row -->


                        <div class="row">
                            <div class="modal" id="desglose" hidden>
                                <div class="container">
                                    <div class="card-box table-responsive card-modal">

                                        <div class="dropdown pull-right">
                                            <a class="breakdown-close" data-toggle="dropdown" aria-expanded="false">
                                                <i class="fa fa-window-close"></i>
                                            </a>
                
                                        </div>

                                        <div class="row">
                                            <div class="col">
                                                <div id="modalTable">
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End row -->


                        <!-- Tabla row -->
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="card-box table-responsive">
                                    <div class="dropdown pull-right">

                                    </div>

                        			<h4 id="tableTitle" class="header-title m-t-0 m-b-30">

                                        TABLA

                                    </h4>

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
        <!-- Ajax Request and Tables -->
        <script src="assets/js/conversion.js"></script>
        <script src="assets/js/formmensual.js"></script>
        <script src="assets/js/tablebreakdown.js"></script>
        <script src="assets/js/breakdown.js"></script>
        <script src="assets/js/tablesingle.js"></script>
        <script src="assets/js/request.js"></script>

        <script>

           $(document).ready(function(){

            $(".modal").hide();

               $("#btnInforme").click(function(){

                   var formMensual = new FormMensual();

                   formMensual.readForm();

                   var url = formMensual.getUrl("http://35.243.156.112/servicio/balanza/informe");

                   if(formMensual.getTipo()=="mensual"){

                    var request = new Request(url,'http://35.243.156.112/balanza/informe/desglose',0);

                   }

                   else{

                    var request = new Request(url,'http://35.243.156.112/servicio/balanza/informe/desglose',1);

                   }

               });

            });
        
        </script>
        <script src="assets/js/mychart.js"></script>

    </body>
</html>