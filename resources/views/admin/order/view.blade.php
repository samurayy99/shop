@extends('base')

@section('title')
Admin Bestellungen
@endsection

@section('css') 
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/tables/datatable/dataTables.bootstrap5.min.css') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/tables/datatable/responsive.bootstrap5.min.css') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/tables/datatable/buttons.bootstrap5.min.css') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/tables/datatable/rowGroup.bootstrap5.min.css') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/pickers/flatpickr/flatpickr.min.css') }}">
@endsection

@section('subtitle')
Bestellungen
@endsection

@section('content')
<div class="content-body">
<!-- Content -->

<div class="card">
<div class="card-body">
<h6><i class="fal fa-shopping-cart"></i>  Alle Bestellungen ({{ App\Models\UserOrder::countOrders() }})</h6>
<table id="user" class="datatables-basic table dataTable no-footer dtr-column" style="width:100%">
<thead>
<tr>
<th>ID</th>
<th>Produkt</th>
<th>Anzahl</th>
<th>Preis</th>
<th>Status</th>
<th>Benutzer</th>
<th>Aktionen</th>
</tr>
</thead>
<tbody>
@foreach(App\Models\UserOrder::getAllOrders() as $order)
<tr>
<td>{{ $order->id }}</td>
<td>{{ $order->product_name }}</td>
<td>{{ $order->order_amount }} {{ $order->weight != null ? $order->weight_text : 'Stück' }}</td>
<td>{{ $order->order_price }} EUR</td>
<td>
@if($order->order_status == 'pending')
<span class="badge bg-warning">Pending</span>
@elseif($order->order_status == 'completed')
<span class="badge bg-success">Abgeschlossen</span>
@elseif($order->order_status == 'cancelled')
<span class="badge bg-danger">Abgebrochen</span>
@endif
</td>
<td>
<a class="primary-color" href="{{ route('admin.user.edit', $order->user_id) }}">{{ App\Models\User::getUsernameById($order->user_id) }}</a>
</td>
<td>
<a href="{{ route('admin.order.show', $order->id) }}" class="primary-color"><i class="fal fa-eye"></i></a>    
</td>
</tr>
@endforeach
</tbody>
</table>
</div>
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
$(document).ready(function() {
    $('#user').DataTable( {
        "paging":   true,
        "ordering": true,
        "info":     false,
        "order": [0, 'DESC'],
    } );
} );
</script>
@endsection
