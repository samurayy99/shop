<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\User;

class AuthControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testLoginSuccess()
    {
        $user = User::factory()->create([
            'password' => bcrypt($password = 'password'),
        ]);

        $response = $this->post('/login', [
            'username' => $user->username,
            'password' => $password,
        ]);

        $response->assertRedirect('/home');
    }

    public function testLoginFail()
    {
        $response = $this->post('/login', [
            'username' => 'wrong_username',
            'password' => 'wrong_password',
        ]);

        $response->assertSessionHas('errors');
    }

    public function testRegisterSuccess()
    {
        $response = $this->post('/register', [
            'username' => 'new_user',
            'password' => 'new_password',
        ]);

        $response->assertRedirect('/login');
    }

    public function testRegisterFail()
    {
        $response = $this->post('/register', [
            'username' => '',
            'password' => '',
        ]);

        $response->assertSessionHasErrors(['username', 'password']);
    }
}