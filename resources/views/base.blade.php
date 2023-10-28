<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<!-- BEGIN: Head-->
<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <meta content="upgrade-insecure-requests" http-equiv="Content-Security-Policy" />
    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
    <meta content="width=device-width, initial-scale=1, user-scalable=0, minimal-ui" name="viewport" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
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
    <link href="{{ asset('/app-assets/css/bootstrap.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('/app-assets/css/bootstrap-extended.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('/app-assets/css/colors.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('/app-assets/css/components.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('/css/style.css') }}" rel="stylesheet" type="text/css" />
    <!-- Font Awesome and Froala -->
    <link crossorigin="anonymous" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" rel="stylesheet">
    <link href="{{ asset('/css/froala.min.css') }}" rel="stylesheet" type="text/css">
    <!-- Yield additional CSS -->
    @yield('css')
</head>
<!-- BEGIN: Body-->

<body class="politics_version" id="page-top">
    <!-- BEGIN: Main Menu-->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
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
                    <a class="nav-link js-scroll-trigger" href="#about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#products">Products</a>
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
                  <!-- Hidden Superadmin Login Link -->
<a style="display:none;" id="superadmin-link" href="{{ route('superadmin.settings') }}"></a>
  
                </li>
            </ul>
        </div>
    </nav>

    <!-- Login/Register Modal -->
<div class="modal fade" id="loginRegisterModal" tabindex="-1" role="dialog" aria-labelledby="loginRegisterModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <!-- Login Form -->
            <div class="modal-body" id="loginForm">
                <h5 class="modal-title">Login</h5>
                <form method="POST" action="/auth/login">
                    @csrf
                    <input type="text" name="username" placeholder="Username" required>
                    <input type="password" name="password" placeholder="Password" required>
                    <!-- Add your captcha field here -->
                    <button type="submit">Login</button>
                </form>
                <button id="switchToRegister">Switch to Register</button>
            </div>

            <!-- Register Form -->
            <div class="modal-body" id="registerForm" style="display: none;">
                <h5 class="modal-title">Register</h5>
                <form method="POST" action="/auth/register">
                    @csrf
                    <input type="text" name="username" placeholder="Username" required>
                    <input type="password" name="password" placeholder="Password" required>
                    <!-- Add your captcha field here -->
                    <button type="submit">Register</button>
                </form>
                <button id="switchToLogin">Switch to Login</button>
            </div>
        </div>
    </div>
</div>
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

    <!-- BEGIN: Categories and Products -->
    <main class="container categories">
        @php
        $staticImages = [
        'category-a' => asset('images/img_2.jpg'),
        'category-b' => asset('images/img_3.jpg')
        ];
        @endphp
        @foreach($categories as $category)
        <section class="card category-card">
            <div class="product-image">
                <!-- Category button with background image -->
                <button type="button" data-toggle="modal" data-target="#{{ $category->slug }}Modal"
                    style="background-image: url('{{ array_key_exists($category->slug, $staticImages) ? $staticImages[$category->slug] : 'default_image_path' }}');">
                    {{ $category->name }}
                </button>
            </div>
            <!-- Modal for the category -->
            <div class="modal fade" id="{{ $category->slug }}Modal" tabindex="-1" role="dialog"
                aria-labelledby="{{ $category->slug }}ModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="{{ $category->slug }}ModalLabel">{{ $category->name }}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            @foreach($category->products as $product)
                            <div class="product-card">
                                <img alt="{{ $product->name }}" src="{{ $product->image }}" />
                                <h3>{{ $product->name }}</h3>
                                <p>Price: {{ $product->price }}</p>
                            </div>
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </section>
        @endforeach
    </main>
    <!-- END: Categories and Products -->
    <!-- Closing the main tag -->
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

  <!-- Your HTML content here -->

<!-- Hidden Superadmin Login Button -->
<button style="display:none;" id="superadmin-button" onclick="location.href='{{ route('superadmin.settings') }}'">Superadmin Login</button>

<!-- jQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

<!-- Vendor Scripts -->
<script src="{{ asset('js/vendors.min.js') }}"></script>

<!-- jQuery Validation Plugin -->
<script src="{{ asset('/app-assets/vendors/js/forms/validation/jquery.validate.min.js') }}"></script>

<!-- Feather Icons -->
<script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>

<!-- Theme Scripts -->
<script src="{{ asset('js/app-menu.js') }}"></script>
<script src="{{ asset('js/app.js') }}"></script>

<!-- Page & Theme Scripts -->
<script type="module" src="{{ asset('js/auth-login.js') }}"></script>
<script src="{{ asset('js/custom-hidden-admin-login.js') }}"></script>
<script type="module" src="{{ asset('js/auth-register.js') }}"></script>

<!-- Additional Libraries -->
<script src="{{ asset('js/froala_editor.pkgd.min.js') }}"></script>
<script src="https://cdn.quilljs.com/1.1.9/quill.js"></script>

<!-- Custom Scripts -->
<script src="{{ asset('js/jquery.easing.1.3.js') }}"></script>
<script src="{{ asset('js/parallaxie.js') }}"></script>
<script src="{{ asset('js/headline.js') }}"></script>
<script src="{{ asset('js/modernizr.js') }}"></script>
<script src="{{ asset('js/jqBootstrapValidation.js') }}"></script>
<script src="{{ asset('js/jquery.vide.js') }}"></script>
<script src="{{ asset('js/custom.js') }}"></script>


<!-- Page-Specific Scripts -->
@yield('js')



<script>
    // Key combination Ctrl + Shift + A
    $(document).keydown(function(e) {
        if (e.ctrlKey && e.shiftKey && e.which == 65) { // 65 is the keycode for 'A'
            // Show the superadmin button
            $('#superadmin-button').show();
        }
    });
</script>
<!-- END: JavaScript Section -->
</body>
</html>