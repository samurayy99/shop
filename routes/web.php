<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// CSS Routes
Route::get('/custom/css', 'App\Http\Controllers\Custom\CSSController@generateCSS')->name('custom-css');


// News Routes
Route::get('/', 'App\Http\Controllers\NewsController@index')->name('site.home');

// Auth Routes
Route::get('auth/login', 'App\Http\Controllers\AuthController@index')->name('auth.login');
Route::post('auth/login', 'App\Http\Controllers\AuthController@authenticate')->name('auth.login.post');
Route::get('auth/registration', 'App\Http\Controllers\AuthController@create')->name('auth.registration');
Route::post('auth/registration', 'App\Http\Controllers\AuthController@store')->name('auth.registration.post');
Route::get('auth/logout', 'App\Http\Controllers\AuthController@logout')->name('auth.logout');

// Shop Routes
Route::get('shop', 'App\Http\Controllers\ShopController@index')->name('shop.entry');
Route::get('shop/{slug}', 'App\Http\Controllers\ShopController@show')->name('shop.cat.show');

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


// Language Routes
Route::get('lang/{locale}', function ($locale) {
    app()->setLocale($locale);
    session()->put('locale', $locale);
    return redirect()->back();
})->name('lang');


// Admin Panel Routes
Route::middleware([IsAdmin::class])->group(function () {
    Route::get('/admin/dashboard', 'App\Http\Controllers\Admin\DashboardController@index')->name('admin.dashboard');

    Route::get('/admin/news', 'App\Http\Controllers\Admin\NewsController@index')->name('admin.news');
    Route::post('/admin/news/save', 'App\Http\Controllers\Admin\NewsController@store')->name('admin.news.save');
    Route::get('/admin/news/delete/{id}', 'App\Http\Controllers\Admin\NewsController@destroy')->name('admin.news.delete');
    Route::post('/admin/news/edit/{id}', 'App\Http\Controllers\Admin\NewsController@edit')->name('admin.news.update');

    Route::get('admin/jabber', 'App\Http\Controllers\Admin\JabberController@index')->name('admin.jabber');
    Route::post('admin/jabber/update', 'App\Http\Controllers\Admin\JabberController@store')->name('admin.jabber.update');
    Route::post('admin/jabber/send', 'App\Http\Controllers\Admin\JabberController@sendMessage')->name('admin.jabber.send');

    Route::get('admin/settings', 'App\Http\Controllers\Admin\SettingsController@index')->name('admin.settings');
    Route::post('admin/settings/save', 'App\Http\Controllers\Admin\SettingsController@store')->name('admin.settings.save');

    Route::get('admin/bitcoin', 'App\Http\Controllers\Admin\BitcoinSettingsController@index')->name('admin.bitcoin');
    Route::post('admin/bitcoin', 'App\Http\Controllers\Admin\BitcoinSettingsController@update')->name('admin.bitcoin.update');
    Route::post('admin/bitcoin/send', 'App\Http\Controllers\Admin\BitcoinSettingsController@sendBitcoin')->name('admin.bitcoin.send');

    Route::get('admin/categories', 'App\Http\Controllers\Admin\ProductCategoryController@index')->name('admin.categories');
    Route::get('admin/category/add', 'App\Http\Controllers\Admin\ProductCategoryController@create')->name('admin.category.add');
    Route::post('admin/category/add', 'App\Http\Controllers\Admin\ProductCategoryController@store')->name('admin.category.add.save');
    Route::get('admin/category/edit/{id}', 'App\Http\Controllers\Admin\ProductCategoryController@edit')->name('admin.category.edit');
    Route::post('admin/category/edit/{id}', 'App\Http\Controllers\Admin\ProductCategoryController@update')->name('admin.category.edit.save');
    Route::get('admin/category/delete/{id}', 'App\Http\Controllers\Admin\ProductCategoryController@destroy')->name('admin.category.delete');

    Route::get('admin/products', 'App\Http\Controllers\Admin\ProductController@index')->name('admin.products');
    Route::get('admin/product/add', 'App\Http\Controllers\Admin\ProductController@create')->name('admin.product.add');
    Route::post('admin/product/add', 'App\Http\Controllers\Admin\ProductController@store')->name('admin.product.add.save');
    Route::get('admin/product/edit/{id}', 'App\Http\Controllers\Admin\ProductController@edit')->name('admin.product.edit');
    Route::post('admin/product/edit/{id}/save', 'App\Http\Controllers\Admin\ProductController@update')->name('admin.product.edit.save');
    Route::get('admin/product/manage/{id}', 'App\Http\Controllers\Admin\ProductController@show')->name('admin.product.manage');
    Route::get('admin/product/delete/{id}', 'App\Http\Controllers\Admin\ProductController@destroy')->name('admin.product.delete');
    Route::post('admin/products/delete', 'App\Http\Controllers\Admin\ProductController@destroyById')->name('admin.products.delete');
    Route::post('admin/product/manage/import/{id}', 'App\Http\Controllers\Admin\ProductStockController@store')->name('admin.product.manage.import');
    Route::get('admin/product/manage/remove-item/{id}', 'App\Http\Controllers\Admin\ProductStockController@destroy')->name('admin.product.manage.delete');
    Route::post('admin/product/manage/remove-items/', 'App\Http\Controllers\Admin\ProductStockController@destroyById')->name('admin.product.manage.destroyItems');
    Route::post('admin/product/manage/toggle-listing/', 'App\Http\Controllers\Admin\ProductController@toggleListing')->name('admin.product.manage.toggleListing');
    Route::get('admin/product/manage/toggle-listing/{id}', 'App\Http\Controllers\Admin\ProductController@toggleListing')->name('admin.product.manage.toggleListingSingle');
    Route::post('admin/product/manage/order', 'App\Http\Controllers\Admin\ProductController@updateOrder')->name('admin.product.manage.updateOrder');



    Route::get('admin/tickets', 'App\Http\Controllers\Admin\TicketController@index')->name('admin.tickets');
    Route::get('admin/ticket/{id}', 'App\Http\Controllers\Admin\TicketController@show')->name('admin.ticket.show');
    Route::post('admin/ticket/{id}/add_message', 'App\Http\Controllers\Admin\TicketController@add')->name('admin.ticket.message.add');
    Route::get('admin/ticket/{id}/close_open', 'App\Http\Controllers\Admin\TicketController@closeOpenTicket')->name('admin.ticket.close_open');
    Route::post('admin/update_balance/{user_id}/{ticket_id}', 'App\Http\Controllers\Admin\TicketController@updateUserBalance')->name('admin.ticket.update_balance');

    Route::get('admin/users', 'App\Http\Controllers\Admin\UserController@index')->name('admin.users');
    Route::get('admin/users/{id}', 'App\Http\Controllers\Admin\UserController@edit')->name('admin.user.edit');
    Route::post('admin/users/{id}', 'App\Http\Controllers\Admin\UserController@update')->name('admin.user.edit.save');
    Route::get('admin/users/wipe/{id}', 'App\Http\Controllers\Admin\UserController@destroy')->name('admin.user.delete');

    Route::get('admin/users/decline/{id}', 'App\Http\Controllers\Admin\UserController@destroyRequest')->name('admin.user.decline');

    Route::get('admin/orders', 'App\Http\Controllers\Admin\OrderController@index')->name('admin.orders');
    Route::get('admin/order/{id}', 'App\Http\Controllers\Admin\OrderController@show')->name('admin.order.show');
    Route::post('admin/order/{id}', 'App\Http\Controllers\Admin\OrderController@update')->name('admin.order.update');

    Route::get('admin/transactions', 'App\Http\Controllers\Admin\TransactionsController@index')->name('admin.transactions');
    Route::get('admin/transactions/deepsearch', 'App\Http\Controllers\Admin\TransactionsController@deepSearch')->name('admin.transactions.deepsearch');

    Route::get('admin/backups', 'App\Http\Controllers\Admin\BackupController@index')->name('admin.backups');
    Route::get('admin/create-backup', 'App\Http\Controllers\Admin\BackupController@createBackup')->name('admin.create.backup');
    Route::get('admin/backup/download/{fileName}', 'App\Http\Controllers\Admin\BackupController@downloadBackup')->name('admin.backup.download');
    Route::get('admin/backup/delete/{fileName}', 'App\Http\Controllers\Admin\BackupController@deleteBackup')->name('admin.backup.delete');

    Route::get('admin/faq', 'App\Http\Controllers\Admin\FAQController@index')->name('admin.faq');
    Route::post('admin/faq', 'App\Http\Controllers\Admin\FAQController@store')->name('admin.faq.create');
    Route::get('admin/faq/{id}', 'App\Http\Controllers\Admin\FAQController@edit')->name('admin.faq.edit');
    Route::post('admin/faq/{id}', 'App\Http\Controllers\Admin\FAQController@update')->name('admin.faq.update');
    Route::get('admin/faq/delete/{id}', 'App\Http\Controllers\Admin\FAQController@destroy')->name('admin.faq.delete');


});