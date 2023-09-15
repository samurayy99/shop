<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use betterapp\LaravelDbEncrypter\Traits\EncryptableDbAttribute;

class DeleteRequest extends Model
{
    use HasFactory, EncryptableDbAttribute;

    // Table Name
    protected $table = 'delete_requests';
    // PK
    public $primaryKey = 'id';
    // Timestamps
    public $timestamps = true;

    protected $fillable = [
        'user', 'delete_reason'
    ];

    protected $encryptable = [
        'delete_reason',
    ];

    public static function hasOpenRequest($user_id) 
    {
        if(self::where('user', '=', $user_id)->count() != 0) 
        {
            return true;
        } else {
            return false;
        }
    }
}
