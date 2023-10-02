<?php

namespace App\Http\Controllers;

include_once app_path('common.php');


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use App\Models\User;
use Hash;
use Auth;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

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
                Rule::exists('captcha_table', 'captcha_value') // Replace 'captcha_table' and 'captcha_value' with your actual captcha storage details
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
        \Log::info('Received CSRF token: ' . $request->input('_token'));
        \Log::info('Received captcha: ' . $request->captcha);

        $request->validate([
            'username' => 'required',
            'password' => 'required',
            'captcha' => 'required|captcha'
        ]);

        $credentials = $request->only('username', 'password');

        if (Auth::attempt($credentials)) {
            return redirect()->intended('dashboard');
        } else {
            $newCaptcha = captcha_img();
            return back()->withErrors([
                'username' => 'The provided credentials do not match our records.',
            ])->withInput()->with(['new_captcha' => $newCaptcha]);
        }
    }

    public function adminLogin(Request $request)
    {
        $credentials = $request->only('username', 'password');
        if (Auth::attempt($credentials)) {
            if (Auth::user()->isAdmin()) {
                return redirect()->route('admin.dashboard');
            }
            return back()->with('error', 'Not an admin');
        }
        return back()->with('error', 'Credentials do not match');
    }

    public function logout(Request $request)
    {
        Auth::logout();
        return redirect()->back();
    }
}