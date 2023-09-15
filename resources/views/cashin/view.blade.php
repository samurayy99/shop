@extends('base')

@section('title')
{{ __('Cash in') }}
@endsection

@section('subtitle')
{{ __('Cash in') }}
@endsection

@section('content')
<div class="content-body">
<!-- Content -->

<div class="card">
<div class="card-body">
@if(App\Custom\BitcoinHandler::connected()['status'])
<h6>{{ __('Mit Bitcoin einzahlen') }}</h6>
<form action="{{ route('user.cashin.create') }}" method="POST">
@csrf

<div class="row">
<div class="col-12">
<div class="mb-1">
<label class="form-label" for="amount_euro">{{ __('Betrag') }} in EURO</label>
<div class="input-group input-group-merge">
<input type="text" id="amount_euro" class="form-control" name="amount_euro">
</div>
<small>Minimal: 5 EURO</small>
</div>
</div>
</div>

<button type="submit" class="btn btn-primary"><i class="fab fa-bitcoin"></i> {{ __('Bezahlen') }}</button>

</form>

@else
<div class="content-wrapper container-xxl p-0">
<div class="alert alert-warning mt-1 alert-validation-msg" role="alert">
<div class="alert-body d-flex align-items-center">
<i class="fas fa-exclamation-triangle me-1"></i>
<span>{{ __('Es konnte keine Verbindung zum Bitcoin Server hergestellt werden. Bitte wende dich an einen Admin') }}</span>
</div>
</div>
</div>
@endif
</div>
</div>

<div class="card">
<div class="card-body">
<h6>{{ __('Deine letzten 5 Transaktionen') }}</h6>
<small>{{ __('Transaktionen werden nach 15 Tagen gelöscht') }}</small>
</div>
<div class="table-responsive">
<table class="table">
<thead>
<tr>
<th>Coin</th>
<th>{{ __('Anzahl') }}</th>
<th>{{ __('Anzahl') }} in Bitcoin</th>
<th>TXID</th>
<th>Status</th>
<th>{{ __('Datum') }}</th>
<th>{{ __('Aktionen') }}</th>
</tr>
</thead>
<tbody>
@foreach(App\Models\UserTransaction::getLast5Transaction(Auth::user()->id) as $transaction)
<tr>
<td>{{ strtoupper($transaction->method) }}</td>
<td>{{ $transaction->amount_euro }} EUR</td>
<td>{{ $transaction->amount_bitcoin }} BTC</td>
<td>
@if($transaction->txid != null)
<a href="https://www.blockchain.com/btc/tx/{{ $transaction->txid }}" class="primary-color">{{ __('Transaktionslink') }}</a>
@else 
-
@endif
</td>
<td>
@if($transaction->status == 'waiting')
<span class="badge bg-secondary">{{ __('Warten auf Einzahlung') }}</span>
@elseif($transaction->status == 'pending')
<span class="badge bg-warning">{{ __('Warten auf Bestätigung') }}</span>
@elseif($transaction->status == 'paid')
<span class="badge bg-success">{{ __('Bezahlt') }}</span>
@endif
</td>
<td>{{ date('d-m-Y H:i', strtotime($transaction->created_at)) }}</td>
<td>
@if($transaction->status == 'waiting')
<a href="{{ route('user.cashin.pay', $transaction->uuid) }}">{{ __('Bezahlen') }}</a>
@else 
<a href="{{ route('user.cashin.pay', $transaction->uuid) }}">{{ __('Anzeigen') }}</a>
@endif
</td>
</tr>
@endforeach
</tbody>
</table>
</div>
</div>

<!-- End Content -->

</div>
</div>
@endsection
