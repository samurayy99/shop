<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Ticket;
use App\Models\TicketMessage;
use Auth;
use Session;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function answered_tickets()
    {
        $answeredTickets = Ticket::where([['user_id', '=', Auth::user()->id], ['ticket_status', '=', 'beantwortet']])->orderBy('id', 'DESC')->get();
        return view('support.tickets', ['answered_tickets' => $answeredTickets]);
    }

    public function open_tickets()
    {
        $openTickets = Ticket::where([['user_id', '=', Auth::user()->id], ['ticket_status', '=', 'offen']])->orderBy('id', 'DESC')->get();
        return view('support.tickets', ['open_tickets' => $openTickets]);
    }

    public function closed_tickets()
    {
        $closedTickets = Ticket::where([['user_id', '=', Auth::user()->id], ['ticket_status', '=', 'geschlossen']])->orderBy('id', 'DESC')->get();
        return view('support.tickets', ['closed_tickets' => $closedTickets]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('support.addTicket');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            "subject" => "nullable|max:50",
            "department" => "required|in:Allgemein,Replace,Zahlung,Sonstiges",
            "message" => "required"
        ], [
            "subject.max" => __('Der Betreff darf nicht mehr als 50 Zeichen enthalten'),
            "department.in" => __('Die Kategorie muss eine der folgenden sein: Allgemein, Replace, Zahlung, Sonstiges'),
            "message.required" => __('Bitte gib eine Nachricht an')
        ]);

        if($request->department == "Replace" && $request->order == null) {
            Session::flash('error', __('Bitte wähle eine Bestellung aus'));
            toastr()->error(__('Bitte wähle eine Bestellung aus'));

            return redirect()->back()->withInput();
        }

        $ticket = new Ticket();

        $ticket->user_id = Auth::user()->id;
        $ticket->ticket_title = $request->subject;
        $ticket->ticket_department = $request->department;

        // Order ID setzen wenn Ticket Department ist "Replace"
        if($request->department == 'Replace') {
            $ticket->order_id = $request->order;
        }

        $ticket->save();

        $ticketMessage = new TicketMessage();

        $ticketMessage->user_id = Auth::user()->id;
        $ticketMessage->content = $request->message;
        $ticketMessage->ticket_id = $ticket->id;

        $ticketMessage->save();

        Session::flash('success', __('Ticket erfolgreich erstellt. Unser Team wird sich umgehend darum kümmern'));
        toastr()->success(__('Ticket erfolgreich erstellt. Unser Team wird sich umgehend darum kümmern'));
        return redirect()->route('support.tickets.open');

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $ticket = Ticket::findOrFail($id);

        // Schauen ob Benutzer der Inhaber ist
        if($ticket->user_id != Auth::user()->id) {
            // Benutzer ist nicht Inhaber
            abort(404);
        }

        $messages = TicketMessage::where('ticket_id', '=', $ticket->id)->orderBy('id', 'DESC')->get();

        return view('support.viewTicket', ['ticket' => $ticket, 'messages' => $messages]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function add($id, Request $request)
    {
        $validated = $request->validate([
            "message" => "required"
        ]);

        $ticket = Ticket::findOrFail($id);
        // Schauen ob User Inhaber ist
        if($ticket->user_id != Auth::user()->id) {
            abort(404);
        }

        // Ticket status auf offen setzen
        $ticket->ticket_status = "offen";
        $ticket->touch();
        $ticket->save();

        $ticketMessage = new TicketMessage();

        $ticketMessage->user_id = Auth::user()->id;
        $ticketMessage->ticket_id = $id;
        $ticketMessage->content = $request->message;

        $ticketMessage->save();

        Session::flash('success', __('Nachricht erfolgreich hinzugefügt'));
        toastr()->success(__('Nachricht erfolgreich hinzugefügt'));
        return redirect()->back();
    }

    public function close($id) {
        $ticket = Ticket::findOrFail($id);

        // Schauen ob User Inhaber ist
        if($ticket->user_id != Auth::user()->id) {
            abort(404);
        }

        $ticket->ticket_status = "geschlossen";

        $ticket->save();

        
        Session::flash('success', __('Ticket erfolgreich geschlossen'));
        toastr()->success(__('Ticket erfolgreich geschlossen'));
        return redirect()->back();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
