<?php

namespace Tests\Feature\Admin;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\UserOrder;
use App\Models\User;

class OrderControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testIndex()
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user)->get('/admin/orders');
        $response->assertStatus(200);
    }

    public function testShow()
    {
        $order = UserOrder::factory()->create();
        $response = $this->get("/admin/orders/{$order->id}");
        $response->assertStatus(200);
    }

    public function testUpdate()
    {
        $order = UserOrder::factory()->create();
        $data = ['status' => 'completed'];
        $response = $this->put("/admin/orders/{$order->id}", $data);
        $response->assertRedirect('/admin/orders');
    }
}