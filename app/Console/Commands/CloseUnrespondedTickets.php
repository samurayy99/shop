<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Models\Ticket;
use App\Models\TicketMessage;
use App\Models\User;

use Carbon\Carbon;

class CloseUnrespondedTickets extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'tickets:close';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

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
        // Alle unbeantworteten Tickets abrufen
        $unrepliedTickets = Ticket::where([['updated_at', '<=', Carbon::now()->subDays(7)->toDateTimeString()], ['ticket_status', '=', 'beantwortet']])->get();

        // Alle gefunden Tickets schließen
        foreach($unrepliedTickets as $ticket) {
            $adminUser = User::role('Admin')->get()[0];

            // Nachricht im Ticket an Benutzer senden
            $ticketMessage = new TicketMessage();
            $ticketMessage->user_id = $adminUser->id;
            $ticketMessage->ticket_id = $ticket->id;
            $ticketMessage->content = "Das Ticket wurde aufgrund von Inaktivität automatisch geschlossen";

            $ticketMessage->save();

            // Ticket schließen
            $ticket->ticket_status = 'geschlossen';
            $ticket->save();
        }
    }
}
