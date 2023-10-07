<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use betterapp\LaravelDbEncrypter\Traits\EncryptableDbAttribute;
use App\Models\User;

class News extends Model
{
    use HasFactory, EncryptableDbAttribute;

    // Table Name
    protected $table = 'news';
    // PK
    public $primaryKey = 'id';
    // Timestamps
    public $timestamps = true;

    protected $encryptable = [
        'title',
        'body',
    ];

    public function getUser()
    {
        return User::findOrFail($this->user);
    }

    public static function getPreparedNewsTitle($id) {
        $message = self::find($id)->title;

        $message = self::makeClickableLinks($message); 


        // Replace smileys
        $message = str_replace(':)', '<img src="'.asset('/img/smileys/smile.png').'" width="16" height="16" />', $message);
        $message = str_replace('8)', '<img src="'.asset('/img/smileys/cool.png').'" width="16" height="16" />', $message);
        $message = str_replace(':o', '<img src="'.asset('/img/smileys/surprised.png').'" width="16" height="16" />', $message);
        $message = str_replace(':(', '<img src="'.asset('/img/smileys/sad.png').'" width="16" height="16" />', $message);
        $message = str_replace(':x', '<img src="'.asset('/img/smileys/love.png').'" width="16" height="16" />', $message);
        $message = str_replace(':|', '<img src="'.asset('/img/smileys/emoji.png').'" width="16" height="16" />', $message);
        $message = str_replace('*_*', '<img src="'.asset('/img/smileys/love2.png').'" width="16" height="16" />', $message);
        $message = str_replace(';)', '<img src="'.asset('/img/smileys/wink.png').'" width="16" height="16" />', $message);
        $message = str_replace(':D', '<img src="'.asset('/img/smileys/laugh.png').'" width="16" height="16" />', $message);

        return nl2br($message);
    }

    public static function getPreparedNewsBody($id) {
        $message = self::find($id)->body;

        $message = self::makeClickableLinks($message); 


        // Replace smileys
        $message = str_replace(':)', '<img src="'.asset('/img/smileys/smile.png').'" width="16" height="16" />', $message);
        $message = str_replace('8)', '<img src="'.asset('/img/smileys/cool.png').'" width="16" height="16" />', $message);
        $message = str_replace(':o', '<img src="'.asset('/img/smileys/surprised.png').'" width="16" height="16" />', $message);
        $message = str_replace(':(', '<img src="'.asset('/img/smileys/sad.png').'" width="16" height="16" />', $message);
        $message = str_replace(':x', '<img src="'.asset('/img/smileys/love.png').'" width="16" height="16" />', $message);
        $message = str_replace(':|', '<img src="'.asset('/img/smileys/emoji.png').'" width="16" height="16" />', $message);
        $message = str_replace('*_*', '<img src="'.asset('/img/smileys/love2.png').'" width="16" height="16" />', $message);
        $message = str_replace(';)', '<img src="'.asset('/img/smileys/wink.png').'" width="16" height="16" />', $message);
        $message = str_replace(':D', '<img src="'.asset('/img/smileys/laugh.png').'" width="16" height="16" />', $message);

        return nl2br($message);
    }

    public static function makeClickableLinks($s) {
        return preg_replace('@(https?://([-\w\.]+[-\w])+(:\d+)?(/([\w/_\.#-]*(\?\S+)?[^\.\s])?)?)@', '<span class="text-danger"><b>(extern)</b></span> <a href="$1" target="_blank">$1</a>', $s);
    }
}
