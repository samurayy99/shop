@extends('base')

@section('tite')
Frage "{{ $faq->question }}" bearbeiten
@endsection

@section('subtitle')
Frage "{{ $faq->question }}" bearbeiten
@endsection

@section('content')
<div class="content-body">
<!-- Content -->

<div class="card">
<div class="card-body">
<form class="form form-vertical" action="{{ route('admin.faq.update', $faq->id) }}" method="POST">
@csrf
<div class="row">

<div class="col-lg-12">
<label class="form-label" for="question">Frage</label>
<div class="input-group input-group-merge">
<span class="input-group-text"><i class="fal fa-question"></i></span>
<input type="text" id="question" class="form-control" name="question" value="{{ $faq->question }}" required>
</div>
</div>

<div class="col-lg-12 mt-1">
<label class="form-label" for="password-icon">Antwort</label>
<div class="input-group input-group-merge">
<textarea class="form-control" name="answer">{!! $faq->answer !!}</textarea>
</div>
</div>

</div>

<a href="{{ url()->previous() }}" class="btn btn-secondary mt-2" type="submit"><i class="fa fa-arrow-left"></i> Zurück</a>
<button class="btn btn-primary mt-2" type="submit">Speichern</button>

</form>
</div>
</div>


<!-- End Content -->
</div>
@endsection