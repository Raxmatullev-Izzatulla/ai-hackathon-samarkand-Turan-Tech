<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use GuzzleHttp\Client;
use App\Models\UserTour;
use App\Models\UserTourCreate;

class DashboardController extends Controller
{
    /**
     * Dashboard sahifasini ko'rsatadi.
     */
    public function index()
    {
        $user = Auth::user();
        
        // Foydalanuvchi tomonidan kiritilgan oxirgi sayohat ma'lumotlarini olish
        $user_tour_data = UserTour::where('user_id', $user->id)->latest()->first();

        // `user_tour_create` jadvalida yaratilgan turni tekshirish
        $user_tour_created = UserTourCreate::where('user_id', $user->id)->first();
        
        $suggested_tour = null;
        $error_message = null;

        if ($user_tour_created) {
            // Agar tur allaqachon yaratilgan bo'lsa, uni bazadan olamiz
            $suggested_tour = $user_tour_created->tour_data;
        } elseif ($user_tour_data) {
            // Agar tur yaratilmagan bo'lsa, APIga so'rov yuboramiz va saqlaymiz
            $client = new Client();
            $api_url = 'https://ai-uchun.onrender.com/api/tour-suggestion';

            try {
                $check_in = $user_tour_data->check_in;
                $check_out = $user_tour_data->check_out;
                $guests_string = $user_tour_data->guests;
                $funding = $user_tour_data->funding;

                preg_match('/(\d+)\s*adults/', $guests_string, $adults_match);
                preg_match('/(\d+)\s*children/', $guests_string, $children_match);
                $adults = (int) ($adults_match[1] ?? 2);
                $children = (int) ($children_match[1] ?? 1);
                $budget = (int) filter_var($funding, FILTER_SANITIZE_NUMBER_INT);

                $response = $client->post($api_url, [
                    'headers' => [
                        'Content-Type' => 'application/json',
                    ],
                    'json' => [
                        'start_date' => $check_in,
                        'end_date' => $check_out,
                        'adults' => $adults,
                        'children' => $children,
                        'budget' => $budget,
                    ],
                    'verify' => false,
                ]);

                $suggested_tour = json_decode($response->getBody()->getContents(), true);
                
                // APIdan kelgan ma'lumotni bazaga saqlash
                UserTourCreate::create([
                    'user_id' => $user->id,
                    'tour_data' => $suggested_tour,
                ]);

            } catch (\Exception $e) {
                $error_message = "API bilan bog'lanishda xatolik yuz berdi: " . $e->getMessage();
            }
        } else {
            // Agar sayohat ma'lumotlari umuman yo'q bo'lsa
            $error_message = "Sayohat ma'lumotlari topilmadi. Iltimos, avval sayohat yarating.";
        }
        
        return view('dashboard', compact('suggested_tour', 'error_message', 'user_tour_data'));
    }
}