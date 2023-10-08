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
        $response = $this->get("/admin/product/manage/{$product->id}");
        $response->assertStatus(200);
    }

    public function testEdit()
    {
        $product = Product::factory()->create();
        $response = $this->get("/admin/product/edit/{$product->id}");
        $response->assertStatus(200);
    }

    public function testUpdate()
    {
        $product = Product::factory()->create();
        $updatedData = [
            'name' => 'Updated Name',
            // Add other fields that you want to update
        ];
        $response = $this->put("/admin/product/edit/{$product->id}/save", $updatedData);
        $response->assertStatus(200);
    }

    public function testDestroy()
    {
        $product = Product::factory()->create();
        $response = $this->delete("/admin/product/delete/{$product->id}");
        $response->assertStatus(200);
    }
}