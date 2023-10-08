<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ProductFactory extends Factory
{
    protected $model = Product::class;

    public function definition()
    {
        return [
            'name' => $this->faker->word,
            'description_short' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'content' => $this->faker->paragraph,
            'price_euro' => $this->faker->randomFloat(2, 1, 100),
            'old_price_euro' => $this->faker->randomFloat(2, 1, 100),
            'category_id' => $this->faker->numberBetween(1, 10),
            'dropable' => $this->faker->boolean,
            'amount_sold' => $this->faker->randomNumber(),
            'use_stock' => $this->faker->boolean,
            'weight_text' => $this->faker->word,
            'product_type' => $this->faker->word,
            'background_url' => $this->faker->url,
            'listed' => $this->faker->boolean,
            'position' => $this->faker->randomNumber()
        ];
    }
}