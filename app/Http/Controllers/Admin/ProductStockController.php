<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Auth;
use Session;

use App\Models\ProductStock;

class ProductStockController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
    public function store($id, Request $request)
    {
        // Berechtigungs überprüfung
        if(!Auth::user()->can('Produkte verwalten')) {
            Session::flash('error', __('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));
            toastr()->error(__('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));

            return redirect()->back();
        }

        $validated = $request->validate([
            "content" => "required",
        ]);

        $amountImportet = 0;
        $amountDuplicates = 0;

        if($request->settings == "custom") {
            if(empty($request->delimiter)) {
                Session::flash('error', __('Du musst ein Trennzeichen angeben'));
                toastr()->error(__('Du musst ein Trennzeichen angeben'));
    
                return redirect()->back();
            }

            // In Zeilen umwandeln
            $lines = explode($request->delimiter, $request->content);

            // Jede Zeile in Datanbank importieren
            foreach($lines as $line) {

                // Schauen, ob Datensatz für dieses Produkt schon importiert wurde
                if(ProductStock::checkIfItemExists($id, $line)) {
                    $amountDuplicates++;
                    continue;
                }

                $stockItem = new ProductStock();
                $stockItem->product_id = $id;
                $stockItem->content = $line;
                $stockItem->save();
                $amountImportet++;
            }
        } elseif($request->settings == "linebyline") {
            // In Zeilen umwandeln
            $lines = explode(PHP_EOL, $request->content);

            // Jede Zeile in Datanbank importieren
            foreach($lines as $line) {

                // Schauen, ob Datensatz für dieses Produkt schon importiert wurde
                if(ProductStock::checkIfItemExists($id, $line)) {
                    $amountDuplicates++;
                    continue;
                }

                $stockItem = new ProductStock();
                $stockItem->product_id = $id;
                $stockItem->content = $line;
                $stockItem->save();
                $amountImportet++;
            }
        }

        Session::flash('success', __("Erfolgreich {$amountImportet} Datensätze importiert. {$amountDuplicates} Duplikate übersprungen."));
        toastr()->success(__("Erfolgreich {$amountImportet} Datensätze importiert. {$amountDuplicates} Duplikate übersprungen."));

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
    public function edit($id)
    {
        //
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
        if(!Auth::user()->can('Produkte verwalten')) {
            Session::flash('error', __('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));
            toastr()->error(__('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));

            return redirect()->back();
        }

        ProductStock::findOrFail($id)->delete();

        Session::flash('success', 'Datensatz erfolgreich entfernt');
        toastr()->success('Datensatz erfolgreich entfernt');
        return redirect()->back();
    }

    public function destroyById(Request $request) 
    {
        $stockItemIds = $request->input('id');
        $stock = ProductStock::whereIn('id', $stockItemIds);
        if($stock->delete()) 
        {
            Session::flash('success', 'Daten erfolgreich aus der Datenbank entfernt');
            exit;
        }


    }
}
