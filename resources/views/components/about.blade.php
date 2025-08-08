<section class="py-5 about-section position-relative">
    <div class="container text-center">
        <h2 class="fw-bold mb-5" style="color:#0d2a57;">About Us</h2>

        <!-- Cards -->
        <div class="row g-4 mb-5 justify-content-center">
            <div class="col-lg-3 col-md-6">
                <div class="about-card h-100" style="background-color:#274b80;">
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" class="mb-3" style="width:50px;">
                    <h5 class="fw-bold text-white">Security Assurance</h5>
                    <p class="text-white-50">Demonstrates commitment to user data security through encryption and secure payment practices</p>
                    <a href="#" class="about-link">Learn More →</a>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="about-card h-100" style="background-color:#2c568e;">
                    <img src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png" class="mb-3" style="width:50px;">
                    <h5 class="fw-bold text-white">Security Assurance</h5>
                    <p class="text-white-50">Demonstrates commitment to user data security through encryption and secure payment practices</p>
                    <a href="#" class="about-link">Learn More →</a>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="about-card h-100" style="background-color:#5d8fc0;">
                    <img src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png" class="mb-3" style="width:50px;">
                    <h5 class="fw-bold text-white">Security Assurance</h5>
                    <p class="text-white-50">Demonstrates commitment to user data security through encryption and secure payment practices</p>
                    <a href="#" class="about-link">Learn More →</a>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="about-card h-100" style="background-color:#84b4e5;">
                    <img src="https://cdn-icons-png.flaticon.com/512/1048/1048943.png" class="mb-3" style="width:50px;">
                    <h5 class="fw-bold text-white">Security Assurance</h5>
                    <p class="text-white-50">Demonstrates commitment to user data security through encryption and secure payment practices</p>
                    <a href="#" class="about-link">Learn More →</a>
                </div>
            </div>
        </div>

        <!-- Stats -->
        <div class="stats-box p-4 rounded-4 d-flex flex-column flex-lg-row align-items-center justify-content-between">
            <div class="d-flex align-items-center mb-3 mb-lg-0">
                <div class="d-flex me-3">
                    <img src="{{ asset('images/author.png') }}" class="rounded-circle border border-white" style="margin-left: -10px;">
                    <img src="{{ asset('images/author2.png') }}" class="rounded-circle border border-white" style="margin-left: -10px;">
                    <img src="{{ asset('images/author3.png') }}" class="rounded-circle border border-white" style="margin-left: -10px;">
                    <span class="d-flex align-items-center justify-content-center bg-warning text-dark rounded-circle" style="width: 40px; height: 40px; margin-left: -10px;">
                        <i class="bi bi-plus-lg fw-bold"></i>
                    </span>
                </div>
                <p class="fw-bold mb-0 text-start">Turan Tech one of the leading platform in 2025</p>
            </div>
            <div class="d-flex flex-wrap justify-content-center text-center gap-4">
                <div>
                    <h3 class="fw-bold mb-0">45+</h3>
                    <p class="mb-0 text-muted">Global<br>Branches</p>
                </div>
                <div>
                    <h3 class="fw-bold mb-0">29K</h3>
                    <p class="mb-0 text-muted">Destinations<br>Collaboration</p>
                </div>
                <div>
                    <h3 class="fw-bold mb-0">20+</h3>
                    <p class="mb-0 text-muted">Years<br>Experience</p>
                </div>
                <div>
                    <h3 class="fw-bold mb-0">168K</h3>
                    <p class="mb-0 text-muted">Happy<br>Customers</p>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
.about-section {
    background-color: #f4f6fa;
}
.about-card {
    border-radius: 12px;
    padding: 2rem;
    text-align: center;
    transition: transform 0.3s ease;
}
.about-card:hover {
    transform: translateY(-5px);
}
.about-link {
    color: white;
    font-weight: 500;
    text-decoration: none;
}
.about-link:hover {
    text-decoration: underline;
}
.stats-box {
    background-color: #fff;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}
</style>
