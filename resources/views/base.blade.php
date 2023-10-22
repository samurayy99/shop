<!DOCTYPE html>
<html class="loading dark-layout" lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<!-- BEGIN: Head-->
@auth
{{ Auth::user()->checkBanned() }}
@else
{{ App\Models\Settings::checkLoginOnly() }}
@endauth

<head>
    @if(Auth::check())
    {{ Auth::user()->checkBanned() }}
    @else
    {{ App\Models\Settings::checkLoginOnly() }}
    @endif
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
    <meta content="width=device-width, initial-scale=1, user-scalable=0, minimal-ui" name="viewport" />
    <meta content="upgrade-insecure-requests" http-equiv="Content-Security-Policy" />
    <!-- Dynamic title -->
    <title>
        Highsociety > @yield('title')
    </title>
    <!-- Favicon -->
    <link href="{{ asset('/img/favicon.ico') }}" rel="shortcut icon" type="image/x-icon" />
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600"
        rel="stylesheet" />
    <!-- Vendor, Theme, and Custom CSS -->
    <link href="{{ asset('/app-assets/vendors/css/vendors.min.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('/app-assets/css/bootstrap.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('/app-assets/css/bootstrap-extended.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('/app-assets/css/colors.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('/app-assets/css/components.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('/css/style.css') }}" rel="stylesheet" type="text/css" />
    @toastr_css
    <!-- Font Awesome and Froala -->
    <link crossorigin="anonymous" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" rel="stylesheet">
    <link href="{{ asset('/css/froala.min.css') }}" rel="stylesheet" type="text/css">
    <!-- Yield additional CSS -->
    @yield('css')
    <!-- jQuery Script -->
    <script crossorigin="anonymous" src="https://code.jquery.com/jquery-3.6.3.js">
    </script>
    </link>
    </link>
    <meta charset="utf-8" />
    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
    <meta content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
    <meta content="" name="keywords" />
    <meta content="" name="description" />
    <meta content="" name="author" />
</head>
<!-- BEGIN: Body-->

