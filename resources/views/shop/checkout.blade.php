@extends('base')

@section('title')
{{ __('Kaufübersicht') }}
@endsection

@section('subtitle')
{{ __('Kaufübersicht') }}
@endsection

@section('content')
<div class="content-body">
<!-- Content -->

<div class="card">
<div class="card-body">
<div class="d-inline">
<h5 class="d-inline">{{ $product->name }}</h5>
<small class="primary-color">{{ $product->description_short }}</small>
</div>

<h6 class="mt-1">
{{ __('Beschreibung') }}:
</h6>
@if(!empty($product->description))
{!! nl2br($product->description) !!}
@else
{{ __('Keine Beschreibung angegeben') }}
@endif

<div class="border mt-2"></div>

<span class="mt-2 d-block">
<b>{{ __('Kategorie') }}:</b>
<a href="{{ route('shop.cat.show', $category->slug) }}" @if($category->featured) class="text-warning" @else class="primary-color" @endif>
{{ $category->name }}
</a>
</span>

<span class="d-block">
<b>{{ __('Anzahl') }}:</b>
{{ $amount }} {{ $product->product_type == 'physisch' ? $product->weight_text : 'Stück' }} [{{ number_format($product->price_euro, 2, ',', ' ') }} EUR/{{ $product->product_type == 'physisch' ? $product->weight_text : 'Stück' }}]
</span>

<span class="d-block">
<b>{{ __('Preis') }}:</b>
{{ number_format($price_total, 2, ',', ' ') }} EUR
</span>

<form action="{{ route('shop.checkout.create') }}" method="POST">
@csrf

@if($product->product_type == 'physisch' || $product->dropable)

<div class="border mt-2 mb-2"></div>

<span class="d-block">
<b>{{ __('Lieferadresse/Drop') }}:</b>
</span>

<div class="row">

<div class="col-12 mt-1">
<div class="mb-1">
<label class="form-label" for="drop">Drop/Lieferanschrift</label>
<div class="input-group input-group-merge">
<textarea type="text" id="drop" class="form-control" name="drop" placeholder="Drop/Lieferadresse eingeben"></textarea>
</div>
</div>
</div>

</div>

@endif

<a href="{{ url()->previous() }}" class="btn btn-secondary mt-2"><i class="fal fa-long-arrow-alt-left"></i> Kauf abbrechen</a>
<button type="submit" class="btn btn-primary mt-2">Kauf bestätigen</button>

</form>

</div>
</div>

<!-- End Content -->

</div>
</div>
@endsection
