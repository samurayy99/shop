@extends('base')

@section('title')
Admin Ticket #{{ $ticket->id }}
@endsection

@section('subtitle')
Admin Ticket #{{ $ticket->id }} <small>@if($ticket->ticket_title == null) {{ __('Kein Betreff angegeben') }} @else {{ $ticket->ticket_title }} @endif</small>
@endsection

@section('content')
<div class="content-body">
<!-- Content -->

@if($order != null)
<div class="card">
<div class="card-body">
<h6>Bestellinformationen:</h6>

<b>Produkt:</b> <p class="d-inline">{{ $order->product_name }}</p> 
<br>
<b>Anzahl:</b> <p class="d-inline">{{ $order->order_amount }} {{ $order->weight != null ? $order->weight_text : 'Stück' }}</p>
<br>
<b>Preis:</b> <p class="d-inline">{{ $order->order_price }} EUR</p>
<br>
<b>Bestellung:</b>
<pre class="p-1 acp">{!! $order->order_content !!}</pre>

@if($order->order_drop != null)
<b>Lieferadresse:</b>
<pre class="p-1"> {!! nl2br($order->order_drop) !!} </pre>
@endif
</div>
</div>
@endif

@if($ticket->ticket_status == 'geschlossen')
<div class="content-wrapper container-xxl p-0">
<div class="alert alert-warning mt-1 alert-validation-msg" role="alert">
<div class="alert-body d-flex align-items-center">
<i class="fas fa-exclamation-triangle me-1"></i>
<span>{{ __('Dieses Ticket wurde geschlossen. Es ist nicht möglich weitere Antworten zu senden!') }}</span>
</div>
</div>
</div>
@endif

<a href="#" class="btn btn-sm btn-warning mb-1" id="addReply"><i class="fal fa-plus"></i> {{ __('Antwort hinzufügen') }}</a>

@if($ticket->ticket_status == 'offen' || $ticket->ticket_status == 'beantwortet')
<a href="{{ route('admin.ticket.close_open', $ticket->id) }}" class="btn btn-sm btn-danger mb-1 float-end" id="addReply"><i class="fal fa-plus"></i> {{ __('Ticket schließen') }}</a>
@elseif($ticket->ticket_status == 'geschlossen')
<a href="{{ route('admin.ticket.close_open', $ticket->id) }}" class="btn btn-sm btn-success mb-1 float-end" id="addReply"><i class="fal fa-plus"></i> {{ __('Ticket öffnen') }}</a>
@endif

<div class="card" id="replyBlock">
<div class="card-body">
<form action="{{ route('admin.ticket.message.add', $ticket->id) }}" method="POST">
@csrf

<div class="form-group">
<label class="form-label" for="message">{{ __('Deine Nachricht') }}</label>
<textarea type="text" class="form-control" name="message" rows="5" required placeholder="..."></textarea>
</div>

<button type="submit" class="btn btn-primary me-1 waves-effect waves-float waves-light mt-2">{{ __('Absenden') }}</button>

</form>
</div>
</div>

@foreach($messages as $message)


<div class="card">
<div class="card-body p-0 overflow-hidden pe-1">

<div class="row same-height">

<div class="col-3 border-end text-break">
<h6 class="pt-1 ps-1">
{{ App\Models\User::getUsernameById($message->user_id) }} 
@if($message->user_id != Auth::user()->id)  
<a href="{{ route('admin.user.edit', $message->user_id) }}" class="primary-color"><i class="fal fa-edit"></i></a>
@endif
</h6>
<p class="ps-1 fst-italic opacity-75" style="color: {{ App\Models\User::getGroupColorById($message->user_id) }};">{{ App\Models\User::getGroupById($message->user_id) }}</p>
</div>
<div class="col text-break p-0">
<p class="ps-1 pt-1 pb-1 border-bottom w-100">{{ __('Geschrieben am :Date um :Time', ['Date' => date('d-m-Y', strtotime($message->created_at)), 'Time' => date('H:i', strtotime($message->created_at))]) }}</p>

<p class="ps-1">
{!! App\Models\TicketMessage::getPreparedTicketMessage($message->id) !!}
</p>

</div>

</div>
</div>
</div>
@endforeach

@if($ticket->ticket_department == 'Replace')
<div class="card">
<div class="card-body">
<h6>Replacement</h6>
<form action="{{ route('admin.ticket.update_balance', [$ticket->user_id, $ticket->id]) }}" method="POST">
@csrf
<div class="form-group">
<label class="form-label" for="amount">Betrag</label>
<input type="text" class="form-control" name="amount" rows="5" required value="{{ $order->order_price }}"></input>
<small>Betrag in Euro dem der Benutzer gutgeschrieben werden soll</small>
</div>

<button type="submit" class="btn btn-primary me-1 waves-effect waves-float waves-light mt-2">{{ __('Aktualisieren') }}</button>

</form>
</div>
</div>
@endif

<!-- End Content -->

</div>
</div>
@endsection

@section('js')
<script>
$( document ).ready(function() {
    $('#replyBlock').hide();
});
</script>
<script>
$('#addReply').click(function() {
    if($('#replyBlock').is(":hidden")) {
        $('#replyBlock').hide();
        $('#replyBlock').fadeIn(200);
    } else {
        $('#replyBlock').hide();
    }
});
</script>
@endsection