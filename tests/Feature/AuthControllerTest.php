<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\User;
use Mockery;

class AuthControllerTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->mockCaptcha();
    }

    protected function mockCaptcha()
    {
        Mockery::mock('alias:App\Facades\Captcha')
            ->shouldReceive('check')
            ->andReturn(true);
    }

    public function testLoginSuccess()
    {
        $user = User::factory()->create([
            'password' => bcrypt($password = 'password'),
        ]);

        $response = $this->post(
            'auth/login',
            [
                'username' => $user->username,
                'password' => $password,
            ]
        );

        $response->assertRedirect('/home');
    }


    // Existing testLoginSuccess method
    public function testLoginSuccess()
    {
        $user = User::factory()->create([
            'password' => bcrypt($password = 'password'),
        ]);

        $response = $this->post(
            'auth/login',
            [
                'username' => $user->username,
                'password' => $password,
                'captcha' => 'valid_captcha' // Add this line
            ]
        );

        $response->assertRedirect('/home');
    }

    // Existing testRegisterSuccess method
    public function testRegisterSuccess()
    {
        $response = $this->post('auth/registration', [
            'username' => 'new_user',
            'password' => 'new_password',
            'password_confirmation' => 'new_password',
            'captcha' => 'valid_captcha',
            // Make sure this line exists
        ]);

        $response->assertStatus(302);
    }


}