<body class="politics_version" id="page-top">
    <!-- BEGIN: Main Menu-->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
            <img alt="" class="img-fluid" src="{{ asset('images/logo.png') }}" />
        </a>
        <button aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"
            class="navbar-toggler navbar-toggler-right" data-target="#navbarResponsive" data-toggle="collapse"
            type="button">
            Menu
            <i class="fa fa-bars">
            </i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav text-uppercase ml-auto">
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#about">
                        About
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#portfolio">
                        Products
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#faq-section">
                        FAQ
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#contact">
                        Ticket
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link custom-login-button" href="{{ route('auth.login') }}">
                        Login
                    </a>
                </li>
            </ul>
        </div>
        @include('navBar')
    </nav>
    <!-- END: Main Menu-->
    <!-- BEGIN: Home Section -->
    <section class="main-banner parallaxie" id="home" style="background: url('uploads/banner-01.jpg')">
        <div class="heading">
            <h1>
                @yield('subtitle')
            </h1>
            <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                <br />
                sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua."
            </p>
            <h3 class="cd-headline clip is-full-width">
                <span>
                    Lorem ipsum dolor sit amet
                </span>
                <span class="cd-words-wrapper">
                    <b class="is-visible">
                        Web Developer
                    </b>
                    <b>
                        Web Design
                    </b>
                    <b>
                        Creative Design
                    </b>
                    <b>
                        Graphic Design
                    </b>
                </span>
            </h3>
        </div>
    </section>
    <svg class="hidden-xs" height="100" id="clouds" preserveaspectratio="none" version="1.1" viewbox="0 0 85 100"
        width="100%" xmlns="http://www.w3.org/2000/svg">
        <path d="M-5 100 Q 0 20 5 100 Z
            M0 100 Q 5 0 10 100
            M5 100 Q 10 30 15 100
            M10 100 Q 15 10 20 100
            M15 100 Q 20 30 25 100
            M20 100 Q 25 -10 30 100
            M25 100 Q 30 10 35 100
            M30 100 Q 35 30 40 100
            M35 100 Q 40 10 45 100
            M40 100 Q 45 50 50 100
            M45 100 Q 50 20 55 100
            M50 100 Q 55 40 60 100
            M55 100 Q 60 60 65 100
            M60 100 Q 65 50 70 100
            M65 100 Q 70 20 75 100
            M70 100 Q 75 45 80 100
            M75 100 Q 80 30 85 100
            M80 100 Q 85 20 90 100
            M85 100 Q 90 50 95 100
            M90 100 Q 95 25 100 100
            M95 100 Q 100 15 105 100 Z">
        </path>
    </svg>
    <!-- About Section -->
    <div class="section wb" id="about">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="message-box">
                        <h2>
                            About Dominic.
                        </h2>
                        <p>
                            Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus
                            bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis
                            dis parturient montes, nascetur ridiculus mus. Sed vitae rutrum neque. Ut id erat sit amet
                            libero bibendum aliquam. Donec ac egestas libero, eu bibendum risus. Phasellus et congue
                            justo.
                        </p>
                        <p>
                            Sed vitae rutrum neque. Ut id erat sit amet libero bibendum aliquam. Donec ac egestas
                            libero,
                            eu bibendum risus. Phasellus et congue justo.
                        </p>
                        <a class="sim-btn btn-hover-new" data-text="Download CV" href="#">
                            <span>
                                Download CV
                            </span>
                        </a>
                    </div>
                    <!-- end messagebox -->
                </div>
                <!-- end col -->
                <div class="col-md-6">
                    <div class="right-box-pro wow fadeIn">
                        <img alt="" class="img-fluid img-rounded" src="uploads/about_04.jpg" />
                    </div>
                    <!-- end media -->
                </div>
                <!-- end col -->
            </div>
            <!-- end row -->
        </div>
        <!-- end container -->
    </div>
    <!-- end section -->
    <main class="container categories">
        <section class="card category-card" onclick="scrollToCategory('category1')">
            <div class="product-image">
                <img alt="Category 1" draggable="false" src="https://i.ibb.co/cNWqxGx/red.png">
                </img>
            </div>
        </section>
        <section class="card category-card" onclick="scrollToCategory('category2')">
            <div class="product-image">
                <img alt="Category 2" draggable="false" src="https://i.ibb.co/0JKpmgd/blue.png" />
            </div>
        </section>
        <!-- Product Display for Category 1 -->
        <div class="products" id="category1">
            @foreach($products ?? [] as $product)
            @if($product->category_id === 1)
            <div class="product-card">
                <img alt="{{ $product->name }}" src="{{ $product->image }}" />
                <h3>
                    {{ $product->name }}
                </h3>
                <p>
                    Price: {{ $product->price }}
                </p>
            </div>
            @endif
            @endforeach
        </div>
        <!-- Product Display for Category 2 -->
        <div class="products" id="category2">
            @foreach($products ?? [] as $product)
            @if($product->category_id === 2)
            <div class="product-card">
                <img alt="{{ $product->name }}" src="{{ $product->image }}" />
                <h3>
                    {{ $product->name }}
                </h3>
                <p>
                    Price: {{ $product->price }}
                </p>
            </div>
            @endif
            @endforeach
        </div>
    </main>
    <!-- Closing the main tag -->
    <!-- BEGIN: Content-->
    <div class="app-content">
        <div class="content-overlay">
        </div>
        <div class="header-navbar-shadow">
        </div>
        <div class="content-wrapper container-xxl p-0">
            <div class="content-header row">
                <div class="content-header-left col-md-9 col-12 mb-2">
                    <div class="row breadcrumbs-top">
                        <div class="col-12">
                            <h2 class="mb-0">
                                @yield('subtitle')
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            @include('flash-message')
            @yield('content')
        </div>
    </div>
    <!-- END: Content-->
    <div class="sidenav-overlay">
    </div>
    <div class="drag-target">
    </div>
    <div class="modal-body">
        <!-- Login Form -->
        <form action="{{ route('auth.login') }}" id="loginForm" method="POST">
            @csrf
            <div class="form-group">
                <label for="username">
                    Username
                </label>
                <input class="form-control" id="username" name="username" required="" type="text" />
            </div>
            <div class="form-group">
                <label for="password">
                    Password
                </label>
                <input class="form-control" id="password" name="password" required="" type="password" />
            </div>
            <div class="form-group">
            </div>
            <button class="btn btn-primary" type="submit">
                Login
            </button>
        </form>
        <!-- Register Form -->
        <form action="{{ route('auth.register') }}" id="registerForm" method="POST" style="display: none;">
            @csrf
            <div class="form-group">
                <label for="registerUsername">
                    Username
                </label>
                <input class="form-control" id="registerUsername" name="registerUsername" required="" type="text" />
            </div>
            <div class="form-group">
                <label for="registerPassword">
                    Password
                </label>
                <input class="form-control" id="registerPassword" name="registerPassword" required="" type="password" />
            </div>
            <div class="form-group">
                <label for="registerCaptcha">
                    Captcha
                </label>
                <div class="col">
                    {!! captcha_img('flat') !!}
                </div>
                <input class="form-control" id="registerCaptcha" name="registerCaptcha" required="" type="text" />
            </div>
            <button class="btn btn-primary" type="submit">
                Register
            </button>
        </form>
    </div>
    <div class="modal-footer">
        <button class="btn btn-secondary" data-dismiss="modal" type="button">
            Close
        </button>
        <button class="btn btn-primary" id="switchFormButton" type="button">
            Switch to Register
        </button>
    </div>
