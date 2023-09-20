<?php

use Illuminate\Support\Facades\Route;
use App\Models\Product;

Route::post('auth/general-login', 'App\Http\Controllers\AuthController@generalLogin')->name('auth.general.login');


// Routes that display your website's pages
Route::get('/', 'App\Http\Controllers\HomeController@index')->name('home');


// Routes that handle purchasing
Route::middleware(['auth'])->group(function () {
    Route::post('/shop/checkout', 'CheckoutController@create')->name('shop.checkout');
    // Other routes...
});

//Auth Routes
Route::get('/refresh_captcha', 'AuthController@refreshCaptcha');
Route::get('auth/login', 'App\Http\Controllers\AuthController@index')->name('auth.login');
Route::post('auth/login', 'App\Http\Controllers\AuthController@authenticate')->name('auth.login.post');
Route::get('auth/register', 'App\Http\Controllers\AuthController@create')->name('auth.register');
Route::post('auth/register', 'App\Http\Controllers\AuthController@store')->name('auth.register.post');
Route::get('auth/logout', 'App\Http\Controllers\AuthController@logout')->name('auth.logout');

// Shop Routes
Route::get('shop/{slug}', 'App\Http\Controllers\ShopController@show')->name('shop.cat.show');
Route::get('/shop', 'App\Http\Controllers\ShopController@index')->name('shop');
Route::post('shop/checkout', 'App\Http\Controllers\CheckoutController@create')->middleware('auth')->name('shop.checkout');
Route::get('shop/checkout/overview', 'App\Http\Controllers\CheckoutController@index')->middleware('auth')->name('shop.checkout.overview');
Route::post('shop/checkout/create', 'App\Http\Controllers\CheckoutController@store')->middleware('auth')->name('shop.checkout.create');

// FAQ Routes
Route::get('faq', 'App\Http\Controllers\FaqController@index')->name('faq');

Route::get('user/orders', 'App\Http\Controllers\UserOrderController@index')->middleware('auth')->name('user.orders');
Route::get('user/order/{id}', 'App\Http\Controllers\UserOrderController@show')->middleware('auth')->name('user.order.show');
Route::get('user/order/{id}/delete', 'App\Http\Controllers\UserOrderController@destroy')->middleware('auth')->name('user.order.delete');

Route::get('support/tickets/answered', 'App\Http\Controllers\TicketController@answered_tickets')->middleware('auth')->name('support.tickets.answered');
Route::get('support/tickets/open', 'App\Http\Controllers\TicketController@open_tickets')->middleware('auth')->name('support.tickets.open');
Route::get('support/tickets/closed', 'App\Http\Controllers\TicketController@closed_tickets')->middleware('auth')->name('support.tickets.closed');
Route::get('support/ticket', 'App\Http\Controllers\TicketController@create')->middleware('auth')->name('support.ticket.create');
Route::post('support/ticket/create', 'App\Http\Controllers\TicketController@store')->middleware('auth')->name('support.ticket.create.save');
Route::get('support/ticket/{id}', 'App\Http\Controllers\TicketController@show')->middleware('auth')->name('support.ticket.show');
Route::post('support/ticket/{id}/add_message', 'App\Http\Controllers\TicketController@add')->middleware('auth')->name('support.ticket.message.add');
Route::get('support/ticket/{id}/close', 'App\Http\Controllers\TicketController@close')->middleware('auth')->name('support.ticket.close');

Route::get('user/wallet', 'App\Http\Controllers\CashinController@index')->middleware('auth')->name('user.cashin');
Route::post('user/wallet', 'App\Http\Controllers\CashinController@store')->middleware('auth')->name('user.cashin.create');
Route::get('user/wallet/pay/{uuid}', 'App\Http\Controllers\CashinController@show')->middleware('auth')->name('user.cashin.pay');
Route::get('user/settings', 'App\Http\Controllers\SettingsController@index')->middleware('auth')->name('user.settings');
Route::post('user/settings', 'App\Http\Controllers\SettingsController@update')->middleware('auth')->name('user.settings.update');
Route::get('user/request-delete', 'App\Http\Controllers\DeleteRequestController@index')->middleware('auth')->name('user.delete.request');
Route::post('user/request-delete', 'App\Http\Controllers\DeleteRequestController@store')->middleware('auth')->name('user.delete.request.save');

Route::get('/contact', 'App\Http\Controllers\ContactController@index')->name('contact');

// Language Routes
Route::get('lang/{locale}', function ($locale) {
    app()->setLocale($locale);
    session()->put('locale', $locale);
    return redirect()->back();
})->name('lang');

// Existing code in web.php...

// Admin Panel Routes
Route::middleware(['auth', 'App\Http\Middleware\IsAdmin'])->group(function () {
    Route::get('/admin/dashboard', 'App\Http\Controllers\AdminController@dashboard')->name('admin.dashboard');
    Route::get('/admin/users', 'App\Http\Controllers\Admin\UserController@index')->name('admin.user.view');

    // Admin order management routes
    Route::get('/admin/orders', 'App\Http\Controllers\Admin\OrderController@index')->name('admin.order.view');
    Route::get('/admin/order/{id}', 'App\Http\Controllers\Admin\OrderController@show')->name('admin.order.show');
    Route::post('/admin/order/{id}', 'App\Http\Controllers\Admin\OrderController@update')->name('admin.order.update');

    // Other routes...

    Route::get('/{any?}', function ($any = 'base') {
        $products = Product::all(); // Fetch all products
        return view('base', compact('products')); // Pass the products to the view
    })->where('any', '.*')->name('base');

    Route::get('/{any}', function () {
        return view('base');
    })->where('any', '.*');

});