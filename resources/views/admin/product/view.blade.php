@extends('base')

@section('title')
Admin {{ __('Produkte verwalten') }}
@endsection

@section('subtitle')
{{ __('Produkte verwalten') }}
@endsection

@section('css')
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/tables/datatable/dataTables.bootstrap5.min.css') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/tables/datatable/responsive.bootstrap5.min.css') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/tables/datatable/buttons.bootstrap5.min.css') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/tables/datatable/rowGroup.bootstrap5.min.css') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/pickers/flatpickr/flatpickr.min.css') }}">

<meta name="csrf-token" content="{{ csrf_token() }}" />
@endsection

@section('content')
<div class="content-body">
<!-- Content -->

<div class="card">
<div class="card-body">
<a href="{{ route('admin.product.add') }}" class="btn btn-primary float-end">Neu erstellen</a>
</div>
<div class="table-responsive">
<table class="table">
<thead>
<tr>
<th id="selected">#</th>
<th>ID</th>
<th>Name</th>
<th>Kategorie</th>
<th>Preis</th>
<th>auf Lager</th>
<th>Verkäufe</th>
<th>Aktionen</th>
</tr>
</thead>
<tbody>
@foreach(App\Models\Product::getAllProducts() as $product)
<tr>

<td>
<input type="checkbox" id="checkboxes" name="stock[]" class="form-check-input" value="{{ $product->id }}"></input>
</td>

<td>
{{ $product->id }}
</td>

<td>
{!! $product->listed ? $product->name : '<i class="fas fa-eye-slash"></i> <del>'.$product->name.'</del>' !!}
</td>

<td>
<a href="{{ route('admin.category.edit', App\Models\ProductCategory::getCategoryById($product->category_id)->id) }}" class="primary-color">{{ App\Models\ProductCategory::getCategoryById($product->category_id)->name }}</a>
</td>

<td>
{{ $product->price_euro }} EUR/{{ $product->product_type == 'physisch' ? $product->weight_text : 'Stück' }}
</td>

<td>
@if($product->dropable)
<a href="#" class="primary-color">Unbegrenzt {{ $product->product_type == 'physisch' ? $product->weight_text : 'Stück' }}</a>
@else
<a href="{{ route('admin.product.manage', $product->id) }}" class="primary-color">{{ App\Models\ProductStock::countStockAvailable($product->id) }} {{ $product->product_type == 'physisch' ? $product->weight_text : 'Stück' }}</a>
@endif
</td>

<td>
{{ $product->amount_sold }} {{ $product->product_type == 'physisch' ? $product->weight_text : 'Stück' }}
</td>

<td>
@if($product->product_type == 'virtuell') 
<a href="{{ route('admin.product.manage', $product->id) }}" class="primary-color"><i class="fal fa-database"></i></a> 
@endif
<a href="{{ route('admin.product.edit', $product->id) }}" class="primary-color"><i class="fal fa-edit"></i></a>
<a href="{{ route('admin.product.delete', $product->id) }}"><i class="fal fa-trash text-danger"></i></a>
</td>

</tr>
@endforeach
</tbody>
</table>

<div class="mt-1 p-2">
<button class="btn btn-secondary btn-sm" id="toggleListing"><i class="fas fa-eye-slash"></i> Ausgewählte ausblenden</button>
<button class="btn btn-danger btn-sm" id="deleteProducts"><i class="fas fa-trash"></i> Ausgewählte löschen</button>
</div>

</div>
</div>

<!-- End Content -->

</div>
</div>
@endsection

@section('js')
<script src="{{ asset('/app-assets/vendors/js/tables/datatable/jquery.dataTables.min.js') }}"></script>
<script src="{{ asset('/app-assets/vendors/js/tables/datatable/dataTables.bootstrap5.min.js') }}"></script>
<script src="{{ asset('/app-assets/vendors/js/tables/datatable/dataTables.responsive.min.js') }}"></script>
<script src="{{ asset('/app-assets/vendors/js/tables/datatable/responsive.bootstrap5.min.js') }}"></script>
<script src="{{ asset('/app-assets/vendors/js/tables/datatable/datatables.checkboxes.min.js') }}"></script>
<script src="{{ asset('/app-assets/vendors/js/tables/datatable/datatables.buttons.min.js') }}"></script>
<script src="{{ asset('/app-assets/vendors/js/tables/datatable/jszip.min.js') }}"></script>
<script src="{{ asset('/app-assets/vendors/js/tables/datatable/buttons.html5.min.js') }}"></script>
<script src="{{ asset('/app-assets/vendors/js/tables/datatable/dataTables.rowGroup.min.js') }}"></script>
<script src="{{ asset('/app-assets/vendors/js/pickers/flatpickr/flatpickr.min.js') }}"></script>

<script>
$(document).on('click', '#deleteProducts', function() {
    var ids = [];
    if(confirm('Bist du dir sicher, dass du alle markierten Produkte aus der Datenbank löschen willst?')) {
        $(':checkbox:checked').each(function() {
            ids.push($(this).val());
        });

        if(ids.length > 0) 
        {
            $.ajax({
                url:"{{ route('admin.products.delete') }}",
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                method:"POST",
                data: {id:ids},
                success:function(data) 
                {
                    location.reload();
                },
                error: function(data) 
                {
                    var errors = data.responseJSON;
                    console.log(errors);
                }
            });
        }
    }
});

$(document).on('click', '#toggleListing', function() {
    var ids = [];
    if(confirm('Bist du dir sicher, dass du alle markierten Produkte als "gelistet/ungelistet" markieren willst?')) {
        $(':checkbox:checked').each(function() {
            ids.push($(this).val());
        });

        if(ids.length > 0) 
        {
            $.ajax({
                url:"{{ route('admin.product.manage.toggleListing') }}",
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                method:"POST",
                data: {id:ids},
                success:function(data) 
                {
                    location.reload();
                },
                error: function(data) 
                {
                    var errors = data.responseJSON;
                    console.log(errors);
                }
            });
        }
    }
});
</script>
@endsection
