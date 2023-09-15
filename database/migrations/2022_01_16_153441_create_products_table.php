<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->text('description_short')->nullable();
            $table->text('description')->nullable();
            $table->text('content')->nullable();
            $table->float('price_euro')->nullable();
            $table->float('old_price_euro')->nullable();
            $table->integer('category_id')->nullable();
            $table->boolean('dropable')->default(0);
            $table->integer('amount_sold')->default(0);
            $table->boolean('use_stock')->default(0);
            $table->string('weight_text')->default('g');
            $table->string('product_type')->nullable();
            $table->integer('weight')->default(1);
            $table->text('background_url')->nullable();
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
        Schema::dropIfExists('products');
    }
}
