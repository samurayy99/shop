<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<!-- BEGIN: Head-->

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

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

</head>
<!-- END: Head-->

<!-- BEGIN: Body-->

<body id="page-top" class="politics_version">

    <!-- Navigation -->
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
                    <a class="nav-link js-scroll-trigger active" href="#home">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#portfolio">Products</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="{{ route('faq') }}">FAQ</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
                </li>
                @can('Adminpanel Zugriff')
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="{{ route('admin.dashboard') }}">Admin Panel</a>
                </li>
                @endcan
                <li class="nav-item">
                    <a class="nav-link custom-login-button" href="{{ route('auth.login') }}">Login</a>
                </li>
            </ul>
        </div>
    </nav>
    <!-- END: Navigation-->



    <!-- BEGIN: Header-->
    <section id="home" class="main-banner parallaxie" style="background: url('{{ asset('uploads/banner-01.jpg') }}')">
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
        <!-- Product Display for Category 1 -->
        <div id="category1" class="products" style="display: none;">
            @foreach($products as $product)
            @if($product->category_id === 1) <!-- Make sure this condition matches your data structure -->
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
            @if($product->category_id === 2) <!-- Make sure this condition matches your data structure -->
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

        <!-- Product Modal -->
        <div id="productModal" class="modal">
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h2>Category Name</h2>
                <div class="modal-products">
                    <!-- Products will be dynamically loaded here -->
                </div>
            </div>
        </div>

        <!-- BEGIN: Vendor JS-->

        <!-- BEGIN Vendor JS-->

        <!-- BEGIN: Page Vendor JS-->

        <!-- END: Page Vendor JS-->

        <!-- BEGIN: Theme JS-->


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

        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        <script src="https://cdn.quilljs.com/1.1.9/quill.js"></script>
        @yield('js')
        <!-- BEGIN: Custom JS of the New Design -->
        <script src="{{ asset('js/jquery.easing.1.3.js') }}"></script>
        <script src="{{ asset('js/parallaxie.js') }}"></script>
        <script src="{{ asset('js/headline.js') }}"></script>
        <script src="{{ asset('js/modernizr.js') }}"></script> <!-- Modernizr -->
        <script src="{{ asset('js/jqBootstrapValidation.js') }}"></script>
        <script src="{{ asset('js/contact_me.js') }}"></script>
        <script src="{{ asset('js/custom.js') }}"></script>
        <script src="{{ asset('js/jquery.vide.js') }}"></script>
        <!-- END: Custom JS of the New Design -->


        <div id="loginModal" class="modal fade custom-modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content" id="login-box">
                    <!-- Tab navigation for Login and Register -->
                    <div class="text-center pt-4 pb-2">
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active text-info" data-toggle="tab" href="#loginTab"
                                    role="tab">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-info" data-toggle="tab" href="#registerTab"
                                    role="tab">Register</a>
                            </li>
                        </ul>
                    </div>
                    <!-- Tab content -->
                    <div class="tab-content">
                        <!-- Login Form -->
                        <div class="tab-pane active" id="loginTab" role="tabpanel">
                            <div class="text-center text-white pt-2">
                                <h3>Login Form</h3>
                            </div>
                            <form action="{{ route('admin.login') }}" method="post">

                                @csrf
                                <div class="form-group">
                                    <label for="username">Username</label>
                                    <input type="text" name="username" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" name="password" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label for="login-captcha">Captcha</label>
                                    <div class="row">
                                        <div class="col-6">
                                            <input type="text" name="login-captcha" id="login-captcha"
                                                class="form-control" placeholder="..." maxlength="30" required
                                                style="color: white;" />
                                        </div>
                                        <div class="col">{!! captcha_img('flat') !!}</div>
                                    </div>
                                </div>
                                <div class="form-group text-center">
                                    <input type="submit" name="submit" class="btn btn-info btn-md" value="submit">
                                </div>
                            </form>
                        </div>
                        <!-- Register Form -->
                        <div class="tab-pane" id="registerTab" role="tabpanel">
                            <div class="text-center text-white pt-2">
                                <h3>Register Form</h3>
                            </div>
                            <form id="register-form" class="form auth-register-form"
                                action="{{ route('auth.registration') }}" method="post">
                                @csrf
                                <div class="form-group">
                                    <label for="register-username">Username</label>
                                    <input type="text" name="username" class="form-control" id="register-username"
                                        required>
                                </div>
                                <div class="form-group">
                                    <label for="register-password">Password</label>
                                    <input type="password" name="password" class="form-control" id="register-password"
                                        required>
                                </div>
                                <div class="row mt-1">
                                    <label for="registration-captcha" class="form-label">Captcha</label>
                                    <div class="col-6">
                                        <div class="mb-1">
                                            <input type="text" class="form-control" id="registration-captcha"
                                                name="captcha" required />
                                        </div>
                                    </div>
                                    <div class="col">{!! captcha_img('flat') !!}</div>
                                </div>
                                <div class="form-group text-center">
                                    <input type="submit" name="submit" class="btn btn-info btn-md" value="submit">
                                </div>
                            </form>
                        </div>
                        <!-- Close Button -->
                        <div class="text-center text-white pt-2">
                            <button type="button" class="btn btn-outline-info btn-md"
                                data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>




    <script>
        // Scroll to category function
        function scrollToCategory(categoryId) {
            $('html, body').animate({
                scrollTop: $("#" + categoryId).offset().top
            }, 1000, function () {
                // Hide all product sections
                $('.products').hide();
                // Show the selected category's products
                $('#' + categoryId).show();
            });
        }

        $(document).ready(function () {
            // Click event for Register link
            $("#register-link a").click(function () {
                // Change the title to "Register form"
                $("#modal-title").text("Register form");
            });

            // Event when the modal is hidden
            $("#loginModal").on("hidden.bs.modal", function () {
                // Reset the title to "Login form"
                $("#modal-title").text("Login form");
            });

            $(window).on('load', function () {
                if (feather) {
                    feather.replace({
                        width: 14,
                        height: 14
                    });
                }
            });
        }); // Closing braces for $(document).ready
    </script>

</body>

</html>