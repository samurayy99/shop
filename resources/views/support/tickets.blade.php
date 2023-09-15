@extends('base')

@section('title')
{{ __('Hilfe') }}
@endsection

@section('css')
<link href="{{ asset('/css/shop.css') }}" rel="stylesheet" type="text/css" />
@endsection

@section('subtitle')
{{ __('Hilfe') }}
@endsection

@section('content')
<div class="content-body">
<!-- Content -->


<div class="sidebar-detached sidebar-left ">
<div class="sidebar">

<!-- Ecommerce Sidebar Starts -->
<div class="sidebar-shop">
<div class="row">
<div class="col-sm-12">
<h6 class="d-none d-lg-block">{{ __('Support Center') }}</h6>
</div>
</div>
<div class="card">
<div class="card-body">
<!-- Price Filter starts -->
<div class="multi-range-price">
<h6 class="mt-0">{{ __('Kategorien') }}</h6>

<a href="{{ route('support.tickets.open') }}" class="btn btn-primary w-100 btn-sm btn-block waves-effect waves-float waves-light mb-05">
@if(isset($open_tickets)) <i class="fal fa-chevron-double-right"></i> @endif 
{{ __('Offen') }}</a>
<a href="{{ route('support.tickets.answered') }}" class="btn btn-warning w-100 btn-sm btn-block waves-effect waves-float waves-light mb-05">
@if(isset($answered_tickets)) <i class="fal fa-chevron-double-right"></i> @endif 
{{ __('Beantwortet') }}</a>
</a>
<a href="{{ route('support.tickets.closed') }}" class="btn btn-secondary w-100 btn-sm btn-block waves-effect waves-float waves-light mb-05">
@if(isset($closed_tickets)) <i class="fal fa-chevron-double-right"></i> @endif 
{{ __('Geschlossen') }}</a>    
</a>


<a href="{{ route('support.ticket.create') }}" class="btn btn-info w-100 btn-sm btn-block waves-effect waves-float waves-light mt-5">
<i class="fal fa-plus"></i>
{{ __('Neues Ticket') }}</a>    
</a>

</div>
<!-- Price Filter ends -->
</div>
</div>
</div>
<!-- Ecommerce Sidebar Ends -->
</div>
</div>


<div class="row match-height">
@if(isset($closed_tickets))
<h6 class="d-none d-lg-block">
{{ __('Geschlossene Tickets') }}
</h6>

@foreach($closed_tickets as $ticket)
<div class="col-12">
<div class="card mb-1">
<div class="card-body">
<small class="primary-color">#{{ $ticket->id }}</small>
<a class="fw-bold primary-color" href="{{ route('support.ticket.show', $ticket->id) }}">
<i class="fal fa-lock"></i>
@if($ticket->ticket_title == null)
{{ __('Kein Betreff angegeben') }}
@else 
{{ $ticket->ticket_title }}
@endif
</a>
<small class="float-end">20-01-2022 14:00</small>
<br>
<small><b>{{ __('Kategorie') }}</b>: <span class="text-warning">{{ __($ticket->ticket_department) }}</span> </small>
<small class="float-end"><b>{{ __('Nachrichten') }}</b>: {{ App\Models\TicketMessage::countMessages($ticket->id) }}</small>
</div>
</div>
</div>
@endforeach

@elseif(isset($answered_tickets))
<h6 class="d-none d-lg-block">
{{ __('Beantwortete Tickets') }}
</h6>

@foreach($answered_tickets as $ticket)
<div class="col-12">
<div class="card mb-1">
<div class="card-body">
<small class="primary-color">#{{ $ticket->id }}</small>
<a class="fw-bold primary-color" href="{{ route('support.ticket.show', $ticket->id) }}">
@if($ticket->ticket_title == null)
{{ __('Kein Betreff angegeben') }}
@else 
{{ $ticket->ticket_title }}
@endif
</a>
<small class="float-end">20-01-2022 14:00</small>
<br>
<small><b>{{ __('Kategorie') }}</b>: <span class="text-warning">{{ __($ticket->ticket_department) }}</span> </small>
<small class="float-end"><b>{{ __('Nachrichten') }}</b>: {{ App\Models\TicketMessage::countMessages($ticket->id) }}</small>
</div>
</div>
</div>
@endforeach

@elseif(isset($open_tickets))
<h6 class="d-none d-lg-block">
{{ __('Offene Tickets') }}
</h6>

@foreach($open_tickets as $ticket)
<div class="col-12">
<div class="card mb-1">
<div class="card-body">
<small class="primary-color">#{{ $ticket->id }}</small>
<a class="fw-bold primary-color" href="{{ route('support.ticket.show', $ticket->id) }}">
@if($ticket->ticket_title == null)
{{ __('Kein Betreff angegeben') }}
@else 
{{ $ticket->ticket_title }}
@endif
</a>
<small class="float-end">20-01-2022 14:00</small>
<br>
<small><b>{{ __('Kategorie') }}</b>: <span class="text-warning">{{ __($ticket->ticket_department) }}</span> </small>
<small class="float-end"><b>{{ __('Nachrichten') }}</b>: {{ App\Models\TicketMessage::countMessages($ticket->id) }}</small>
</div>
</div>
</div>
@endforeach

@endif



</div>

<!-- End Content -->

</div>
</div>
@endsection
