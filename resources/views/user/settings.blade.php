@extends('base')

@section('title')
{{ __('Einstellungen') }}
@endsection

@section('content')
<div class="content-body">
<!-- Content -->


<div class="mb-1">
<h4 class="d-inline">{{ __('Benutzereinstellungen') }}</h4>
</div>

<div class="card p-1">

<div class="d-flex justify-content-between align-items-center">
<span>{{ __('Du bist Mitglied seit dem') }} <b>{{ date('d.m.Y', strtotime(Auth::user()->created_at)) }}</b>.</span>

<a href="{{ route('user.delete.request') }}" class="btn btn-danger float-right"> {{ __('Konto löschen') }}</a>
</div>

<h4 class="mt-1">{{ __('Daten verwalten') }}</h4>
<form class="form form-vertical" action="{{ route('user.settings.update') }}" method="POST">
@csrf
<div class="row">

<div class="col">

<div class="mb-1">
<label class="form-label" for="jabber">Jabber</label>
<div class="input-group input-group-merge">
<input type="text" id="jabber" class="form-control" name="jabber" value="{{ Auth::user()->jabber }}" required>
</div>
</div>

</div>

<div class="col">

<div class="d-flex justify-content-between">
<label class="form-label" for="password">{{ __('Neues Passwort') }}</label>
</div>
<div class="input-group input-group-merge form-password-toggle">
<input type="password" class="form-control form-control-merge" id="login-password" name="password" tabindex="2" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" aria-describedby="login-password" />
<span class="input-group-text cursor-pointer"><i data-feather="eye"></i></span>
</div>
</div>

</div>

<button class="btn btn-primary">{{ __('Aktualisieren') }}</button>

</form>
</div>

<!-- End Content -->

</div>
</div>
@endsection