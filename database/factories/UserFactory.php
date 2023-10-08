<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    protected $model = User::class;

    public function definition()
    {
        return [
            'username' => $this->faker->unique()->userName,
            'jabber' => $this->faker->unique()->safeEmail,
            'password' => bcrypt('password'),
            'balance' => '0.00',
            'remember_token' => Str::random(10),
        ];
    }
}