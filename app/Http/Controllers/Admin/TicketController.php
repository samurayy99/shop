<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Auth;
use Session;

use App\Models\Ticket;
use App\Models\TicketMessage;
use App\Models\UserOrder;
use App\Models\User;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.support.tickets');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // Berechtigungs überprüfung
        if(!Auth::user()->can('Tickets verwalten')) {
            Session::flash('error', __('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));
            toastr()->error(__('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));

            return redirect()->back();
        }

        $ticket = Ticket::findOrFail($id);
        $messages = TicketMessage::where('ticket_id', '=', $ticket->id)->orderBy('id', 'DESC')->get();

        $order = null;
        if($ticket->order_id != null) {
            $order = UserOrder::find($ticket->order_id);
        }

        return view('admin.support.viewTicket', ['ticket' => $ticket, 'messages' => $messages, 'order' => $order]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function add($id, Request $request)
    {
        // Berechtigungs überprüfung
        if(!Auth::user()->can('Tickets verwalten')) {
            Session::flash('error', __('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));
            toastr()->error(__('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));

            return redirect()->back();
        }

        $validated = $request->validate([
            'message' => 'required'
        ]);

        $ticket = Ticket::findOrFail($id);

        $ticket->ticket_status = "beantwortet";
        $ticket->touch();
        $ticket->save();

        $ticketMessage = new TicketMessage();
        $ticketMessage->user_id = Auth::user()->id;
        $ticketMessage->ticket_id = $id;

        $ticketMessage->content = $request->message;

        $ticketMessage->save();

        Session::flash('success', 'Antwort erfolgreich hinzugefügt');
        toastr()->success('Antwort erfolgreich hinzugefügt');

        return redirect()->back();
    }

    public function closeOpenTicket($id) {
        // Berechtigungs überprüfung
        if(!Auth::user()->can('Tickets verwalten')) {
            Session::flash('error', __('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));
            toastr()->error(__('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));

            return redirect()->back();
        }

        $ticket = Ticket::findOrFail($id);

        if($ticket->ticket_status == 'offen') {
            $ticket->ticket_status = 'geschlossen';
        } else {
            $ticket->ticket_status = 'offen';
        }

        $ticket->save();

        Session::flash('success', 'Ticket erfolgreich bearbeitet');
        toastr()->success('Ticket erfolgreich bearbeitet');

        return redirect()->back();
    }

    public function updateUserBalance($user_id, $ticket_id, Request $request) {
        // Berechtigungs überprüfung
        if(!Auth::user()->can('Tickets verwalten')) {
            Session::flash('error', __('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));
            toastr()->error(__('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));

            return redirect()->back();
        }

        $validated = $request->validate([
            'amount' => 'required|numeric'
        ]);

        // Guthaben aktualisieren
        $user = User::findOrFail($user_id);
        $user->balance = $user->balance + $request->amount;
        $user->save();

        // Automatische Nachricht absenden
        $ticketMessage = new TicketMessage();
        $ticketMessage->user_id = Auth::user()->id;
        $ticketMessage->ticket_id = $ticket_id;
        $ticketMessage->content = "Deine Replaceanfrage wurde akzeptiert. Deinem Guthaben wurden {$request->amount} EUR hinzugefügt. \n Dies ist eine automatische Antwort. \n Bitte antworte nicht auf diese Nachricht.";

        $ticketMessage->save();

        $ticket = Ticket::findOrFail($ticket_id);
        $ticket->ticket_status = "beantwortet";
        $ticket->save();

        Session::flash('success', __("Guthaben wurde erfolgreich erstattet. Neues Guthaben beträgt {$user->balance} EUR"));
        toastr()->success(__("Guthaben wurde erfolgreich erstattet. Neues Guthaben beträgt {$user->balance} EUR"));
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
