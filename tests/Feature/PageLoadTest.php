<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\Product;

class PageLoadTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test if the home page loads correctly.
     *
     * @return void
     */
    public function testHomePageLoadsCorrectly()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    /**
     * Test if the shop page loads correctly.
     *
     * @return void
     */
    public function testShopPageLoadsCorrectly()
    {
        $response = $this->get('/shop');

        $response->assertStatus(200);
    }

    /**
     * Test if a specific product page loads correctly.
     *
     * @return void
     */
    public function testSpecificProductPageLoadsCorrectly()
    {
        $product = Product::factory()->create();

        $response = $this->get("/shop/{$product->slug}");

        $response->assertStatus(200);
    }
}