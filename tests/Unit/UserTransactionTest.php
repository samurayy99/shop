<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\Models\User;
use App\Models\UserTransaction;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTransactionTest extends TestCase
{
    use RefreshDatabase;

    public function testUpdateOnPaid()
    {
        $user = User::factory()->create(['balance' => 100]);
        $transaction = UserTransaction::factory()->make([
            'user_id' => $user->id,
            'status' => 'waiting',
            'amount_bitcoin' => 0.01,
            'amount_euro' => 10
        ]);

        $transaction->save();

        $this->actingAs($user);

        $transaction->updateOnPaid();

        $this->assertEquals('paid', $transaction->status);
        $this->assertEquals(110, $user->balance);
    }
}