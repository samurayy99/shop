@extends('base')

@section('title')
Admin {{ __('Produkt bearbeiten') }}
@endsection

@section('subtitle')
Produkt "{{ $product->name }}" bearbeiten
@endsection

@section('content')
<div class="content-body">
<!-- Content -->

<div class="card">
<div class="card-body">
<h6>{{ __('Produkt bearbeiten') }}</h6>

<form class="form form-vertical" action="{{ route('admin.product.edit.save', $product->id) }}" method="POST">
@csrf
<div class="row">

<div class="col-12">
<div class="mb-1 mt-1">
<label class="form-label" for="name">Name des Produkts</label>
<div class="input-group input-group-merge">
<input type="text" id="name" class="form-control" name="name" required maxlength="30" value="{{ $product->name }}">
</div>
</div>
</div>

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="description_short">Kurzbeschreibung (Optional, maximal 50 Zeichen)</label>
<div class="input-group input-group-merge">
<input type="text" id="description_short" class="form-control" name="description_short" maxlength="50" value="{{ $product->description_short }}">
</div>
</div>
</div>

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="description">Vollständige Beschreibung (Optional)</label>
<div class="input-group input-group-merge">
<textarea id="editor" class="form-control" name="description">{{ $product->description }}</textarea>
</div>
</div>
</div>

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="category">Übergeordnete Kategorie</label>
<div class="input-group input-group-merge">
<select class="form-select" id="category" name="category" required>
<option disabled>Bitte auswählen...</option>
<option value="{{ $product->category_id }}" selected>{{ App\Models\ProductCategory::getCategoryById($product->category_id)->name }}</option>
@foreach(App\Models\ProductCategory::getAllCategories() as $category)
<option value="{{ $category->id }}">{{ $category->name }}</option>
@endforeach
</select>
</div>
</div>
</div>

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="price">Preis in EURO</label>
<div class="input-group input-group-merge">
<input type="text" id="price" class="form-control" name="price" placeholder="5 (entspricht 5 EUR)" required value="{{ $product->price_euro }}">
</div>
</div>
</div>

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="price_old">Alter Preis in EURO (Optional)</label>
<div class="input-group input-group-merge">
<input type="text" id="price_old" class="form-control" name="price_old" placeholder="7 (entspricht 7 EUR)" value="{{ $product->old_price_euro }}">
</div>
<small>Der echte Preis wird als reduziert angezeigt.</small>
</div>
</div>

<div class="col-12">
<div class="mb-1">
<label class="form-label d-block" for="virtuell">Produkttyp</label>
<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="product_type" id="virtuell" value="virtuell" @if($product->product_type == 'virtuell') checked @endif>
<label class="form-check-label" for="virtuell">Virtuelles Produkt <small>(Ware wird aus Bestand entnommen)</small></label>
</div>

<div class="form-check form-check-inline d-block mt-1">
<input class="form-check-input" type="radio" name="product_type" id="physisch" value="physisch" @if($product->product_type == 'physisch') checked @endif>
<label class="form-check-label" for="physisch">Physisches Produkt <small>(Ware muss versendet werden. Drop benötigt)</small></label>
</div>

<div class="form-check form-check-inline d-block mt-1">
<input class="form-check-input" type="radio" name="product_type" id="unlimited" value="unlimited" @if($product->product_type == 'unlimited') checked @endif>
<label class="form-check-label" for="unlimited">Unbegrenztes Produkt <small>(Käufer kriegt eine Meldung mit bspw. Downloadlink/Nachricht)</small></label>
</div>

</div>
</div>

<div class="col-12" id="weight-block" @if($product->product_type != "physisch") style="display: none;" @endif>
<div class="mb-1">
<label class="form-label" for="weight_text">Mengenangabe in</label>
<div class="input-group input-group-merge">
<input type="text" id="weight_text" class="form-control" name="weight_text" value="{{ $product->weight_text }}">
</div>
<small>Kann alles sein. Gramm, Liter, Meter.</small>
</div>
</div>

<div class="col-12" id="content-block" @if($product->product_type != "unlimited") style="display: none;" @endif>
<div class="mb-1">
<label class="form-label" for="content">Nachricht an Benutzer</label>
<div class="input-group input-group-merge">
<textarea id="editor" class="form-control" name="content">{{ $product->content }}</textarea>
</div>
<small class="d-block">Die Nachricht wird dem Käufer nach dem Kauf angezeigt. Für unbegrenzte Waren geeignet</small>
</div>
</div>


<div class="col-12 mt-2">
<div class="mb-1">
<div class="form-check form-check-inline">
<input class="form-check-input" type="checkbox" id="dropable" name="dropable" @if($product->dropable) checked @endif>
<label class="form-check-label" for="dropable">Drop wird benötigt</label>
</div>
<small class="d-block">Zwingt den Käufer dazu, einen Drop/Lieferadresse anzugeben. Für physische Waren geeignet</small>
</div>
</div>

<div class="col-12">
<div class="mb-1">
<label class="form-label" for="background_url">Hintergrundbild URL (Optional)</label>
<div class="input-group input-group-merge">
<input type="text" id="background_url" class="form-control" name="background_url" placeholder="..." value="{{ $product->background_url }}">
</div>
<small>URL zum Bild. Wird als Hintergrund im Produkt angezeigt.</small>
</div>
</div>

</div>
<div class="col-12">
<button type="submit" class="btn btn-primary me-1 waves-effect waves-float waves-light">Speichern</button>
<a href="{{ route('admin.products') }}" class="btn btn-secondary me-1 waves-effect waves-float waves-light">Abbrechen</a>
</div>
</div>
</form>

</div>
</div>

<!-- End Content -->

</div>
</div>
@endsection

@section('js')
<script>
var editor = new FroalaEditor('#editor')
</script>

<script>
$(document).ready(function () {
    $('#virtuell').click(function () {
        if ($(this).is(':checked')) {
            $('#dropable').prop('disabled', false);
            $('#content-block').hide();
            $("#content-block").prop('required',false);
            $('#weight-block').hide();
            $("#weight-block").prop('required',false);
            $('#dropable').prop('checked', false);
        }
    });

    $('#physisch').click(function () {
        if ($(this).is(':checked')) {
            $('#dropable').prop('checked', true);
            $('#dropable').prop('disabled', true);
            $('#content-block').hide();
            $("#content-block").prop('required',false);
            $('#weight-block').show();
            $("#weight-block").prop('required',true);
        }
    });

    $('#unlimited').click(function () {
        if ($(this).is(':checked')) {
            $('#dropable').prop('disabled', false);
            $('#content-block').show();
            $("#content-block").prop('required',true);
            $('#weight-block').hide();
            $("#weight-block").prop('required',false);
            $('#dropable').prop('checked', false);
        }
    });
});
</script>

@endsection
