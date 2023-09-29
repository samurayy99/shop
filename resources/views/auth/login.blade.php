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
                    <form method="POST" action="{{ route('auth.login.post') }}" id="login-form">
                        @csrf <!-- CSRF token is generated here -->

                        <div class="form-group row">
                            <label for="login-username" class="col-md-4 col-form-label text-md-right">{{ __('Username')
                                }}</label>
                            <div class="col-md-6">
                                <input id="login-username" type="text"
                                    class="form-control @error('username') is-invalid @enderror" name="username"
                                    value="{{ old('username') }}" required autocomplete="username" autofocus>

                                @error('username')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="login-password" class="col-md-4 col-form-label text-md-right">{{ __('Password')
                                }}</label>
                            <div class="col-md-6">
                                <input id="login-password" type="password"
                                    class="form-control @error('password') is-invalid @enderror" name="password"
                                    required autocomplete="current-password">

                                @error('password')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                        </div>

                        <!-- CAPTCHA Widget -->
                        <div class="form-group row">
                            <label for="loginCaptcha" class="col-md-4 col-form-label text-md-right">{{ __('Captcha')
                                }}</label>
                            <div class="col-md-6">
                                <div>{!! captcha_img('flat') !!}</div>
                                <input type="text" class="form-control" id="loginCaptcha" name="captcha" required>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary" id="login-button">
                                    {{ __('Login') }}
                                </button>
                            </div>
                        </div>

                        @if (Route::has('password.request'))
                        <a class="btn btn-link" href="{{ route('password.request') }}">
                            {{ __('Forgot Your Password?') }}
                        </a>
                        @endif
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