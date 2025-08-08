<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserTourCreate extends Model
{
    use HasFactory;
    
    protected $table = 'user_tours_create'; 

    // Qaysi ustunlar to'ldirilishi mumkinligini belgilash
    protected $fillable = [
        'user_id',
        'tour_data', // Yangi qo'shilgan ustun
    ];

    /**
     * Agar tour_data JSON formatda saqlanadigan bo'lsa, uni avtomatik ravishda arrayga o'tkazish
     */
    protected $casts = [
        'tour_data' => 'array',
    ];
}