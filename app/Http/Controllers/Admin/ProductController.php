<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Product;
use App\Models\ProductStock;
use Session;
use Auth;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.product.view');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.product.add');
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
        if(!Auth::user()->can('Produkte verwalten')) {
            Session::flash('error', __('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));
            toastr()->error(__('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));

            return redirect()->back();
        }

        $validated = $request->validate([
            'name' => 'required|max:30',
            'description_short' => 'nullable|max:50',
            'category' => 'required|integer',
            'price' => 'required|numeric',
            'price_old' => 'nullable|numeric',
            'product_type' => 'required|in:virtuell,physisch,unlimited',
        ]);

        //return $request;

        $product = new Product();

        $product->name = $request->name;
        $product->description_short = $request->description_short;
        $product->description = $request->description;
        $product->content = $request->content;
        $product->price_euro = $request->price;
        $product->old_price_euro = $request->price_old;
        $product->category_id = $request->category;
        $product->weight_text = $request->weight_text ?: 'g';

        if($request->has('dropable')) {
            $product->dropable = 1;
        }


        if($request->product_type == 'virtuell') {
            $product->use_stock = 1;
            $product->product_type = 'virtuell';
        } elseif($request->product_type == 'unlimited') {
            $product->product_type = 'unlimited';

            if(empty($product->content)) 
            {
                Session::flash('error', __("Produkt konnte nicht erstellt werden, du hast keine Nachricht für den Käufer angegeben."));
                toastr()->error(__("Produkt konnte nicht erstellt werden, du hast keine Nachricht für den Käufer angegeben."));

                return redirect()->back();
            }
        } elseif($request->product_type == 'physisch') {
            $product->product_type = 'physisch';
        }

        $product->background_url = $request->background_url;

        $product->save();

        Session::flash('success', __("Product \"{$product->name}\" erfolgreich erstellt"));
        toastr()->success(__("Product \"{$product->name}\" erfolgreich erstellt"));
        return redirect()->route('admin.products');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // Berechtigungs überprüfung
        if(!Auth::user()->can('Produkte verwalten')) {
            Session::flash('error', __('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));
            toastr()->error(__('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));

            return redirect()->back();
        }

        
        $product = Product::findOrFail($id);
        return view('admin.product.manage', ['product' => $product]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        // Berechtigungs überprüfung
        if(!Auth::user()->can('Produkte verwalten')) {
            Session::flash('error', __('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));
            toastr()->error(__('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));

            return redirect()->back();
        }

        $product = Product::findOrFail($id);
        return view('admin.product.edit', ["product" => $product]);
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
        // Berechtigungs überprüfung
        if(!Auth::user()->can('Produkte verwalten')) {
            Session::flash('error', __('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));
            toastr()->error(__('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));

            return redirect()->back();
        }

        $validated = $request->validate([
            'name' => 'required|max:30',
            'description_short' => 'nullable|max:50',
            'category' => 'required|integer',
            'price' => 'required|numeric',
            'price_old' => 'nullable|numeric',
            'product_type' => 'required|in:virtuell,physisch,unlimited',
        ]);

        //return $request;

        $product = Product::findOrFail($id);

        $product->name = $request->name;
        $product->description_short = $request->description_short;
        $product->description = $request->description;
        $product->content = $request->content;
        $product->price_euro = $request->price;
        $product->old_price_euro = $request->price_old;
        $product->category_id = $request->category;
        $product->weight_text = $request->weight_text ?: 'g';

        if($request->has('dropable')) {
            $product->dropable = 1;
        } else {
            $product->dropable = 0;
        }

        
        if($request->product_type == 'virtuell') {
            $product->use_stock = 1;
            $product->product_type = 'virtuell';
        } elseif($request->product_type == 'unlimited') {
            $product->product_type = 'unlimited';

            if(empty($product->content)) 
            {
                Session::flash('error', __("Produkt konnte nicht bearbeitet werden, du hast keine Nachricht für den Käufer angegeben."));
                toastr()->error(__("Produkt konnte nicht bearbeitet werden, du hast keine Nachricht für den Käufer angegeben."));

                return redirect()->back();
            }
        } elseif($request->product_type == 'physisch') {
            $product->product_type = 'physisch';
        }

        $product->background_url = $request->background_url;

        $product->save();

        Session::flash('success', __("Product \"{$product->name}\" erfolgreich aktualisiert"));
        toastr()->success(__("Product \"{$product->name}\" erfolgreich aktualisiert"));
        return redirect()->route('admin.products');
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

        Product::findOrFail($id)->delete();
        App\Models\ProductStock::where('product_id', '=', $id)->delete();

        Session::flash('success', 'Datensätze & Produkte erfolgreich entfernt');
        toastr()->success('Datensätze & Produkte erfolgreich entfernt');
        return redirect()->back();
    }

    public function destroyById(Request $request) 
    {
        $productIds = $request->input('id');
        $products = Product::whereIn('id', $productIds);
        $productStocks = ProductStock::whereIn('product_id', $productIds);

        $products->delete();
        $productStocks->delete();

        Session::flash('success', 'Produkt(e) erfolgreich aus der Datenbank entfernt');
        die();
    }

    public function toggleListing(Request $request, $id = null) 
    {
        if($id != null) 
        {
            $product = Product::findOrFail($id);

            if($product->listed) {
                $product->listed = false;
            } else {
                $product->listed = true;
            }

            $product->save();
        } else {
            $ids = $request->input('id');
            $products = Product::whereIn('id', $ids);

            foreach($products->get() as $product) 
            {
                if($product->listed) {
                    $product->listed = 0;
                } else {
                    $product->listed = 1;
                }
                $product->save();
            }

        }

        Session::flash('success', 'Produkt(e) wurden erfolgreich bearbeitet');
        //return redirect()->back();
    }

    public function updateOrder(Request $request)
    {
        foreach($request->input('order', []) as $row)
        {
            Product::find($row['id'])->update([
                'position' => $row['position']
            ]);
        }
        return response(' Updated Successfully.', 200);
    }
}
