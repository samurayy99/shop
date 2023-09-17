<!DOC @if (Request::is('admin/*')) <div class="navbar-container main-menu-content" data-menu="menu-container">
    <ul class="nav navbar-nav mr-auto" id="main-menu-navigation" data-menu="menu-navigation">
        <li class="nav-item"><a class="nav-link d-flex align-items-center" href="{{ route('admin.dashboard') }}"><i
                    class="fal fa-home"></i> {{ __('Dashboard') }}</span></a></li>

        <!-- Verwaltung -->
        <li class="nav-item dropdown" data-menu="dropdown">
            <a href="javascript:void(0)" class="nav-link d-flex align-items-center dropdown-toggle" target="_self"
                data-bs-toggle="dropdown">
                <i class="fal fa-file"></i>
                <span>Verwaltung</span>
            </a>
            <ul class="dropdown-menu" data-bs-popper="none">

                <li class="  ">
                    <a href="{{ route('admin.users') }}" class="dropdown-item  d-flex align-items-center"
                        target="_self">
                        <i class="fal fa-user"></i>
                        <span>Benutzer</span>
                    </a>
                </li>

                <li class="  ">
                    <a href="{{ route('admin.faq') }}" class="dropdown-item  d-flex align-items-center" target="_self">
                        <i class="fal fa-question"></i>
                        <span>FAQs</span>
                    </a>
                </li>

                <li class="  ">
                    <a href="{{ route('admin.orders') }}" class="dropdown-item  d-flex align-items-center"
                        target="_self">
                        <i class="fal fa-shopping-cart"></i>
                        <span>Bestellungen</span>
                    </a>
                </li>

                <li class="  ">
                    <a href="{{ route('admin.news') }}" class="dropdown-item  d-flex align-items-center" target="_self">
                        <i class="fal fa-rss"></i>
                        <span>Neuigkeiten</span>
                    </a>
                </li>

                <li class="  ">
                    <a href="{{ route('admin.jabber') }}" class="dropdown-item  d-flex align-items-center"
                        target="_self">
                        <i class="fal fa-comment-dots"></i>
                        <span>Jabber Newsletter</span>
                    </a>
                </li>

            </ul>

        </li>
        <!-- Verwaltung Ende -->

        <!-- Produkte -->
        <li class="nav-item dropdown" data-menu="dropdown">
            <a href="javascript:void(0)" class="nav-link d-flex align-items-center dropdown-toggle" target="_self"
                data-bs-toggle="dropdown">
                <i class="fal fa-shopping-basket"></i>
                <span>Produkte</span>
            </a>
            <ul class="dropdown-menu" data-bs-popper="none">

                <li class="  ">
                    <a href="{{ route('admin.categories') }}" class="dropdown-item  d-flex align-items-center"
                        target="_self">
                        <i class="fal fa-arrow-right"></i>
                        <span>Kategorien</span>
                    </a>
                </li>

                <li class="  ">
                    <a href="{{ route('admin.products') }}" class="dropdown-item  d-flex align-items-center"
                        target="_self">
                        <i class="fal fa-arrow-right"></i>
                        <span>Produkte</span>
                    </a>
                </li>

            </ul>

        </li>
        <!-- Produkte Ende -->

        <!-- Support Ticket -->
        <li class="nav-item">
            <a class="nav-link d-flex align-items-center" href="{{ route('admin.tickets') }}">
                <i class="fal fa-comment-alt-smile"></i> {{ __('Tickets') }}</span>
                <span class="badge rounded-pill bg-danger ms-05">{{ App\Models\Ticket::countOpenTickets() }}</span>
            </a>
        </li>
        <!-- Support Ticket Ende -->


        <!-- System -->
        <li class="nav-item dropdown" data-menu="dropdown">
            <a href="javascript:void(0)" class="nav-link d-flex align-items-center dropdown-toggle" target="_self"
                data-bs-toggle="dropdown">
                <i class="fal fa-server"></i>
                <span>System</span>
            </a>
            <ul class="dropdown-menu" data-bs-popper="none">

                <li class="  ">
                    <a href="{{ route('admin.settings') }}" class="dropdown-item  d-flex align-items-center"
                        target="_self">
                        <i class="fal fa-cogs me-1"></i>
                        <span>Einstellungen</span>
                    </a>
                </li>

                <li class="  ">
                    <a href="{{ route('admin.bitcoin') }}" class="dropdown-item  d-flex align-items-center"
                        target="_self">
                        <i class="fab fa-bitcoin me-1"></i>
                        <span>Bitcoin</span>
                    </a>
                </li>

                <li class="  ">
                    <a href="{{ route('admin.transactions') }}" class="dropdown-item  d-flex align-items-center"
                        target="_self">
                        <i class="fal fa-money-bill-alt me-1"></i>
                        <span>Transaktionen</span>
                    </a>
                </li>

                <li class="  ">
                    <a href="{{ route('admin.backups') }}" class="dropdown-item  d-flex align-items-center"
                        target="_self">
                        <i class="fal fa-file-search me-1"></i>
                        <span>Backups</span>
                    </a>
                </li>

            </ul>

        </li>
        <!-- System Ende -->


        <li class="nav-item"><a class="nav-link d-flex align-items-center" href="{{ route('site.home') }}"><i
                    class="fal fa-arrow-alt-from-right"></i> {{ __('Zurück') }}</span></a></li>
    </ul>
    </div>

    @else

    <div class="navbar-container main-menu-content" data-menu="menu-container">
        <ul class="nav navbar-nav mr-auto" id="main-menu-navigation" data-menu="menu-navigation">
            <li class="nav-item"><a class="nav-link d-flex align-items-center" href="/"><i class="fal fa-home"></i> {{
                    __('Neuigkeiten') }}</span></a></li>
            <li class="nav-item"><a class="nav-link d-flex align-items-center" href="{{ route('shop.entry') }}"><i
                        class="fal fa-shopping-cart"></i> {{ __('Produkte') }}</span></a></li>


            @if(Auth::check())
            <li class="nav-item"><a class="nav-link d-flex align-items-center" href="{{ route('user.cashin') }}"><i
                        class="fal fa-wallet"></i> {{ __('Guthaben') }}: {{ Auth::user()->getBalance() }}€</span></a>
            </li>
            @endif

            <li class="nav-item">
                <a class="nav-link d-flex align-items-center" href="{{ route('support.tickets.answered') }}"><i
                        class="fal fa-question"></i> {{ __('Hilfe') }}
                    @if(Auth::check() && App\Models\Ticket::countAnsweredTicketsByUser(Auth::user()->id) > 0)
                    <span class="badge rounded-pill bg-primary ms-05">{{
                        App\Models\Ticket::countAnsweredTicketsByUser(Auth::user()->id) }}</span>
                    @endif
                    </span>
                </a>
            </li>

            @if(App\Models\Faq::hasFaq())
            <li class="nav-item"><a class="nav-link d-flex align-items-center" href="{{ route('faq') }}"><i
                        class="fal fa-book"></i> {{ __('FAQ') }}</span></a></li>
            @endif

            @can('Adminpanel Zugriff')
            <li class="nav-item"><a class="nav-link d-flex align-items-center" href="{{ route('admin.dashboard') }}"><i
                        class="fal fa-arrow-alt-from-left"></i> {{ __('Admin Panel') }}</span></a></li>
            @endcan
            @if(!Auth::check())
            <li class="nav-item"><a class="nav-link d-flex align-items-center" href="{{ route('auth.login') }}"><i
                        class="fal fa-sign-in-alt"></i> {{ __('Anmelden') }}</span></a></li>
            @endif
        </ul>
    </div>
    @if(!Auth::check())
    <li class="nav-item"><a class="nav-link d-flex align-items-center" href="{{ route('auth.login') }}"><i
                class="fal fa-sign-in-alt"></i> {{ __('Anmelden') }}</span></a></li>
    @endif
    @endif
    TYPE html>
    <html class="loading dark-layout" lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <!-- BEGIN: Head-->

    @if(Auth::check())
    {{ Auth::user()->checkBanned() }}
    @else
    {{ App\Models\Settings::checkLoginOnly() }}
    @endif

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=0,minimal-ui">
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
        <title>Highsociety >
            <!DOCTYPE html>
            <html class="loading dark-layout" lang="en" data-layout="dark-layout" data-textdirection="ltr">
            <!-- BEGIN: Head-->

            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=0,minimal-ui">
                <title>Highsociety</title>
                <link rel="shortcut icon" type="image/x-icon" href="../../../app-assets/images/ico/favicon.ico">
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600"
                    rel="stylesheet">

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
                <link rel="stylesheet" type="text/css"
                    href="{{ asset('/app-assets/css/themes/semi-dark-layout.css') }}">

                <!-- BEGIN: Page CSS-->
                <link rel="stylesheet" type="text/css"
                    href="{{ asset('/app-assets/css/core/menu/menu-types/horizontal-menu.css') }}">
                <!-- END: Page CSS-->

                <!-- BEGIN: Custom CSS-->
                <link rel="stylesheet" type="text/css" href="{{ asset('/css/style.css') }}">
                <!-- END: Custom CSS-->

            </head>
            <!-- END: Head-->

            <!-- BEGIN: Body-->

    <body class="horizontal-layout horizontal-menu navbar-floating footer-static" data-open="hover"
        data-menu="horizontal-menu" data-col="">

        <!-- BEGIN: Header-->
        <nav class="header-navbar navbar-expand-lg navbar navbar-fixed align-items-center navbar-shadow navbar-brand-center"
            data-nav="brand-center">
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
                        <li class="nav-item"><a class="nav-link menu-toggle" href="#"><i class="ficon"
                                    data-feather="menu"></i></a></li>
                    </ul>
                    <ul class="nav navbar-nav">
                        <li class="nav-item d-none d-lg-block"><a class="nav-link nav-link-style"><i class="ficon"
                                    data-feather="sun"></i></a></li>
                    </ul>
                </div>
                <ul class="nav navbar-nav align-items-center ms-auto">
                    <li class="nav-item dropdown dropdown-user"><a class="nav-link dropdown-toggle dropdown-user-link"
                            id="dropdown-user" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <div class="user-nav d-sm-flex d-none"><span class="user-name fw-bolder">John
                                    Doe</span><span class="user-status">Admin</span></div><span class="avatar"><img
                                    class="round" src="../../../app-assets//images/portrait/small/avatar-s-11.jpg"
                                    alt="avatar" height="40" width="40"><span
                                    class="avatar-status-online"></span></span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown-user"><a
                                class="dropdown-item" href="#"><i class="me-50" data-feather="user"></i> Profile</a><a
                                class="dropdown-item" href="#"><i class="me-50" data-feather="mail"></i> Inbox</a><a
                                class="dropdown-item" href="#"><i class="me-50" data-feather="check-square"></i>
                                Task</a><a class="dropdown-item" href="#"><i class="me-50"
                                    data-feather="message-square"></i> Chats</a>
                            <div class="dropdown-divider"></div><a class="dropdown-item" href="#"><i class="me-50"
                                    data-feather="settings"></i> Settings</a><a class="dropdown-item" href="#"><i
                                    class="me-50" data-feather="credit-card"></i> Pricing</a><a class="dropdown-item"
                                href="#"><i class="me-50" data-feather="help-circle"></i> FAQ</a><a
                                class="dropdown-item" href="#"><i class="me-50" data-feather="power"></i> Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        <!-- END: Header-->


        <!-- BEGIN: Main Menu-->
        <div class="horizontal-menu-wrapper">
            <div class="header-navbar navbar-expand-sm navbar navbar-horizontal floating-nav navbar-dark navbar-shadow menu-border container-xxl"
                role="navigation" data-menu="menu-wrapper" data-menu-type="floating-nav">
                <div class="navbar-header">
                    <ul class="nav navbar-nav flex-row">
                        <li class="nav-item me-auto"><a class="navbar-brand"
                                href="../../../html/ltr/horizontal-menu-template-dark/index.html">
                                <h2 class="brand-text mb-0">Highsociety</h2>
                            </a></li>
                        <li class="nav-item nav-toggle"><a class="nav-link modern-nav-toggle pe-0"
                                data-bs-toggle="collapse"><i
                                    class="d-block d-xl-none text-primary toggle-icon font-medium-4"
                                    data-feather="x"></i></a></li>
                    </ul>
                </div>
                <div class="shadow-bottom"></div>
                <!-- Horizontal menu content-->
                <div class="navbar-container main-menu-content" data-menu="menu-container">
                    <!-- include ../../../includes/mixins-->
                    <ul class="nav navbar-nav" id="main-menu-navigation" data-menu="menu-navigation">
                        <li class="nav-item"><a class="nav-link d-flex align-items-center" href="index.html"><i
                                    data-feather="home"></i><span data-i18n="Home">Home</span></a></li>
                        <li class="dropdown nav-item" data-menu="dropdown"><a
                                class="dropdown-toggle nav-link d-flex align-items-center" href="#"
                                data-bs-toggle="dropdown"><i data-feather="layout"></i><span
                                    data-i18n="Page Layouts">Page Layouts</span></a>
                            <ul class="dropdown-menu" data-bs-popper="none">
                                <li data-menu=""><a class="dropdown-item d-flex align-items-center"
                                        href="layout-full.html" data-bs-toggle="" data-i18n="Layout Full"><span
                                            data-i18n="Layout Full">Layout Full</span></a>
                                </li>
                                <li data-menu=""><a class="dropdown-item d-flex align-items-center"
                                        href="layout-without-menu.html" data-bs-toggle="" data-i18n="Without Menu"><span
                                            data-i18n="Without Menu">Without Menu</span></a>
                                </li>
                                <li class="active" data-menu=""><a class="dropdown-item d-flex align-items-center"
                                        href="layout-empty.html" data-bs-toggle="" data-i18n="Layout Empty"><span
                                            data-i18n="Layout Empty">Layout Empty</span></a>
                                </li>
                                <li data-menu=""><a class="dropdown-item d-flex align-items-center"
                                        href="layout-blank.html" data-bs-toggle="" data-i18n="Layout Blank"><span
                                            data-i18n="Layout Blank">Layout Blank</span></a>
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
                                <button class="btn-icon btn btn-primary btn-round btn-sm dropdown-toggle" type="button"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i
                                        data-feather="grid"></i></button>
                                <div class="dropdown-menu dropdown-menu-end"><a class="dropdown-item" href="#"><i
                                            class="me-1" data-feather="check-square"></i><span
                                            class="align-middle">Todo</span></a><a class="dropdown-item" href="#"><i
                                            class="me-1" data-feather="message-square"></i><span
                                            class="align-middle">Chat</span></a><a class="dropdown-item" href="#"><i
                                            class="me-1" data-feather="mail"></i><span
                                            class="align-middle">Email</span></a><a class="dropdown-item" href="#"><i
                                            class="me-1" data-feather="calendar"></i><span
                                            class="align-middle">Calendar</span></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-body">
                    <div class="row">
                        <div class="col-12">
                            <div class="alert alert-primary" role="alert">
                                <div class="alert-body">
                                    <strong>Info:</strong> This layout can be useful for getting started with empty
                                    content section. Please check
                                    the&nbsp;<a class="text-primary"
                                        href="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/documentation/documentation-layout-empty.html"
                                        target="_blank">Layout empty documentation</a>&nbsp; for more details.
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
            <p class="clearfix mb-0"><span class="float-md-start d-block d-md-inline-block mt-25">COPYRIGHT &copy;
                    2021<a class="ms-25" href="https://1.envato.market/pixinvent_portfolio"
                        target="_blank">Pixinvent</a><span class="d-none d-sm-inline-block">, All rights
                        Reserved</span></span><span class="float-md-end d-none d-md-block">Hand-crafted & Made with<i
                        data-feather="heart"></i></span></p>
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
            $(window).on('load', function () {
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
    </title>
    <link rel="shortcut icon" type="image/x-icon" href="{{ asset('/img/favicon.ico') }}">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600"
        rel="stylesheet">

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
    <link rel="stylesheet" type="text/css"
        href="{{ asset('/app-assets/css/core/menu/menu-types/horizontal-menu.css') }}">
    <!-- END: Page CSS-->

    <!-- BEGIN: Custom CSS-->
    <link rel="stylesheet" type="text/css" href="{{ asset('/css/style.css') }}">
    @toastr_css
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" crossorigin="anonymous" />
    <link href="{{ asset('/css/froala.min.css') }}" rel="stylesheet" type="text/css" />
    @yield('css')

    <link href="{{ route('custom-css') }}" rel="stylesheet" />
    <!-- END: Custom CSS-->

    <script src="https://code.jquery.com/jquery-3.6.3.js" crossorigin="anonymous"></script>

    </head>
    <!-- END: Head-->

    <!-- BEGIN: Body-->

    <body class="horizontal-layout horizontal-menu navbar-floating footer-static" data-open="hover"
        data-menu="horizontal-menu" data-col="">

        <!-- BEGIN: Header-->
        <nav class="header-navbar navbar-expand-lg navbar navbar-fixed align-items-center navbar-shadow navbar-brand-center"
            data-nav="brand-center">
            <div class="navbar-header d-xl-block d-none">
                <ul class="nav navbar-nav">
                    <li class="nav-item"><a class="navbar-brand" href="/">
                            <h2 class="brand-text mb-0" id="brand-text">Highsociety</h2>
                        </a></li>
                </ul>
            </div>
            <div class="navbar-container d-flex content">
                <div class="bookmark-wrapper d-flex align-items-center">
                    <ul class="nav navbar-nav d-xl-none">
                        <li class="nav-item"><a class="nav-link menu-toggle" href="#"><i class="ficon"
                                    data-feather="menu"></i></a></li>
                    </ul>
                </div>

                <ul class="nav navbar-nav align-items-center ms-auto">
                    <li class="nav-item dropdown dropdown-language">
                        <a class="nav-link dropdown-toggle" id="dropdown-flag" href="#" data-bs-toggle="dropdown"
                            aria-haspopup="true">
                            <i class="flag-icon flag-icon-{{ Config::get('app.locale') == 'de' ? 'de' : 'us'}}"></i>
                            <span class="selected-language">
                                {{ Config::get('app.locale') == "de" ? "Deutsch" : "English"}}
                            </span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown-flag">
                            <a class="dropdown-item" href="{{ route('lang', 'en') }}" data-language="en">
                                <i class="flag-icon flag-icon-us"></i> English
                            </a>
                            <a class="dropdown-item" href="{{ route('lang', 'de') }}" data-language="de">
                                <i class="flag-icon flag-icon-de"></i> Deutsch
                            </a>
                        </div>
                    </li>
                    @if(Auth::check())
                    <li class="nav-item dropdown dropdown-user">
                        <a class="nav-link dropdown-toggle dropdown-user-link" id="dropdown-user" href="#"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div class="user-nav d-sm-flex d-none">
                                <span class="user-name fw-bolder"
                                    style="color: {{ Auth::user()->roles->pluck('color')[0] }};">
                                    {{ Auth::user()->username }}
                                </span>
                                <span class="user-status">
                                    {{ Auth::user()->roles->pluck('name')[0] }}
                                </span>
                            </div>
                            <span class="avatar">
                                <img class="round" src="{{ asset('/img/profile_pictures/default.jpg') }}" alt="avatar"
                                    height="40" width="40">
                                <span class="avatar-status-online"></span>
                            </span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown-user">
                            <a class="dropdown-item" href="{{ route('user.orders') }}">
                                <i class="me-50" data-feather="user"></i> {{ __('Bestellungen') }}
                            </a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="{{ route('user.settings') }}">
                                <i class="me-50" data-feather="settings"></i> {{ __('Einstellungen') }}
                            </a>
                            <a class="dropdown-item" href="{{ route('auth.logout') }}">
                                <i class="me-50" data-feather="power"></i> {{ __('Abmelden') }}
                            </a>
                        </div>
                    </li>
                    @endif
                </ul>
            </div>
        </nav>

        <!-- END: Header-->


        <!-- BEGIN: Main Menu-->
        <div class="horizontal-menu-wrapper">
            <div class="header-navbar navbar-expand-sm navbar navbar-horizontal floating-nav navbar-dark navbar-shadow menu-border container-xxl"
                role="navigation" data-menu="menu-wrapper" data-menu-type="floating-nav">
                <div class="navbar-header">
                    <ul class="nav navbar-nav flex-row">
                        <li class="nav-item me-auto"><a class="navbar-brand" href="/">
                                <h2 class="brand-text mb-0">Highsociety</h2>
                            </a></li>
                        <li class="nav-item nav-toggle"><a class="nav-link modern-nav-toggle pe-0"
                                data-bs-toggle="collapse"><i
                                    class="d-block d-xl-none text-primary toggle-icon font-medium-4"
                                    data-feather="x"></i></a></li>
                    </ul>
                </div>
                <div class="shadow-bottom"></div>
                <!-- Horizontal menu content-->
                @include('navBar')
            </div>
        </div>
        <!-- END: Main Menu-->

        <main class="container categories">
            <section class="card category-card" onclick="scrollToCategory('category1')">
                <div class="product-image">
                    <img src="https://i.ibb.co/cNWqxGx/red.png" alt="Category 1" draggable="false" />
                </div>
            </section>
            <section class="card category-card" onclick="scrollToCategory('category2')">
                <div class="product-image">
                    <img src="https://i.ibb.co/0JKpmgd/blue.png" alt="Category 2" draggable="false" />
                </div>
            </section>
            <!-- Product Display for Category 1 -->
            <!-- Product Display for Category 1 -->
            <div id="category1" class="products" style="display: none;">
                @foreach($products as $product)
                @if($product->category_id === 1)
                <div class="product-card">
                    <img src="{{ $product->image }}" alt="{{ $product->name }}">
                    <h3>{{ $product->name }}</h3>
                    <p>Price: {{ $product->price }}</p>
                </div>
                @endif
                @endforeach
            </div>

            <!-- Product Display for Category 2 -->
            <div id="category2" class="products" style="display: none;">
                @foreach($products as $product)
                @if($product->category_id === 2)
                <div class="product-card">
                    <img src="{{ $product->image }}" alt="{{ $product->name }}">
                    <h3>{{ $product->name }}</h3>
                    <p>Price: {{ $product->price }}</p>
                </div>
                @endif
                @endforeach
            </div>


            <!-- BEGIN: Content-->
            <div class="app-content content">
                <div class="content-overlay"></div>
                <div class="header-navbar-shadow"></div>
                <div class="content-wrapper container-xxl p-0">

                    <div class="content-header row">
                        <div class="content-header-left col-md-9 col-12 mb-2">
                            <div class="row breadcrumbs-top">
                                <div class="col-12">
                                    <h2 class="mb-0">@yield('subtitle')</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    @include('flash-message')
                    @yield('content')
                </div>

            </div>
            <!-- END: Content-->

            <div class="sidenav-overlay"></div>
            <div class="drag-target"></div>

            <!-- BEGIN: Vendor JS-->
            <script src="{{ asset('/app-assets/vendors/js/vendors.min.js') }}"></script>
            <!-- BEGIN Vendor JS-->

            <!-- BEGIN: Page Vendor JS-->
            <script src="{{ asset('/app-assets/vendors/js/ui/jquery.sticky.js') }}"></script>
            <!-- END: Page Vendor JS-->

            <!-- BEGIN: Theme JS-->
            <script src="{{ asset('/app-assets/js/core/app-menu.js') }}"></script>
            <script src="{{ asset('/app-assets/js/core/app.js') }}"></script>
            <script type="text/javascript" src="{{ asset('/js/froala_editor.pkgd.min.js') }}"></script>

            <!-- END: Theme JS-->

            <!-- BEGIN: Page JS-->
            <!-- END: Page JS-->

            <script>
                $(window).on('load', function () {
                    if (feather) {
                        feather.replace({
                            width: 14,
                            height: 14
                        });
                    }
                })
            </script>


            @jquery
            @toastr_js
            @toastr_render

            <script src="{{ asset('/js/scripts.js') }}"></script>
            <script src="https://cdn.quilljs.com/1.1.9/quill.js"></script>
            <!-- Bootstrap JS -->
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-beta1/js/bootstrap.bundle.min.js"></script>
            @yield('js')

    </body>
    <!-- END: Body-->

    </html>