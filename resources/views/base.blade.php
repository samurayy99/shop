<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8" />
    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta content="upgrade-insecure-requests" http-equiv="Content-Security-Policy" />
    <title>
        {{ App\Models\Settings::get('app.name', 'Highsociety') }} > @yield('title', __('Konto erstellen'))
    </title>
    <link href="{{ asset('/img/favicon.ico') }}" rel="shortcut icon" type="image/x-icon" />
    <link href="https://cdn.jsdelivr.net/npm/toastr@2.1.4/build/toastr.min.css" rel="stylesheet" />
    <!-- CSS Files -->
    @toastr_css
    <link crossorigin="anonymous" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" rel="stylesheet">
    <link href="{{ asset('css/animate.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('css/camera.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('css/owl.carousel.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('css/prettyPhoto.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('css/responsive.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('css/versions.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('css/style.css') }}" rel="stylesheet" type="text/css" />
    </link>
</head>

<body class="politics_version" id="page-top">
    @if(Session::has('success'))
    <script>
        toastr.success("{{ Session::get('success') }}");
    </script>
    @endif

    @if(Session::has('error'))
    <script>
        toastr.error("{{ Session::get('error') }}");
    </script>
    @endif
    <!-- Navigation Menu -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
            <img alt="" class="img-fluid" src="{{ asset('images/logo.png') }}" />
        </a>
        <button aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"
            class="navbar-toggler navbar-toggler-right" data-target="#navbarResponsive" data-toggle="collapse"
            type="button">
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
                    <a class="nav-link" data-target="#loginModal" data-toggle="modal" href="#">
                        Login
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    @include('navBar')
    <!-- Login Modal -->
    <div aria-hidden="true" aria-labelledby="loginModalLabel" class="modal fade" id="loginModal" role="dialog"
        tabindex="-1">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="card mb-0">
                    <div class="card-body">
                        <a class="brand-logo" href="/">
                            <h2 class="brand-text text-primary ms-1">
                                {{ App\Models\Settings::get('app.name',
                                'Highsociety') }}
                            </h2>
                        </a>
                        <h4 class="card-title mb-1">
                            {{ __('Hallo') }}! 👋
                        </h4>
                        <p class="card-text mb-2">
                            {{ __('Bitte melde dich mit einem existierendem Konto an') }}
                        </p>
                        <form action="{{ route('auth.login.post') }}" class="auth-login-form mt-2" method="POST">
                        </form>
                        method="POST">
                        @csrf
                        @include('flash-message')
                        <div class="mb-1">
                            <label class="form-label" for="login-email">
                                {{ __('Benutzername') }}
                            </label>
                            <input aria-describedby="login-username" autofocus="" class="form-control"
                                id="login-username" maxlength="30" name="username" placeholder="..." tabindex="1"
                                type="text" value="{{ old('username') }}" />
                        </div>
                        <div class="mb-1">
                            <div class="d-flex justify-content-between">
                                <label class="form-label" for="password">
                                    {{ __('Passwort') }}
                                </label>
                            </div>
                            <div class="input-group input-group-merge form-password-toggle">
                                <input aria-describedby="login-password" class="form-control form-control-merge"
                                    id="login-password" name="password" placeholder="············" tabindex="2"
                                    type="password" />
                                <span class="input-group-text cursor-pointer">
                                    <i data-feather="eye">
                                    </i>
                                </span>
                            </div>
                        </div>
                        <div class="row">
                            <label class="form-label" for="login-email">
                                {{ __('Captcha') }}
                            </label>
                            <div class="col-6">
                                <div class="mb-1">
                                    <input aria-describedby="login-captcha" autofocus="" class="form-control"
                                        id="login-captcha" maxlength="30" name="captcha" placeholder="..."
                                        style="color: white;" tabindex="3" type="text" />
                                </div>
                            </div>
                            <div class="col">
                                {!! captcha_img('flat') !!}
                            </div>
                        </div>
                        <div class="mb-1">
                            <div class="form-check">
                                <input class="form-check-input" id="remember-me" tabindex="4" type="checkbox" />
                                <label class="form-check-label" for="remember-me">
                                    {{ __('Angemeldet
                                    bleiben') }}
                                </label>
                            </div>
                        </div>
                        <button id="login-button" type="submit">
                            Anmelden
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Placeholder for smooth scrolling sections -->
    <section id="page-top">
    </section>
    <section id="portfolio">
    </section>
    <section id="faq-section">
    </section>
    <section id="contact">
    </section>
</body>

</html>
<p class="text-center mt-2">
    <span>
        {{ __('Noch kein Mitglied?') }}
    </span>
    <a class="primary-color" href="{{ route('auth.register') }}">
        <span>
            {{ __('Konto erstellen') }}
        </span>
    </a>
</p>
<!-- Banner Section with Animation -->
<section class="main-banner parallaxie" id="home" style="background: url('uploads/banner-01.jpg')">
    <div class="heading">
        <h1>
            hello i'm Dominic
        </h1>
        <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br />
            sed do eiusmod tempor incididunt ut
            labore
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
<!-- About Section -->
<div class="section wb" id="about">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="message-box">
                    <h2>
                        About
                    </h2>
                    <p>
                        Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus
                        faucibus
                        bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et
                        magnis
                        dis parturient montes, nascetur ridiculus mus. Sed vitae rutrum neque. Ut id erat
                        sit amet
                        libero bibendum aliquam. Donec ac egestas libero, eu bibendum risus. Phasellus et
                        congue
                        justo.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
<main class="container categories">
    <section class="card category-card" onclick="loadProducts('category1')">
        <div class="product-image">
            <img alt="Category 1" draggable="false" src="https://i.ibb.co/cNWqxGx/red.png" />
        </div>
    </section>
    <section class="card category-card" onclick="loadProducts('category2')">
        <div class="product-image">
            <img alt="Category 2" draggable="false" src="https://i.ibb.co/0JKpmgd/blue.png" />
        </div>
    </section>
    <!-- Product Display for Category 1 -->
    <div class="products" id="category1" style="display: none;">
        @foreach($products as $product)
        @if($product->category_id === 1)
        <!-- Make sure this condition matches your data structure -->
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
    <div class="products" id="category2" style="display: none;">
        @foreach($products as $product)
        @if($product->category_id === 2)
        <!-- Make sure this condition matches your data structure -->
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
<!-- Admin Panel Navigation -->
@if(Auth::check() && Auth::user()->isAdmin())
<nav class="admin-panel">
    <a href="{{ route('admin.dashboard') }}">
        Dashboard
    </a>
    <a href="{{ route('admin.user.view') }}">
        Manage Users
    </a>
    <a href="{{ route('admin.order.view') }}">
        Manage Orders
    </a>
</nav>
@endif
<!-- BEGIN: Content -->
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
<!-- END: Content -->
<div class="sidenav-overlay">
</div>
<div class="drag-target">
</div>
<!-- Product Modal -->
<div class="modal" id="productModal">
    <div class="modal-content">
        <span class="close-modal">
            ×
        </span>
        <h2>
            Category Name
        </h2>
        <div class="modal-products">
            <!-- Products will be dynamically loaded here -->
        </div>
    </div>
</div>

<!-- Load jQuery first -->
<script src="{{ asset('js/jquery-3.6.3.min.js') }}"></script>

<!-- Load Bootstrap and its dependencies -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="{{ asset('js/bootstrap.min.js') }}"></script>

<!-- Load other libraries that depend on jQuery -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.3/jquery.validate.min.js"></script>
<script src="{{ asset('js/jquery.easing.1.3.js') }}"></script>
<script src="{{ asset('js/parallaxie.js') }}"></script>
<script src="{{ asset('js/jqBootstrapValidation.js') }}"></script>
<script src="{{ asset('js/contact_me.js') }}"></script>
<script src="{{ asset('js/owl.carousel.js') }}"></script>
<script src="{{ asset('js/jquery.vide.js') }}"></script>

<!-- Load other independent libraries -->
<script src="https://cdn.quilljs.com/1.1.9/quill.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/4.1.4/imagesloaded.pkgd.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.28.0/feather.min.js"></script>

<!-- Load custom scripts -->
<script src="{{ asset('js/custom.js') }}"></script>
<script src="{{ asset('js/headline.js') }}"></script>
<script src="{{ asset('js/modernizr.js') }}"></script>
<script src="{{ asset('js/scripts/pages/auth-login.js') }}"></script>

<!-- Yield for additional JS -->
@yield('js')
<script>
    $(document).ready(function () {
        $('#switchFormButton').click(function () {
            if ($('#loginForm').is(':visible')) {
                $('#loginForm').hide();
                $('#registerForm').show();
                $('#authModalLabel').text('Register');
                $(this).text('Switch to Login');
            } else {
                $('#loginForm').show();
                $('#registerForm').hide();
                $('#authModalLabel').text('Login');
                $(this).text('Switch to Register');
            }
        });

        // Login Form AJAX Submission
        $('#loginForm').submit(function (e) {
            e.preventDefault();
            $.ajax({
                url: $(this).attr('action'),
                type: 'POST',
                data: $(this).serialize(),
                beforeSend: function () {
                    $('#login-button').text('Loading...');
                },
                complete: function () {
                    $('#login-button').text('Anmelden');
                },
                success: function (response) {
                    window.location.href = '/success-login'; // Redirect to your success page for login
                },
                error: function (xhr, status, error) {
                    console.log(xhr.responseText);
                }
            });
        });

        // Register Form AJAX Submission
        $('#registerForm').submit(function (e) {
            e.preventDefault();
            $.ajax({
                url: $(this).attr('action'),
                type: 'POST',
                data: $(this).serialize(),
                success: function (response) {
                    window.location.href = '/success-register'; // Redirect to your success page for registration
                },
                error: function (xhr, status, error) {
                    console.log(xhr.responseText);
                }
            });
        });

        // Captcha Refresh Script
        function refreshCaptcha() {
            $('.captcha-img').attr('src', '{{ captcha_src("flat") }}' + '?' + Math.random());
        }

        //                // Smooth scrolling to anchor links
        $('a[href^="#"]').on('click', function (event) {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top
                }, 1000);
            }
        });

        // Highlight active navigation link
        $(window).on('scroll', function () {
            var sections = $('section');
            var navLinks = $('nav a');
            var currentPos = $(this).scrollTop();

            sections.each(function () {
                var top = $(this).offset().top - 100;
                var bottom = top + $(this).outerHeight();

                if (currentPos >= top && currentPos <= bottom) {
                    navLinks.removeClass('active');
                    $('nav a[href="#' + $(this).attr('id') + '"]').addClass('active');
                }
            });
        });
        $(document).on('click', '#admin-panel-link', function (e) {
            e.preventDefault();
            $.ajax({
                url: '/admin/content', // replace this with your Laravel route to get admin content
                type: 'GET',
                success: function (response) {
                    $('#admin-panel-content').html(response);
                },
                error: function () {
                    toastr.error('Failed to load admin content.');
                }
            });
        });
    });
</script>
<script src="https://cdn.jsdelivr.net/npm/toastr@2.1.4/toastr.min.js">
</script>
Smooth scrolling