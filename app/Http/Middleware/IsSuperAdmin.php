<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Session;

class IsSuperAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (Auth::check() && Auth::user()->can('SuperAdminpanel Zugriff')) {
            // User has SuperAdmin rights
            return $next($request);
        }

        // User is not a SuperAdmin
        Session::flash('error', __('Unzureichende Berechtigungen'));
        toastr()->error(__('Unzureichende Berechtigungen'));
        return redirect()->route('site.home');
    }
}
