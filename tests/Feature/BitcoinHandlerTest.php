<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\User;

class BitcoinHandlerTest extends TestCase
{
    use RefreshDatabase;

    public function testBtcWindowPopup()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $response = $this->get('/btc/payment-window');
        $response->assertSee('Bitcoin Payment Window');
    }

    public function testUserPanelBtcMenu()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $response = $this->get('/user/btc-menu');
        $response->assertSee('Bitcoin Menu');
    }

    public function testAdminPanelBtcMenu()
    {
        $adminUser = User::factory()->create([
            'is_admin' => true,
        ]);
        $this->actingAs($adminUser);

        $response = $this->get('/admin/btc-menu');
        $response->assertSee('Admin Bitcoin Menu');
    }
}