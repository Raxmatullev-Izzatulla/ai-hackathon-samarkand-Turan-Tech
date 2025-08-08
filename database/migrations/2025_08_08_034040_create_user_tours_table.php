<?php

// database/migrations/yyyy_mm_dd_hhmmss_create_user_tours_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('user_tours', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('funding');
            $table->date('check_in');
            $table->date('check_out');
            $table->string('guests');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_tours');
    }
};
