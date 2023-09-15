<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Faq;

use Auth;
use Session;

class FAQController extends Controller
{
    public static function index() {
        return view('admin.faq.index');
    }

    public static function store(Request $request) {
        $request->validate([
            'question' => 'required|string',
            'answer' => 'required|string'
        ]);

        $faq = new Faq();

        $faq->question = $request['question'];
        $faq->answer = $request['answer'];

        $faq->save();

        Session::flash('success', 'FAQ erfolgreich erstellt');
        return redirect()->back();
    }

    public static function edit($id) 
    {
        $faq = Faq::findOrFail($id);

        return view('admin.faq.edit', ['faq' => $faq]);
    }

    public function update(Request $request, $id) 
    {
        $request->validate([
            "question" => "required|string",
            "answer" => "required|string"
        ]);

        $faq = Faq::findOrFail($id);

        $faq->update(["question" => $request['question'], "answer" => $request['answer']]);
        $faq->save();

        Session::flash('success', 'FAQ erfolgreich bearbeitet');
        return redirect()->route('admin.faq');
    }

    public static function destroy($id) 
    {
        $faq = Faq::findOrFail($id);

        $faq->delete();

        Session::flash('success', 'FAQ erfolgreich gelöscht');
        return redirect()->back();
    }
}
