<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\User;
use App\Models\Ticket;
use App\Models\TicketMessage;

class TicketControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testOpenTickets()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $openTicket = Ticket::factory()->create([
            'user_id' => $user->id,
            'ticket_status' => 'offen'
        ]);

        $response = $this->get('/tickets/open');
        $response->assertSee($openTicket->ticket_title);
    }

    public function testAnsweredTickets()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $answeredTicket = Ticket::factory()->create([
            'user_id' => $user->id,
            'ticket_status' => 'beantwortet'
        ]);

        $response = $this->get('/tickets/answered');
        $response->assertSee($answeredTicket->ticket_title);
    }

    public function testClosedTickets()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $closedTicket = Ticket::factory()->create([
            'user_id' => $user->id,
            'ticket_status' => 'geschlossen'
        ]);

        $response = $this->get('/tickets/closed');
        $response->assertSee($closedTicket->ticket_title);
    }

    public function testCreateTicket()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $response = $this->post('/tickets/create', [
            'subject' => 'Test Subject',
            'department' => 'Allgemein',
            'message' => 'Test Message'
        ]);

        $response->assertRedirect('/tickets/open');
    }

    public function testViewTicket()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $ticket = Ticket::factory()->create([
            'user_id' => $user->id
        ]);

        $response = $this->get('/tickets/' . $ticket->id);
        $response->assertSee($ticket->ticket_title);
    }

    public function testAddMessage()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $ticket = Ticket::factory()->create([
            'user_id' => $user->id
        ]);

        $response = $this->post('/tickets/' . $ticket->id . '/add', [
            'message' => 'New Message'
        ]);

        $response->assertRedirect('/tickets/' . $ticket->id);
    }

    public function testCloseTicket()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $ticket = Ticket::factory()->create([
            'user_id' => $user->id
        ]);

        $response = $this->post('/tickets/' . $ticket->id . '/close');
        $response->assertRedirect('/tickets/' . $ticket->id);
    }
}