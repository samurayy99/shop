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

    public function testLoginFail()
    {
        $response = $this->post('auth/login', [
            'username' => 'wrong_username',
            'password' => 'wrong_password',
        ]);

        $response->assertStatus(302);
    }

    public function testRegisterSuccess()
    {
        $response = $this->post('auth/registration', [
            'username' => 'new_user',
            'password' => 'new_password',
            'password_confirmation' => 'new_password',
        ]);

        $response->assertStatus(302);
    }

    public function testRegisterFail()
    {
        $response = $this->post('auth/registration', [
            'username' => '',
            'password' => '',
        ]);

        $response->assertStatus(302);
    }
}