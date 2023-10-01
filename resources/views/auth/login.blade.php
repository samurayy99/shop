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
                    <form method="POST" id="login-form" action="{{ route('auth.login') }}">
                        @csrf <!-- CSRF token is generated here -->
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
                            {!! captcha_img() !!}
                            <input type="text" id="captcha" name="captcha" class="form-control" required>
                        </div>

                        <button type="submit" class="btn btn-primary">{{ __('Login') }}</button>
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