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
                                <h4 class="page-title">Resumen por Modulo</h4>
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

                            <li><a href="importar.php" class="waves-effect"><i class="fa fa-database"></i> <span> IMPORTAR DATOS</span> </a></li>
                            <li><a href="cuentas.php" class="waves-effect"><i class="fa fa-list"></i> <span>CUENTAS</span> </a></li>
                            <li><a href="editables.php" class="waves-effect"><i class="fa fa-list"></i> <span>EDITABLES</span> </a></li>

                        </ul>
                        <div class="clearfix"></div>
                    </div>
                    <!-- Sidebar -->
                    <div class="clearfix"></div>

                </div>

            </div>
            <!-- Left Sidebar End -->
            <div class="content-page">
                <!-- Start content -->
                <div class="content">
                    <!--Contenido Principal-->
                    <div class="container">



                    <div class="row">
                        	<div class="col-sm-12">
                        		<div class="card-box">

                                    <div class="dropdown pull-right">
                                        <a href="#" class="dropdown-toggle card-drop" data-toggle="dropdown" aria-expanded="false">
                                            <i class="zmdi zmdi-more-vert"></i>
                                        </a>
                                        <ul class="dropdown-menu" role="menu">
                                            <li><a href="#">Action</a></li>
                                            <li><a href="#">Another action</a></li>
                                            <li><a href="#">Something else here</a></li>
                                            <li class="divider"></li>
                                            <li><a href="#">Separated link</a></li>
                                        </ul>
                                    </div>

                        			<h4 class="header-title m-t-0 m-b-30">Input Types</h4>

                        			<div class="row">
                        				<div class="col-lg-6">
                        					<form class="form-horizontal" role="form">
	                                            <div class="form-group">
	                                                <label class="col-md-2 control-label">Text</label>
	                                                <div class="col-md-10">
	                                                    <input type="text" class="form-control" value="Some text value...">
	                                                </div>
	                                            </div>
	                                            <div class="form-group">
	                                                <label class="col-md-2 control-label" for="example-email">Email</label>
	                                                <div class="col-md-10">
	                                                    <input type="email" id="example-email" name="example-email" class="form-control" placeholder="Email">
	                                                </div>
	                                            </div>
	                                            <div class="form-group">
	                                                <label class="col-md-2 control-label">Password</label>
	                                                <div class="col-md-10">
	                                                    <input type="password" class="form-control" value="password">
	                                                </div>
	                                            </div>

	                                            <div class="form-group">
	                                                <label class="col-md-2 control-label">Placeholder</label>
	                                                <div class="col-md-10">
	                                                    <input type="text" class="form-control" placeholder="placeholder">
	                                                </div>
	                                            </div>
	                                            <div class="form-group">
	                                                <label class="col-md-2 control-label">Text area</label>
	                                                <div class="col-md-10">
	                                                    <textarea class="form-control" rows="5"></textarea>
	                                                </div>
	                                            </div>
	                                        </form>
                        				</div><!-- end col -->

                        				<div class="col-lg-6">
                        					<form class="form-horizontal" role="form">
	                                            <div class="form-group">
	                                                <label class="col-md-2 control-label">Readonly</label>
	                                                <div class="col-md-10">
	                                                    <input type="text" class="form-control" readonly="" value="Readonly value">
	                                                </div>
	                                            </div>
	                                            <div class="form-group">
	                                                <label class="col-md-2 control-label">Disabled</label>
	                                                <div class="col-md-10">
	                                                    <input type="text" class="form-control" disabled="" value="Disabled value">
	                                                </div>
	                                            </div>
	                                            <div class="form-group">
	                                                <label class="col-sm-2 control-label">Static control</label>
	                                                <div class="col-sm-10">
	                                                  <p class="form-control-static">email@example.com</p>
	                                                </div>
	                                            </div>
	                                            <div class="form-group">
	                                                <label class="col-sm-2 control-label">Helping text</label>
	                                                <div class="col-sm-10">
	                                                  <input type="text" class="form-control" placeholder="Helping text">
	                                                  <span class="help-block"><small>A block of help text that breaks onto a new line and may extend beyond one line.</small></span>
	                                                </div>
	                                            </div>
	                                            <div class="form-group">
	                                                <label class="col-sm-2 control-label">Input Select</label>
	                                                <div class="col-sm-10">
	                                                    <select class="form-control">
	                                                        <option>1</option>
	                                                        <option>2</option>
	                                                        <option>3</option>
	                                                        <option>4</option>
	                                                        <option>5</option>
	                                                    </select>
	                                                    <h6>Multiple select</h6>
	                                                    <select multiple="" class="form-control">
	                                                        <option>1</option>
	                                                        <option>2</option>
	                                                        <option>3</option>
	                                                        <option>4</option>
	                                                        <option>5</option>
	                                                    </select>
	                                                </div>
	                                            </div>
	                                        </form>
                        				</div><!-- end col -->

                        			</div><!-- end row -->
                        		</div>
                        	</div><!-- end col -->
                        </div>
                        <!-- end row -->





                    </div> 
                    <!-- container -->
                </div> 
                <!-- content -->

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



        <script>


            
        </script>

    </body>
</html>