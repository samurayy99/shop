@extends('base')

@section('title')
{{ __('Neuigkeiten') }}
@endsection

@section('subtitle')
{{ __('Neuigkeiten') }}
@endsection

@section('content')
<div class="content-body">
<!-- Content -->



@foreach($news as $newsItem)
<div class="card">
<div class="card-body">
<div class="d-flex justify-content-between align-items-center">
<div class="d-flex flex-row">
<div class="avatar me-1">
<img src="{{ asset('/img/profile_pictures/' . $newsItem->getUser()->profile_picture) }}" alt="Avatar" width="42" height="42">
</div>
<div class="user-info">
<h5 class="mb-0">{{ $newsItem->getUser()->username }} <span class="badge rounded-pill badge-light-danger">{{ $newsItem->getUser()->roles->pluck('name')[0] }}</span></h5>
<small class="text-muted">{{ __('Geschrieben am :Date um :Time', ['Date' => date('d-m-Y', strtotime($newsItem->created_at)), 'Time' => date('h:i A', strtotime($newsItem->created_at))]) }}</small>
</div>
</div>
</div>
<h5 class="mt-2">{!! App\Models\News::getPreparedNewsTitle($newsItem->id) !!}</h5>
<p class="card-text mb-0">
{!! html_entity_decode(App\Models\News::getPreparedNewsBody($newsItem->id)) !!}
</p>
</div>
</div>
@endforeach

<!-- End Content -->

</div>
</div>
@endsection