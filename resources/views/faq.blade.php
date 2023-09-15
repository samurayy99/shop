@extends('base')

@section('title')
{{ __('Häufig gestellte Fragen') }}
@endsection

@section('subtitle')
{{ __('Häufig gestellte Fragen') }}
@endsection

@section('content')
<div class="content-body">
<!-- Content -->

@foreach(App\Models\Faq::getAll() as $faq)

<div class="card">
<div class="card-header">
<p class="m-0 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapse{{ $faq->id }}" aria-expanded="false" aria-controls="collapseExample">
<i class="fal fa-question text-warning mx-1"></i> {{ $faq->question }}
</p>
</div>



<div class="collapse" id="collapse{{ $faq->id }}">
<div class="card-body">
<i class="fal fa-user text-success mx-1"></i> {!! $faq->answer !!}
</div>
</div>
</div>

@endforeach


<!-- End Content -->

</div>
@endsection