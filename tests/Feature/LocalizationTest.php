<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\App;

class LocalizationTest extends TestCase
{
    use RefreshDatabase;

    public function testLocaleSetting()
    {
        Session::put('locale', 'de');
        $response = $this->get('/');
        $response->assertStatus(200);
        $this->assertEquals('de', App::getLocale());
    }
    public function testLocaleFallback()
    {
        Session::forget('locale');
        $response = $this->get('/');
        $response->assertStatus(200);
        $this->assertEquals('de', App::getLocale());
    }
}