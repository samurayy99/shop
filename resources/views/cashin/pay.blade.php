@extends('base')

@section('title')
{{ __('Bezahlen') }}
@endsection


@section('content')
<div class="content-body">
<!-- Content -->

<div class="payment-window">

<small>{{ $transaction->uuid }}</small>

@if($transaction->status == 'waiting')
<small class="d-block">Status: {{ __('Warte auf Zahlungseingang') }}</small>
<h6 class="mt-1">Details</h6>
<a href="bitcoin:{{ $transaction->wallet }}&amount={{ $transaction->amount_bitcoin }}">
<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=bitcoin:{{ $transaction->wallet }}&amount={{ $transaction->amount_bitcoin }}">
</a>
<p class="mt-1">{!! __('Bitte sende exakt <code id="amount">:Amount</code> <a href="#" onclick="copyToClipboard(\'#amount\')" class="primary-color"><i class="fal fa-copy"></i></a> an folgende Wallet: <code id="wallet">:Wallet</code> <a href="#" onclick="copyToClipboard(\'#wallet\')" class="primary-color"><i class="fal fa-copy"></i></a>', ['amount' => $transaction->amount_bitcoin, 'wallet' => $transaction->wallet]) !!}</p>
<p>{{ __('Wenn du nicht exakt den oben aufgeführten Betrag sendest, wird deine Zahlung nicht vom System erkannt.') }}</p>
@elseif($transaction->status == 'pending')
<i class="text-warning d-block fab fa-bitcoin fa-spin fa-5x mt-1 mb-2"></i>
<p class="">{{ __('Deine Transaktion wurde vom System erkannt und wartet nun auf die benötigten Bestätigungen.') }}</p>
<p>{{ __('Benötigte Bestätigungen') }}: {{ App\Models\Settings::get('shop.btc_confirms_needed', 1) }}</p>


@elseif($transaction->status == 'paid')
<i class="text-success d-block fas fa-check fa-5x mt-1"></i>
<p class="">{{ __('Die Transaktion wurde erfolgreich gutgeschrieben. Du kannst dieses Fenster nun schließen.') }}</p>

@endif

<a href="{{ route('user.cashin') }}" class="btn btn-secondary d-block"><i class="fal fa-arrow-left"></i> {{ __('Zurück') }}</a>

</div>

<!-- End Content -->

</div>
</div>
@endsection

@section('js')
<script>
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}
</script>

<script>
setTimeout(function(){
   window.location.reload(1);
}, 30000);
</script>
@endsection
