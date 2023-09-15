@extends('base')

@section('title')
Admin {{ __('Dashboard') }}
@endsection

@section('subtitle')
{{ __('Neuigkeiten erstellen') }}
@endsection

@section('content')
<div class="content-body">
<!-- Content -->

<div class="card">
<div class="card-body">
<form class="form form-vertical" action="{{ route('admin.news.save') }}" method="POST">
@csrf
<div class="row">

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="news_title">Überschrift</label>
<div class="input-group input-group-merge">
<span class="input-group-text"><i class="fal fa-book-reader"></i></span>
<input type="text" id="news_title" class="form-control" name="news_title" placeholder="..." required>
</div>
</div>
</div>


<div class="col-12">
<div class="mb-1">
<label class="form-label" for="password-icon">Nachricht</label>
<div class="input-group input-group-merge">
<textarea id="editor" class="form-control" name="news_content" required>...</textarea>
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


@foreach($news as $newsItem)
<div class="card">
<div class="card-body">
<div class="d-flex justify-content-between align-items-center">
<div class="d-flex flex-row">
<div class="avatar me-1">
<img src="{{ asset('/img/profile_pictures/' . $newsItem->getUser()->profile_picture) }}" alt="Avatar" width="42" height="42">
</div>
<div class="user-info">
<h5 class="mb-0">{{ $newsItem->title }} <span class="badge rounded-pill badge-light-danger">{{ $newsItem->getUser()->username }}</span> 
<a href="#" class="badge rounded-pill badge-light-success" data-bs-toggle="modal" data-bs-target="#editFormItem{{ $newsItem->id }}">Bearbeiten</a>


<div class="modal fade text-start" id="editFormItem{{ $newsItem->id }}" tabindex="-1" aria-labelledby="myModalLabel33" style="display: none;" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered modal-lg">
<div class="modal-content">
<div class="modal-header">
<h4 class="modal-title" id="myModalLabel33">Neuigkeiten bearbeiten</h4>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<form action="{{ route('admin.news.update', $newsItem->id) }}" method="POST">
@csrf
<div class="modal-body">

<label class="form-label" for="news_title">Überschrift</label>
<div class="input-group input-group-merge">
<span class="input-group-text"><i class="fal fa-book-reader"></i></span>
<input type="text" id="news_title" class="form-control" name="news_title" value="{{ $newsItem->title }}" required>
</div>

<div class="mt-1">
<label class="form-label" for="password-icon">Nachricht</label>
<div class="input-group input-group-merge">
<textarea id="editor" class="form-control" name="news_content" required>{{ $newsItem->body }}</textarea>
</div>
</div>

</div>
<div class="modal-footer">
<button type="submit" class="btn btn-primary waves-effect waves-float waves-light" data-bs-dismiss="modal">Übernehmen</button>
</div>
</form>
</div>
</div>
</div>


<a href="{{ route('admin.news.delete', $newsItem->id) }}" class="badge rounded-pill badge-light-warning">Löschen</a> </h5>
<small class="text-muted">{{ __('Geschrieben am :Date um :Time', ['Date' => date('d-m-Y', strtotime($newsItem->created_at)), 'Time' => date('h:i A', strtotime($newsItem->created_at))]) }}</small>
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

@section('js')
<script>
$(function() {
    $('#editor').froalaEditor({
        toolbarSticky: false,
        language: 'de',
        theme: 'gray',
        toolbarButtons: ['undo', 'redo' , '|', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'align', '|', 'fontFamily', 'fontSize', 'color', '|', 'emoticons', '|', 'insertLink', 'insertImage', '|', 'outdent', 'indent', 'clearFormatting', 'insertTable', 'html']
    });
});
</script>
@endsection