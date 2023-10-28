<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Crypt;
use App\Models\User;
use Hash;
use Auth;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('auth.login');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('auth.register');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $captcha = $request->validate([
            "captcha" => "required",
        ]);

        if (captcha_check($request->captcha) == false) {
            Session::flash('error', __('Captcha ungültig'));
            toastr()->error(__('Captcha ungültig'));
            return redirect()->back();
        }

        $validated = $request->validate([
            "username" => "required|max:30|unique:users",
            "password" => "required|min:6",
        ]);

        // Neuen Benutzer erstellen
        $user = new User();
        $user->username = $request->username;
        $user->password = Hash::make($request->password);
        $user->save();

        // Mitglieds Rolle zu User geben
        $user->syncRoles(['Mitglied']);

        Session::flash('success', __('Willkommen, :Name! Du kannst dich nun anmelden', ['name' => $request->username]));
        toastr()->success(__('Willkommen, :Name! Du kannst dich nun anmelden', ['name' => $request->username]));
        return redirect()->route('auth.login');
    }

    public function authenticate(Request $request) {
        $captcha = $request->validate([
            "captcha" => "required",
        ]);
    
        if (captcha_check($request->captcha) == false) {
            return response()->json(['error' => __('Captcha ungültig')], 400);
        }
    
        $credentials = $request->validate([
            "username" => "required|max:30",
            "password" => "required|min:6",
        ]);
    
        if (Auth::attempt($credentials)) {
            if (!Auth::user()->active) {
                Auth::logout();
                return response()->json(['error' => __('Du wurdest vom System ausgeschlossen')], 403);
            }
    
            $request->session()->regenerate();
            return response()->json(['success' => __('Willkommen zurück, :Name', ['name' => $request->username])]);
        }
    
        return response()->json(['error' => __('Die angegebenen Logindaten stimmen nicht mit den von uns hinterlegten Daten überein')], 401);
    }
    
    public function login(Request $request) {
        $credentials = $request->validate([
            'username' => ['required'],
            'password' => ['required'],
        ]);
    
        if (Auth::attempt($credentials)) {
            if (Auth::check() && Auth::user()->can('SuperAdminpanel Zugriff')) {
                return response()->json(['redirect' => route('superadmin.dashboard')]);
            }
            $request->session()->regenerate();
            return response()->json(['redirect' => '/home']);
        }
    
        return response()->json(['error' => 'The provided credentials do not match our records.', 'redirect' => '/login']);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        return response()->json(['redirect' => '/login']);
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