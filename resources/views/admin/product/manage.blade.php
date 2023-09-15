@extends('base')

@section('title')
Admin {{ __('Produkte verwalten') }}
@endsection

@section('subtitle')
Produkt #{{ $product->id }} "{{ $product->name }}" verwalten
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
<h6>Datensätze ({{ App\Models\ProductStock::countStockAvailable($product->id) }})</h6>

<table id="example" class="datatables-basic table dataTable no-footer dtr-column" style="width:100%">
<thead>
<tr>
<th><button class="btn btn-sm btn-danger" id="deleteStockItems"><i class="fal fa-trash text-white"></i></button></th>
<th>Datensatz</th>
<th>Datum</th>
<th>Aktionen</th>
</tr>
</thead>
<tbody>
@foreach(App\Models\ProductStock::getStockById($product->id) as $productStockItem)
<tr>
<td><input type="checkbox" name="stock[]" class="form-check-input" value="{{ $productStockItem->id }}"></input></td>
<td>{{ $productStockItem->content }}</td>
<td>{{ date('d-m-y H:s', strtotime($productStockItem->created_at)) }}</td>
<td>
<a href="{{ route('admin.product.manage.delete', $productStockItem->id) }}"><i class="fal fa-trash text-danger"></i></a>    
</td>
</tr>
@endforeach
</tbody>
</table>

</div>
</div>
</div>

<div class="card">
<div class="card-body">
<h6>Datensätze hinzufügen</h6>

<form action="{{ route('admin.product.manage.import', $product->id) }}" method="post">
@csrf

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="content">Datensätze</label>
<div class="input-group input-group-merge">
<textarea type="number" id="content" class="form-control" name="content" placeholder="..." required></textarea>
</div>
</div>
</div>

<div class="col-12">
<div class="mb-1">
<label class="form-label d-block" for="linebyline">Importeinstellungen</label>
<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="settings" id="linebyline" value="linebyline" checked>
<label class="form-check-label" for="linebyline">Zeile für Zeile <small>(1 Zeile = 1 Datensatz)</small></label>
</div>

<div class="form-check form-check-inline d-block mt-1">
<input class="form-check-input" type="radio" name="settings" id="physisch" value="custom">
<label class="form-check-label" for="custom">Eigen <small>(Beispielsweise ";". Logs müssen dann so aussehen: log1;log2;)</small></label>
</div>

<div class="col-12 mt-1">
<div class="mb-1">
<label class="form-label" for="delimiter">Eigenes Trennzeichen</label>
<div class="input-group input-group-merge">
<input type="text" id="delimiter" class="form-control" name="delimiter" placeholder=";">
</div>
</div>
</div>

<button type="submit" class="btn btn-primary waves-effect waves-float waves-light mt-2">Importieren</button>

</form>

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
$(document).ready(function() {
    $('#example').DataTable( {
        "paging":   true,
        "ordering": false,
        "info":     false,
    } );
} );

$(document).on('click', '#deleteStockItems', function() {
    var ids = [];
    if(confirm("Bist du dir sicher, dass du die markierten Elemente aus der Datenbank entfernen willst?")) 
    {
        $(':checkbox:checked').each(function() {
            ids.push($(this).val());
        });

        if(ids.length > 0) 
        {
            $.ajax({
                url:"{{ route('admin.product.manage.destroyItems') }}",
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                method:"POST",
                data: {id:ids},
                success:function(data) 
                {
                    toastr.success("Datensätze erfolgreich aus der Datenbank entfernt.");
                    setTimeout(function() {
                        location.reload();
                    }, 3000);
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
