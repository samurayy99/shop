<?php

namespace Tests\Feature\Admin;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\Product;
use App\Models\User;

class ProductControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testIndex()
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user)->get('/admin/products');
        $response->assertStatus(200);
    }

    public function testCreate()
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user)->get('/admin/products/create');
        $response->assertStatus(200);
    }

    public function testStore()
    {
        $user = User::factory()->create();
        $data = [
            'name' => 'Test Product',
            'description_short' => 'Short description',
            'category' => 1,
            'price' => 100.50,
            'product_type' => 'virtuell'
        ];
        $response = $this->actingAs($user)->post('/admin/products', $data);
        $response->assertRedirect('/admin/products');
    }

    public function testShow()
    {
        $product = Product::factory()->create();
        $response = $this->get("/admin/products/{$product->id}");
        $response->assertStatus(200);
    }

    public function testEdit()
    {
        $product = Product::factory()->create();
        $response = $this->get("/admin/products/{$product->id}/edit");
        $response->assertStatus(200);
    }

    public function testUpdate()
    {
        $product = Product::factory()->create();
        $data = [
            'name' => 'Updated Product',
            'description_short' => 'Updated description',
            'category' => 2,
            'price' => 150.75,
            'product_type' => 'physisch'
        ];
        $response = $this->put("/admin/products/{$product->id}", $data);
        $response->assertRedirect('/admin/products');
    }

    public function testDestroy()
    {
        $product = Product::factory()->create();
        $response = $this->delete("/admin/products/{$product->id}");
        $response->assertRedirect('/admin/products');
    }
}