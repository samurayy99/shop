@extends('base')

@section('title')
{{ __('Deine Bestellungen') }}
@endsection

@section('content')
<div class="content-body">
<!-- Content -->


<div class="mb-1">
<h4 class="d-inline">{{ __('Deine Bestellungen') }}</h4>
<small class="primary-color">{{ __('Alle Bestellungen werden nach 30 Tagen gelöscht. Bitte speichere deine Bestellungen vorher ab') }}</small>
</div>

@forelse($orders as $order)

<div class="card mb-1">
<div class="card-body">
<small class="primary-color">#{{ $order->id }}</small>
<a class="fw-bold primary-color" href="{{ route('user.order.show', $order->id) }}">{{ $order->product_name }}</a>
<small><b>{{ __('Anzahl') }}</b>: {{ $order->order_amount }} {{ $order->weight != null ? $order->weight_text : 'Stück' }} <b>{{ __('Preis') }}</b>: {{ $order->order_price }} EUR</small>
<small class="float-end">{{ date('d-m-Y H:i', strtotime($order->created_at)) }}</small>
</div>
</div>

@empty

@endforelse

<!-- End Content -->

</div>
</div>
@endsection

@section('js')
<script>
var editor = new FroalaEditor('#editor')
</script>
@endsection