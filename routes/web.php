<?php

use Illuminate\Support\Facades\Route;
use App\Models\Product;

// Auth Routes
Route::post('auth/general-login', 'App\Http\Controllers\AuthController@generalLogin')->name('auth.general.login');
Route::post('/authenticate', 'App\Http\Controllers\AuthController@authenticate');
Route::get('/refresh-captcha', 'AuthController@refreshCaptcha');

Route::get('auth/login', 'App\Http\Controllers\AuthController@index')->name('auth.login');
Route::post('auth/login', 'App\\Http\\Controllers\\AuthController@login')->name('normal.login');
Route::post('auth/admin/login', 'App\\Http\\Controllers\\AuthController@adminLogin')->name('admin.login');
Route::get('auth/register', 'App\Http\Controllers\AuthController@create')->name('auth.register');
Route::post('auth/register', 'App\Http\Controllers\AuthController@store')->name('auth.register.post');
Route::get('auth/logout', 'App\Http\Controllers\AuthController@logout')->name('auth.logout');

// Shop Routes
Route::get('shop/{slug}', 'App\Http\Controllers\ShopController@show')->name('shop.cat.show');
Route::get('/shop', 'App\Http\Controllers\ShopController@index')->name('shop');

// Routes that handle purchasing
Route::middleware(['auth'])->group(function () {
    Route::post('shop/checkout', 'App\Http\Controllers\CheckoutController@create')->name('shop.checkout');
    Route::get('shop/checkout/overview', 'App\Http\Controllers\CheckoutController@index')->name('shop.checkout.overview');
    Route::post('shop/checkout/create', 'App\Http\Controllers\CheckoutController@store')->name('shop.checkout.create');
});

// FAQ Routes
Route::get('faq', 'App\Http\Controllers\FaqController@index')->name('faq');

// User Order Routes
Route::get('user/orders', 'App\Http\Controllers\UserOrderController@index')->middleware('auth')->name('user.orders');
Route::get('user/order/{id}', 'App\Http\Controllers\UserOrderController@show')->middleware('auth')->name('user.order.show');
Route::get('user/order/{id}/delete', 'App\Http\Controllers\UserOrderController@destroy')->middleware('auth')->name('user.order.delete');

// Language switcher
Route::get('lang/{locale}', function ($locale) {
    app()->setLocale($locale);
    session()->put('locale', $locale);
    return redirect()->back();
})->name('lang');

// Admin Panel Routes
Route::middleware(['auth', 'App\Http\Middleware\IsAdmin'])->group(function () {
    Route::get('/admin/dashboard', 'App\Http\Controllers\AdminController@dashboard')->name('admin.dashboard');
    Route::get('/admin/users', 'App\Http\Controllers\Admin\UserController@index')->name('admin.user.view');
    Route::get('/admin/orders', 'App\Http\Controllers\Admin\OrderController@index')->name('admin.order.view');
    Route::get('/admin/order/{id}', 'App\Http\Controllers\Admin\OrderController@show')->name('admin.order.show');
    Route::post('/admin/order/{id}', 'App\Http\Controllers\Admin\OrderController@update')->name('admin.order.update');
});

// Catch-all route
Route::get('/{any?}', function ($any = 'base') {
    $products = Product::all(); // Fetch all products
    $categories = \App\Models\ProductCategory::all(); // Fetch all categories
    return view('base', compact('products', 'categories')); // Pass the products and categories to the view
})->where('any', '.*')->name('base');