<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\ProductCategory;

class ShopController extends Controller
{
    public function index(): \Illuminate\View\View
    {
        $products = Product::all();
        return view('base', ['products' => $products]);
    }

    public function create()
    {
        return response('Not implemented', 501);
    }

    public function store(Request $request)
    {
        return response('Not implemented', 501);
    }

    public function show($slug): \Illuminate\View\View
    {
        $selectedCategory = ProductCategory::getIdBySlug($slug);
        return view('base', ['selectedCategory' => $selectedCategory]);
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