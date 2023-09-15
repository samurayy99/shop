<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use betterapp\LaravelDbEncrypter\Traits\EncryptableDbAttribute;
use Session;
use Auth;
use Illuminate\Support\Facades\Redirect;

class Settings extends Model
{
    use HasFactory, EncryptableDbAttribute;

    protected $fillable = [
        'key', 'value', 'type',
    ];

    protected $encryptable = [
        'value',
    ];

    public static function set($key, $value)
    {
        // Einstellung existent
        if (! self::where('key', $key)->exists()) {
            return false;
        }

        if (self::where('key', $key)->first()->update([
            'value' => $value,
        ])) {
            return true;
        }
    }

    public static function get($key, $default = null) {
        
        // Einstellung existent
        if(!self::where('key', $key)->exists()) {
            return $default;
        }

        $setting = self::where('key', $key)->first();

        $type = strtolower($setting->type);

        if ($type == 'bool' || $type == 'boolean') {
            return filter_var($setting->value, FILTER_VALIDATE_BOOLEAN);
        } elseif ($type == 'int' || $type == 'integer') {
            return intval($setting->value);
        }

        return $setting->value;
    }

    public static function checkLoginOnly() {
        if(self::get('app.registered_only') && !Auth::check()) {
            return Redirect::route('auth.login')->send();
        }
    }
}
