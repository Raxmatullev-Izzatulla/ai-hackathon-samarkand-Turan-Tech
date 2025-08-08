<section class="py-5 newsletter-section">
    <div class="container">
        <div class="card p-4 rounded-4 shadow-lg newsletter-card">
            <div class="row align-items-center">
                <div class="col-lg-6 mb-4 mb-lg-0">
                    <div class="mb-2 text-primary fw-bold">Join our newsletter</div>
                    <h3 class="fw-bold mb-3">
                        Subscribe to see secret deals prices drop the moment you sign up!
                    </h3>
                    <p class="text-muted fs-6">
                        No ads. No trails. No commitments
                    </p>
                    <form class="d-flex mt-4">
                        <input type="email" class="form-control rounded-pill me-2" placeholder="Your Email">
                        <button type="submit" class="btn btn-primary rounded-pill">Subscribe</button>
                    </form>
                </div>

                <div class="col-lg-6">
                    <img src="{{ asset('images/bukhoro.png') }}" alt="Bukhara street" class="img-fluid rounded-4">
                </div>
            </div>
        </div>
    </div>
</section>

<style>
/* ... (oldingi stillar) ... */

.newsletter-section {
    background-color: #e3f2fd; /* Yengil ko'k fon, l.jpg ga asoslangan */
}

.newsletter-card {
    background-color: #fff;
    padding: 3rem !important;
}

.newsletter-card h3 {
    color: #1a2a4b; /* To'q ko'k rang */
}

.newsletter-card .form-control {
    background-color: #f8f9fa;
    border: none;
    padding: 0.75rem 1rem;
}

.newsletter-card .btn-primary {
    background-color: #1a2a4b;
    border-color: #1a2a4b;
}

.newsletter-card .btn-primary:hover {
    background-color: #2a3e63;
    border-color: #2a3e63;
}

@media (max-width: 991.98px) {
    .newsletter-card {
        padding: 1.5rem !important;
    }
}
</style>