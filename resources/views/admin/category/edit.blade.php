@extends('base')

@section('title')
Admin {{ __('Kategorien bearbeiten') }}
@endsection

@section('subtitle')
Kategorie "{{ $category->name }}" bearbeiten
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
<h6>Kategorie bearbeiten</h6>

<form class="form form-vertical" action="{{ route('admin.category.edit.save', $category->id) }}" method="POST">
@csrf
<div class="row">

<div class="col-12">
<div class="mb-1 mt-1">
<label class="form-label" for="name">Name der Kategorie</label>
<div class="input-group input-group-merge">
<input type="text" id="name" class="form-control" name="name" required value="{{ $category->name }}">
</div>
</div>
</div>

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="category_name">Slug (Default: Kategoriename)</label>
<div class="input-group input-group-merge">
<input type="text" id="category_name" class="form-control" name="category_slug" value="{{ $category->slug }}">
</div>
<small>Wird in der URL angezeigt. Beispiel: Kreditkarten ODER reduzierte kreditkarten. Output: <code>shop.com/kategorie/kreditkarten</code> ODER <code>shop.com/kategorie/reduzierte-kreditkarten</code></small>
</div>
</div>

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="category_featured">Featured Kategorie</label>
<div class="input-group input-group-merge">
<select class="form-select" id="category_featured" name="category_featured" required>
<option disabled>Bitte auswählen...</option>
<option value="0" @if(!$category->featured) selected @endif>Nein</option>
<option value="1" @if($category->featured == 1) selected @endif>Ja</option>
</select>
</div>
<small>Kategorie wird ganz oben und mit auffälliger Farbe und einem <i class="fas fa-star text-warning"></i> angezeigt.</small>
</div>
</div>

</div>
<div class="col-12">
<button type="submit" class="btn btn-primary me-1 waves-effect waves-float waves-light">Speichern</button>
<a href="{{ route('admin.categories') }}" class="btn btn-secondary me-1 waves-effect waves-float waves-light">Abbrechen</a>
</div>
</div>
</form>

</div>
</div>

<div class="card">
<div class="card-body">
<h6>Anordnung der Produkte ändern</h6>

<div class="table-responsive">
<table class="table" id="productTable">
<thead>
<tr>
<th>#</th>
<th>Produktname</th>
</tr>
</thead>
<tbody id="tableContents">
@foreach($products as $product)
<tr class="row1" data-id="{{ $product->id }}">
<td>
<div style="color:rgb(124,77,255); padding-left: 10px; float: left; font-size: 20px; cursor: pointer;" title="change display order">
<i class="fa fa-ellipsis-v"></i>
<i class="fa fa-ellipsis-v"></i>
</div>
</td>
<td>{{ $product->name }}</td>
</tr>
@endforeach
</tbody>
</table>
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

<!-- jQuery UI -->
<script type="text/javascript" src="//code.jquery.com/ui/1.12.1/jquery-ui.js" ></script>


<script>
$(function () {
    $("#productTable").DataTable();

    $( "#tableContents" ).sortable({
        items: "tr",
        cursor: 'move',
        opacity: 0.6,
        update: function() {
            sendOrderToServer();
        }
    });

    function sendOrderToServer() {
        var order = [];
        var token = $('meta[name="csrf-token"]').attr('content');
        $('tr.row1').each(function(index,element) {
        order.push({
            id: $(this).attr('data-id'),
            position: index+1
        });
        });

        $.ajax({
        type: "POST", 
        dataType: "json", 
        url: "{{ route('admin.product.manage.updateOrder') }}",
            data: {
            order: order,
            _token: token
        },
        success: function(response) {
            if (response.status == "success") {
                console.log(response);
            } else {
                console.log(response);
            }
        }
        });
    }
    });

</script>
@endsection
