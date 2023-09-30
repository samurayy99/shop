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
    public function index()
    {
        return view('auth.login');
    }

    public function create()
    {
        return view('auth.register');
    }

    public function store(Request $request)
    {
        $request->validate([
            "username" => "required|max:30|unique:users",
            "jabber" => "nullable|email",
            "password" => "required|min:6",
            "captcha" => "required|captcha",
        ]);

        $validated = $request->validate([
            "username" => "required|max:30|unique:users",
            "jabber" => "nullable|email",
            "password" => "required|min:6",
        ]);

        $users = User::all();

        $user = new User();
        $user->username = $request->username;
        $user->password = Hash::make($request->password);
        $user->jabber = $request->jabber ?: Str::random(20);
        $user->save();

        $user->syncRoles(['Mitglied']);

        Session::flash('success', __('Willkommen, :Name! Du kannst dich nun anmelden', ['name' => $request->username]));
        toastr()->success(__('Willkommen, :Name! Du kannst dich nun anmelden', ['name' => $request->username]));
        return redirect()->route('auth.login');
    }

    public function authenticate(Request $request)
    {
        // Log the request data
        \Log::info("Request Data: " . json_encode($request->all()));
        \Log::info("Captcha value: " . json_encode($request->input('captcha')));
        \Log::info("Captcha session: " . json_encode($request->session()->get('captcha')));

        \Log::info('Received Request Data:', $request->all());

        try {
            $request->validate([
                'username' => 'required|max:30',
                'password' => 'required|min:6',
                'captcha' => 'required|captcha',
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            \Log::error('Validation Errors:', $e->errors());
            throw $e;
        }


        // Rest of your code...


        if (Auth::attempt($request->only('username', 'password'))) {
            if (!Auth::user()->active) {
                Session::flash('error', __('Du wurdest vom System ausgeschlossen'));
                toastr()->error(__('Du wurdest vom System ausgeschlossen'));
                Auth::logout();
                return redirect()->back();
            }

            $request->session()->regenerate();
            toastr()->success(__('Willkommen zurück, :Name', ['name' => $request->username]));
            return redirect()->route('site.home');
        }

        toastr()->error(__('Die angegebenen Logindaten stimmen nicht mit den von uns hinterlegten Daten überein'));
        return back()->withErrors([
            'username' => __('Die angegebenen Logindaten stimmen nicht mit den von uns hinterlegten Daten überein'),
        ])->withInput();
    }



    public function logout(Request $request)
    {
        Auth::logout();
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