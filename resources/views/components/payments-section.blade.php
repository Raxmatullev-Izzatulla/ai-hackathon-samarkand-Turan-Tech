<section class="py-5 payment-section">
    <div class="container">
        <div class="row align-items-center mb-5">
            <div class="col-lg-6">
                <div class="mb-2 text-muted fw-bold">Heading 2</div>
                <h2 class="display-4 fw-bold mb-3 text-dark">Discover Dream<br>Destinations with Ease</h2>
                <p class="text-muted fs-6">
                    Discover how you can offset your adventure's carbon emissions and support the sustainable initiatives practiced by our operators worldwide.
                </p>
            </div>
            <div class="col-lg-6">
                <img src="{{ asset('images/loc.png') }}" alt="Discover Dream Destinations" class="img-fluid rounded-4 shadow-lg">
            </div>
        </div>

        <div class="row mt-5">
            <div class="col-12 text-center">
                <div class="d-flex flex-wrap justify-content-center align-items-center payment-logos">
                    <img src="{{ asset('images/payments/paypal.png') }}" alt="PayPal" class="mx-3 my-2">
                    <img src="{{ asset('images/payments/stripe.png') }}" alt="Stripe" class="mx-3 my-2">
                    <img src="{{ asset('images/payments/payoneer.png') }}" alt="Payoneer" class="mx-3 my-2">
                    <img src="{{ asset('images/payments/visa.png') }}" alt="VISA" class="mx-3 my-2">
                    <img src="{{ asset('images/payments/cashapp.png') }}" alt="Cash App" class="mx-3 my-2">
                    <img src="{{ asset('images/payments/bitcoin.png') }}" alt="Bitcoin" class="mx-3 my-2">
                    <img src="{{ asset('images/payments/discover.png') }}" alt="Discover" class="mx-3 my-2">
                </div>
            </div>
        </div>
    </div>
</section>


<style>
/* ... (oldingi stillar) ... */

.payment-section {
    background-color: #fff; /* Oq fon */
}

.payment-section h2 {
    color: #1a2a4b; /* To'q ko'k rang */
}

.payment-logos img {
    height: 40px; /* Logo balandligi */
    filter: grayscale(100%); /* Logolarni kulrang qilish */
    transition: filter 0.3s ease;
}

.payment-logos img:hover {
    filter: grayscale(0%); /* Hoverda rangli bo'ladi */
}

@media (max-width: 991.98px) {
    .payment-section .row.align-items-center {
        flex-direction: column-reverse; /* Mobil ekranda rasmni yuqoriga chiqarish */
    }
}
</style>