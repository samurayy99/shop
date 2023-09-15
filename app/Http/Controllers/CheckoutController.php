<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Session;
use App\Models\Product;
use App\Models\ProductCategory;
use App\Models\ProductStock;
use App\Models\UserOrder;
use App\Models\User;
use Auth;

class CheckoutController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(empty(Session::get('checkout.product_id')) || empty(Session::get('checkout.amount'))) {
            Session::flash('warning', __('Sitzung abgelaufen'));
            toastr()->warning(__('Sitzung abgelaufen'));
            return redirect()->route('shop.entry');
        }

        $product = Product::findOrFail(Session::get('checkout.product_id'));
        $category = ProductCategory::getCategoryById($product->category_id);

        // Überprüfen, ob die Menge größer ist als der Bestand
        if($product->product_type == 'virtuell' && Session::get('checkout.amount') > ProductStock::countStockAvailable($product->id)) {
            Session::flash('error', __('Die gewünschte Menge ist mehr als im Bestand verfügbar'));
            toastr()->error(__('Die gewünschte Menge ist mehr als im Bestand verfügbar'));

            return redirect()->route('shop.cat.show', $category->slug);
        }

        $price_total = $product->price_euro * Session::get('checkout.amount');

        // Überprüfen, ob Betrag größer als Guthaben ist
        if($price_total > Auth::user()->balance) {
            Session::flash('error', __('Dein Guthaben reicht nicht für diese Bestellung aus'));
            toastr()->error(__('Dein Guthaben reicht nicht für diese Bestellung aus'));

            return redirect()->route('shop.cat.show', $category->slug);
        }

        return view('shop.checkout', ['product' => $product, 'category' => $category, 'amount' => Session::get('checkout.amount'), 'price_total' => $price_total]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $validated = $request->validate([
            "product_id" => "required|integer",
            "amount" => "required|integer"
        ],
        [
            'product_id.required' => __('Du hast kein Produkt ausgewählt'),
            'product_id.integer' => __('Internal server error'),
            'amount.required' => __('Du hast keine Menge angegeben'),
            'amount.integer' => __('Internal server error'),
        ]);

        Session::put([
            'checkout.product_id' => $request->product_id,
            'checkout.amount' => $request->amount,
        ]);

        return redirect()->route('shop.checkout.overview');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Create order

        if(empty(Session::get('checkout.product_id')) || empty(Session::get('checkout.amount'))) {
            Session::flash('warning', __('Sitzung abgelaufen'));
            toastr()->warning(__('Sitzung abgelaufen'));
            return redirect()->route('shop.entry');
        }

        $product = Product::findOrFail(Session::get('checkout.product_id'));
        $category = ProductCategory::getCategoryById($product->category_id);

        // Security minus check // EXPLOIT
        if(Session::get('checkout.amount') < 1) {
            $user = Auth::user();
            $user->active = 0;
            $user->save();
            return redirect()->back();
        }

        // Überprüfen, ob die Menge größer ist als der Bestand
        if($product->product_type == 'virtuell' && Session::get('checkout.amount') > ProductStock::countStockAvailable($product->id)) {
            Session::flash('error', __('Die gewünschte Menge ist mehr als im Bestand verfügbar'));
            toastr()->error(__('Die gewünschte Menge ist mehr als im Bestand verfügbar'));

            return redirect()->route('shop.cat.show', $category->slug);
        }

        $price_total = $product->price_euro * Session::get('checkout.amount');

        // Überprüfen, ob Betrag größer als Guthaben ist
        if($price_total > Auth::user()->balance) {
            Session::flash('error', __('Dein Guthaben reicht nicht für diese Bestellung aus'));
            toastr()->error(__('Dein Guthaben reicht nicht für diese Bestellung aus'));

            return redirect()->route('shop.cat.show', $category->slug);
        }

        if($product->product_type == 'physisch' || $product->dropable) {
            if(empty($request->drop)) {
                Session::flash('error', __('Das von dir ausgewählte Produkt erfordert eine Lieferadresse'));
                toastr()->error(__('Das von dir ausgewählte Produkt erfordert eine Lieferadresse'));
                return redirect()->back();
            }
        }

        // Guthaben aktualisieren
        if(!User::updateBalance(Auth::user()->id, Auth::user()->balance - $price_total)) {
            // Fehler beim aktualisieren
            Session::flash('error', __('Ein unbekannter Fehler ist aufgetreten, bitte versuche es erneut'));
            toastr()->error(__('Ein unbekannter Fehler ist aufgetreten, bitte versuche es erneut'));
            return redirect()->back();
        }

        // Bestellung erstellen und speichern

        $order = new UserOrder();

        $order->user_id = Auth::user()->id;
        $order->product_name = $product->name;
        

        // Durch accounts loopen und zur Bestellung hinzufügen und löschen // FIRST FIRST!
        if($product->product_type == 'virtuell') {
            $orderedProducts = ProductStock::where('product_id', '=', $product->id)->orderBy('id', 'ASC')->take(Session::get('checkout.amount'))->get();
            foreach($orderedProducts as $orderedProduct) {
                $order->order_content = $order->order_content . $orderedProduct->content . "\n";
    
                ProductStock::find($orderedProduct->id)->delete();
            }
        } elseif($product->product_type == 'unlimited') {
            $order->order_content = $product->content;
        }

        $order->order_amount = Session::get('checkout.amount');
        $order->order_price = $price_total;
        
        if($product->product_type == 'physisch' || $product->dropable) {
            // Order muss versendet werden
            $order->weight = Session::get('checkout.amount');
            $order->weight_text = $product->weight_text;
            $order->order_status = 'pending';
            $order->order_drop = $request->drop;
        } else {
            // Order muss nicht versendet werden
            $order->order_status = 'completed';
        }

        $order->save();

        // Insgesamt verkauft aktualisieren
        Product::updateTotalOrdered($product->id, Session::get('checkout.amount'));

        // Bestellung abgeschlossen, user redirect
        Session::flash('success', __('Bestellung erfolgreich abgeschlossen'));
        toastr()->success(__('Bestellung erfolgreich abgeschlossen'));

        return redirect()->route('user.order.show', $order->id);
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
        //
    }
}
