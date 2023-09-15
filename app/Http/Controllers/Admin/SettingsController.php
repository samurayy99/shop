<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Settings;
use Session;
use Auth;

class SettingsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Berechtigungs überprüfung
        if(!Auth::user()->can('Einstellungen verwalten')) {
            Session::flash('error', __('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));
            toastr()->error(__('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));

            return redirect()->back();
        }

        return view('admin.settings');
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
        if(!Auth::user()->can('Einstellungen verwalten')) {
            Session::flash('error', __('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));
            toastr()->error(__('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));

            return redirect()->back();
        }

        // Default values setzen
        $appName = $request->website_name ?: 'highsociety';
        $css_primary_color = $request->css_primary_color ?: '#000000';
        $css_background_url = $request->css_background_url ?: '';
        $pgp_key = $request->pgp_key ?: '';


        $request->validate([
            "btc_confirms_needed" => "nullable|numeric|between:0,3"
        ]);

        // Einstellungen überschreiben
        Settings::set('app.name', $appName);
        Settings::set('app.registered_only', $request->website_registered_only);
        Settings::set('shop.btc_confirms_needed', $request->btc_confirms_needed);
        Settings::set('shop.show_full_stock', $request->show_full_stock);
        Settings::set('css.primary_color', $css_primary_color);
        Settings::set('css.background_url', $css_background_url);
        Settings::set('shop.pgp_key', $pgp_key);

        Session::flash('success', __('App Einstellungen erfolgreich bearbeitet'));
        toastr()->success(__('App Einstellungen erfolgreich bearbeitet'));

        return redirect()->back();
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
