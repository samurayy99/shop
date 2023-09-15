@extends('base')

@section('title')
Admin Bestellung #{{ $order->id }}
@endsection

@section('subtitle')
Bestellung #{{ $order->id }} <small>{{ $order->product_name }}</small>
@endsection

@section('content')
<div class="content-body">
<!-- Content -->

<div class="card">
<div class="card-body">
<h6>Bestellung #{{ $order->id }}</h6>
<small>Bestelldatum: {{ date('d-m-Y H:i', strtotime($order->created_at)) }}</small>

@if($order->weight == null)
<pre class="p-1">
{{ $order->order_content }}
</pre>
@endif

@if($order->weight != null)
<h6 class="mt-1">Lieferadresse</h6>
<pre class="p-1">
{{ $order->order_drop }}
</pre>

<h6>Bestellung bearbeiten</h6>

<form class="form form-vertical" action="{{ route('admin.order.update', $order->id) }}" method="POST">
@csrf
<div class="row">


<div class="col-12">
<div class="mb-1">
<label class="form-label" for="status">Status ändern</label>
<div class="input-group input-group-merge">
<select class="form-select" id="status" name="status" required>
<option disabled>Bitte auswählen...</option>
<option value="completed" @if($order->order_status == 'completed') selected @endif>Abgeschlossen</option>
<option value="pending" @if($order->order_status == 'pending') selected @endif>Pending</option>
<option value="cancelled" @if($order->order_status == 'cancelled') selected @endif>Abgebrochen</option>
</select>
</div>
<small>Wenn du die Ware versendet hast, kannst du sie als "Abgeschlossen" makieren</small>
</div>
</div>

</div>
<div class="col-12">
<button type="submit" class="btn btn-primary me-1 waves-effect waves-float waves-light">Speichern</button>
</div>
</div>
</form>
@endif

<a href="{{ route('admin.orders') }}" class="btn btn-secondary me-1 waves-effect waves-float waves-light"><i class="fal fa-arrow-left"></i> Zurück</a>

</div>
</div>

<!-- End Content -->

</div>
</div>
@endsection
