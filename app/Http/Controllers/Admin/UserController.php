<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

// User Delete
use App\Models\DeleteRequest;
use App\Models\Ticket;
use App\Models\TicketMessage;
use App\Models\UserOrder;
use App\Models\UserTransaction;

use Session;
use Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.user.view');
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

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        // Berechtigungs überprüfung
        if(!Auth::user()->can('Benutzer verwalten')) {
            Session::flash('error', __('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));
            toastr()->error(__('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));

            return redirect()->back();
        }

        $user = User::findOrFail($id);

        return view('admin.user.edit', ['user' => $user]);
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
        // Berechtigungs überprüfung
        if(!Auth::user()->can('Benutzer verwalten')) {
            Session::flash('error', __('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));
            toastr()->error(__('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));

            return redirect()->back();
        }

        $validated = $request->validate([
            'username' => 'required',
            'jabber' => 'required|email',
            'balance' => 'required|numeric',
            'newsletter' => 'required|boolean',
            'active' => 'required|boolean'
        ]);

        $user = User::findOrFail($id);

        $user->username = $request->username;
        $user->jabber = $request->jabber;
        $user->balance = $request->balance;
        $user->newsletter = $request->newsletter;
        $user->active = $request->active;

        $user->syncRoles($request->role);

        $user->save();

        Session::flash('success', 'Benutzer erfolgreich aktualisiert');
        toastr()->success('Benutzer erfolgreich aktualisiert');

        return redirect()->route('admin.users');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if(Auth::user()->id == $id) {
            return redirect()->route('admin.users');
        }
        // Tickets löschen
        Ticket::where('user_id', '=', $id)->delete();
        // Ticketnachrichten löschen
        TicketMessage::where('user_id', '=', $id)->delete();
        // Bestellungen löschen
        UserOrder::where('user_id', '=', $id)->delete();
        // Transaktionen löschen
        UserTransaction::where('user_id', '=', $id)->delete();
        // Delete Request löschen
        DeleteRequest::where('user', '=', $id)->delete();

        $user = User::findOrFail($id);
        $user->delete();

        Session::flash('success', 'Benutzer wurde vollständig aus der Datenbank entfernt');

        return redirect()->route('admin.users');
    }

    public function destroyRequest($id) {
        $request = DeleteRequest::findOrFail($id);

        $request->delete();

        Session::flash('success', 'Anfrage wurde erfolgreich abgelehnt');
        return redirect()->back();
    }
}
