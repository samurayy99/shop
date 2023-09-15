@extends('base')

@section('title')
Admin {{ __('Dashboard') }}
@endsection

@section('subtitle')
{{ __('Neuigkeiten erstellen') }}
@endsection

@section('content')
<div class="content-body">
<!-- Content -->

<div class="card">
<div class="card-body">
<form class="form form-vertical" action="{{ route('admin.jabber.send') }}" method="POST">
@csrf
<div class="row">

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="message">Nachricht</label>
<div class="input-group input-group-merge">
<span class="input-group-text"><i class="fal fa-comment-dots"></i></span>
<textarea type="text" id="message" class="form-control" name="message" required></textarea>
</div>
</div>
</div>


</div>
<div class="col-12">
<button type="submit" class="btn btn-primary me-1 waves-effect waves-float waves-light">Absenden</button>
</div>
</div>
</form>
</div>
</div>


<div class="card">
<div class="card-body">

<form action="{{ route('admin.jabber.update') }}" method="POST">
@csrf
<h5>⚡ XMPP Server Einstellungen</h5>

<div class="col-12 mt-1">
<div class="mb-1">
<label class="form-label" for="connectionstring">Connection</label>
<div class="input-group input-group-merge">
<span class="input-group-text"><i class="fal fa-server"></i></span>
<input type="text" id="connectionstring" class="form-control" name="connectionstring" placeholder="tcp://exploit.im:5222" value="{{ Auth::user()->can('XMPP bearbeiten') ? App\Models\Settings::get('jabber.address') : '<VERSTECKT>' }}">
</div>
</div>
</div>

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="username">Benutzername</label>
<div class="input-group input-group-merge">
<span class="input-group-text"><i class="fal fa-user"></i></span>
<input type="text" id="username" class="form-control" name="username" placeholder="..." value="{{ Auth::user()->can('XMPP bearbeiten') ? App\Models\Settings::get('jabber.username') : '<VERSTECKT>' }}">
</div>
</div>
</div>

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="password">Passwort</label>
<div class="input-group input-group-merge">
<span class="input-group-text"><i class="fal fa-lock"></i></span>
<input type="text" id="password" class="form-control" name="password" placeholder="..." value="{{ Auth::user()->can('XMPP bearbeiten') ? App\Models\Settings::get('jabber.password') : '<VERSTECKT>' }}">
</div>
</div>
</div>

<div class="col-12">
<button type="submit" class="btn btn-primary me-1 waves-effect waves-float waves-light">Übernehmen</button>
</div>

</form>

</div>
</div>

<!-- End Content -->

</div>
</div>
@endsection
