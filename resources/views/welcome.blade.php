
<!DOCTYPE html>
<html class="loading dark-layout" lang="en" data-layout="dark-layout" data-textdirection="ltr">
<!-- BEGIN: Head-->

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=0,minimal-ui">
<title>Highsociety</title>
<link rel="shortcut icon" type="image/x-icon" href="../../../app-assets/images/ico/favicon.ico">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600" rel="stylesheet">

<!-- BEGIN: Vendor CSS-->
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/vendors.min.css') }}">
<!-- END: Vendor CSS-->

<!-- BEGIN: Theme CSS-->
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/bootstrap.css') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/bootstrap-extended.css') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/colors.css') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/components.css') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/themes/dark-layout.css') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/themes/bordered-layout.css') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/themes/semi-dark-layout.css') }}">

<!-- BEGIN: Page CSS-->
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/core/menu/menu-types/horizontal-menu.css') }}">
<!-- END: Page CSS-->

<!-- BEGIN: Custom CSS-->
<link rel="stylesheet" type="text/css" href="{{ asset('/css/style.css') }}">
<!-- END: Custom CSS-->

</head>
<!-- END: Head-->

<!-- BEGIN: Body-->

<body class="horizontal-layout horizontal-menu navbar-floating footer-static" data-open="hover" data-menu="horizontal-menu" data-col="">

<!-- BEGIN: Header-->
<nav class="header-navbar navbar-expand-lg navbar navbar-fixed align-items-center navbar-shadow navbar-brand-center" data-nav="brand-center">
<div class="navbar-header d-xl-block d-none">
<ul class="nav navbar-nav">
<li class="nav-item"><a class="navbar-brand" href="">
<h2 class="brand-text mb-0">Highsociety</h2>
</a></li>
</ul>
</div>
<div class="navbar-container d-flex content">
<div class="bookmark-wrapper d-flex align-items-center">
<ul class="nav navbar-nav d-xl-none">
<li class="nav-item"><a class="nav-link menu-toggle" href="#"><i class="ficon" data-feather="menu"></i></a></li>
</ul>
<ul class="nav navbar-nav">
<li class="nav-item d-none d-lg-block"><a class="nav-link nav-link-style"><i class="ficon" data-feather="sun"></i></a></li>
</ul>
</div>
<ul class="nav navbar-nav align-items-center ms-auto">
<li class="nav-item dropdown dropdown-user"><a class="nav-link dropdown-toggle dropdown-user-link" id="dropdown-user" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<div class="user-nav d-sm-flex d-none"><span class="user-name fw-bolder">John Doe</span><span class="user-status">Admin</span></div><span class="avatar"><img class="round" src="../../../app-assets//images/portrait/small/avatar-s-11.jpg" alt="avatar" height="40" width="40"><span class="avatar-status-online"></span></span>
</a>
<div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown-user"><a class="dropdown-item" href="#"><i class="me-50" data-feather="user"></i> Profile</a><a class="dropdown-item" href="#"><i class="me-50" data-feather="mail"></i> Inbox</a><a class="dropdown-item" href="#"><i class="me-50" data-feather="check-square"></i> Task</a><a class="dropdown-item" href="#"><i class="me-50" data-feather="message-square"></i> Chats</a>
<div class="dropdown-divider"></div><a class="dropdown-item" href="#"><i class="me-50" data-feather="settings"></i> Settings</a><a class="dropdown-item" href="#"><i class="me-50" data-feather="credit-card"></i> Pricing</a><a class="dropdown-item" href="#"><i class="me-50" data-feather="help-circle"></i> FAQ</a><a class="dropdown-item" href="#"><i class="me-50" data-feather="power"></i> Logout</a>
</div>
</li>
</ul>
</div>
</nav>
<!-- END: Header-->


