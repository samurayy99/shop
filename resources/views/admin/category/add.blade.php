@extends('base')

@section('title')
Admin {{ __('Kategorien hinzufügen') }}
@endsection

@section('subtitle')
{{ __('Kategorien hinzufügen') }}
@endsection

@section('content')
<div class="content-body">
<!-- Content -->

<div class="card">
<div class="card-body">
<h6>Kategorie erstellen</h6>

<form class="form form-vertical" action="{{ route('admin.category.add.save') }}" method="POST">
@csrf
<div class="row">

<div class="col-12">
<div class="mb-1 mt-1">
<label class="form-label" for="name">Name der Kategorie</label>
<div class="input-group input-group-merge">
<input type="text" id="name" class="form-control" name="name" required>
</div>
</div>
</div>

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="category_name">Slug (Default: Kategoriename)</label>
<div class="input-group input-group-merge">
<input type="text" id="category_name" class="form-control" name="category_slug">
</div>
<small>Wird in der URL angezeigt. Beispiel: Kreditkarten ODER reduzierte kreditkarten. Output: <code>shop.com/kategorie/kreditkarten</code> ODER <code>shop.com/kategorie/reduzierte-kreditkarten</code></small>
</div>
</div>

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="category_featured">Featured Kategorie</label>
<div class="input-group input-group-merge">
<select class="form-select" id="category_featured" name="category_featured" required>
<option disabled>Bitte auswählen...</option>
<option value="0" selected>Nein</option>
<option value="1">Ja</option>
</select>
</div>
<small>Kategorie wird ganz oben und mit auffälliger Farbe und einem <i class="fas fa-star text-warning"></i> angezeigt.</small>
</div>
</div>

</div>
<div class="col-12">
<button type="submit" class="btn btn-primary me-1 waves-effect waves-float waves-light">Erstellen</button>
</div>
</div>
</form>

</div>
</div>

<!-- End Content -->

</div>
</div>
@endsection
