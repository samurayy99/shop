@extends('base')

@section('title')
Admin {{ __('Häufig gestellte Fragen') }}
@endsection

@section('subtitle')
{{ __('Häufig gestellte Fragen verwalten') }}
@endsection

@section('content')
<div class="content-body">
<!-- Content -->

<div class="card">
<div class="card-body">
<form class="form form-vertical" action="{{ route('admin.faq.create') }}" method="POST">
@csrf
<div class="row">

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="question">Frage</label>
<div class="input-group input-group-merge">
<span class="input-group-text"><i class="fal fa-question"></i></span>
<input type="text" id="question" class="form-control" name="question" placeholder="..." required>
</div>
</div>
</div>


<div class="col-12">
<div class="mb-1">
<label class="form-label" for="password-icon">Antwort</label>
<div class="input-group input-group-merge">
<textarea class="form-control" name="answer"></textarea>
</div>
</div>
</div>
<div class="col-12 mt-1">
<button type="submit" class="btn btn-primary me-1 waves-effect waves-float waves-light">Absenden</button>
</div>
</div>
</form>
</div>
</div>

@foreach(App\Models\Faq::getAll() as $faq)
<div class="card">
<div class="card-body">
<div class="d-flex justify-content-between align-items-center">
<div class="d-flex flex-row">
<div class="user-info">
<h5 class="mb-0"><i class="fal fa-question text-warning mx-1"></i> {{ $faq->question }}
<a href="{{ route('admin.faq.edit', $faq->id) }}" class="badge rounded-pill badge-light-success">Bearbeiten</a>
<a href="{{ route('admin.faq.delete', $faq->id) }}" onclick="return confirm('Bist du dir sicher, dass du diese Frage löschen willst?')" class="badge rounded-pill badge-light-danger">Löschen</a>
</h5>
<small class="text-muted">{{ __('Geschrieben am :Date um :Time', ['Date' => date('d-m-Y', strtotime($faq->created_at)), 'Time' => date('h:i A', strtotime($faq->created_at))]) }}</small>
</div>
</div>
</div>
</div>
</div>
@endforeach


<!-- End Content -->

</div>
</div>
@endsection
