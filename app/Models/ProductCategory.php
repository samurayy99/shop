<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductCategory extends Model
{
    use HasFactory;

    protected $table = 'product_categories';

    protected $fillable = [
        'name',
        'slug',
        'featured'
    ];

    public function products()
    {
        return $this->hasMany(Product::class, 'category_id');
    }

    public static function getCategoriesBlade()
    {
        return self::orderBy('featured', 'DESC')->get();
    }

    public static function getAllCategories()
    {
        return self::orderBy('id', 'DESC')->get();
    }

    public static function getIdBySlug($slug)
    {
        return self::where('slug', '=', $slug)->firstOrFail();
    }

    public static function getCategoryById($id)
    {
        return self::find($id) ?: 'Kategorie nicht gefunden';
    }
}
