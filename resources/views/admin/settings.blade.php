@extends('base')

@section('title')
Admin {{ __('Einstellungen') }}
@endsection

@section('subtitle')
{{ __('Einstellungen') }}
@endsection

@section('content')
<div class="content-body">
<!-- Content -->

<div class="card">
<div class="card-body">
<form class="form form-vertical" action="{{ route('admin.settings.save') }}" method="POST">
@csrf
<div class="row">

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="website_name">Webseiten Name</label>
<div class="input-group input-group-merge">
<input type="text" id="website_name" class="form-control" name="website_name" value="{{ App\Models\Settings::get('app.name') }}" required>
</div>
</div>
</div>

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="website_registered_only">Wer kann auf diese Webseite zugreifen?</label>
<div class="input-group input-group-merge">
<select class="form-select" id="website_registered_only" name="website_registered_only" required>
<option disabled>Bitte auswählen...</option>
<option value="0" @if(!App\Models\Settings::get('app.registered_only')) selected @endif>Jeder</option>
<option value="1" @if(App\Models\Settings::get('app.registered_only')) selected @endif>Nur angemeldete Benutzer</option>
</select>
</div>
</div>
</div>

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="website_currency">Bevorzugte Währung</label>
<div class="input-group input-group-merge">
<input type="text" id="website_currency" class="form-control" name="website_currency" value="{{ App\Models\Settings::get('shop.currency') }}" required disabled>
</div>
</div>
</div>

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="btc_confirms_needed">Bestätigungen für Gutschrift</label>
<div class="input-group input-group-merge">
<input type="number" id="btc_confirms_needed" class="form-control" name="btc_confirms_needed" value="{{ App\Models\Settings::get('shop.btc_confirms_needed') }}" required>
</div>
<small>Legt fest, wie viele Bestätigungen eine Bitcoin Transaktion braucht, damit das Guthaben gutgeschrieben wird. 0 = nach Zahlungseingang ohne Bestätigung</small>
</div>
</div>

<div class="col-12">
<div class="mb-1">
<label class="form-label text-primary" for="css_primary_color">Primärfarbe</label>
<div class="input-group input-group-merge">
<input type="text" id="css_primary_color" class="form-control" name="css_primary_color" value="{{ App\Models\Settings::get('css.primary_color') }}" pattern="#[a-fA-F\d]+" required>
</div>
<small>Default <span style="color: #000000;">(#000000)</span>. Beispielfarben: <a class="primary-color" href="https://flatuicolors.com">flatuicolors</a>.</small>
</div>
</div>

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="css_background_url">Hintergrundbild URL</label>
<div class="input-group input-group-merge">
<input type="text" id="css_background_url" class="form-control" name="css_background_url" value="{{ App\Models\Settings::get('css.background_url') }}">
</div>
<small>Freilassen für Standardhintergrund</small>
</div>
</div>

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="pgp_key">PGP Key</label>
<div class="input-group input-group-merge">
<input type="text" id="pgp_key" class="form-control" name="pgp_key" value="{{ App\Models\Settings::get('shop.pgp_key') }}">
</div>
<small>Link zum PGP Key (ex. pastebin.com)</small>
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


<!-- End Content -->

</div>
</div>
@endsection
