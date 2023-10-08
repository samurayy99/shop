<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\User;

class IsAdminTest extends TestCase
{
    use RefreshDatabase;

    public function testAdminAccess()
    {
        $adminUser = User::factory()->create([
            'is_admin' => true,
        ]);

        $this->actingAs($adminUser);

        $response = $this->get('/admin');
        $response->assertStatus(200);
    }

    public function testNonAdminRedirect()
    {
        $nonAdminUser = User::factory()->create([
            'is_admin' => false,
        ]);

        $this->actingAs($nonAdminUser);

        $response = $this->get('/admin');
        $response->assertRedirect('/');
    }
}