</body>

</html>
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
<!-- Your AJAX and Login Modal code here -->
<script>
    $(document).ready(function () {
        // CSRF Token Setup
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        // Switch between login and register forms
        $('#register-link').click(function () {
            $('#loginForm').hide();
            $('#registerForm').show();
        });

        $('#login-link').click(function () {
            $('#registerForm').hide();
            $('#loginForm').show();
        });

        // AJAX call for login form
        $('#loginForm').submit(function (e) {
            e.preventDefault();
            $.ajax({
                type: 'POST',
                url: '/auth/login',
                data: $(this).serialize(),
                success: function (data) {
                    if (data.error) {
                        toastr.error(data.error);
                    } else {
                        location.reload();
                    }
                }
            });
        });

        // AJAX call for register form
        $('#registerForm').submit(function (e) {
            e.preventDefault();
            $.ajax({
                type: 'POST',
                url: '/auth/register',
                data: $(this).serialize(),
                success: function (data) {
                    if (data.error) {
                        toastr.error(data.error);
                    } else {
                        location.reload();
                    }
                }
            });
        });
    });
</script>
<script>
    function showLoginModal() {
        $('#loginModal').modal('show');
    }
</script>
<!-- Your HTML content here -->
<!-- BEGIN: JavaScript Section -->
<!-- Core Libraries -->
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js">
</script>
<!-- Theme Scripts -->
<script src="{{ asset('js/app-menu.js') }}">
</script>
<script src="{{ asset('js/app.js') }}">
</script>
<!-- Vendor Scripts -->
<script src="{{ asset('js/vendors.min.js') }}">
</script>
<script src="{{ asset('js/jquery.sticky.js') }}">
</script>
<!-- Page & Theme Scripts -->
<script src="{{ asset('js/auth-login.js') }}">
</script>
<!-- Additional Libraries -->
<script src="{{ asset('js/froala_editor.pkgd.min.js') }}">
</script>
<script src="https://cdn.quilljs.com/1.1.9/quill.js">
</script>
<!-- Custom Scripts -->
<script src="{{ asset('js/jquery.easing.1.3.js') }}">
</script>
<script src="{{ asset('js/parallaxie.js') }}">
</script>
<script src="{{ asset('js/headline.js') }}">
</script>
<script src="{{ asset('js/modernizr.js') }}">
</script>
<script src="{{ asset('js/jqBootstrapValidation.js') }}">
</script>
<script src="{{ asset('js/jquery.vide.js') }}">
</script>
<script src="{{ asset('js/custom.js') }}" type="module">
</script>
<!-- Inline JavaScript -->
<script>
 // Your inline JavaScript code here
</script>
<!-- Page-Specific Scripts -->
@yield('js')
<!-- END: JavaScript Section -->
<!-- BEGIN: Vendor JS-->