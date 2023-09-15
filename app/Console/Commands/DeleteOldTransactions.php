<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Models\UserTransaction;
use Carbon\Carbon;


class DeleteOldTransactions extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'transactions:delete';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Deletes transactions older than 15 days';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        // Alle bezahlten Transaktionen die älter als 15 Tage sind abrufen
        $paidTransactions = UserTransaction::where('created_at', '<=', Carbon::now()->subDays(15)->toDateTimeString())->get();

        // Alle gefunden Transaktionen löschen
        foreach($paidTransactions as $transaction) {
            $transaction->delete();
        }

        // Alle unbezahlten Transaktion abrufen, die älter als 24 stunden sind
        $unpaidTransactions = UserTransaction::where([['created_at', '<=', Carbon::now()->subHours(24)->toDateTimeString()], ['status', '=', 'waiting']])->get();

        // Alle gefunden Transaktionen löschen
        foreach($unpaidTransactions as $transaction) {
            $transaction->delete();
        }
    }
}
