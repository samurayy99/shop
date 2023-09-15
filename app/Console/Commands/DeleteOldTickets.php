<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Models\Ticket;
use App\Models\TicketMessage;
use App\Models\User;

use Carbon\Carbon;

class DeleteOldTickets extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'tickets:deleteold';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Deletes tickets older than 14 days and closed';

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
        // Alle alten geschlossenen Tickets abrufen
        $oldTickets = Ticket::where([['updated_at', '<=', Carbon::now()->subDays(14)->toDateTimeString()], ['ticket_status', '=', 'geschlossen']])->get();

        // Alle gefunden Transaktionen löschen
        foreach($oldTickets as $ticket) {
            // Nachrichten im Ticket löschen
            TicketMessage::where('ticket_id', '=', $ticket->id)->delete();

            // Ticket löschen
            $ticket->delete();
        }
    }
}
