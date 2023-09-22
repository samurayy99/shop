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
            'username' => 'required|max:30|unique:users',
            'password' => 'required|min:6',
            'jabber' => 'nullable|email',
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
            'username' => 'required',
            'password' => 'required',
            'loginCaptcha' => 'required|captcha',
        ]);

        $credentials = $request->only('username', 'password');

        if (Auth::attempt($credentials)) {
            if (!Auth::user()->active) {
                Auth::logout();
                toastr()->error(__('Dein Account wurde gesperrt!'));
                return redirect()->route('auth.login');
            }

            $request->session()->regenerate();
            toastr()->success(__('Willkommen zurück, :Name', ['name' => $request->username]));

            if (Auth::user()->can('Adminpanel Zugriff')) {
                return redirect()->route('admin.dashboard');
            } else {
                return redirect()->route('user.orders');
            }
        }

        toastr()->error(__('Die Anmeldedaten sind nicht korrekt.'));
        return back()->withInput();
    }




    // Login function
    public function login(Request $request)
    {
        // Validate captcha and other fields
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
            'loginCaptcha' => 'required|captcha',
            // Corrected captcha validation rule
        ]);

        // Authentication
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return redirect()->route('admin.dashboard');
        } else {
            return back()->withErrors(['email' => 'Invalid credentials']);
        }
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