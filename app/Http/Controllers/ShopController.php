<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\ProductCategory;

class ShopController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return view('shop.entry', ['products' => $products]);
    }

    public function show($slug)
    {
        $selectedCategory = ProductCategory::getIdBySlug($slug);
        $products = Product::getAllProductsFromCategory($selectedCategory->id);
        return view('shop.entry', ['products' => $products, 'selectedCategory' => $selectedCategory]);
    }

    public function addToCart($id)
    {
        // Implement your logic to add the product with the given ID to the shopping cart
    }

    public function create()
    {
        return response('Not implemented', 501);
    }

    public function store(Request $request)
    {
        return response('Not implemented', 501);
    }

    public function edit($id)
    {
        return response('Not implemented', 501);
    }

    public function update(Request $request, $id)
    {
        return response('Not implemented', 501);
    }

    public function destroy($id)
    {
        return response('Not implemented', 501);
    }
}