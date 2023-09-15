@extends('base')

@section('title')
{{ __('Ticket erstellen') }}
@endsection

@section('subtitle')
{{ __('Ticket erstellen') }}
@endsection

@section('content')
<div class="content-body">
<!-- Content -->

<div class="card">
<div class="card-body">

<form class="form form-vertical" action="{{ route('support.ticket.create.save') }}" method="POST">
@csrf
<div class="row">

<div class="col-12">
<div class="mb-1 mt-1">
<label class="form-label" for="subject">{{ __('Betreff') }} (Optional)</label>
<div class="input-group input-group-merge">
<input type="text" id="subject" class="form-control" name="subject">
</div>
</div>
</div>

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="department">{{ __('Kategorie') }}</label>
<div class="input-group input-group-merge">
<select class="form-select" id="department" name="department" required>
<option disabled>Bitte auswählen...</option>
<option value="Allgemein" selected>{{ __('Allgemein') }}</option>
<option value="Replace">{{ __('Replace') }}</option>
<option value="Zahlung">{{ __('Zahlung') }}</option>
<option value="Sonstiges">{{ __('Sonstiges') }}</option>
</select>
</div>
<small>{{ __('Bitte wähle die richtige Kategorie aus, damit wir dir schnellstmöglich helfen können') }}</small>
</div>
</div>

<div class="col-12" id="orderBlock">
<div class="mb-1">
<label class="form-label" for="order">{{ __('Bestellung auswählen') }}</label>
<div class="input-group input-group-merge">
<select class="form-select" id="order" name="order">
<option disabled>Bitte auswählen...</option>
@foreach(App\Models\UserOrder::getUserOrders(Auth::user()->id) as $order)
<option value="{{ $order->id }}">#{{ $order->id }} {{ $order->product_name }} | {{ date('d-m-Y H:i', strtotime($order->created_at)) }}</option>
@endforeach
</select>
</div>
<small>{{ __('Bitte wähle die richtige Bestellung aus, damit wir wissen um welche Bestellung es sich handelt') }}</small>
</div>
</div>

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="message">{{ __('Nachricht') }}</label>
<div class="input-group input-group-merge">
<textarea id="message" class="form-control" name="message"></textarea>
</div>
<small>{{ __('Bitte versuche dein Problem so genau es geht zu beschreiben') }}</small>
</div>
</div>

</div>
<div class="col-12">
<button type="submit" class="btn btn-primary me-1 waves-effect waves-float waves-light">{{ __('Absenden') }}</button>
</div>
</div>
</form>

</div>
</div>

<!-- End Content -->

</div>
</div>
@endsection

@section('js')
<script>
$('#department').on('change', function() {
  if(this.value == 'Replace') {
      $('#orderBlock').slideDown( "slow" );
  } else {
      $('#orderBlock').hide();
  }
});
</script>

<script>
$( document ).ready(function() {
    $('#orderBlock').hide();
});
</script>
@endsection
