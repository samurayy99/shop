@extends('base')

@section('title')
Admin {{ __('Benutzer bearbeiten') }}
@endsection

@section('subtitle')
Benutzer "{{ $user->username }}" bearbeiten
@endsection

@section('content')
<div class="content-body">
<!-- Content -->

<div class="card">
<div class="card-body">
<h6>Benutzer bearbeiten</h6>
<small>Letzter Login des Nutzers: {{ date('d-m-Y H:i', strtotime($user->updated_at)) }}</small>

<form class="form form-vertical" action="{{ route('admin.user.edit.save', $user->id) }}" method="POST">
@csrf
<div class="row">

<div class="col-12">
<div class="mb-1 mt-1">
<label class="form-label" for="username">Benutzername</label>
<div class="input-group input-group-merge">
<input type="text" id="username" class="form-control" name="username" required value="{{ $user->username }}">
</div>
</div>
</div>

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="jabber">Jabber Adresse</label>
<div class="input-group input-group-merge">
<input type="text" id="jabber" class="form-control" name="jabber" value="{{ $user->jabber }}">
</div>
</div>
</div>

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="balance">Guthaben in Euro</label>
<div class="input-group input-group-merge">
<input type="text" id="balance" class="form-control" name="balance" value="{{ $user->balance }}">
</div>
</div>
</div>

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="role">Aktive Benutzergruppe</label>
<div class="input-group input-group-merge">
<select class="form-select" id="role" name="role" required>
<option disabled>Bitte auswählen...</option>
@foreach(Spatie\Permission\Models\Role::all() as $role) 
<option value="{{ $role->name }}" {{ App\Models\User::getGroupById($user->id) == $role->name ? 'selected' : '' }}>{{ $role->name }}</option>
@endforeach
</select>
</div>
<small>Wenn aktiv wird der Benutzer Jabber Massennachrichten erhalten</small>
</div>
</div>

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="newsletter">Newsletter abonniert</label>
<div class="input-group input-group-merge">
<select class="form-select" id="newsletter" name="newsletter" required>
<option disabled>Bitte auswählen...</option>
<option value="0" @if(!$user->newsletter) selected @endif>Nein</option>
<option value="1" @if($user->newsletter) selected @endif>Ja</option>
</select>
</div>
<small>Wenn aktiv wird der Benutzer Jabber Massennachrichten erhalten</small>
</div>
</div>

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="newsletter">Gebannt</label>
<div class="input-group input-group-merge">
<select class="form-select" id="newsletter" name="active" required>
<option disabled>Bitte auswählen...</option>
<option value="1" @if($user->active) selected @endif>Nein</option>
<option value="0" @if(!$user->active) selected @endif>Ja</option>
</select>
</div>
</div>
</div>

</div>
<div class="col-12">
<button type="submit" class="btn btn-primary me-1 waves-effect waves-float waves-light">Speichern</button>
<a href="{{ route('admin.users') }}" class="btn btn-secondary me-1 waves-effect waves-float waves-light">Abbrechen</a>
</div>
</div>
</form>

</div>
</div>

<!-- End Content -->

</div>
</div>
@endsection
