@extends('base')

@section('title')
Backup Verwaltung
@endsection

@section('subtitle')
Backup Verwaltung
@endsection

@section('content')
<div class="content-body">
<!-- Content -->

<div class="row">

<div class="col-2">

<div class="card p-1">
<button id="createBackup" class="btn btn-primary">Backup erstellen</button>
</div>

</div>

<div class="col-10">

<h6 class="mb-1"><i class="fal fa-file-search"></i> Alle Backups</h6>

@foreach($backups as $backup)

<div class="card card-dark mb-1">
<div class="card-body">
<small class="primary-color">Datei: </small>
<a class="fw-bold primary-color" href="{{ route('admin.backup.download', ['fileName' => $backup['path']]) }}">{{ $backup['basename'] }}</a>
<small><b>Erstellt am:</b> {{ date('d-m-y H:s', $backup['timestamp']) }}</small>
<small class="float-end">
<a href="{{ route('admin.backup.download', ['fileName' => $backup['path']]) }}" class="text-primary mx-1"><i class="fas fa-download"></i></a>
<a href="{{ route('admin.backup.delete', ['fileName' => $backup['path']]) }}" class="text-danger"><i class="fas fa-trash-alt"></i></a>
</small>
</div>
</div>

@endforeach


</div>

</div>


<!-- End Content -->

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
    $('#backups').DataTable( {
        "paging":   true,
        "ordering": true,
        "info":     false,
        "order": [0, 'DESC'],
    } );
} );
</script>

<script>
$( "#createBackup" ).click(function() {
    var caller = $( "#createBackup" );
    caller.prop("disabled",true);
    caller.html("Erstelle Backup...");

    $.ajax({

    url : '{{ route('admin.create.backup') }}',
    type : 'GET',
    success : function(data) {              
        location.reload();
    },
    error : function(request,error)
    {
        location.reload();
    }
    });

});
</script>
@endsection

