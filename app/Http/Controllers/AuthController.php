<?php
// app/Http/Controllers/AuthController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\UserTour;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Ro'yxatdan o'tish sahifasini ko'rsatadi.
     */
    public function showRegistrationForm()
    {
        return view('auth.register');
    }

    /**
     * Yangi foydalanuvchini ro'yxatdan o'tkazadi va ma'lumotlarni saqlaydi.
     */
    public function register(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'confirmed', Password::defaults()],
        ]);

        // 1. Foydalanuvchini yaratish
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // 2. Foydalanuvchini tizimga kirishga majburlash (login)
        Auth::login($user);

        // 3. Sessiyada saqlangan Hero ma'lumotlarini saqlash
        if (session()->has('tour_data')) {
            $tourData = session('tour_data');
            $guests = $tourData['adults'] . ' adults, ' . $tourData['children'] . ' children';

            // `UserTour` modeliga ma'lumotlarni saqlash
            UserTour::create([
                'user_id' => $user->id,
                'funding' => $tourData['funding'],
                'check_in' => $tourData['check_in'],
                'check_out' => $tourData['check_out'],
                'guests' => $guests,
            ]);
            
            // Sessiyani tozalash
            session()->forget('tour_data');
        }

        // 4. Foydalanuvchini dashboardga yo'naltirish
        return redirect()->route('dashboard');
    }

    public function showLoginForm()
    {
        return view('auth.login');
    }

    /**
     * Foydalanuvchini tizimga kirishini tekshiradi.
     */
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials, $request->has('remember'))) {
            $request->session()->regenerate();
            
            // Tizimga kirgandan so'ng dashboardga yo'naltirish
            return redirect()->intended(route('dashboard'));
        }

        // Agar kirish muvaffaqiyatsiz bo'lsa
        return back()->withErrors([
            'email' => 'Kiritilgan ma\'lumotlar bizning yozuvlarimizga mos kelmadi.',
        ])->onlyInput('email');
    }

    /**
     * Foydalanuvchini tizimdan chiqaradi.
     */
    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        
        return redirect('/');
    }
}
