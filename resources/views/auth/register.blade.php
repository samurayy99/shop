
<!DOCTYPE html>
<html class="loading dark-layout" lang="en" data-layout="dark-layout" data-textdirection="ltr">
<!-- BEGIN: Head-->

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=0,minimal-ui">
<title>{{ App\Models\Settings::get('app.name', 'Highsociety') }} > {{ __('Konto erstellen') }}</title>
<link rel="shortcut icon" type="image/x-icon" href="">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600" rel="stylesheet">

<!-- BEGIN: Vendor CSS-->
<link rel="stylesheet" type="text/css" href="../../../app-assets/vendors/css/vendors.min.css">
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
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/plugins/forms/form-validation.css') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/css/pages/authentication.css') }}">
<!-- END: Page CSS-->

<!-- BEGIN: Custom CSS-->
<link rel="stylesheet" type="text/css" href="{{ asset('/css/style.css') }}">
@toastr_css
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
<link href="{{ route('custom-css') }}" rel="stylesheet" />
<!-- END: Custom CSS-->

</head>
<!-- END: Head-->

<!-- BEGIN: Body-->

<body class="horizontal-layout horizontal-menu blank-page navbar-floating footer-static  " data-open="hover" data-menu="horizontal-menu" data-col="blank-page">
<!-- BEGIN: Content-->
<div class="app-content content ">
<div class="content-overlay"></div>
<div class="header-navbar-shadow"></div>
<div class="content-wrapper">
<div class="content-header row">
</div>
<div class="content-body">
<div class="auth-wrapper auth-basic px-2">
<div class="auth-inner my-2">
<!-- Login basic -->
<div class="card mb-0">
<div class="card-body">
<a href="/" class="brand-logo">
<h2 class="brand-text text-primary ms-1">{{ App\Models\Settings::get('app.name', 'Highsociety') }}</h2>
</a>

<h4 class="card-title mb-1">{{ __('Willkommen') }}! 🚀</h4>
<p class="card-text mb-2">{{ __('Bitte erstelle ein Konto um auf diese Seite zuzugreifen') }}</p>

<form class="auth-login-form mt-2" action="{{ route('auth.registration.post') }}" method="POST">
@csrf
@include('flash-message')

<div class="mb-1">
<label for="login-email" class="form-label">{{ __('Benutzername') }}</label>
<input type="text" class="form-control" id="login-username" name="username" placeholder="..." value="{{ old('username') }}" aria-describedby="login-username" tabindex="1" maxlength="30" autofocus required />
</div>

<div class="mb-1">
<label for="login-email" class="form-label">{{ __('Jabber Adresse') }} (optional)</label>
<input type="text" class="form-control" id="login-jabber" name="jabber" placeholder="name@exploit.im" value="{{ old('jabber') }}" aria-describedby="login-jabber" tabindex="1" autofocus/>
</div>

<div class="mb-1">
<div class="d-flex justify-content-between">
<label class="form-label" for="login-password">{{ __('Passwort') }}</label>
</div>
<div class="input-group input-group-merge form-password-toggle">
<input type="password" class="form-control form-control-merge" id="login-password" name="password" tabindex="2" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" aria-describedby="login-password" required/>
<span class="input-group-text cursor-pointer"><i data-feather="eye"></i></span>
</div>
<div class="row mt-1">
<label for="login-email" class="form-label">{{ __('Captcha') }}</label>
<div class="col-6">
<div class="mb-1">
<input type="text" class="form-control" id="login-captcha" name="captcha" placeholder="..." maxlength="30" aria-describedby="login-captcha" tabindex="4" autofocus style="color: white;" />
</div>
</div>
<div class="col">{!! captcha_img('flat') !!}</div>
</div>
</div>
<button class="btn btn-primary w-100" tabindex="5">{{ __('Konto erstellen') }}</button>
</form>

<p class="text-center mt-2">
<span>{{ __('Bereits Mitglied?') }}</span>
<a href="{{ route('auth.login') }}" class="primary-color">
<span>{{ __('Jetzt anmelden') }}</span>
</a>
</p>

<!-- /Login basic -->
</div>
</div>

</div>
</div>
</div>
<!-- END: Content-->


<!-- BEGIN: Vendor JS-->
<script src="{{ asset('/app-assets/vendors/js/vendors.min.js') }}"></script>
<!-- BEGIN Vendor JS-->

<!-- BEGIN: Page Vendor JS-->
<script src="{{ asset('/app-assets/vendors/js/ui/jquery.sticky.js') }}"></script>
<script src="{{ asset('/app-assets/vendors/js/forms/validation/jquery.validate.min.js') }}"></script>
<!-- END: Page Vendor JS-->

<!-- BEGIN: Theme JS-->
<script src="{{ asset('/app-assets/js/core/app-menu.js') }}"></script>
<script src="{{ asset('/app-assets/js/core/app.js') }}"></script>
<!-- END: Theme JS-->

<!-- BEGIN: Page JS-->
<script src="{{ asset('/app-assets/js/scripts/pages/auth-login.js') }}"></script>
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

@toastr_js
@toastr_render

</body>
<!-- END: Body-->

</html>