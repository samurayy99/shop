<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use betterapp\LaravelDbEncrypter\Traits\EncryptableDbAttribute;


class TicketMessage extends Model
{
    use HasFactory, EncryptableDbAttribute;

    // Table Name
    protected $table = 'ticket_messages';
    // PK
    public $primaryKey = 'id';
    // Timestamps
    public $timestamps = true;

    protected $fillable = [
        'user_id', 'ticket_id', 'content'
    ];

    protected $encryptable = [
        'content',
    ];

    public static function countMessages($ticket_id) {
        return self::where('ticket_id', '=', $ticket_id)->get()->count();
    }

    public static function getPreparedTicketMessage($id) {
        $message = self::find($id)->content;

        $messageSafe = htmlspecialchars($message);

        $messageSafe = self::makeClickableLinks($messageSafe); 


        // Replace smileys
        $messageSafe = str_replace(':)', '<img src="'.asset('/img/smileys/smile.png').'" width="16" height="16" />', $messageSafe);
        $messageSafe = str_replace('8)', '<img src="'.asset('/img/smileys/cool.png').'" width="16" height="16" />', $messageSafe);
        $messageSafe = str_replace(':o', '<img src="'.asset('/img/smileys/surprised.png').'" width="16" height="16" />', $messageSafe);
        $messageSafe = str_replace(':(', '<img src="'.asset('/img/smileys/sad.png').'" width="16" height="16" />', $messageSafe);
        $messageSafe = str_replace(':x', '<img src="'.asset('/img/smileys/love.png').'" width="16" height="16" />', $messageSafe);
        $messageSafe = str_replace(':|', '<img src="'.asset('/img/smileys/emoji.png').'" width="16" height="16" />', $messageSafe);
        $messageSafe = str_replace('*_*', '<img src="'.asset('/img/smileys/love2.png').'" width="16" height="16" />', $messageSafe);
        $messageSafe = str_replace(';)', '<img src="'.asset('/img/smileys/wink.png').'" width="16" height="16" />', $messageSafe);
        $messageSafe = str_replace(':D', '<img src="'.asset('/img/smileys/laugh.png').'" width="16" height="16" />', $messageSafe);

        return nl2br($messageSafe);
    }

    public static function makeClickableLinks($s) {
        return preg_replace('@(https?://([-\w\.]+[-\w])+(:\d+)?(/([\w/_\.#-]*(\?\S+)?[^\.\s])?)?)@', '<span class="text-danger"><b>(extern)</b></span> <a href="$1" target="_blank">$1</a>', $s);
    }
}
