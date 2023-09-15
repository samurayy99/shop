<?php

namespace App\Http\Controllers\Custom;

use App\Http\Controllers\Controller;
use App\Models\Settings;
use Symfony\Component\HttpFoundation\Response;

class CSSController extends Controller
{
    public function __construct()
    {
    }

    public function generateCSS()
    {
        return response()
        ->view('custom.css', [], 200)
        ->header('Content-Type', 'text/css');
    }
}
