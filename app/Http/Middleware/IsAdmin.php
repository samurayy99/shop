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
    public function handle($request, Closure $next)
    {
        if (Auth::check()) {
            if (Auth::user()->can('Adminpanel Zugriff')) {
                // User has admin rights
                return $next($request);
            } else {
                // User is logged in but not an admin
                Session::flash('error', __('Unzureichende Berechtigungen'));
                toastr()->error(__('Unzureichende Berechtigungen'));
                return redirect()->route('auth.login');
            }
        }

        // User is not logged in, allow to proceed (or redirect to login based on your logic)
        return $next($request);
    }
}