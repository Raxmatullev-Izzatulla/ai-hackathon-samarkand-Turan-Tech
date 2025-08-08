<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TourController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::post('/generate-tour', [TourController::class, 'generate'])->name('tour.generate');
Route::get('/', function () {
    return view('welcome');
});

Route::middleware(['guest'])->group(function () {
    // Ro'yxatdan o'tish
    Route::get('/register', [AuthController::class, 'showRegistrationForm'])->name('register');
    Route::post('/register', [AuthController::class, 'register']);

    // Kirish
    Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
    Route::post('/login', [AuthController::class, 'login']);
});


// Chiqish
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

// Dashboard (faqat tizimga kirgan foydalanuvchilar uchun)
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/booking', function () {
    return view('pages.booking');
});
Route::resource('tours', TourController::class);

});

