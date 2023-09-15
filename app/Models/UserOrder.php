<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use betterapp\LaravelDbEncrypter\Traits\EncryptableDbAttribute;

class UserOrder extends Model
{
    use HasFactory, EncryptableDbAttribute;

    // Table Name
    protected $table = 'user_orders';
    // PK
    public $primaryKey = 'id';
    // Timestamps
    public $timestamps = true;

    protected $fillable = [
        'user_id', 'product_name', 'order_content', 'order_amount', 'order_price', 'weight', 'weight_text', 'delivery_method', 'delivery_price', 'order_status', 'order_drop'
    ];

    protected $encryptable = [
        'product_name',
        'order_content',
        'delivery_method',
        'order_drop'
    ];

    public static function getUserOrders($user_id) {
        return self::where('user_id', '=', $user_id)->orderby('id', 'DESC')->get();
    }

    public static function countOrders() {
        return self::all()->count();
    }

    public static function getLast5Orders() {
        return self::orderBy('id', 'DESC')->take(5)->get();
    }

    public static function getAllOrders() {
        return self::all();
    }
}
