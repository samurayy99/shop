<div class="col-md-4">

<div class="card" @if(strlen($product->background_url) > 0) style="background: linear-gradient(
0deg, rgb(24 24 24 / 88%), rgb(24 24 24 / 88%)), url({{ $product->background_url }}); background-size: cover;" @endif>

@if(!empty($product->old_price_euro))
<div class="price-tag-sale">
<span class="product-tag-percent">
{{ App\Models\Product::getPercentageSaved($product->old_price_euro, $product->price_euro) }}%
</span>
{{ __('Reduziert') }}
<span class="price-tag-old">
<s>{{ number_format($product->old_price_euro, 2, ',', ' ') }} EUR</s>  
</span>
</div>
@endif

<h6 class="card-title text-center mt-2 mb-1">{{ $product->name }}</h6>
@if(strlen($product->description_short) > 0)
<h6 class="card-subtitle text-muted text-center">{{ $product->description_short }}</h6>
@endif
<div class="card-body">
<form action="{{ route('shop.checkout') }}" method="POST">
@csrf
<input type="hidden" value="{{ $product->id }}" name="product_id">
<div class="row">
<div class="col">
<input type="text" class="form-control text-white" value="{{ number_format($product->price_euro, 2, ',', ' ') }} EUR/{{ $product->product_type == 'physisch' ? $product->weight_text : 'Stück' }}" disabled>
</div>
<div class="col">
<input type="number" class="form-control" placeholder="{{ __('Anzahl') }}" name="amount">
</div>
</div>

<div class="row">
<div class="col px-1"><button type="submit" class="btn btn-primary btn-sm btn-block w-100 waves-effect waves-float waves-light mb-05">{{ __('Kaufen') }}</button></div>
</div>

</form>
</div>
</div>

</div>