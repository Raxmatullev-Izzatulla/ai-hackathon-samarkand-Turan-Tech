<?php

// app/Models/User.php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Relations\HasOne;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];
    
    // User va UserTour o'rtasidagi bog'lanish (one-to-one)
    public function userTour(): HasOne
    {
        return $this->hasOne(UserTour::class);
    }

    // User va UserTourCreate o'rtasidagi bog'lanish (one-to-one)
    public function userTourCreate(): HasOne
    {
        return $this->hasOne(UserTourCreate::class);
    }


     public function tours(): HasMany
    {
        return $this->hasMany(UserTour::class, 'user_id');
    }

    /**
     * User'ning user_tours_create jadvalidagi yaratilgan turlarini olish.
     * Bu bir foydalanuvchiga tegishli bir nechta yaratilgan tur bo'lishi mumkinligini anglatadi.
     */
 public function toursCreated(): HasMany
    {
        return $this->hasMany(UserTourCreate::class, 'user_id', 'user_id');
    }
}