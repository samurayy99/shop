<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Config;

class CaptchaTest extends TestCase
{
    use RefreshDatabase;

    public function testCaptchaLength()
    {
        $length = Config::get('captcha.default.length');
        $this->assertEquals(9, $length);
    }

    public function testCaptchaQuality()
    {
        $quality = Config::get('captcha.default.quality');
        $this->assertEquals(90, $quality);
    }

    public function testCaptchaExpiry()
    {
        $expiry = Config::get('captcha.default.expire');
        $this->assertEquals(60, $expiry);
    }
}