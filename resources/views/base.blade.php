<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    @auth
    {{ Auth::user()->checkBanned() }}
    @endif
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=0,minimal-ui">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <title>{{ App\Models\Settings::get('app.name', 'Highsociety') }} > @yield('title', __('Konto erstellen'))</title>
    <link rel="shortcut icon" href="{{ asset('/img/favicon.ico') }}" type="image/x-icon" />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600"
        rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.28.0/feather.min.js"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('/css/bootstrap.min.css') }}">
    @toastr_css
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" crossorigin="anonymous" />
    <link rel="stylesheet" type="text/css" href="{{ asset('css/animate.css') }}">
    <!-- Old CSS -->
    <link rel="stylesheet" type="text/css" href="{{ asset('/css/horizontal-menu.css') }}">
    <!-- New Design CSS -->
    <link rel="stylesheet" type="text/css" href="{{ asset('css/camera.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/owl.carousel.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/prettyPhoto.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/responsive.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/versions.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/custom.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/animate.css') }}">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.3/jquery.validate.min.js"></script>
</head>
<!-- END: Head-->

<body id="page-top" class="politics_version">
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
                    <a class="nav-link custom-login-button" href="#" data-toggle="modal"
                        data-target="#loginModal">Login</a>
                </li>
            </ul>
        </div>
    </nav>

    <!-- Banner Section with Animation -->
    <section id="home" class="main-banner parallaxie" style="background: url('uploads/banner-01.jpg')">
        <div class="heading">
            <h3>Welcome to our website</h3>
            <p class="lead">We are a team of professionals...</p>
        </div>
        <div class="col-md-6">
            <div class="post-media wow fadeIn">
                <img src="{{ asset('uploads/about_02.jpg') }}" alt="" class="img-responsive img-rounded">
                <a href="https://www.youtube.com/watch?v=yfoY53QXEnI" data-rel="prettyPhoto[gal]" class="playbutton"><i
                        class="flaticon-play-button"></i></a>
            </div><!-- end media -->
        </div><!-- end col -->
        </div><!-- end row -->
        <hr class="hr1">
        <div class="row">
            <div class="col-md-12">
                <div class="about-tab">
                    <ul class="nav nav-tabs">
                        <li class="active"><a href="#tab_a" data-toggle="tab">About Us</a></li>
                        <li><a href="#tab_b" data-toggle="tab">Our Mission</a></li>
                        <li><a href="#tab_c" data-toggle="tab">Our Vision</a></li>
                        <li><a href="#tab_d" data-toggle="tab">Company History</a></li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane fade in active" id="tab_a">
                            <p>Tab content 1</p>
                        </div>
                        <div class="tab-pane fade" id="tab_b">
                            <p>Tab content 2</p>
                        </div>
                        <div class="tab-pane fade" id="tab_c">
                            <p>Tab content 3</p>
                        </div>
                        <div class="tab-pane fade" id="tab_d">
                            <p>Tab content 4</p>
                        </div>
                    </div><!-- end tab-content -->
                </div><!-- end all-tabs -->
            </div><!-- end col -->
        </div><!-- end row -->
        </div><!-- end container -->
        </div><!-- end section -->

    </section>

    <!-- Clouds SVG Animation -->
    <svg id="clouds" class="hidden-xs" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100"
        viewBox="0 0 85 100" preserveAspectRatio="none">
        <path d="M-5 100 Q 0 20 5 100 Z ...">
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

    <!-- Login Modal -->
    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="loginModalLabel">Login</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="loginForm" action="{{ route('auth.login.post') }}" method="post">
                        @csrf
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label for="password">Password:</label>
                            <input type="password" id="password" name="password" class="form-control" required>
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <script>
        $(document).ready(function () {
            $('#loginForm').on('submit', function (e) {
                e.preventDefault();
                $.ajax({
                    url: $(this).attr('action'),
                    type: 'POST',
                    data: $(this).serialize(),
                    success: function (response) {
                        // Handle successful login here, e.g. redirect to dashboard
                        window.location.href = '/admin/dashboard';
                    },
                    error: function () {
                        toastr.error('Failed to login.');
                    }
                });
            });
        });
    </script>

</body>
<html>