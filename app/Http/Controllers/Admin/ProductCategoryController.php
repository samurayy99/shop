<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\ProductCategory;
use App\Models\Product;
use App\Models\ProductStock;

use Auth;
use Session;
use Illuminate\Support\Str;

class ProductCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.category.view');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // Berechtigungs überprüfung
        if(!Auth::user()->can('Kategorien verwalten')) {
            Session::flash('error', __('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));
            toastr()->error(__('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));

            return redirect()->back();
        }

        return view('admin.category.add');
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
        if(!Auth::user()->can('Kategorien verwalten')) {
            Session::flash('error', __('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));
            toastr()->error(__('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));

            return redirect()->back();
        }


        $validated = $request->validate([
            "name" => "required|max:24|unique:product_categories",
            "category_featured" => "required|boolean"
        ]);

        if(empty($request->category_slug)) {
            $request->category_slug = $request->name;
        }

        $category = new ProductCategory();

        $category->name = $request->name;
        $category->slug = Str::slug($request->category_slug);
        $category->featured = $request->category_featured;

        $category->save();

        Session::flash('success', __('Kategorie erfolgreich erstellt'));
        toastr()->success(__('Kategorie erfolgreich erstellt'));
        return redirect()->route('admin.categories');
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
        // Berechtigungs überprüfung
        if(!Auth::user()->can('Kategorien verwalten')) {
            Session::flash('error', __('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));
            toastr()->error(__('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));

            return redirect()->back();
        }

        $category = ProductCategory::findOrFail($id);
        $products = Product::where('category_id', $id)->orderBy('position','ASC')->get();

        return view('admin.category.edit', ['category' => $category, 'products' => $products]);
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
        if(!Auth::user()->can('Kategorien verwalten')) {
            Session::flash('error', __('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));
            toastr()->error(__('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));

            return redirect()->back();
        }


        $validated = $request->validate([
            "name" => "required|max:24",
            "category_featured" => "required|boolean"
        ]);

        $category = ProductCategory::findOrFail($id);

        if(!empty($request->category_slug) && $request->category_slug != $category->slug) {
            $category->slug = Str::slug($request->category_slug);
        }

        $category->name = $request->name;
        $category->featured = $request->category_featured;

        $category->save();

        Session::flash('success', __('Kategorie erfolgreich bearbeitet'));
        toastr()->success(__('Kategorie erfolgreich bearbeitet'));
        return redirect()->route('admin.categories');
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
        if(!Auth::user()->can('Kategorien verwalten')) {
            Session::flash('error', __('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));
            toastr()->error(__('Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen'));

            return redirect()->back();
        }

        // Kategorie löschen
        ProductCategory::findOrFail($id)->delete();

        $removedProducts = 0;
        $removedData = 0;

        foreach(Product::where('category_id', '=', $id)->get() as $product) {
            $removedData = $removedData + ProductStock::where('product_id', '=', $product->id)->count();
            ProductStock::where('product_id', '=', $product->id)->delete();
            $product->delete();

            $removedProducts++;
        }

        Session::flash('success', "Kategorie erfolgreich entfernt. Insgesamt wurden {$removedProducts} Produkte und {$removedData} Datensätze entfernt.");
        toastr()->success("Kategorie erfolgreich entfernt. Insgesamt wurden {$removedProducts} Produkte und {$removedData} Datensätze entfernt.");

        return redirect()->back();
    }
}
