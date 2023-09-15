<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_orders', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->default(0);
            $table->text('product_name')->nullable();
            $table->mediumText('order_content')->nullable();
            $table->integer('order_amount')->nullable();
            $table->float('order_price')->nullable();
            $table->integer('weight')->nullable();
            $table->string('weight_text')->nullable();
            $table->string('delivery_method')->nullable();
            $table->float('delivery_price')->nullable();
            $table->enum('order_status', ['pending', 'completed', 'cancelled'])->nullable();
            $table->text('order_drop')->nullable();
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
        Schema::dropIfExists('user_orders');
    }
}
