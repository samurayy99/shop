<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Auth;
use Session;
use App\Models\Settings;
use App\Custom\BitcoinHandler;
use App\Models\UserTransaction;
use Str;

class BitcoinSettingsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Berechtigungs überprüfung
        if(!Auth::user()->can('Bitcoin verwalten')) {
            Session::flash('error', __('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));
            toastr()->error(__('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));

            return redirect()->back();
        }

        $status = BitcoinHandler::connected();

        return view('admin.bitcoinSettings', ['connectionStatus' => $status]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function sendBitcoin(Request $request)
    {
        // Berechtigungs überprüfung
        if(!Auth::user()->can('Bitcoin verwalten')) {
            Session::flash('error', __('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));
            toastr()->error(__('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));

            return redirect()->back();
        }

        $request->validate([
            "amount" => "required|numeric",
            "wallet" => "required|string"
        ]);

        $status = BitcoinHandler::sendBitcoin($request->wallet, $request->amount);

        if($status['status']) {
            $transaction = new UserTransaction();

            $transaction->user_id = Auth::user()->id;
            $transaction->wallet = $request->wallet;
            $transaction->amount_bitcoin = 0 - $request->amount;
            $transaction->amount_euro = 0 - BitcoinHandler::convertToEuro($request->amount);
            $transaction->uuid = Str::uuid();
            $transaction->status = 'paid';
            $transaction->incoming = false;
            $transaction->txid = $status['txid'];
    
            $transaction->save();

            Session::flash('success', $status['message']);
            toastr()->success($status['message']);
            return redirect()->back();
        } else {
            Session::flash('error', $status['message']);
            toastr()->error($status['message']);
            return redirect()->back();
        }
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
        //
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
    public function update(Request $request)
    {
        // Berechtigungs überprüfung
        if(!Auth::user()->can('Bitcoin verwalten')) {
            Session::flash('error', __('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));
            toastr()->error(__('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));

            return redirect()->back();
        }

        $request->validate([
            "bitcoin_api" => "nullable|starts_with:http://",
            "cashout_amount" => "nullable|numeric"
        ], [
            "bitcoin_api.starts_with" => "Die Bitcoin API muss mit http:// starten"
        ]);

        Settings::set('bitcoin.api', $request->bitcoin_api) ?: '';
        Settings::set('btc.auto_cashout_amount', $request->cashout_amount) ?: '';
        Settings::set('btc.auto_cashout_wallet', $request->payment_wallet) ?: '';

        Session::flash('success', 'Bitcoin Einstellungen erfolgreich bearbeitet');
        toastr()->success('Bitcoin Einstellungen erfolgreich bearbeitet');
        return redirect()->back();
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
