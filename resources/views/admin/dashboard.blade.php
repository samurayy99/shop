@extends('base')

@section('title')
Admin {{ __('Dashboard') }}
@endsection

@section('content')
<section>
<div class="header-navbar-shadow"></div>
<div class="content-wrapper container-xxl p-0">
<div class="content-header row">
<div class="content-header-left col-md-9 col-12 mb-2">
<div class="row breadcrumbs-top">
<div class="col-12">
<h2 class="mb-0">{{ __('Dashboard') }}</h2>
</div>
</div>
</div>
</div>
<div class="content-body">
<div class="row">

<div class="row match-height">
<!-- Medal Card -->
<div class="col-xl-4 col-md-6 col-12">
<div class="card card-congratulation-medal">
<div class="card-body">
<h5>
@if(App\Models\UserTransaction::getTodaysProfit() == 0)
☔
@else
🌞
@endif
</h5>
<p class="card-text font-small-3">
@if(App\Models\UserTransaction::getTodaysProfit() == 0)
Heute wurde noch kein Geld eingezahlt
@else
Yayy! Heute wurde schon Geld eingezahlt
@endif
</p>
<h3 class="mb-75 mt-2 pt-50">
<a href="#" class="primary-color">€ {{ App\Models\UserTransaction::getTodaysProfit() }}</a>
</h3>
<a href="{{ route('admin.orders') }}" class="btn btn-primary waves-effect waves-float waves-light">Bestellungen ansehen</a>
@if(App\Models\UserTransaction::getTodaysProfit() != 0)
<img src="{{ asset('/img/badge.svg') }}" class="congratulation-medal">
@endif
</div>
</div>
</div>
<!--/ Medal Card -->

<!-- Statistics Card -->
<div class="col-xl-8 col-md-6 col-12">
<div class="card card-statistics">
<div class="card-header">
<h4 class="card-title">Statistiken</h4>
</div>
<div class="card-body statistics-body">
<div class="row">
<div class="col-xl-3 col-sm-6 col-12 mb-2 mb-xl-0">
<div class="d-flex flex-row">
<div class="avatar bg-light-primary me-2">
<div class="avatar-content">
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-up avatar-icon"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
</div>
</div>
<div class="my-auto">
<h4 class="fw-bolder mb-0">{{ App\Models\UserOrder::countOrders() }}</h4>
<p class="card-text font-small-3 mb-0">Bestellungen</p>
</div>
</div>
</div>
<div class="col-xl-3 col-sm-6 col-12 mb-2 mb-xl-0">
<div class="d-flex flex-row">
<div class="avatar bg-light-info me-2">
<div class="avatar-content">
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user avatar-icon"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
</div>
<div class="my-auto">
<h4 class="fw-bolder mb-0">{{ App\Models\User::countUsers() }}</h4>
<p class="card-text font-small-3 mb-0">Kunden</p>
</div>
</div>
</div>
<div class="col-xl-3 col-sm-6 col-12 mb-2 mb-sm-0">
<div class="d-flex flex-row">
<div class="avatar bg-light-danger me-2">
<div class="avatar-content">
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-box avatar-icon"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
</div>
</div>
<div class="my-auto">
<h4 class="fw-bolder mb-0">{{ App\Models\Product::countProducts() }}</h4>
<p class="card-text font-small-3 mb-0">Produkte</p>
</div>
</div>
</div>
<div class="col-xl-3 col-sm-6 col-12">
<div class="d-flex flex-row">
<div class="avatar bg-light-success me-2">
<div class="avatar-content">
<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-currency-euro" viewBox="0 0 16 16">
  <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z"/>
</svg>
</div>
</div>
<div class="my-auto">
<h4 class="fw-bolder mb-0">€ {{ number_format(App\Models\Settings::get('shop.total_profit', 0), 2, ',', ' ') }}</h4>
<p class="card-text font-small-3 mb-0">Umsatz</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<!--/ Statistics Card -->

<div class="col-md-5">
<div class="card">
<div class="card-body">
<h6>Die letzten 5 Registrationen</h6>

<div class="table-responsive">
<table class="table">
<thead>
<tr>
<th>Name</th>
<th>Datum</th>
</tr>
</thead>
<tbody>
@foreach(App\Models\User::getLast5Registrations() as $user)
<tr>
<td>[#{{ $user->id }}] {{ $user->username }}</td>
<td>{{ date('d-m-Y H:i', strtotime($user->created_at)) }}</td>
</tr>
@endforeach
</tbody>
</table>
</div>

</div>
</div>
</div>


<div class="col-md-7">
<div class="card">
<div class="card-body">
<h6>Die letzten 5 Bestellungen</h6>

<div class="table-responsive">
<table class="table">
<thead>
<tr>
<th>ID</th>
<th>Benutzer</th>
<th>Produkt</th>
<th>Anzahl</th>
<th>Preis</th>
<th>Datum</th>
</tr>
</thead>
<tbody>
@foreach(App\Models\UserOrder::getLast5Orders() as $order)
<tr>
<td>#{{ $order->id }}</td>
<td>{{ App\Models\User::getUsernameById($order->user_id) }}</td>
<td>{{ $order->product_name }}</td>
<td>{{ $order->order_amount }} {{ $order->weight_text != null ? $order->weight_text : 'Stück' }}</td>
<td>{{ $order->order_price }} EUR</td>
<td>{{ date('d-m-Y H:i', strtotime($order->created_at)) }}</td>
</tr>
@endforeach
</tbody>
</table>
</div>

</div>
</div>
</div>


</div>

</div>
</div>
</div>
</section>
@endsection