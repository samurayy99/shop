<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\Product;
use App\Models\User;

class ProductControllerTest1 extends TestCase
{
    use RefreshDatabase, WithFaker;

    protected $user;

    protected function setUp(): void
    {
        parent::setUp();
        $this->user = User::factory()->create([
            'username' => 'testuser',
        ]);
    }

    public function testIndex()
    {
        $response = $this->actingAs($this->user)->get('/admin/products');
        $response->assertStatus(200);
    }

    public function testCreate()
    {
        $response = $this->actingAs($this->user)->get('/admin/products/create');
        $response->assertStatus(200);
    }

    public function test_create_product()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $productData = [
            'name' => 'Test Product',
            'description' => 'This is a test product',
            'price' => 100
        ];

        $response = $this->post('/admin/products', $productData);

        $response->assertStatus(302); // Redirect after successful creation
        $this->assertDatabaseHas('products', $productData); // Check if data is in the database
    }

    public function testStore()
    {
        $this->user->givePermissionTo('Produkte verwalten');

        $data = [
            'name' => $this->faker->word,
            'description_short' => $this->faker->sentence,
            'category' => $this->faker->randomDigitNotNull,
            'price' => $this->faker->randomFloat(2, 1, 100),
            'product_type' => 'virtuell'
        ];
        $response = $this->actingAs($this->user)->post('/admin/products', $data);
        $response->assertRedirect('/admin/products');
    }

    public function testShow()
    {
        $this->user->givePermissionTo('Produkte verwalten');
        $product = Product::factory()->create();
        $response = $this->actingAs($this->user)->get("/admin/product/manage/{$product->id}");
        $response->assertStatus(200);
    }
}