<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use betterapp\LaravelDbEncrypter\Traits\EncryptableDbAttribute;

use Auth;

use App\Custom\BitcoinHandler;
use App\Models\Settings;
use App\Models\User;

use Carbon\Carbon;

class UserTransaction extends Model
{
    use HasFactory, EncryptableDbAttribute;

    // Table Name
    protected $table = 'user_transactions';
    // PK
    public $primaryKey = 'id';
    // Timestamps
    public $timestamps = true;

    protected $fillable = [
        'user_id', 'wallet', 'txid', 'status', 'method', 'amount_bitcoin', 'amount_euro', 'confirmations', 'incoming'
    ];

    protected $encryptable = [
        'txid',
    ];

    public static function getLast5Transaction($user_id) {
        return self::where('user_id', '=', $user_id)->orderBy('id', 'DESC')->take(5)->get();
    }

    public static function checkWalletExists($wallet) {
        if(self::where('wallet', '=', $wallet)->count() > 0) {
            return true;
        } else {
            return false;
        }
    }

    public static function checkUuidExists($uuid) {
        if(self::where('uuid', '=', $uuid)->count() > 0) {
            return true;
        } else {
            return false;
        }
    }

    public static function hasTooManyOpenTransaction($user_id) {
        if(self::where([['user_id', '=', $user_id], ['status', '=', 'waiting']])->count() >= 3) {
            return true;
        } else {
            return false;
        }
    }

    public function updateOnPaid() {
        $wallet = $this->wallet;

        // User hat noch nicht bezahlt
        if($this->status == 'waiting') {
            $client = BitcoinHandler::prepareBitcoinClient();

            // Transaktionen abrufen
            $receivedTransaction = $client->listReceivedByAddress(0, true, true, $wallet)[0];

            $amountReceived = $receivedTransaction['amount'];

            // Schauen ob erhaltener Betrag dem gefordertem Betrag entspricht
            if($amountReceived < $this->amount_bitcoin) {
                return false;
            }

            $this->confirmations = $receivedTransaction['confirmations'];
            $this->txid = $receivedTransaction['txids'][0];

            // Schauen wie viele Bestätigungen in den Einstellungen festgelegt sindd
            if($receivedTransaction['confirmations'] >= Settings::get('shop.btc_confirms_needed', 1)) {
                // Bestellung hat alle benötigten Bestätigung, in diesem Falle '0' = direkt abgeschlossen
                $this->status = 'paid';

                // Guthaben des Benutzers aktualisieren
                $user = User::findOrFail($this->user_id);
                $user->balance = $user->balance + $this->amount_euro;
                $user->save();

                // Profit insgesamt aktualisieren
                Settings::set('shop.total_profit', Settings::get('shop.total_profit') + $this->amount_euro);
            } else {
                $this->status = 'pending';
            }

            $this->save();

            return true;

        } elseif($this->status == 'pending') {
            $client = BitcoinHandler::prepareBitcoinClient();
            // Transaktionen abrufen
            $receivedTransaction = $client->listReceivedByAddress(0, true, true, $wallet)[0];
            // Schauen wie viele Bestätigungen in den Einstellungen festgelegt sindd
            if($receivedTransaction['confirmations'] >= Settings::get('shop.btc_confirms_needed', 1)) {
                // Bestellung hat alle benötigten Bestätigung
                $this->status = 'paid';

                // Guthaben des Benutzers aktualisieren
                $user = User::findOrFail($this->user_id);
                $user->balance = $user->balance + $this->amount_euro;
                $user->save();

                // Profit insgesamt aktualisieren
                Settings::set('shop.total_profit', Settings::get('shop.total_profit') + $this->amount_euro);
            }

            $this->confirmations = $receivedTransaction['confirmations'];
            
            $this->save();

            return true;
        }
    }

    public static function getAllTransactions() {
        return self::all();
    }

    public static function countTransactions() {
        return self::get()->count();
    }

    public static function getTodaysProfit() {
        $profit = 0;

        $todaysTransactions = UserTransaction::whereDate('created_at', Carbon::today())->where([["status", "=", "paid"], ["incoming", "=", "1"]])->get();

        foreach($todaysTransactions as $transaction) {
            $profit = $profit + $transaction->amount_euro;
        }

        return $profit;
    }
}
