<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use Session;

class IsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if (Auth::check() && Auth::user()->can('Adminpanel Zugriff')) {
            // Benutzer hat Admin Rechte
            return $next($request);
        }

        // Benutzer ist kein Admin
        Session::flash('error', __('Unzureichende Berechtigungen'));
        toastr()->error(__('Unzureichende Berechtigungen'));
        return redirect()->route('site.home');
    }
}
