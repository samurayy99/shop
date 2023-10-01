<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use App\Models\User;
use Hash;
use Auth;
use Illuminate\Http\JsonResponse;
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
            "password" => "required|min:6",
            "captcha" => "required|captcha",
        ]);

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

    public function refreshCaptcha()
    {
        return response()->json(['captcha' => captcha_img('flat')]);
    }

    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required',
            'password' => 'required',
            'captcha' => 'required|captcha'
        ]);

        $credentials = $request->only('username', 'password');

        if (Auth::attempt($credentials)) {
            // Authentication was successful
            return redirect()->intended('dashboard');
        } else {
            // Generate a new captcha
            $newCaptcha = captcha_img();

            // Add the new captcha to the error response
            return back()->withErrors([
                'username' => 'The provided credentials do not match our records.',
            ])->withInput()->with(['new_captcha' => $newCaptcha]);
        }
    }

    public function logout(Request $request)
    {
        Auth::logout();
        return redirect()->back();
    }
}