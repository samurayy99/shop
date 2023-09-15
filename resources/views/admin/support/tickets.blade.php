@extends('base')

@section('title')
Ticketverwaltung
@endsection

@section('subtitle')
Ticketverwaltung
@endsection

@section('css') 
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/tables/datatable/dataTables.bootstrap5.min.css') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/tables/datatable/responsive.bootstrap5.min.css') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/tables/datatable/buttons.bootstrap5.min.css') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/tables/datatable/rowGroup.bootstrap5.min.css') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/pickers/flatpickr/flatpickr.min.css') }}">
@endsection

@section('content')
<div class="content-body">
<!-- Content -->

<div class="card">
<div class="card-body">
<h6><i class="fal fa-exclamation-triangle"></i> Offene Tickets ({{ App\Models\Ticket::countOpenTickets() }})</h6>

<table id="open" class="datatables-basic table dataTable no-footer dtr-column" style="width:100%">
<thead>
<tr>
<th>ID</th>
<th>Betreff</th>
<th>Department</th>
<th>Bestellnummer</th>
<th>Benutzer</th>
<th>Erstellt</th>
<th>Aktionen</th>
</tr>
</thead>
<tbody>
@foreach(App\Models\Ticket::getOpenTickets() as $ticket)
<tr>
<td>{{ $ticket->id }}</td>
<td><a href="{{ route('admin.ticket.show', $ticket->id) }}" class="primary-color">@if($ticket->ticket_title == null) {{ __('Kein Betreff angegeben') }} @else {{ $ticket->ticket_title }} @endif</a></td>
<td><span class="badge bg-warning">{{ $ticket->ticket_department }}</span></td>
<td>{{ $ticket->order_id != null ? "#{$ticket->order_id}" : '-' }}</td>
<td><a href="{{ route('admin.user.edit', $ticket->user_id) }}">{{ App\Models\User::getUserById($ticket->user_id)->username }}</a></td>
<td>{{ date('d-m-y H:s', strtotime($ticket->created_at)) }}</td>
<td>
<a href="{{ route('admin.ticket.show', $ticket->id) }}" class="primary-color"><i class="fal fa-eye"></i></a>
<a href="{{ route('admin.ticket.close_open', $ticket->id) }}" class="text-warning"><i class="fal fa-lock-open"></i></i></a>
<a href="#"><i class="fal fa-trash text-danger"></i></a>    
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
<h6><i class="fal fa-archive"></i> Archiv ({{ App\Models\Ticket::countExceptOpen() }})</h6>

<table id="archive" class="datatables-basic table dataTable no-footer dtr-column" style="width:100%">
<thead>
<tr>
<th>ID</th>
<th>Betreff</th>
<th>Department</th>
<th>Bestellnummer</th>
<th>Benutzer</th>
<th>Erstellt</th>
<th>Aktionen</th>
</tr>
</thead>
<tbody>
@foreach(App\Models\Ticket::getExceptOpen() as $ticket)
<tr>
<td>{{ $ticket->id }}</td>
<td><a href="{{ route('admin.ticket.show', $ticket->id) }}" class="primary-color">@if($ticket->ticket_title == null) {{ __('Kein Betreff angegeben') }} @else {{ $ticket->ticket_title }} @endif</a></td>
<td><span class="badge bg-warning">{{ $ticket->ticket_department }}</span></td>
<td>{{ $ticket->order_id != null ? "#{$ticket->order_id}" : '-' }}</td>
<td><a href="{{ route('admin.user.edit', $ticket->user_id) }}">{{ App\Models\User::getUserById($ticket->user_id)->username }}</a></td>
<td>{{ date('d-m-y H:s', strtotime($ticket->created_at)) }}</td>
<td>
<a href="{{ route('admin.ticket.show', $ticket->id) }}" class="primary-color"><i class="fal fa-eye"></i></a>
@if($ticket->ticket_status == 'beantwortet')
<a href="{{ route('admin.ticket.close_open', $ticket->id) }}" class="text-warning"><i class="fal fa-lock-open"></i></i></a>
@else
<a href="{{ route('admin.ticket.close_open', $ticket->id) }}" class="text-warning"><i class="fal fa-lock"></i></i></a>
@endif
<a href="#"><i class="fal fa-trash text-danger"></i></a>    
</td>
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

<script>
$(document).ready(function() {
    $('#open').DataTable( {
        "paging":   true,
        "ordering": false,
        "info":     false,
    } );

    $('#archive').DataTable( {
        "paging":   true,
        "ordering": false,
        "info":     false,
    } );
} );
</script>
@endsection
