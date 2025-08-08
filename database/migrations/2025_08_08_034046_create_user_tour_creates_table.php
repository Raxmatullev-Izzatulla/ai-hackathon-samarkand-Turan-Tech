<?php

// database/migrations/yyyy_mm_dd_hhmmss_create_user_tours_create_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('user_tours_create', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->json('tour_data'); // AI-dan kelgan JSON ma'lumotlar uchun
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_tours_create');
    }
};
