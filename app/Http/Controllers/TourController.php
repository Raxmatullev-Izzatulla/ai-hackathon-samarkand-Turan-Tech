<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TourController extends Controller
{
// app/Http/Controllers/TourController.php

public function generate(Request $request)
{
    // Formadan kelgan ma'lumotlarni olish
    $tourData = $request->only(['funding', 'check_in', 'check_out', 'adults', 'children']);

    // Ma'lumotlarni sessionga saqlash
    session(['tour_data' => $tourData]);

    // Keyingi (register) sahifaga yo'naltirish
    return redirect()->route('register');
}
}
