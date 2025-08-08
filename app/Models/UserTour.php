<?php

// app/Models/UserTour.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserTour extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'funding',
        'check_in',
        'check_out',
        'guests',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}