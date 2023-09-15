<div class="col-md-4">

<div class="card" @if(strlen($topSeller->background_url) > 0) style="background: linear-gradient(
0deg, rgb(24 24 24 / 88%), rgb(24 24 24 / 88%)), url({{ $topSeller->background_url }}); background-size: cover;" @endif>

@if(!empty($topSeller->old_price_euro))
<div class="price-tag-sale">
<span class="product-tag-percent">
{{ App\Models\Product::getPercentageSaved($topSeller->old_price_euro, $topSeller->price_euro) }}%
</span>
{{ __('Reduziert') }}
<span class="price-tag-old">
<s>{{ number_format($topSeller->old_price_euro, 2, ',', ' ') }} EUR</s>  
</span>
</div>
@endif

<h6 class="card-title text-center mt-2 mb-1">{{ $topSeller->name }}</h6>
@if(strlen($topSeller->description_short) > 0)
<h6 class="card-subtitle text-muted text-center">{{ $topSeller->description_short }}</h6>
@endif
<div class="card-body">
<form action="{{ route('shop.checkout') }}" method="POST">
@csrf
<input type="hidden" value="{{ $topSeller->id }}" name="product_id">
<div class="row">
<div class="col">
<input type="text" class="form-control text-white" value="{{ number_format($topSeller->price_euro, 2, ',', ' ') }} EUR/{{ $topSeller->product_type == 'physisch' ? $topSeller->weight_text : 'Stück' }}" disabled>
</div>
<div class="col">
<input type="number" class="form-control" placeholder="{{ __('Anzahl') }}" name="amount">
</div>
</div>
<p class="mt-07 text-center">
@if($topSeller->product_type == 'virtuell')
@if(App\Models\Settings::get('shop.show_full_stock'))
{{ __('Verfügbar') }}: <span class="text-{{ App\Models\ProductStock::countStockAvailable($topSeller->id) > 0 ? 'success' : 'danger' }}">{{ App\Models\ProductStock::countStockAvailable($topSeller->id) }}</span>
@else
<span class="text-{{ App\Models\ProductStock::countStockAvailable($topSeller->id) > 0 ? 'success' : 'danger' }}">{{ App\Models\ProductStock::countStockAvailable($topSeller->id) > 0 ? __('Verfügbar') : __('Ausverkauft') }}</span>
@endif
@else
<span class="text-success">{{ __('Verfügbar') }}</span>
@endif
</p>

<div class="row">
<div class="col px-1"><button type="submit" class="btn btn-primary btn-sm btn-block w-100 waves-effect waves-float waves-light mb-05">{{ __('Kaufen') }}</button></div>
</div>

</form>
</div>
</div>

</div>