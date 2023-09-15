<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Settings;
use Session;

use App\Models\User;
use Auth;

use Fabiang\Xmpp\Options;
use Fabiang\Xmpp\Protocol\Roster;
use Fabiang\Xmpp\Protocol\Presence;
use Fabiang\Xmpp\Protocol\Message;
use Fabiang\Xmpp\Client;

class JabberController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.jabber');
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
        // Berechtigungs überprüfung
        if(!Auth::user()->can('XMPP bearbeiten')) {
            Session::flash('error', __('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));
            toastr()->error(__('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));

            return redirect()->back();
        }
        
        // Default values setzen
        $connectionString = $request->connectionstring ?: '';
        $jabberUsername = $request->username ?: '';
        $jabberPassword = $request->password ?: '';

        // Einstellungen überschreiben
        Settings::set('jabber.username', $jabberUsername);
        Settings::set('jabber.password', $jabberPassword);
        Settings::set('jabber.address', $connectionString);

        Session::flash('success', __('XMPP Einstellungen erfolgreich bearbeitet'));
        toastr()->success(__('XMPP Einstellungen erfolgreich bearbeitet'));

        return redirect()->back();
    }

    public function sendMessage(Request $request)
    {
        // Berechtigungs überprüfung
        if(!Auth::user()->can('Newsletter senden')) {
            Session::flash('error', __('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));
            toastr()->error(__('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));

            return redirect()->back();
        }

        try {
            // Massennachricht an Kunden senden
            $options = new Options(Settings::get('jabber.address'));
            $options->setUsername(Settings::get('jabber.username'))
                ->setPassword(Settings::get('jabber.password'));

            $client = new Client($options);
            // optional connect manually
            $client->connect();

            if ($client->getConnection() != null && $client->getConnection()->isConnected()) {

                $sent = 0;
                foreach(User::all() as $user) {
                    if(!$user->enabledNewsletter())
                    {
                        continue;
                    }

                    $message = new Message;
                    $message->setMessage($request->message)
                        ->setTo($user->jabber);
                    $client->send($message);

                    $sent++;
                } 

                Session::flash('success', __("{$sent} Nachricht(en) erfolgreich versendet"));
                toastr()->success(__("{$sent} Nachricht(en) erfolgreich versendet"));
                return redirect()->back();

            } else {
                Session::flash('error', __('Fehler beim senden der Nachrichten'));
                toastr()->error(__('Fehler beim senden der Nachrichten'));
        
                return redirect()->back();
            }
        } catch (\Exception $e) {
            Session::flash('error', __("Fehler beim senden der Nachrichten: {$e->getMessage()}"));
            toastr()->error(__("Fehler beim senden der Nachrichten: {$e->getMessage()}"));
            return redirect()->back();
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
