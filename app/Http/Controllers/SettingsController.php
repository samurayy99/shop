<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;

use Hash;
use Auth;
use Session;

class SettingsController extends Controller
{
    public function index() {
        return view('user.settings');
    }

    public function update(Request $request) {
        $request->validate([
            "jabber" => "sometimes|nullable|email|unique:users",
            "password" => "sometimes|nullable|min:6",
        ]);

        if(isset($request->jabber) && $request->jabber != Auth::user()->jabber) {
            $user = Auth::user();
            $user->jabber = $request->jabber;
            $user->touch();
            $user->save();

            toastr()->success(__('Jabber erfolgreich aktualisiert'));
        }

        if(isset($request->password)) {
            $user = Auth::user();
            $user->password = Hash::make($request->password);
            $user->touch();
            $user->save();

            toastr()->success(__('Passwort erfolgreich aktualisiert'));
        }

        Session::flash('success', __('Benutzerkonto erfolgreich aktualisiert'));
        return redirect()->back();
    }
}
