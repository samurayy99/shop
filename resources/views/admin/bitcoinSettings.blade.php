@extends('base')

@section('title')
Bitcoin Verwaltung
@endsection

@section('subtitle')
Bitcoin Verwaltung
@endsection

@section('content')
<div class="content-body">
<!-- Content -->


<div class="card">
<div class="card-body">
<h6>Management</h6>
<form class="form form-vertical" action="{{ route('admin.bitcoin.send') }}" method="POST">
@csrf
<div class="row">

<h6 class="mt-1">Guthaben</h6>
<div class="d-block mb-1">
<p class="fw-bold d-inline">Bitcoin: </p>
@if($connectionStatus['status'] != false)
<p class="d-inline primary-color">{{ App\Custom\BitcoinHandler::getFormattedServerBalance() }} <i class="fab fa-bitcoin"></i> <span class="text-warning fw-bolder">{{ App\Custom\BitcoinHandler::getFormattedServerBalanceCurrency() }}
@else
<small class="d-block text-{{ $connectionStatus['status'] ? 'success' : 'danger' }}"><b>Status:</b> {{ $connectionStatus['message'] }}</small>
@endif
</span></p>
</div>

<h6 class="mt-1">Auszahlung</h6>

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="amount">Betrag in Bitcoin</label>
<div class="input-group input-group-merge">
<input type="text" id="amount" class="form-control" name="amount" placeholder="0.005000">
</div>
</div>
</div>

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="wallet">an Wallet</label>
<div class="input-group input-group-merge">
<input type="text" id="wallet" class="form-control" name="wallet" placeholder="...">
</div>
</div>
</div>

</div>
<div class="col-12">
<button type="submit" class="btn btn-primary me-1 waves-effect waves-float waves-light">Cash Out!</button>
</div>
</div>
</form>
</div>
</div>


<div class="card">
<div class="card-body">
<h6>Einstellungen</h6>
<form class="form form-vertical" action="{{ route('admin.bitcoin.update') }}" method="POST">
@csrf
<div class="row">

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="bitcoin_api">Bitcoin API</label>
<div class="input-group input-group-merge">
<input type="text" id="bitcoin_api" class="form-control" name="bitcoin_api" value="{{ App\Models\Settings::get('bitcoin.api') }}" placeholer="http://btcUsername:btcPassword@localhost:8332/">
</div>
<small>Format: <i>http://btcUsername:btcPassword@localhost:8332/</i></small>
<small class="d-block text-{{ $connectionStatus['status'] ? 'success' : 'danger' }}"><b>Status:</b> {{ $connectionStatus['message'] }}</small>
</div>
</div>

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="payment_wallet">Auszahlungswallet</label>
<div class="input-group input-group-merge">
<input type="text" id="payment_wallet" class="form-control" name="payment_wallet" value="{{ App\Models\Settings::get('btc.auto_cashout_wallet') }}" placeholer="...">
</div>
<small>Freilassen für keine automatische Auszahlung. Wenn aktiv wird ab dem unten aufgeführten Betrag automatisch das Geld an die hier festgelegte Wallet gesendet</small>
</div>
</div>

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="cashout_amount">Auszahlung ab (in Bitcoin)</label>
<div class="input-group input-group-merge">
<input type="text" id="cashout_amount" class="form-control" name="cashout_amount" value="{{ App\Models\Settings::get('btc.auto_cashout_amount') }}" placeholer="0.0032">
</div>
@if(App\Models\Settings::get('btc.auto_cashout_amount') != null && App\Models\Settings::get('bitcoin.api') != null)
<small>Ungefährer Eurobetrag: {{ App\Custom\BitcoinHandler::convertBtc(App\Models\Settings::get('btc.auto_cashout_amount')) }} EUR</small>
@endif
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
