<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="{{ asset('css/dashboard.css') }}">
    <style>
        .map-buttons a {
            margin-right: 5px;
        }
    </style>
</head>
<body>

    <div class="d-flex" id="wrapper">
        <div class="border-end bg-white d-none d-lg-block" id="sidebar-wrapper">
            @include('components.dashboard.sidebar')
        </div>

        <div id="page-content-wrapper">
            @include('components.dashboard.header')

            <div class="container-fluid px-4">
                {{-- Yangi tur yaratish tugmasi --}}
                <div class="d-flex justify-content-end mt-4">
                    <a href="{{ route('tours.create') }}" class="btn btn-success">
                        <i class="bi bi-plus-circle me-1"></i> Yangi tur yaratish
                    </a>
                </div>

                {{-- User_tours jadvalidagi turlar ro'yxati --}}
                @isset($user_tours)
                    <div class="mt-4">
                        <h3 class="fs-4 mb-3">Mening turlarim</h3>
                        @if(count($user_tours) > 0)
                            <div class="list-group">
                                @foreach($user_tours as $tour)
                                    <div class="list-group-item list-group-item-action d-flex justify-content-between align-items-center mb-2">
                                        <div class="d-flex align-items-center">
                                            <i class="bi bi-geo-alt me-3 fs-3 text-primary"></i>
                                            <div>
                                                <h5 class="mb-1 fw-bold">{{ $tour->title }}</h5>
                                                <p class="mb-1 text-muted">
                                                    <i class="bi bi-calendar me-1"></i> Boshlanish: {{ $tour->start_date }}
                                                    <span class="mx-2">|</span>
                                                    <i class="bi bi-clock me-1"></i> Davomiyligi: {{ $tour->duration_days }} kun
                                                </p>
                                            </div>
                                        </div>
                                        <div class="d-flex">
                                            <a href="{{ route('tours.show', $tour->id) }}" class="btn btn-info btn-sm text-white me-2">
                                                <i class="bi bi-eye me-1"></i> Ko'rish
                                            </a>
                                            <a href="{{ route('tours.edit', $tour->id) }}" class="btn btn-warning btn-sm text-white me-2">
                                                <i class="bi bi-pencil me-1"></i> Tahrirlash
                                            </a>
                                            <form action="{{ route('tours.destroy', $tour->id) }}" method="POST" onsubmit="return confirm('Haqiqatan ham bu turni oʻchirmoqchimisiz?');">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-danger btn-sm">
                                                    <i class="bi bi-trash me-1"></i> O'chirish
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        @else
                            <div class="alert alert-info text-center" role="alert">
                                Sizda hali yaratilgan turlar mavjud emas.
                            </div>
                        @endif
                    </div>
                @endisset

                {{-- Oldingi "suggested_tour" bloki (agar kerak bo'lsa) --}}
                @isset($suggested_tour)
                    <div class="mt-4">
                        <h3 class="fs-4 mb-3">{{ $suggested_tour['suggested_tour']['title'] ?? 'Sarlavha topilmadi' }}</h3>
                        <div class="row g-4">
                            <div class="col-md-6 col-lg-4">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title"><i class="bi bi-calendar me-2 text-primary"></i>Sayohat sanasi</h5>
                                        <p class="card-text">
                                            <i class="bi bi-calendar-check me-1"></i> Boshlanish: {{ $suggested_tour['suggested_tour']['check_in'] ?? '---' }} <br>
                                            <i class="bi bi-calendar-x me-1"></i> Tugash: {{ $suggested_tour['suggested_tour']['check_out'] ?? '---' }} <br>
                                            <i class="bi bi-clock me-1"></i> Davomiyligi: {{ $suggested_tour['suggested_tour']['duration_days'] ?? '---' }} kun
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title"><i class="bi bi-cash-stack me-2 text-success"></i>Byudjet</h5>
                                        <p class="card-text">
                                            <i class="bi bi-currency-dollar me-1"></i> Umumiy byudjet: ${{ $suggested_tour['budget'] ?? '0.00' }} <br>
                                            <i class="bi bi-person me-1"></i> Jon boshiga: ${{ $suggested_tour['suggested_tour']['min_budget_per_person'] ?? '0.00' }} - ${{ $suggested_tour['suggested_tour']['max_budget_per_person'] ?? '0.00' }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title"><i class="bi bi-people me-2 text-info"></i>Sayohatdagi odamlar soni</h5>
                                        <p class="card-text">
                                            <i class="bi bi-people-fill me-1"></i> Odamlar soni: {{ $suggested_tour['people'] ?? '0' }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-4">
                            <h4 class="fs-5 mb-3">Xizmatlar bo'yicha hisob-kitoblar</h4>
                            <ul class="list-group">
                                @foreach($suggested_tour['services'] ?? [] as $service_key => $service)
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <div>
                                            <strong>
                                                @if($service_key === 'airport') <i class="bi bi-airplane-engines me-2"></i> Aeroport xizmatlari
                                                @elseif($service_key === 'attraction') <i class="bi bi-geo-alt me-2"></i> Diqqatga sazovor joy
                                                @elseif($service_key === 'hotel') <i class="bi bi-building me-2"></i> Mehmonxona
                                                @elseif($service_key === 'restaurant') <i class="bi bi-egg-fried me-2"></i> Ovqatlanish
                                                @endif
                                            </strong>
                                            <br>
                                            <small class="text-muted">
                                                @if(isset($service['name'])) {{ $service['name'] }} @endif
                                                @if(isset($service['location'])) ({{ $service['location'] }}) @endif
                                            </small>

                                            @if(isset($service['lat']) && isset($service['lng']))
                                                <div class="map-buttons mt-2">
                                                    {{-- To'g'irlangan Google Maps URL formati --}}
                                                    <a href="https://maps.google.com/?q={{ $service['lat'] }},{{ $service['lng'] }}" target="_blank" class="btn btn-sm btn-outline-info">
                                                        <i class="bi bi-geo-alt me-1"></i> Google Maps
                                                    </a>
                                                    <a href="https://taxi.yandex.uz/order/?end={{ $service['lat'] }},{{ $service['lng'] }}" target="_blank" class="btn btn-sm btn-outline-warning text-dark">
                                                        <i class="bi bi-taxi-front me-1"></i> Yandex Go'da manzilni ochish
                                                    </a>
                                                    <p class="text-muted mt-2 mb-0" style="font-size: 0.8rem;">
                                                        "Qayerga" qismiga **"{{ $service['name'] ?? 'Manzil nomi' }}"** ni kiriting
                                                    </p>
                                                </div>
                                            @endif
                                        </div>
                                        <span class="badge bg-primary rounded-pill">
                                            @if(isset($service['total_cost'])) ${{ number_format($service['total_cost'], 2) }}
                                            @elseif(isset($service['price_total'])) ${{ number_format($service['price_total'], 2) }}
                                            @elseif(isset($service['total_food_cost'])) ${{ number_format($service['total_food_cost'], 2) }}
                                            @elseif(isset($service['taxi_price'])) ${{ number_format($service['taxi_price'], 2) }}
                                            @endif
                                        </span>
                                    </li>
                                @endforeach
                                <li class="list-group-item d-flex justify-content-between align-items-center bg-light">
                                    <strong><i class="bi bi-journal-text me-2"></i> Umumiy hisob-kitob</strong>
                                    <span class="badge bg-secondary rounded-pill fs-6">${{ number_format($suggested_tour['total_estimate'] ?? 0, 2) }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                @endisset

                @isset($error_message)
                    <div class="alert alert-danger mt-4" role="alert">
                        {{ $error_message }}
                    </div>
                @endisset
            </div>
        </div>
    </div>

    <div class="offcanvas offcanvas-start d-lg-none" tabindex="-1" id="offcanvasSidebar" aria-labelledby="offcanvasSidebarLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasSidebarLabel">Turan Tech</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            @include('components.dashboard.sidebar')
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const toggleButton = document.getElementById('sidebar-toggle');
            if (toggleButton) {
                toggleButton.addEventListener('click', function () {
                    const sidebar = document.getElementById('sidebar-wrapper');
                    if (sidebar) {
                        sidebar.classList.toggle('collapsed');
                    }
                });
            }
        });
    </script>
</body>
</html>