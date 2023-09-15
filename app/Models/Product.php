<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use betterapp\LaravelDbEncrypter\Traits\EncryptableDbAttribute;

class Product extends Model
{
    use HasFactory, EncryptableDbAttribute;

    // Table Name
    protected $table = 'products';
    // PK
    public $primaryKey = 'id';
    // Timestamps
    public $timestamps = true;

    protected $fillable = [
        'name', 'description_short', 'description', 'content', 'price_euro', 'old_price_euro', 'category_id', 'dropable', 'amount_sold', 'use_stock', 'weight_text', 'product_type', 'background_url', 'listed', 'position'
    ];

    protected $encryptable = [
        'description_short',
        'description',
        'content',
        'background_url'
    ];

    public static function getAllProducts() 
    {
        return self::orderBy('id', 'DESC')->get();
    }

    public static function getAllProductsFromCategory($id) 
    {
        return self::where([['category_id', '=', $id], ['listed', '=', true]])->orderBy('position', 'ASC')->get();
    }

    public static function getPercentageSaved($originalPrice, $realPrice) 
    {
        $percent = (($originalPrice - $realPrice)*100) /$originalPrice ;
        return round($percent);
    }

    public static function updateTotalOrdered($product_id, $order_amount) {
        $product = self::findOrFail($product_id);

        $product->amount_sold = $product->amount_sold + $order_amount;

        $product->save();
    }

    public static function getTopSelling() {
        return self::where('listed', '=', true)->orderBy('amount_sold', 'DESC')->take(6)->get();
    }

    public static function countProducts() {
        return self::all()->count();
    }
}
