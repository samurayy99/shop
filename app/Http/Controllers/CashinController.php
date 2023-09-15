<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Session;
use Auth;
use Str;

use App\Models\UserTransaction;
use App\Custom\BitcoinHandler;

class CashinController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('cashin.view');
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
        $request->validate([
            "amount_euro" => "required|numeric"
        ], [
            "amount_euro.required" => __('Bitte gib den Betrag ein, den du einzahlen möchtest'),
            "amount_euro.numeric" => __('Der Betrag muss aus Zahlen bestehen')
        ]);

        // Schauen ob Betrag größer als das Einzahlminimum ist
        if($request->amount_euro < 5) {
            Session::flash('error', __('Der Betrag muss größer als 5 EUR sein'));
            toastr()->error(__('Der Betrag muss größer als 5 EUR sein'));

            return redirect()->back();
        }

        // Schauen ob Benutzer zu viele Transaktionen hat
        if(UserTransaction::hasTooManyOpenTransaction(Auth::user()->id)) {
            Session::flash('error', __('Du hast zu viele unbezahlte Transaktionen'));
            toastr()->error(__('Du hast zu viele unbezahlte Transaktionen'));

            return redirect()->back();
        }

        $client = BitcoinHandler::prepareBitcoinClient();
        $wallet = $client->getNewAddress(Auth::user()->username, 'p2sh-segwit');
        $uuid = Str::uuid();

        // Wallet isMine checken, falls false -> error
        if(!$client->getAddressInfo($wallet->get())['ismine']) {
            Session::flash('error', __('Kritischer Fehler, bitte versuche es erneut'));
            toastr()->error(__('Kritischer Fehler, bitte versuche es erneut'));

            return redirect()->back();
        }

        // UUID existens checken, falls false -> error
        if(UserTransaction::checkUuidExists($uuid)) {
            Session::flash('error', __('Kritischer Fehler, bitte versuche es erneut'));
            toastr()->error(__('Kritischer Fehler, bitte versuche es erneut'));

            return redirect()->back();
        }

        // Überprüfen ob auf wallet in den letzten 15 Tagen bereits eingezahlt wurde, falls ja -> error
        if(UserTransaction::checkWalletExists($wallet->get())) {
            Session::flash('error', __('Kritischer Fehler, bitte versuche es erneut'));
            toastr()->error(__('Kritischer Fehler, bitte versuche es erneut'));

            return redirect()->back();
        }

        $transaction = new UserTransaction();

        $transaction->user_id = Auth::user()->id;
        $transaction->wallet = $wallet->get();
        $transaction->amount_bitcoin = BitcoinHandler::getBtcAmount($request->amount_euro);
        $transaction->amount_euro = $request->amount_euro;
        $transaction->uuid = $uuid;

        $transaction->save();

        return redirect()->route('user.cashin.pay', $transaction->uuid);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($uuid)
    {
        $transaction = UserTransaction::where('uuid', '=', $uuid)->first();

        // Keine Transaktionen
        if($transaction == null) {
            abort(404);
        }

        // Nutzer Inhaber
        if($transaction->user_id != Auth::user()->id) {
            // Nutzer ist nicht Inhaber
            abort(404);
        }

        //return $transaction->updateOnPaid();

        return view('cashin.pay', ['transaction' => $transaction]);
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
