<!DOCTYPE html>
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
    <title>Highsociety > @yield('title')</title>
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
                <li class="nav-item dropdown dropdown-user"><a class="nav-link dropdown-toggle dropdown-user-link"
                        id="dropdown-user" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <div class="user-nav d-sm-flex d-none"><span class="user-name fw-bolder"
                                style="color: {{ Auth::user()->roles->pluck('color')[0] }};">{{ Auth::user()->username
                                }}</span><span class="user-status">{{ Auth::user()->roles->pluck('name')[0] }}</span>
                        </div><span class="avatar"><img class="round"
                                src="{{ asset('/img/profile_pictures/default.jpg') }}" alt="avatar" height="40"
                                width="40"><span class="avatar-status-online"></span></span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown-user">
                        <a class="dropdown-item" href="{{ route('user.orders') }}"><i class="me-50"
                                data-feather="user"></i> {{ __('Bestellungen') }}</a>
                        <div class="dropdown-divider"></div><a class="dropdown-item"
                            href="{{ route('user.settings') }}"><i class="me-50" data-feather="settings"></i> {{
                            __('Einstellungen') }}</a>
                        <a class="dropdown-item" href="{{ route('auth.logout') }}"><i class="me-50"
                                data-feather="power"></i> {{ __('Abmelden') }}</a>
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
        @yield('js')

</body>
<!-- END: Body-->

</html>