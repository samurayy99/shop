<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Custom\BitcoinHandler;

use Auth;
use Session;


class TransactionsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Berechtigungs überprüfung
        if(!Auth::user()->can('Transaktionen einsehen')) {
            Session::flash('error', __('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));
            toastr()->error(__('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));

            return redirect()->back();
        }

        return view('admin.transaction.view');
    }

    // Node deepsearch
    public function deepSearch(Request $request) 
    {
        // Berechtigungs überprüfung
        if(!Auth::user()->can('Transaktionen einsehen')) {
            Session::flash('error', __('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));
            toastr()->error(__('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));

            return redirect()->back();
        }

        $status = BitcoinHandler::connected();
        if($status['status'] == false) {
            Session::flash("error", "Keine Verbindung zum Bitcoin Server möglich. Nachricht: {$status['message']}");
            toastr()->error(__("Keine Verbindung zum Bitcoin Server möglich. Nachricht: {$status['message']}"));
            return redirect()->back();
        }


        $method = $request->method;
        $query = $request->s;

        if($method == null || $query == null) {
            return redirect()->back();
        }

        $client = BitcoinHandler::prepareBitcoinClient();

        if($method == "txid") {
            try {
                $transaction = $client->getTransaction($query);
            } catch (\Exception $ex) {
                Session::flash("error", "Fehler bei der Suche. Nachricht: {$ex->getMessage()}");
                return redirect()->back();
            }
            return view('admin.transaction.view', ['searchResult' => $transaction]);
        }
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
