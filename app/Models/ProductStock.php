<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use betterapp\LaravelDbEncrypter\Traits\EncryptableDbAttribute;

class ProductStock extends Model
{
    use HasFactory, EncryptableDbAttribute;

    // Table Name
    protected $table = 'product_stock';
    // PK
    public $primaryKey = 'id';
    // Timestamps
    public $timestamps = true;

    protected $fillable = [
        'product_id', 'content'
    ];

    protected $encryptable = [
    ];
    
    public static function countStockAvailable($product_id) 
    {
        return self::where('product_id', '=', $product_id)->count();
    }

    public static function getStockbyId($product_id) 
    {
        return self::where('product_id', '=', $product_id)->get();
    }

    public static function checkIfItemExists($product_id, $item) 
    {
        if(self::where([['product_id', '=', $product_id], ['content', '=', $item]])->count() == 0) {
            return false;
        }  else {
            return true;
        }
    }

}
