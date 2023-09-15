<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Models\UserOrder;
use Carbon\Carbon;

class DeleteOldOrders extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'orders:delete';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Deletes orders older than 30 days';

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
        $orders = UserOrder::where('created_at', '<=', Carbon::now()->subDays(30)->toDateTimeString())->get();

        // Alle gefunden Transaktionen löschen
        foreach($orders as $order) {
            $order->delete();
        }
    }
}
