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
    <title>@yield('title')</title>
    <link rel="shortcut icon" href="{{ asset('/img/favicon.ico') }}" type="image/x-icon" />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600"
        rel="stylesheet">

    <link rel="stylesheet" type="text/css" href="{{ asset('/css/bootstrap.min.css') }}">
    @toastr_css
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" crossorigin="anonymous" />
    <link rel="stylesheet" type="text/css" href="{{ asset('css/animate.css') }}">
    <!-- Old CSS -->
    <link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/bootstrap.css') }}">
    <link rel="stylesheet" type="text/css"
        href="{{ asset('/app-assets/css/core/menu/menu-types/horizontal-menu.css') }}">
    <!-- New Design CSS -->
    <link rel="stylesheet" type="text/css" href="{{ asset('css/camera.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/owl.carousel.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/prettyPhoto.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/responsive.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/versions.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/custom.css') }}">
</head>
<!-- END: Head-->

<!-- BEGIN: Body-->

<body id="page-top" class="politics_version">

    <!-- Navigation Menu -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
            <img class="img-fluid" src="{{ asset('images/logo.png') }}" alt="" />
        </a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
            data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
            aria-label="Toggle navigation">
            Menu
            <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav text-uppercase ml-auto">
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#portfolio">Products</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#faq-section">FAQ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#contact">Ticket</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link custom-login-button" href="{{ route('auth.login') }}">Login</a>
                </li>
            </ul>
        </div>
    </nav>

    <!-- Banner Section with Animation -->
    <section id="home" class="main-banner parallaxie" style="background: url('uploads/banner-01.jpg')">
        <div class="heading">
            <h1>@yield('subtitle')</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br>sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua."</p>
            <h3 class="cd-headline clip is-full-width">
                <span>Lorem ipsum dolor sit amet </span>
                <span class="cd-words-wrapper">
                    <b class="is-visible">Web Developer</b>
                    <b>Web Design</b>
                    <b>Creative Design</b>
                    <b>Graphic Design</b>
                </span>
            </h3>
        </div>
    </section>

    <svg id="clouds" class="hidden-xs" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100"
        viewBox="0 0 85 100" preserveAspectRatio="none">
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
    <div id="about" class="section wb">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="message-box">
                        <h2>About Dominic.</h2>
                        <p> Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus
                            bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis
                            dis parturient montes, nascetur ridiculus mus. Sed vitae rutrum neque. Ut id erat sit amet
                            libero bibendum aliquam. Donec ac egestas libero, eu bibendum risus. Phasellus et congue
                            justo. </p>
                        <p>Sed vitae rutrum neque. Ut id erat sit amet libero bibendum aliquam. Donec ac egestas libero,
                            eu bibendum risus. Phasellus et congue justo.</p>

                        <a href="#" class="sim-btn btn-hover-new" data-text="Download CV"><span>Download CV</span></a>
                    </div><!-- end messagebox -->
                </div><!-- end col -->

                <div class="col-md-6">
                    <div class="right-box-pro wow fadeIn">
                        <img src="uploads/about_04.jpg" alt="" class="img-fluid img-rounded">
                    </div><!-- end media -->
                </div><!-- end col -->
            </div><!-- end row -->
        </div><!-- end container -->
    </div><!-- end section -->

    <!-- BEGIN: Header-->
    <section id="home" class="main-banner parallaxie" style="background: url('{{ asset('uploads/banner-01.jpg') }}');">
        <div class="main-content">
            <h1>hello i'm Dominic</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br>sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua."</p>
            <h3 class="cd-headline clip is-full-width">
                <span>Lorem ipsum dolor sit amet </span>
                <span class="cd-words-wrapper">
                    <b class="is-visible">Web Developer</b>
                    <b>Web Design</b>
                    <b>Creative Design</b>
                    <b>Graphic Design</b>
                </span>
            </h3>
        </div>
    </section>

    <div id="about" class="section wb">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="message-box">
                        <h2>About</h2>
                        <p>Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus
                            bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis
                            dis parturient montes, nascetur ridiculus mus. Sed vitae rutrum neque. Ut id erat sit amet
                            libero bibendum aliquam. Donec ac egestas libero, eu bibendum risus. Phasellus et congue
                            justo.</p>
                        <p>Sed vitae rutrum neque. Ut id erat sit amet libero bibendum aliquam. Donec ac egestas libero,
                            eu bibendum risus. Phasellus et congue justo.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

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

        <!-- END: Main Menu-->

        <!-- Product Display for Category 1 -->
        <div id="category1" class="products">
            @foreach($products ?? [] as $product)
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
        <div id="category2" class="products">
            @foreach($products ?? [] as $product)
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
        <div class="app-content">
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
        <!-- Load jQuery -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

        <!-- Feather Icons -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.28.0/feather.min.js"></script>

        <!-- Vendor JS -->
        <script src="{{ asset('/app-assets/vendors/js/vendors.min.js') }}"></script>
        <script src="{{ asset('/app-assets/vendors/js/ui/jquery.sticky.js') }}"></script>

        <!-- Theme JS -->
        <script src="{{ asset('/app-assets/js/core/app-menu.js') }}"></script>
        <script src="{{ asset('/app-assets/js/core/app.js') }}"></script>
        <script src="{{ asset('/js/froala_editor.pkgd.min.js') }}"></script>

        <!-- Bootstrap and Quill -->
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        <script src="https://cdn.quilljs.com/1.1.9/quill.js"></script>

        <!-- Custom JS of the New Design -->
        <script src="{{ asset('js/jquery.easing.1.3.js') }}"></script>
        <script src="{{ asset('js/parallaxie.js') }}"></script>
        <script src="{{ asset('js/headline.js') }}"></script>
        <script src="{{ asset('js/modernizr.js') }}"></script>
        <script src="{{ asset('js/jqBootstrapValidation.js') }}"></script>
        <script src="{{ asset('js/contact_me.js') }}"></script>
        <script src="{{ asset('js/jquery.vide.js') }}"></script>
        <script src="{{ asset('js/custom.js') }}"></script>

        <!-- Page-specific JS -->
        <script src="{{ asset('js/scripts/pages/auth-login.js') }}"></script>

        <!-- Yield for page-specific JS -->
        @yield('js')


        <div id="loginModal" class="modal fade custom-modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="loginModalLabel">Login</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <!-- Login Form -->
                        <form id="loginForm" action="/auth/login" method="POST">
                            <div class="form-group">
                                <label for="username">Username</label>
                                <input type="text" class="form-control" id="username" name="username" required>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" id="password" name="password" required>
                            </div>
                            <div class="form-group">

                            </div>
                            <button type="submit" class="btn btn-primary">Login</button>
                        </form>
                        <!-- Register Form -->
                        <form id="registerForm" action="/auth/register" method="POST" style="display: none;">
                            <div class="form-group">
                                <label for="registerUsername">Username</label>
                                <input type="text" class="form-control" id="registerUsername" name="registerUsername"
                                    required>
                            </div>
                            <div class="form-group">
                                <label for="registerPassword">Password</label>
                                <input type="password" class="form-control" id="registerPassword"
                                    name="registerPassword" required>
                            </div>
                            <div class="form-group">
                                <label for="registerCaptcha">Captcha</label>
                                <div class="col">{!! captcha_img('flat') !!}</div>

                                <input type="text" class="form-control" id="registerCaptcha" name="registerCaptcha"
                                    required>
                            </div>
                            <button type="submit" class="btn btn-primary">Register</button>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button id="switchFormButton" type="button" class="btn btn-primary">Switch to Register</button>
                    </div>
                </div>
            </div>
        </div>


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
                    var formData = new FormData(this);
                    formData.append('registerCaptcha', $('#registerCaptcha').val());

                    $.ajax({
                        type: 'POST',
                        url: '/auth/register',
                        data: formData,
                        processData: false,
                        contentType: false,
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
        @yield('js')

        <!-- END: Body-->
</body>
<!-- Vendor Scripts -->

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.3/jquery.validate.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
<script src="https://cdn.quilljs.com/1.1.9/quill.js"></script>
<script src="{{ asset('/app-assets/vendors/js/vendors.min.js') }}"></script>

<!-- Page & Theme Scripts -->
<script src="{{ asset('/app-assets/vendors/js/ui/jquery.sticky.js') }}"></script>
<script src="{{ asset('/app-assets/js/core/app-menu.js') }}"></script>
<script src="{{ asset('/app-assets/js/core/app.js') }}"></script>
<script type="text/javascript" src="{{ asset('/js/froala_editor.pkgd.min.js') }}"></script>
<script src="{{ asset('js/scripts/pages/auth-login.js') }}"></script>

<!-- Custom Scripts -->
<script src="{{ asset('js/jquery.easing.1.3.js') }}"></script>
<script src="{{ asset('js/parallaxie.js') }}"></script>
<script src="{{ asset('js/headline.js') }}"></script>
<script src="{{ asset('js/modernizr.js') }}"></script>
<script src="{{ asset('js/jqBootstrapValidation.js') }}"></script>
<script src="{{ asset('js/contact_me.js') }}"></script>
<script src="{{ asset('js/jquery.vide.js') }}"></script>
<script src="{{ asset('/js/scripts.js') }}"></script>

<!-- Page-Specific Scripts -->
@yield('js')

</html>