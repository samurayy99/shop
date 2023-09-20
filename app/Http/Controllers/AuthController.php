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
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Http\Response
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
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Http\Response
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
        $request->validate([
            'captcha' => 'required|captcha',
            'username' => 'required|max:30|unique:users',
            'jabber' => 'nullable|email',
            'password' => 'required|min:6',
        ]);

        $user = new User();
        $user->username = $request->username;
        $user->password = Hash::make($request->password);
        $user->jabber = $request->jabber ?: Str::random(20);
        $user->save();

        if ($role = \Spatie\Permission\Models\Role::findByName('Mitglied')) {
            $user->assignRole($role);
        }

        Session::flash('success', __('Willkommen, :Name! Du kannst dich nun anmelden', ['name' => $request->username]));
        toastr()->success(__('Willkommen, :Name! Du kannst dich nun anmelden', ['name' => $request->username]));
        return redirect()->route('auth.login');
    }

    public function authenticate(Request $request)
    {
        $request->validate([
            'captcha' => 'required|captcha',
            'username' => 'required|max:30',
            'password' => 'required|min:6',
        ]);

        $credentials = [
            'username' => $request->input('username'),
            'password' => $request->input('password'),
        ];

        if (Auth::guard('web')->attempt($credentials)) {
            // Determine the redirect URL based on user role
            $redirectUrl = Auth::guard('web')->user()->is_admin ? '/admin/dashboard' : '/';

            if ($request->ajax()) {
                // Return a JSON response for AJAX request
                return response()->json([
                    'status' => 200,
                    'redirect' => $redirectUrl
                ]);
            }

            // Redirect for non-AJAX request
            return redirect()->intended($redirectUrl);
        }

        // Handle failed login attempt
        if ($request->ajax()) {
            return response()->json([
                'status' => 401,
                'message' => 'Invalid credentials'
            ]);
        }

        return back()->withErrors(['username' => 'Invalid credentials']);
    }

    public function adminLogin(Request $request)
    {
        $request->validate([
            'username' => 'required|max:30',
            'password' => 'required|min:6',
        ]);

        if (Auth::attempt(['username' => $request->username, 'password' => $request->password])) {
            if (Auth::user()->isAdmin()) {
                $request->session()->regenerate();
                toastr()->success(__('Welcome back, :Name', ['name' => $request->username]));
                return response()->json(['message' => 'Login successful', 'status' => 200]);
            } else {
                Auth::logout();
                toastr()->error(__('You are not an admin'));
                return response()->json(['message' => 'Not an admin', 'status' => 403]);
            }
        }

        toastr()->error(__('The provided login details do not match our records'));
        return response()->json(['message' => 'Login failed', 'status' => 401]);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $message = Auth::user()->isAdmin() ? 'Admin logged out successfully' : 'Logged out successfully';
        toastr()->success(__($message));
        return redirect()->route(Auth::user()->isAdmin() ? 'admin.login' : 'auth.login');
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


    public function update(Request $request, $id)
    {
        $user = User::find($id);
        if (!$user) {
            throw new \Illuminate\Database\Eloquent\ModelNotFoundException('User not found');
        }
        $user->update($request->all());
        return response()->json(['message' => 'User updated successfully']);
    }

    public function destroy($id)
    {
        $user = User::find($id);
        if (!$user) {
            throw new \Illuminate\Database\Eloquent\ModelNotFoundException('User not found');
        }
        $user->delete();
        return response()->json(['message' => 'User deleted successfully']);
    }
}