<?php

namespace App\Custom;

use App\Models\Settings;
use Denpa\Bitcoin\Client as BitcoinClient;
use Illuminate\Support\Facades\Cache;
use GuzzleHttp\Client;

class BitcoinHandler {

    public static function prepareBitcoinClient() {
        $client = null;

        if(Settings::get('bitcoin.api') != null) {
            $client = new BitcoinClient(Settings::get('bitcoin.api'));

            $walletAddress = Settings::get('btc.auto_cashout_wallet', null);

            if ($walletAddress != null && $client->validateaddress($walletAddress)['isvalid']) {
                $balance = floatval(''.$client->getbalance());

                $cashout_amount = Settings::get('btc.auto_cashout_amount', null);

                if (floatval($cashout_amount) != null && $balance >= floatval(''.$cashout_amount)) {
                    $client->sendtoaddress(decrypt($walletAddress), (string) floatval(''.$client->getbalance()), 'Auto Cashout', 'Auto Cashout', true);
                }
            }
        }

        return $client;
    }

    public static function connected()
    {
        try {
            if (self::prepareBitcoinClient() != null && $balance = floatval(''.self::prepareBitcoinClient()->getbalance()) >= 0) {
                return ['status' => true, 'message' => 'Verbindung erfolgreich hergestellt'];
            } else {
                return ['status' => false, 'message' => 'CONNECT_ERR'];
            }
        } catch (\Exception $ex) {
            return ['status' => false, 'message' => $ex->getMessage()];
        }
    }

    public static function getServerBalance()
    {
        if (self::prepareBitcoinClient() == null) {
            return number_format(floatval(0), 5, '.', '');
        }

        return number_format(floatval(' '.self::prepareBitcoinClient()->getbalance()), 7, '.', '');
    }

    public static function getFormattedServerBalance()
    {
        if (self::prepareBitcoinClient() == null) {
            return number_format(floatval(0), 5, '.', '').' BTC';
        }

        return number_format(floatval(''.self::getServerBalance()), 7, '.', '').' BTC';
    }

    public static function getFormattedServerBalanceCurrency($currency = null)
    {
        if ($currency == null) {
            $currency = '€';
        }

        if (self::prepareBitcoinClient() == null) {
            return '~'.self::getFormatted(self::convertBtcForBalance(number_format(floatval(0), 5, '.', ''), $currency), $currency);
        }

        return '~'.self::getFormatted(self::convertBtcForBalance(number_format(floatval(''.self::getServerBalance()), 5, '.', ''), $currency), $currency);
    }

    public static function convertBtc($btc)
    {
        $rate = self::getRate('EUR');

        return round(round((float) $rate, 2) * $btc / 100, 2) * 100;
    }

    public static function convertBtcForBalance($btc, $currency = null)
    {
        if ($currency == null) {
            $currency = Setting::getShopCurrency();
        }

        $rate = self::getRate('EUR');

        return round(round((float) $rate, 2) * $btc, 2) * 100;
    }

    public static function getFormatted($cent = 0, $currency = null)
    {
        return number_format($cent / 100, 2, ',', '.').' '.$currency;
    }

    public static function getRate($currency = null)
    {
        /*
        * Caching BTC Rate to increase performance
        */
        $currency = strtoupper($currency);

        $jsonString = Cache::remember('bitcoin_ticker', 5, function () {
            $ch = curl_init();

            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_URL, 'https://blockchain.info/ticker');

            $str = curl_exec($ch);
            curl_close($ch);

            return $str;
        });

        $json = @json_decode($jsonString, true);

        if (isset($json[$currency])) {
            return $json[$currency]['sell'];
        }

        return 0;
    }

    public static function getBtcAmount($euro_amount) {
        $rate = self::getRate('EUR');

        return number_format($euro_amount / $rate, 8, '.', '');
    }

    public static function convertToEuro($btc_amount) {
        // Zu Euro konvertieren
        $client = new Client();
        $response = $client->get('https://blockchain.info/ticker');
        $json_array = json_decode($response->getBody(), true);
        $amount_euro = round($btc_amount * $json_array['EUR']['last'], 2);

        return $amount_euro;
    }

    public static function sendBitcoin($wallet, $amount) {
        try {

            if(self::prepareBitcoinClient() == null) {
                // Bitcoin Server connection Fehler
                return ['status' => false, 'message' => 'Es konnte keine Verbindung zum Bitcoin Server hergestellt werden'];
            }

            $result = self::prepareBitcoinClient()->sendToAddress($wallet, $amount, "Cashout", "Cashout", false, true);
  
            return ['status' => true, 'message' => 'Geld erfolgreich gesendet', 'txid' => $result->get()];
          } catch (\Exception $ex) {
            return ['status' => false, 'message' => 'Geld konnte nicht gesendet werden. Möglicherweise ist der Betrag zu hoch. Nachricht: ' . $ex->getMessage()];
          }
    }
}

