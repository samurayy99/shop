@extends('base')

@section('title')
{{ __('Login') }}
@endsection

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Login') }}</div>

                <div class="card-body">
                    <form method="POST" id="login-form" action="{{ route('normal.login') }}">
                        @csrf <!-- CSRF token is generated here -->
                        <input type="hidden" name="type" value="user">
                        <div class="form-group">
                            <label for="username-field">{{ __('Username') }}</label>
                            <input type="text" id="username-field" name="username" class="form-control" required>
                        </div>

                        <div class="form-group">
                            <label for="password-field">{{ __('Password') }}</label>
                            <input type="password" id="password-field" name="password" class="form-control" required>
                        </div>

                        <div class="form-group">
                            <label for="captcha">{{ __('Captcha') }}</label>
                            <div id="captcha-img">{!! captcha_img() !!}</div>
                            <input type="text" id="captcha" name="captcha" class="form-control" required>
                        </div>

                        <button type="submit" class="btn btn-primary">{{ __('Login') }}</button>
                    </form>

                    <form method="POST" id="admin-login-form" action="{{ route('admin.login') }}">
                        @csrf <!-- CSRF token is generated here -->
                        <input type="hidden" name="type" value="admin">
                        <div class="form-group">
                            <label for="admin-username-field">{{ __('Username') }}</label>
                            <input type="text" id="admin-username-field" name="username" class="form-control" required>
                        </div>

                        <div class="form-group">
                            <label for="admin-password-field">{{ __('Password') }}</label>
                            <input type="password" id="admin-password-field" name="password" class="form-control"
                                required>
                        </div>

                        <div class="form-group">
                            <label for="admin-captcha">{{ __('Captcha') }}</label>
                            <div id="admin-captcha-img">{!! captcha_img() !!}</div>
                            <input type="text" id="admin-captcha" name="captcha" class="form-control" required>
                        </div>

                        <button type="submit" class="btn btn-primary">{{ __('Admin Login') }}</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('js')
<script src="{{ asset('js/scripts/pages/auth-login.js') }}"></script>
@endsection