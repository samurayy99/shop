<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Models\UserTransaction;

class BitcoinCheck extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'bitcoin:check';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Checks for incoming transactions';

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
        $transactions = UserTransaction::where('status', '!=', 'paid')->get();

        foreach ($transactions as $transaction) {
            try {
                $transaction->updateOnPaid();
            } catch (\Exception $ex) {
            }
        }
    }
}