<!-- BEGIN: Main Menu-->
<div class="horizontal-menu-wrapper">
<div class="header-navbar navbar-expand-sm navbar navbar-horizontal floating-nav navbar-dark navbar-shadow menu-border container-xxl" role="navigation" data-menu="menu-wrapper" data-menu-type="floating-nav">
<div class="navbar-header">
<ul class="nav navbar-nav flex-row">
<li class="nav-item me-auto"><a class="navbar-brand" href="../../../html/ltr/horizontal-menu-template-dark/index.html">
<h2 class="brand-text mb-0">Highsociety</h2>
</a></li>
<li class="nav-item nav-toggle"><a class="nav-link modern-nav-toggle pe-0" data-bs-toggle="collapse"><i class="d-block d-xl-none text-primary toggle-icon font-medium-4" data-feather="x"></i></a></li>
</ul>
</div>
<div class="shadow-bottom"></div>
<!-- Horizontal menu content-->
<div class="navbar-container main-menu-content" data-menu="menu-container">
<!-- include ../../../includes/mixins-->
<ul class="nav navbar-nav" id="main-menu-navigation" data-menu="menu-navigation">
<li class="nav-item"><a class="nav-link d-flex align-items-center" href="index.html"><i data-feather="home"></i><span data-i18n="Home">Home</span></a></li>
<li class="dropdown nav-item" data-menu="dropdown"><a class="dropdown-toggle nav-link d-flex align-items-center" href="#" data-bs-toggle="dropdown"><i data-feather="layout"></i><span data-i18n="Page Layouts">Page Layouts</span></a>
<ul class="dropdown-menu" data-bs-popper="none">
<li data-menu=""><a class="dropdown-item d-flex align-items-center" href="layout-full.html" data-bs-toggle="" data-i18n="Layout Full"><span data-i18n="Layout Full">Layout Full</span></a>
</li>
<li data-menu=""><a class="dropdown-item d-flex align-items-center" href="layout-without-menu.html" data-bs-toggle="" data-i18n="Without Menu"><span data-i18n="Without Menu">Without Menu</span></a>
</li>
<li class="active" data-menu=""><a class="dropdown-item d-flex align-items-center" href="layout-empty.html" data-bs-toggle="" data-i18n="Layout Empty"><span data-i18n="Layout Empty">Layout Empty</span></a>
</li>
<li data-menu=""><a class="dropdown-item d-flex align-items-center" href="layout-blank.html" data-bs-toggle="" data-i18n="Layout Blank"><span data-i18n="Layout Blank">Layout Blank</span></a>
</li>
</ul>
</li>
</ul>
</div>
</div>
</div>
<!-- END: Main Menu-->

<!-- BEGIN: Content-->
<div class="app-content content ">
<div class="content-overlay"></div>
<div class="header-navbar-shadow"></div>
<div class="content-wrapper container-xxl p-0">
<div class="content-header row">
<div class="content-header-left col-md-9 col-12 mb-2">
<div class="row breadcrumbs-top">
<div class="col-12">
<h2 class="content-header-title float-start mb-0">Layout Empty</h2>
<div class="breadcrumb-wrapper">
<ol class="breadcrumb">
<li class="breadcrumb-item"><a href="index.html">Home</a>
</li>
<li class="breadcrumb-item"><a href="#">Layouts</a>
</li>
<li class="breadcrumb-item active">Layout Empty
</li>
</ol>
</div>
</div>
</div>
</div>
<div class="content-header-right text-md-end col-md-3 col-12 d-md-block d-none">
<div class="mb-1 breadcrumb-right">
<div class="dropdown">
<button class="btn-icon btn btn-primary btn-round btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="grid"></i></button>
<div class="dropdown-menu dropdown-menu-end"><a class="dropdown-item" href="#"><i class="me-1" data-feather="check-square"></i><span class="align-middle">Todo</span></a><a class="dropdown-item" href="#"><i class="me-1" data-feather="message-square"></i><span class="align-middle">Chat</span></a><a class="dropdown-item" href="#"><i class="me-1" data-feather="mail"></i><span class="align-middle">Email</span></a><a class="dropdown-item" href="#"><i class="me-1" data-feather="calendar"></i><span class="align-middle">Calendar</span></a></div>
</div>
</div>
</div>
</div>
<div class="content-body">
<div class="row">
<div class="col-12">
<div class="alert alert-primary" role="alert">
<div class="alert-body">
<strong>Info:</strong> This layout can be useful for getting started with empty content section. Please check
the&nbsp;<a class="text-primary" href="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/documentation/documentation-layout-empty.html" target="_blank">Layout empty documentation</a>&nbsp; for more details.
</div>
</div>
</div>
</div>

</div>
</div>
</div>
<!-- END: Content-->

<div class="sidenav-overlay"></div>
<div class="drag-target"></div>

<!-- BEGIN: Footer-->
<footer class="footer footer-static footer-dark footer-shadow">
<p class="clearfix mb-0"><span class="float-md-start d-block d-md-inline-block mt-25">COPYRIGHT &copy; 2021<a class="ms-25" href="https://1.envato.market/pixinvent_portfolio" target="_blank">Pixinvent</a><span class="d-none d-sm-inline-block">, All rights Reserved</span></span><span class="float-md-end d-none d-md-block">Hand-crafted & Made with<i data-feather="heart"></i></span></p>
</footer>
<button class="btn btn-primary btn-icon scroll-top" type="button"><i data-feather="arrow-up"></i></button>
<!-- END: Footer-->


<!-- BEGIN: Vendor JS-->
<script src="../../../app-assets/vendors/js/vendors.min.js"></script>
<!-- BEGIN Vendor JS-->

<!-- BEGIN: Page Vendor JS-->
<script src="../../../app-assets/vendors/js/ui/jquery.sticky.js"></script>
<!-- END: Page Vendor JS-->

<!-- BEGIN: Theme JS-->
<script src="../../../app-assets/js/core/app-menu.js"></script>
<script src="../../../app-assets/js/core/app.js"></script>
<!-- END: Theme JS-->

<!-- BEGIN: Page JS-->
<!-- END: Page JS-->

<script>
$(window).on('load', function() {
if (feather) {
feather.replace({
width: 14,
height: 14
});
}
})
</script>
</body>
<!-- END: Body-->

</html>