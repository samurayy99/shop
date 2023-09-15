@extends('base')

@section('title')
Admin {{ __('Kategorien verwalten') }}
@endsection

@section('subtitle')
{{ __('Kategorien verwalten') }}
@endsection

@section('content')
<div class="content-body">
<!-- Content -->

<div class="card">
<div class="card-body">
<a href="{{ route('admin.category.add') }}" class="btn btn-primary float-end">Neu erstellen</a>
</div>
<div class="table-responsive">
<table class="table">
<thead>
<tr>
<th>Featured</th>
<th>Name</th>
<th>Slug</th>
<th>Aktionen</th>
</tr>
</thead>
<tbody>
@foreach(App\Models\ProductCategory::getAllCategories() as $category)
<tr>
<td>
@if($category->featured) 
<i class="fas fa-star text-warning"></i> 
@else
<i class="fas fa-times text-danger"></i>
@endif
</td>

<td>
{{ $category->name }}
</td>

<td>
{{ $category->slug }}
</td>

<td>
<a href="{{ route('admin.category.edit', $category->id) }}"><i class="fal fa-edit"></i></a>
<a href="{{ route('admin.category.delete', $category->id) }}"><i class="fal fa-trash text-danger"></i></a>
</td>

</tr>
@endforeach
</tbody>
</table>
</div>
</div>

<!-- End Content -->

</div>
</div>
@endsection
