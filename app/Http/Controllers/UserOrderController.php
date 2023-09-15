<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Auth;
use Session;

use App\Models\UserOrder;

class UserOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $orders = UserOrder::getUserOrders(Auth::user()->id);
        return view('user.orders', ['orders' => $orders]);
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

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // Bestellung finden, wenn nicht gefunden -> 404
        $order = UserOrder::findOrFail($id);

        // Schauen ob Benutzer Inhaber der Bestellung ist
        if($order->user_id != Auth::user()->id) {
            // Benutzer ist nicht Inhaber der Bestellung
            abort(404);
        }

        return view('user.vieworder', ['order' => $order]);
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
        // Bestellung finden, wenn nicht gefunden -> 404
        $order = UserOrder::findOrFail($id);

        // Schauen ob Benutzer Inhaber der Bestellung ist
        if($order->user_id != Auth::user()->id) {
            // Benutzer ist nicht Inhaber der Bestellung
            abort(404);
        }

        $order->delete();

        Session::flash('success', __('Bestellung wurde erfolgreich gelöscht. Diese Aktion kann nicht rückgängig gemacht werden'));
        toastr()->success(__('Bestellung wurde erfolgreich gelöscht. Diese Aktion kann nicht rückgängig gemacht werden'));
        return redirect()->route('user.orders');
    }
}
