<?php

// common.php

// common.php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

function isLoggedIn()
{
    return Auth::check();
}

function isAdmin()
{
    return Auth::user() && Auth::user()->role === 'admin';
}