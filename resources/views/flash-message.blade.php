@if ($message = Session::get('success'))
<div class="content-wrapper container-xxl p-0">
<div class="alert alert-success mt-1 alert-validation-msg" role="alert">
<div class="alert-body d-flex align-items-center">
<i class="fas fa-check-circle me-1"></i>
<span>{!! $message !!}</span>
</div>
</div>
</div>
@endif

@if ($message = Session::get('error'))
<div class="content-wrapper container-xxl p-0">
<div class="alert alert-danger mt-1 alert-validation-msg" role="alert">
<div class="alert-body d-flex align-items-center">
<i class="fas fa-exclamation-triangle me-1"></i>
<span>{!! $message !!}</span>
</div>
</div>
</div>
@endif

@if ($message = Session::get('warning'))
<div class="content-wrapper container-xxl p-0">
<div class="alert alert-warning mt-1 alert-validation-msg" role="alert">
<div class="alert-body d-flex align-items-center">
<i class="fas fa-exclamation-triangle me-1"></i>
<span>{!! $message !!}</span>
</div>
</div>
</div>
@endif

@if ($message = Session::get('info'))
<div class="content-wrapper container-xxl p-0">
<div class="alert alert-info alert-block">
<button type="button" class="close" data-dismiss="alert">×</button>    
<strong>{{ $message }}</strong>
</div>
</div>
@endif

@if ($errors->any())
@foreach($errors->all() as $error)
<div class="content-wrapper container-xxl p-0">
<div class="alert alert-danger mt-1 alert-validation-msg" role="alert">
<div class="alert-body d-flex align-items-center">
<i class="fas fa-exclamation-triangle me-1"></i>
<span>{!! $error !!}</span>
</div>
</div>
</div>
@endforeach
@endif