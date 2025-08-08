@extends('layouts.dashboard')

@section('content')
<div class="container-fluid px-4">
    @php
        // Barcha tur ro'yxatlari bo'sh qilib belgilandi
        $upcomingTrips = [];
        $exclusiveTrips = [];
        $doneTrips = [];
    @endphp

    {{-- Barcha ro'yxatlar bo'sh bo'lsa, umumiy xabar ko'rsatiladi --}}
    @if(count($upcomingTrips) == 0 && count($exclusiveTrips) == 0 && count($doneTrips) == 0)
        <div class="row mt-4">
            <div class="col-12">
                <div class="alert alert-info text-center" role="alert">
                    <h4 class="alert-heading">Sizda hali buyurtmalar mavjud emas!</h4>
                    <p>Sayohatlar olamini kashf qilish uchun tez orada buyurtma bering.</p>
                    <hr>
                    <p class="mb-0">Bosh sahifadan sizga mos keladigan turlarni topishingiz mumkin.</p>
                </div>
            </div>
        </div>
    @endif

    <div class="row g-4 mt-1">
        <div class="col-lg-12">
            {{-- Upcoming trips qismi --}}
            @if(count($upcomingTrips) > 0)
                <h3 class="fs-4 mb-3">Upcoming trips</h3>
                @foreach($upcomingTrips as $trip)
                    <div class="card p-3 mb-4 d-flex flex-column flex-md-row align-items-center">
                        <div class="flex-shrink-0 me-3 mb-3 mb-md-0">
                            <img src="https://images.unsplash.com/photo-1620959050019-3543b593e970?q=80&w=1740&auto=format&fit=crop" class="img-fluid rounded" alt="Tour Image" style="max-height: 150px; width: 200px; object-fit: cover;">
                        </div>
                        <div class="flex-grow-1 text-center text-md-start">
                            <h5 class="card-title fw-bold">{{ $trip->name }}</h5>
                            <p class="mb-2 text-muted">
                                <i class="bi bi-calendar-range me-1"></i> {{ $trip->dates }} &nbsp;
                                <i class="bi bi-geo-alt me-1"></i> Myeongdong
                            </p>
                            <p class="card-text text-truncate">It's springtime in Korea, which means some very welcome warmer weather. It also means cherry blossom season!...</p>
                            <div class="d-flex justify-content-between align-items-center mt-3">
                                <span class="badge bg-success"><i class="bi bi-geo-alt-fill me-1"></i> {{ $trip->location }}</span>
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-star-fill text-warning me-1"></i>
                                    <span>4.9</span>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-column ms-md-3 mt-3 mt-md-0">
                            <a href="#" class="btn btn-info text-white mb-2">
                                <i class="bi bi-eye me-1"></i> View detail
                            </a>
                            <button class="btn btn-outline-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Cancel Trip">
                                <i class="bi bi-bell"></i>
                            </button>
                        </div>
                    </div>
                @endforeach
            @endif
        </div>
    </div>

    {{-- Trips exclusively for you qismi --}}
    @if(count($exclusiveTrips) > 0)
        <div class="mt-4">
            <h3 class="fs-4 mb-3 d-flex justify-content-between align-items-center">
                <span>Trips exclusively for you</span>
                <a href="#" class="btn btn-link text-primary text-decoration-none">See all</a>
            </h3>
            <div class="row g-4">
                @foreach($exclusiveTrips as $trip)
                    <div class="col-lg-3 col-md-6">
                        <div class="card h-100 tour-card position-relative">
                            <img src="https://images.unsplash.com/photo-1596707328904-8b6c0e5a882d?q=80&w=1740&auto=format&fit=crop" class="card-img-top" alt="{{ $trip->name }}">
                            <span class="badge bg-warning text-dark position-absolute top-0 start-0 m-2">20% OFF</span>
                            <div class="card-body">
                                <div class="d-flex justify-content-between align-items-start mb-2">
                                    <h5 class="card-title fw-bold mb-0">{{ $trip->name }}</h5>
                                    <button class="btn btn-link p-0 text-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to favorites"><i class="bi bi-heart fs-5"></i></button>
                                </div>
                                <p class="card-text text-muted mb-1">$ {{ $trip->price }} <small class="text-decoration-line-through">(999)</small></p>
                                <p class="card-text small text-truncate-3">Nha Trang has many famous tourist attractions and is a big tourist center of the country...</p>
                            </div>
                            <div class="card-footer bg-white border-0 d-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-star-fill text-warning me-1"></i>
                                    <span class="small me-2">4.9</span>
                                    <span class="small text-muted">(1,022)</span>
                                </div>
                                <a href="#" class="btn btn-sm btn-primary">Book</a>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    @endif

    {{-- Done trips qismi --}}
    @if(count($doneTrips) > 0)
        <div class="mt-4">
            <h3 class="fs-4 mb-3 d-flex justify-content-between align-items-center">
                <span>Done trips</span>
                <a href="#" class="btn btn-link text-primary text-decoration-none">See all</a>
            </h3>
            <div class="row g-4">
                @foreach($doneTrips as $trip)
                    <div class="col-lg-6">
                        <div class="card border-0 mb-3 done-trip-card">
                            <div class="card-body d-flex align-items-center p-3">
                                <img src="https://images.unsplash.com/photo-1596707328904-8b6c0e5a882d?q=80&w=1740&auto=format&fit=crop" class="rounded-circle me-3" alt="Tour" width="50" height="50" style="object-fit: cover;">
                                <div class="flex-grow-1">
                                    <h6 class="mb-0 fw-bold">{{ $trip->name }}</h6>
                                    <p class="mb-0 text-muted small">{{ $trip->dates }}</p>
                                </div>
                                <a href="#" class="btn btn-primary btn-sm me-2">Rating</a>
                                <a href="#" class="btn btn-outline-secondary btn-sm">Rebook</a>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    @endif
</div>
@endsection