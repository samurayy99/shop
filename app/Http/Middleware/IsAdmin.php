public function handle(Request $request, Closure $next)
{
if (Auth::check() && Auth::user()->is_admin) {
return $next($request);
} else {
Auth::logout();
return redirect('/');
}
}