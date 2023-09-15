<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Settings;

class CreateSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->increments('id');
            $table->string('key');
            $table->text('value')->nullable();
            $table->string('type', 20)->default('string');
            $table->timestamps();
        });

        $defaultSettings = [
            ['app.name', 'Highsociety', 'string'],
            ['app.url', 'http://localhost', 'string'],
            ['app.timezone', 'Europe/Berlin', 'string'],
            ['app.registered_only', '0', 'bool'],
            ['shop.currency', 'EUR', 'string'],
            ['shop.btc_confirms_needed', '0', 'int'],
            ['shop.show_full_stock', '1', 'bool'],
            ['shop.pgp_key', '', 'string'],
            ['jabber.address', '', 'string'],
            ['jabber.username', '', 'string'],
            ['jabber.password', '', 'string'],
            ['bitcoin.api', null, 'string'],
            ['xmr.api', '', 'string'],
            ['css.background_url', '', 'string'],
            ['css.primary_color', '#000000', 'string'],
            ['shop.total_profit', '0', 'int'],
            ['btc.auto_cashout_amount', '0.0032', 'string'],
            ['btc.auto_cashout_wallet', '', 'string']
        ];

        foreach ($defaultSettings as $setting) {
            Settings::create([
                'key' => $setting[0],
                'value' => $setting[1],
                'type' => $setting[2],
            ]);
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('settings');
    }
}
