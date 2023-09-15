<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\News;
use Illuminate\Support\Facades\Session;
use Auth;
use Config;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $currentNews = News::orderBy('id', 'DESC')->get();

        return view('admin.news')->withNews($currentNews);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Berechtigungs überprüfung
        if(!Auth::user()->can('Neuigkeiten erstellen')) {
            Session::flash('error', __('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));
            toastr()->error(__('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));

            return redirect()->back();
        }

        $news = new News();

        $validated = $request->validate([
            "news_title" => "required|max:60",
            "news_content" => "required",
        ]);

        $news->user = Auth::user()->id;
        $news->title = $request->news_title;
        $news->body = $request->news_content;

        $news->save();

        Session::flash('success', __('Neuigkeiten erfolgreich veröffentlicht'));
        toastr()->success(__('Neuigkeiten erfolgreich veröffentlicht'));
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id, Request $request)
    {
        // Berechtigungs überprüfung
        if(!Auth::user()->can('Neuigkeiten bearbeiten')) {
            Session::flash('error', __('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));
            toastr()->error(__('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));

            return redirect()->back();
        }

        $validated = $request->validate([
            "news_title" => "required|max:60",
            "news_content" => "required",
        ]);

        $newsItem = News::findOrFail($id);

        $newsItem->title = $request->news_title;
        $newsItem->body = $request->news_content;
        $newsItem->touch();
        $newsItem->save();

        Session::flash('success', __('Neuigkeiten erfolgreich bearbeitet'));
        toastr()->success(__('Neuigkeiten erfolgreich bearbeitet'));

        return redirect()->back();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // Berechtigungs überprüfung
        if(!Auth::user()->hasPermissionTo('Neuigkeiten löschen', 'web')) {
            Session::flash('error', __('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));
            toastr()->error(__('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));

            return redirect()->back();
        }

        News::findOrFail($id)->delete();

        Session::flash('success', __('Neuigkeiten erfolgreich bearbeitet'));
        toastr()->success(__('Neuigkeiten erfolgreich bearbeitet'));

        return redirect()->back();
    }
}
