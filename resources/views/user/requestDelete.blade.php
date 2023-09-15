@extends('base')

@section('title')
{{ __('Löschung beantragen') }}
@endsection

@section('content')
<div class="content-body">
<!-- Content -->


<div class="card p-2">
<h5>{{ __('Löschung deines Benutzerkontos beantragen') }}</h5>
<div class="alert alert-warning">
<div class="alert-body d-flex align-items-center">
<i class="fas fa-exclamation-triangle me-1"></i>
{!! __('Sobald du eine Anfrage gesendet hast, kann diese unter keinen Umständen wiederrufen werden') !!}
</div>
</div>

<form class="form form-vertical" action="{{ route('user.delete.request.save') }}" method="POST">
@csrf
<div class="mb-1 mt-1">
<label class="form-label" for="reason">{{ __('Begründung') }} <i>(Optional)</i></label>
<div class="input-group input-group-merge">
<textarea type="text" id="reason" class="form-control" name="reason" placeholder="..."></textarea>
</div>
<div class="mt-1">
<a href="{{ url()->previous() }}" class="btn btn-secondary"><i class="fa fa-arrow-left"></i></a>
<button class="btn btn-danger" type="submit">{{ __('Absenden') }}</button>
</div>
</form>

</div>

<!-- End Content -->

</div>
</div>
@endsection