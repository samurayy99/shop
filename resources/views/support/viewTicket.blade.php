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

    @if($ticket->ticket_status == 'geschlossen')
    <div class="content-wrapper container-xxl p-0">
        <div class="alert alert-warning mt-1 alert-validation-msg" role="alert">
            <div class="alert-body d-flex align-items-center">
                <i class="fas fa-exclamation-triangle me-1"></i>
                <span>{{ __('Dieses Ticket wurde geschlossen. Es ist nicht möglich weitere Antworten zu senden!')
                    }}</span>
            </div>
        </div>
    </div>
    @endif

    @if($ticket->ticket_status != 'geschlossen')
    <a href="#" class="btn btn-sm btn-warning mb-1" id="addReply"><i class="fal fa-plus"></i> {{ __('Antwort
        hinzufügen') }}</a>

    <a href="{{ route('support.ticket.close', $ticket->id) }}" class="btn btn-sm btn-danger mb-1 float-end"
        id="addReply"><i class="fal fa-plus"></i> {{ __('Ticket schließen') }}</a>


    <div class="card" id="replyBlock">
        <div class="card-body">
            <form action="{{ route('support.ticket.message.add', $ticket->id) }}" method="POST">
                @csrf

                <div class="form-group">
                    <label class="form-label" for="message">{{ __('Deine Nachricht') }}</label>
                    <textarea type="text" class="form-control" name="message" rows="5" required
                        placeholder="..."></textarea>
                </div>

                <button type="submit" class="btn btn-primary me-1 waves-effect waves-float waves-light mt-2">{{
                    __('Absenden') }}</button>

            </form>
        </div>
    </div>
    @endif

    @foreach($messages as $message)

    <div class="card @if($message->user_id == Auth::user()->id) YOUR_CLASS_HERE @endif">
        <div class="card-body p-0 overflow-hidden pe-1">
            <div class="row same-height">
                <!-- Avatar Column -->
                <div class="col-auto p-0">
                    <div class="card-header">
                        <div class="avatar avatar-xl">
                            <img src="{{ asset('images/avatars/' . $message->user->avatar) }}" alt="Avatar"
                                class="avatar-img rounded-circle">
                        </div>
                    </div>
                </div>

                <!-- Message Column -->
                <div class="col text-break p-0">
                    <p class="ps-1 pt-1 pb-1 border-bottom w-100">
                        {{ __('Geschrieben am :Date um :Time', [
                        'Date' => date('d-m-Y', strtotime($message->created_at)),
                        'Time' => date('H:i', strtotime($message->created_at))
                        ]) }}
                    </p>
                    <p class="ps-1">
                        {!! App\Models\TicketMessage::getPreparedTicketMessage($message->id) !!}
                    </p>
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
    $(document).ready(function () {
        $('#replyBlock').hide();
    });
</script>
<script>
    $('#addReply').click(function () {
        if ($('#replyBlock').is(":hidden")) {
            $('#replyBlock').hide();
            $('#replyBlock').fadeIn(200);
        } else {
            $('#replyBlock').hide();
        }
    });
</script>
@endsection