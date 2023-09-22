@extends('base')

@section('title', 'Shop')

@section('content')
<div class="content-body">
    <h1>Shop</h1>
    <div class="row">
        @foreach(App\Models\Product::getAllProductsFromCategory($selectedCategory->id) as $product)
        <div class="col-md-4">
            <div class="card">
                <img src="{{ $product->image }}" alt="{{ $product->name }}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">{{ $product->name }}</h5>
                    <p class="card-text">{{ $product->description }}</p>
                    <p class="card-text">${{ $product->price }}</p>
                    <a href="{{ url('/cart/add/' . $product->id) }}" class="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        </div>
        @endforeach
    </div>
</div>
@endsection