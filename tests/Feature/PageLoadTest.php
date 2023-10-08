<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Product;

class PageLoadTest extends TestCase
{
    public function testHomePageLoadsCorrectly()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function testShopPageLoadsCorrectly()
    {
        $response = $this->get('/shop');

        $response->assertStatus(200);
    }

    public function testSpecificProductPageLoadsCorrectly()
    {
        $product = Product::factory()->create();

        $response = $this->get("/shop/{$product->slug}");

        $response->assertStatus(200);
    }
}