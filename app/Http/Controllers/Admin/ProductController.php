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
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json([
            'view' => view('admin.product.view')->render(),
            'status' => 'success'
        ], 200);
    }

    // Add this method in your ProductController.php
    public function loadBaseView()
    {
        $products = Product::all();
        return response()->json([
            'view' => view('base', compact('products'))->render(),
            'status' => 'success'
        ], 200);
    }

    // Private method for authorization check
    private function checkAuthorization()
    {
        if (!Auth::user()->can('Produkte verwalten')) {
            return response()->json([
                'message' => 'Du hast nicht die benötigten Berechtigungen um diese Aktion durchzuführen',
                'status' => 'error'
            ], 403);
        }
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function create()
    {
        $this->checkAuthorization();
        return response()->json([
            'view' => view('admin.product.add')->render(),
            'status' => 'success'
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $this->checkAuthorization();

        $validated = $request->validate([
            'name' => 'required|max:30',
            'description_short' => 'nullable|max:50',
            'category' => 'required|integer',
            'price' => 'required|numeric',
            'price_old' => 'nullable|numeric',
            'product_type' => 'required|in:virtuell,physisch,unlimited',
        ]);

        $product = new Product();
        $product->fill($validated);
        $product->save();

        return response()->json([
            'message' => "Product \"{$product->name}\" erfolgreich erstellt",
            'status' => 'success'
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $this->checkAuthorization();
        $product = Product::findOrFail($id);
        return response()->json([
            'view' => view('admin.product.manage', ['product' => $product])->render(),
            'status' => 'success'
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit($id)
    {
        $this->checkAuthorization();
        $product = Product::findOrFail($id);
        return response()->json([
            'view' => view('admin.product.edit', ["product" => $product])->render(),
            'status' => 'success'
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $this->checkAuthorization();

        $validated = $request->validate([
            'name' => 'required|max:30',
            'description_short' => 'nullable|max:50',
            'category' => 'required|integer',
            'price' => 'required|numeric',
            'price_old' => 'nullable|numeric',
            'product_type' => 'required|in:virtuell,physisch,unlimited',
        ]);

        $product = Product::findOrFail($id);
        $product->fill($validated);
        $product->save();

        return response()->json([
            'message' => "Product \"{$product->name}\" erfolgreich aktualisiert",
            'status' => 'success'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $this->checkAuthorization();
        Product::findOrFail($id)->delete();
        ProductStock::where('product_id', '=', $id)->delete();
        return response()->json([
            'message' => 'Datensätze & Produkte erfolgreich entfernt',
            'status' => 'success'
        ], 200);
    }

    /**
     * Remove the products by ID from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroyById(Request $request)
    {
        $this->checkAuthorization();
        $productIds = $request->input('id');
        Product::destroy($productIds);
        ProductStock::whereIn('product_id', $productIds)->delete();
        return response()->json([
            'message' => 'Produkt(e) erfolgreich aus der Datenbank entfernt',
            'status' => 'success'
        ], 200);
    }

    /**
     * Toggle the listing of a product.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function toggleListing(Request $request, $id = null)
    {
        $this->checkAuthorization();
        $product = Product::findOrFail($id);
        $product->listed = !$product->listed;
        $product->save();
        return response()->json([
            'message' => 'Produkt(e) wurden erfolgreich bearbeitet',
            'status' => 'success'
        ], 200);
    }

    /**
     * Update the order of products.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateOrder(Request $request)
    {
        $this->checkAuthorization();
        foreach ($request->input('order', []) as $row) {
            Product::find($row['id'])->update([
                'position' => $row['position']
            ]);
        }
        return response()->json([
            'message' => 'Updated Successfully.',
            'status' => 'success'
        ], 200);
    }
}