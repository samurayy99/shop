<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use betterapp\LaravelDbEncrypter\Traits\EncryptableDbAttribute;
use Spatie\Permission\Traits\HasRoles;
use Auth;
use Session;


class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'username',
        'jabber',
        'password',
        'balance',
        'profile_picture',
        'newsletter',
    ];


    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function enabledNewsletter()
    {
        return $this->newsletter;
    }

    public static function getBalance() 
    {
        return number_format(Auth::user()->balance, 2, ',', ' ');
    }

    public static function getUserBalance($user_id) 
    {
        return number_format(self::find($user_id)->balance, 2, ',', ' ');
    }

    public static function updateBalance($user_id, $new_balance) 
    {
        $user = self::findOrFail($user_id);

        $user->balance = $new_balance;

        $user->save();

        return true;
    }

    public static function countUsers() {
        return self::all()->count();
    }

    public static function getUsernameById($id) {
        return self::find($id)->username ?: 'Deleted';
    }

    public static function getUserById($id) {
        return self::find($id);
    }

    public static function getGroupById($id) {
        return self::find($id)->roles->pluck('name')[0] ?: 'Deleted';
    }

    public static function getGroupColorById($id) {
        return self::find($id)->roles->pluck('color')[0] ?: 'Deleted';
    }

    public static function getLast5Registrations() {
        return self::orderBy('id', 'DESC')->take(5)->get();
    }

    public static function getAllUsers() {
        return self::all();
    }

    public static function checkBanned() {
        if(!Auth::user()->active) {
            Session::flash('error', __('Du wurdest vom System ausgeschlossen'));
            toastr()->error(__('Du wurdest vom System ausgeschlossen'));
            Auth::logout();
        }
    }

    //public $timestamps = true;
}
