<section class="py-5 customer-reviews-section">
    <div class="container position-relative">
        <div class="curvy-lines"></div>

        <div class="row align-items-center">
            <div class="col-lg-5 mb-4 mb-lg-0">
                <div class="mb-4">
                    <span class="badge bg-light text-dark py-2 px-3 rounded-pill fw-bold">
                        <img src="{{ asset('images/author.png') }}" class="rounded-circle me-2"> Reviews
                    </span>
                </div>
                <h2 class="display-5 fw-bold mb-3 text-dark">What our clients are<br>saying about us?</h2>
                <p class="text-muted fs-6">
                    Discover how you can offset your adventure's carbon emissions and support the sustainable initiatives practiced by our operators worldwide.
                </p>
                <div class="d-flex mt-4">
                    <button class="btn btn-outline-secondary rounded-circle me-2"><i class="bi bi-arrow-left"></i></button>
                    <button class="btn btn-dark rounded-circle"><i class="bi bi-arrow-right"></i></button>
                </div>
            </div>

            <div class="col-lg-7">
                <div class="row g-4">
                    <div class="col-lg-6">
                        <div class="card h-100 p-4 border-0 rounded-4 shadow-sm testimonial-card">
                            <div class="d-flex align-items-center mb-3">
                                <img src="{{ asset('images/author3.png') }}" class="rounded-circle me-3">
                                <div>
                                    <h6 class="mb-0 fw-bold">Sara Mohamed</h6>
                                    <small class="text-muted">Jekaiter</small>
                                </div>
                                <div class="ms-auto star-rating">
                                    <i class="bi bi-star-fill text-warning"></i>
                                    <i class="bi bi-star-fill text-warning"></i>
                                    <i class="bi bi-star-fill text-warning"></i>
                                    <i class="bi bi-star-fill text-warning"></i>
                                    <i class="bi bi-star-fill text-warning"></i>
                                </div>
                            </div>
                            <p class="card-text text-muted">
                                I've been using the hotel booking system for several years now, and it's become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card h-100 p-4 border-0 rounded-4 shadow-sm testimonial-card">
                            <div class="d-flex align-items-center mb-3">
                                <img src="{{ asset('images/author2.png') }}" class="rounded-circle me-3">
                                <div>
                                    <h6 class="mb-0 fw-bold">Atend John</h6>
                                    <small class="text-muted">California</small>
                                </div>
                                <div class="ms-auto star-rating">
                                    <i class="bi bi-star-fill text-warning"></i>
                                    <i class="bi bi-star-fill text-warning"></i>
                                    <i class="bi bi-star-fill text-warning"></i>
                                    <i class="bi bi-star-fill text-warning"></i>
                                    <i class="bi bi-star-fill text-warning"></i>
                                </div>
                            </div>
                            <p class="card-text text-muted">
                                I had a last-minute business trip, and the hotel booking system came to the rescue. I was able to find a high-quality hotel in no time and even got a great deal on the room. The confirmation process was straightforward, and I received all the necessary information promptly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<style>
/* ... (oldingi stillar) ... */

.customer-reviews-section {
    background-color: #e3f2fd; /* Yengil ko'k fon, l.jpg ga asoslangan */
    position: relative;
    overflow: hidden; /* Kontent tashqariga chiqmasligi uchun */
}

/* Yuqoridagi aylanma chiziqlar */
.curvy-lines {
    position: absolute;
    top: 0;
    right: 20%; /* Mos joylashuv */
    width: 250px;
    height: 100px;
    background-image: url('data:image/svg+xml;utf8,<svg width="250" height="100" viewBox="0 0 250 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 95C25.5 85 45.5 85 64.5 75C83.5 65 99.5 5 130 5C160.5 5 180.5 65 200.5 75C220.5 85 240.5 85 245 95" stroke="%23ADB5BD" stroke-dasharray="5 5"/></svg>');
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 1;
}

.customer-reviews-section h2 {
    color: #1a2a4b; /* To'q ko'k rang */
}

.testimonial-card {
    background-color: #fff;
}

.badge img {
    width: 20px;
    height: 20px;
}

.star-rating i {
    font-size: 1rem;
    color: #ffc107; /* Sariq yulduzlar uchun */
}

.btn-outline-secondary {
    border-color: #ced4da;
    color: #6c757d;
    background-color: transparent;
}

.btn-dark {
    background-color: #212529;
    border-color: #212529;
    color: #fff;
}

.btn-outline-secondary:hover, .btn-dark:hover {
    opacity: 0.8;
}

/* Kichik ekranlar uchun stillar */
@media (max-width: 991.98px) {
    .customer-reviews-section .col-lg-5 {
        text-align: center;
    }
    .customer-reviews-section .d-flex.mt-4 {
        justify-content: center;
    }
    .curvy-lines {
        right: 5%;
        width: 150px;
    }
}
</style>