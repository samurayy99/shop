@extends('base')

@section('title')
Admin Transaktionen
@endsection

@section('css') 
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/tables/datatable/dataTables.bootstrap5.min.css') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/tables/datatable/responsive.bootstrap5.min.css') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/tables/datatable/buttons.bootstrap5.min.css') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/tables/datatable/rowGroup.bootstrap5.min.css') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/pickers/flatpickr/flatpickr.min.css') }}">
@endsection

@section('subtitle')
Transaktionen
@endsection

@section('content')
<div class="content-body">
<!-- Content -->

<div class="card">
<div class="card-body">
<h6><i class="fab fa-bitcoin"></i>  Alle Transaktionen ({{ App\Models\UserTransaction::countTransactions() }})</h6>
<table id="user" class="datatables-basic table dataTable no-footer dtr-column" style="width:100%">
<thead>
<tr>
<th>ID</th>
<th>Status</th>
<th>Betrag EUR</th>
<th>Betrag BTC</th>
<th>Bestätigungen</th>
<th>Benutzer</th>
<th>Datum</th>
<th>Blockchainexplorer</th>
</tr>
</thead>
<tbody>
@foreach(App\Models\UserTransaction::getAllTransactions() as $transaction)
<tr>
<td>{{ $transaction->id }}</td>
<td>
@if($transaction->status == 'waiting')
<span class="badge bg-secondary">{{ __('Warten auf Einzahlung') }}</span>
@elseif($transaction->status == 'pending')
<span class="badge bg-warning">{{ __('Warten auf Bestätigung') }}</span>
@elseif($transaction->status == 'paid')
<span class="badge bg-success">{{ __('Bezahlt') }}</span>
@endif
</td>
<td>
@if(!$transaction->incoming)
<span class="text-danger fw-bold">-{{ $transaction->amount_euro }} EUR</span>
@else
<span class="text-success fw-bold">+{{ $transaction->amount_euro }} EUR</span>
@endif
</td>
<td>
@if(!$transaction->incoming)
<span class="text-danger fw-bold">-{{ $transaction->amount_bitcoin }} BTC</span>
@else
<span class="text-success fw-bold">+{{ $transaction->amount_bitcoin }} BTC</span>
@endif
</td>
<td>{{ $transaction->confirmations }}/{{ App\Models\Settings::get('shop.btc_confirms_needed', 1) }}</td>
<td>
<a class="primary-color" href="{{ route('admin.user.edit', $transaction->user_id) }}">{{ App\Models\User::getUsernameById($transaction->user_id) }}</a>
</td>
<td>
{{ date('d.m.Y H:i', strtotime($transaction->created_at)) }}
</td>
<td>
<a href="https://www.blockchain.com/btc/tx/{{ $transaction->txid }}" class="primary-color">auf Blockchain ansehen</a>
</td>
</tr>
@endforeach
</tbody>
</table>
</div>
</div>
</div>

<div class="card">
<div class="card-body">
<h6>Transaktion Deepsearch</h6>
<form class="form form-vertical" action="{{ route('admin.transactions.deepsearch') }}" method="GET">

@if(isset($searchResult)) 
<div class="card shadow-none bg-transparent border-success">
<div class="card-body">
<h4 class="card-title"><i class="far fa-check-circle"></i> Transaktion gefunden</h4>
<p class="card-text"> 
<p class="mb-0"><b>Benutzer (Label):</b> {{ $searchResult["details"][0]["label"] }}</p>
<p><b>Betrag (BTC):</b> {{ $searchResult["details"][0]["amount"] }} (~{{ App\Custom\BitcoinHandler::convertBtc($searchResult["details"][0]["amount"]) }} EUR) mit {{ $searchResult["confirmations"] }} Bestätigungen</p>
<p><b>Wallet:</b> {{ $searchResult["details"][0]["address"] }}</p>
<!-- <p class="text-warning">Transaktion wurde nicht in der Datenbank gespeichert. Möglicherweise wurde sie nicht erkannt weil der Benutzer zu wenig Geld gesendet hat</p> -->
</p></div>
</div>
@endif

<div class="row">

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="method">Methode</label>
<div class="input-group input-group-merge">
<select class="form-select" id="method" name="method" required>
<option value="wallet" disabled>Nach Wallet</option>
<option value="txid">Nach Transaktionslink</option>
</select>
</div>
<small>Bitte Suchmethode auswählen</small>
</div>
</div>

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="s">Suchbegriff</label>
<div class="input-group input-group-merge">
<input type="text" id="s" class="form-control" name="s" autocomplete="off" placeholer="..." required>
</div>
<small>Wallet oder Transaktions ID</small>
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


</div>


<!-- End Content -->

</div>
</div>
@endsection

@section('js')

<script src="{{ asset('/app-assets/vendors/js/tables/datatable/jquery.dataTables.min.js') }}"></script>
<script src="{{ asset('/app-assets/vendors/js/tables/datatable/dataTables.bootstrap5.min.js') }}"></script>
<script src="{{ asset('/app-assets/vendors/js/tables/datatable/dataTables.responsive.min.js') }}"></script>
<script src="{{ asset('/app-assets/vendors/js/tables/datatable/responsive.bootstrap5.min.js') }}"></script>
<script src="{{ asset('/app-assets/vendors/js/tables/datatable/datatables.checkboxes.min.js') }}"></script>
<script src="{{ asset('/app-assets/vendors/js/tables/datatable/datatables.buttons.min.js') }}"></script>
<script src="{{ asset('/app-assets/vendors/js/tables/datatable/jszip.min.js') }}"></script>
<script src="{{ asset('/app-assets/vendors/js/tables/datatable/buttons.html5.min.js') }}"></script>
<script src="{{ asset('/app-assets/vendors/js/tables/datatable/dataTables.rowGroup.min.js') }}"></script>
<script src="{{ asset('/app-assets/vendors/js/pickers/flatpickr/flatpickr.min.js') }}"></script>

<script>
$(document).ready(function() {
    $('#user').DataTable( {
        "paging":   true,
        "ordering": true,
        "info":     false,
        "order": [0, 'DESC'],
    } );
} );
</script>
@endsection
