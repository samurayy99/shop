@extends('base')

@section('title')
Admin {{ __('Benutzer') }}
@endsection

@section('css') 
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/tables/datatable/dataTables.bootstrap5.min.css') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/tables/datatable/responsive.bootstrap5.min.css') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/tables/datatable/buttons.bootstrap5.min.css') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/tables/datatable/rowGroup.bootstrap5.min.css') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('/app-assets/vendors/css/pickers/flatpickr/flatpickr.min.css') }}">
@endsection

@section('subtitle')
{{ __('Benutzerkonten') }}
@endsection

@section('content')
<div class="content-body">
<!-- Content -->

<div class="card">
<div class="card-body">
<h6><i class="fal fa-user"></i>  Alle Benutzer ({{ App\Models\User::countUsers() }})</h6>
<table id="user" class="datatables-basic table dataTable no-footer dtr-column" style="width:100%">
<thead>
<tr>
<th>ID</th>
<th>Benutzername</th>
<th>Jabber</th>
<th>Guthaben</th>
<th>Newsletter</th>
<th>Gebannt</th>
<th>Aktionen</th>
</tr>
</thead>
<tbody>
@foreach(App\Models\User::getAllUsers() as $user)
<tr>
<td>{{ $user->id }}</td>
<td>{{ $user->username }}</td>
<td>{{ $user->jabber }}</td>
<td>{{ $user->getUserBalance($user->id) }} EUR</td>
<td>
{{ $user->newsletter ? 'Ja' : 'Nein' }}
</td>
<td>
{{ $user->active ? 'Nein' : 'Ja' }}
</td>
<td>
<a href="{{ route('admin.user.edit', $user->id) }}" class="primary-color"><i class="fal fa-edit"></i></a>    
<a href="{{ route('admin.user.delete', $user->id) }}" onclick="return confirm('Bist du dir sicher, dass du den Benutzer löschen willst? Jegliche Zusammenhänge werden aus der Datenbank entfernt')" class="text-danger"><i class="fas fa-trash"></i></a>  
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
<h6><i class="fal fa-user"></i>  Anfragen zur Löschung des Accounts</h6>
<table id="user" class="datatables-basic table dataTable no-footer dtr-column" style="width:100%">
<thead>
<tr>
<th>ID</th>
<th>Benutzername</th>
<th>Grund</th>
<th>Aktionen</th>
</tr>
</thead>
<tbody>
@foreach(App\Models\DeleteRequest::all() as $deleteRequest)
<tr>
<td>{{ $deleteRequest->id }}</td>
<td>{{ App\Models\User::getUsernameById($deleteRequest->user) }}</td>
<td>{{ \Illuminate\Support\Str::limit($deleteRequest->delete_reason, 30, $end='...') }}</td>
<td>
<a href="{{ route('admin.user.delete', ['id' => $deleteRequest->user]) }}" class="btn btn-danger btn-sm">Benutzer löschen</a>
<a href="{{ route('admin.user.decline', ['id' => $deleteRequest->id]) }}" class="btn btn-success btn-sm">Anfrage ablehnen</a>
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
