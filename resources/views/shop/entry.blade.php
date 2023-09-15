@extends('base')

@section('title')
{{ __('Shop') }}
@endsection

@section('css')
<link href="{{ asset('/css/shop.css') }}" rel="stylesheet" type="text/css" />
@endsection

@section('subtitle')
{{ __('Shop') }}
@endsection

@section('content')
<div class="content-body">
<!-- Content -->


<div class="sidebar-detached sidebar-left ">
<div class="sidebar">

<!-- Ecommerce Sidebar Starts -->
<div class="sidebar-shop">
<div class="row">
<div class="col-sm-12">
<h6 class="d-none d-lg-block">{{ __('Kategorien') }}</h6>
</div>
</div>
<div class="card">
<div class="card-body">
<!-- Price Filter starts -->
<div class="multi-range-price">
<h6 class="mt-0">{{ __('Alle Kategorien') }}</h6>

@forelse(App\Models\ProductCategory::getCategoriesBlade() as $category)

@if($category->featured)
<a href="{{ route('shop.cat.show', $category->slug) }}" class="btn btn-warning w-100 btn-sm btn-block waves-effect waves-float waves-light mb-05">
@if(isset($selectedCategory) && $selectedCategory->id == $category->id) <i class="fal fa-chevron-double-right"></i>  @endif
<i class="fal fa-star"></i> {{ $category->name }}
</a>
@else
<a href="{{ route('shop.cat.show', $category->slug) }}" class="btn btn-secondary w-100 btn-sm btn-block waves-effect waves-float waves-light mb-05">
@if(isset($selectedCategory) && $selectedCategory->id == $category->id) <i class="fal fa-chevron-double-right"></i>  @endif
{{ $category->name }}
</a>
@endif
@empty
{{ __('Keine Kategorien gefunden') }}
@endforelse
</div>
<!-- Price Filter ends -->
</div>
</div>
</div>
<!-- Ecommerce Sidebar Ends -->
</div>
</div>


<div class="row match-height">
<h6 class="d-none d-lg-block">
@if(isset($selectedCategory))
{{ $selectedCategory->name }}
@else
{{ __('Beliebte Produkte') }}
@endif
</h6>

@if(isset($selectedCategory))

@forelse(App\Models\Product::getAllProductsFromCategory($selectedCategory->id) as $product)

@include('shop.product')

@empty
<div class="col">
<div class="alert alert-warning p-1"><i class="fal fa-exclamation-triangle"></i> {{ __('Es wurden keine Produkte in dieser Kategorie gefunden') }}</div>
</div>

@endforelse


@else 

@foreach(App\Models\Product::getTopSelling() as $topSeller)

@include('shop.topseller')

@endforeach

@endif


</div>

<!-- End Content -->

</div>
</div>
@endsection
