<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_transactions', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->default(0);
            $table->text('wallet')->nullable();
            $table->text('txid')->nullable();
            $table->enum('status', ['pending', 'waiting', 'paid'])->default('waiting');
            $table->string('method')->default('btc');
            $table->string('amount_bitcoin')->default('0');
            $table->bigInteger('amount_euro')->default(0);
            $table->integer('confirmations')->default(0);
            $table->boolean('incoming')->default(1);
            $table->uuid('uuid')->unique();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_transactions');
    }
}
