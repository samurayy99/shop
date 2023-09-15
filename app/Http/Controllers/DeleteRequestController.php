<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Session;
use Auth;

use App\Models\DeleteRequest;

class DeleteRequestController extends Controller
{
    public function index() 
    {
        if(DeleteRequest::hasOpenRequest(Auth::user()->id)) 
        {
            Session::flash("error", __('Du hast bereits eine offene Anfrage. Dein Konto wird bald gelöscht.'));
            return redirect()->back();
            die(403);
        }
        return view('user.requestDelete');
    }

    public function store(Request $request) 
    {
        $request->validate([
            "reason" => "nullable"
        ]);

        $deleteRequest = new DeleteRequest();

        $deleteRequest->user = Auth::user()->id;
        $deleteRequest->delete_reason = $request->reason ?: "Keine Begründung angegeben";

        $deleteRequest->save();

        Session::flash("success", __('Anfrage erfolgreich gesendet'));
        return redirect()->route('user.settings');
    }
}
