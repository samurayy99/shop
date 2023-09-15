@extends('base')

@section('title')
{{ __('Bestellung') }} #{{ $order->id }}
@endsection

@section('content')
<div class="content-body">
<!-- Content -->


<div class="mb-1">
<h4 class="d-inline">{{ __('Bestellung') }} #{{ $order->id }}</h4>
</div>

<div class="card mb-1">
<div class="card-body">

<p><b>Name:</b> {{ $order->product_name }}</p>
<p><b>{{ __('Preis') }}:</b> {{ $order->order_price }} EUR</p>
<p><b>{{ __('Anzahl') }}:</b> {{ $order->order_amount }} {{ $order->weight != null ? $order->weight_text : 'Stück' }}</p>

<h5 class="mt-2">{{ __('Bestellung') }}:</h5>

@if($order->weight == null)
<pre class="p-1">
{{ $order->order_content }}
</pre>
@else

<p class="mb-0"><b>Status:</b> <span class="text-{{ $order->order_status == 'pending' ? 'warning' : 'success'}}">{{ $order->order_status }} </p>

@if($order->order_status == 'pending')
<small>Deine Bestellung wird für den Versand vorbereitet</small>
@elseif($order->order_status == 'completed')
<small>Deine Bestellung wurde erfolgreich an den Versanddienstleister übergeben</small>
@elseif($order->order_status == 'cancelled')
<small>Deine Bestellung wurde storniert. Falls dies ohne dein Wissen geschah, wende dich an den nächsten Supportmitarbeiter</small>
@endif

@endif

<center>
<a href="{{ route('user.orders') }}" class="btn btn-secondary"><i class="fal fa-long-arrow-alt-left"></i> {{ __('Zurück') }}</a>
<a href="{{ route('user.order.delete', $order->id) }}" class="btn btn-danger"><i class="fal fa-trash"></i> {{ __('Löschen') }}</a>
</center>

</div>
</div>


<!-- End Content -->

</div>
</div>
@endsection