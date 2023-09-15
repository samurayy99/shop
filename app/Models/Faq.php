<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use betterapp\LaravelDbEncrypter\Traits\EncryptableDbAttribute;

class Faq extends Model
{
    use HasFactory, EncryptableDbAttribute;

    // Table Name
    protected $table = 'faqs';
    // PK
    public $primaryKey = 'id';
    // Timestamps
    public $timestamps = true;

    protected $encryptable = [
        'question',
        'answer',
    ];

    protected $fillable = [
        'name', 'question', 'answer'
    ];

    public static function hasFaq() 
    {
        $faqs = self::all();
        if($faqs) 
        {
            return true;
        } 

        return false;
    }

    public static function getAll() {
        return self::all();
    }
}
