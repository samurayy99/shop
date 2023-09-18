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
        if (request()->wantsJson()) {
            return response()->json(['view' => view('auth.login')->render()]);
        } else {
            return view('auth.login');
        }
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

        $request->validate([
            'username' => 'required|max:30|unique:users',
            'jabber' => 'nullable|email',
            'password' => 'required|min:6',
        ]);

        $users = User::all();

        // Neuen Benutzer erstellen
        $user = new User();
        $user->username = $request->username;
        $user->password = Hash::make($request->password);
        $user->jabber = $request->jabber ?: Str::random(20);
        $user->save();

        // Mitglieds Rolle zu User geben
        $user->syncRoles(['Mitglied']);

        Session::flash('success', __('Willkommen, :Name! Du kannst dich nun anmelden', ['name' => $request->username]));
        toastr()->success(__('Willkommen, :Name! Du kannst dich nun anmelden', ['name' => $request->username]));
        return redirect()->route('auth.login');
    }

    public function authenticate(Request $request)
    {
        $captcha = $request->validate([
            "captcha" => "required",
        ]);

        if (captcha_check($request->captcha) == false) {
            Session::flash('error', __('Captcha ungültig'));
            toastr()->error(__('Captcha ungültig'));
            return redirect()->back();
        }

        $request->validate([
            "username" => "required|max:30",
            "password" => "required|min:6",
        ]);

        if (Auth::attempt(['username' => $request->username, 'password' => $request->password])) {
            // Bancheck
            if (!Auth::user()->active) {
                Session::flash('error', __('Du wurdest vom System ausgeschlossen'));
                toastr()->error(__('Du wurdest vom System ausgeschlossen'));
                Auth::logout();
                return redirect()->back();
            }

            $request->session()->regenerate();
            toastr()->success(__('Willkommen zurück, :Name', ['name' => $request->username]));
            return response()->json(['message' => 'Login successful', 'status' => 200]); // JSON response for success
        }

        toastr()->error(__('Die angegebenen Logindaten stimmen nicht mit den von uns hinterlegten Daten überein'));
        return response()->json(['message' => 'Login failed', 'status' => 401]); // JSON response for failure
    }


    public function adminLogin(Request $request)
    {
        $request->validate([
            "username" => "required|max:30",
            "password" => "required|min:6",
        ]);

        if (Auth::attempt(['username' => $request->username, 'password' => $request->password])) {
            // Check if user is an admin
            if (Auth::user()->isAdmin()) {
                $request->session()->regenerate();
                toastr()->success(__('Welcome back, :Name', ['name' => $request->username]));
                return response()->json(['message' => 'Login successful', 'status' => 200]); // JSON response for success
            } else {
                Auth::logout();
                toastr()->error(__('You are not an admin'));
                return response()->json(['message' => 'Not an admin', 'status' => 403]); // JSON response for failure
            }
        }

        toastr()->error(__('The provided login details do not match our records'));
        return response()->json(['message' => 'Login failed', 'status' => 401]); // JSON response for failure
    }


    public function logout(Request $request)
    {
        // Check if user is an admin
        if (Auth::user()->isAdmin()) {
            Auth::logout();
            toastr()->success(__('Admin logged out successfully'));
            return redirect()->route('admin.login'); // Redirect to admin login page
        } else {
            Auth::logout();
            toastr()->success(__('Logged out successfully'));
            return redirect()->route('auth.login'); // Redirect to user login page
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(['message' => 'Not implemented yet']);
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return response()->json(['message' => 'Not implemented yet']);
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
        $user = User::find($id);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }
        $user->update($request->all());
        return response()->json(['message' => 'User updated successfully']);
    }

    public function destroy($id)
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }
        $user->delete();
        return response()->json(['message' => 'User deleted successfully']);
    }


}