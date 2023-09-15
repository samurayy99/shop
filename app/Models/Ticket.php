<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use betterapp\LaravelDbEncrypter\Traits\EncryptableDbAttribute;

class Ticket extends Model
{
    use HasFactory, EncryptableDbAttribute;

    // Table Name
    protected $table = 'tickets';
    // PK
    public $primaryKey = 'id';
    // Timestamps
    public $timestamps = true;

    protected $fillable = [
        'user_id', 'ticket_title', 'ticket_status'
    ];

    protected $encryptable = [
        'ticket_title',
    ];

    public static function countOpenTickets() {
        return self::where('ticket_status', '=', 'offen')->count();
    }

    public static function getOpenTickets() {
        return self::where('ticket_status', '=', 'offen')->get();
    }

    public static function countExceptOpen() {
        return self::where('ticket_status', '!=', 'offen')->count();
    }

    public static function getExceptOpen() {
        return self::where('ticket_status', '!=', 'offen')->get();
    }

    public static function countAnsweredTicketsByUser($user_id) {
        return self::where([['user_id', '=', $user_id], ['ticket_status', '=', 'beantwortet']])->count();
    }
}
