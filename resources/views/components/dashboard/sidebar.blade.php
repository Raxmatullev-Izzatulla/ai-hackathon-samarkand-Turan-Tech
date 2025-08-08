<div class="d-flex" id="wrapper">
    <div class="border-end bg-white d-none d-lg-block" id="sidebar-wrapper">
        <div class="sidebar-heading border-bottom bg-white d-flex align-items-center justify-content-center py-4">
            <img src="{{ asset('images/logo2.png')}}" alt="Turan Tech" class="sidebar-logo me-2">
            <span class="fs-4 fw-bold"></span>
        </div>
        <div class="list-group list-group-flush my-3">
            <a href="{{ url('/dashboard') }}" class="list-group-item list-group-item-action bg-transparent {{ Request::is('dashboard') ? 'active' : '' }}">
                <i class="bi bi-house-door-fill me-2 fs-5"></i>
                <span class="sidebar-text">Home</span>
            </a>
    
            <a href="{{ url('/booking') }}" class="list-group-item list-group-item-action bg-transparent {{ Request::is('booking') ? 'active' : '' }}">
                <i class="bi bi-calendar-check me-2 fs-5"></i>
                <span class="sidebar-text">Booking</span>
            </a>
    
            <a href="#" class="list-group-item list-group-item-action bg-transparent text-secondary">
                <i class="bi bi-globe me-2 fs-5"></i>
                <span class="sidebar-text">Explore</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action bg-transparent text-secondary">
                <i class="bi bi-chat-dots me-2 fs-5"></i>
                <span class="sidebar-text">Message</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action bg-transparent text-secondary">
                <i class="bi bi-question-circle me-2 fs-5"></i>
                <span class="sidebar-text">Support</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action bg-transparent text-secondary">
                <i class="bi bi-currency-dollar me-2 fs-5"></i>
                <span class="sidebar-text">Payment</span>
            </a>
        </div>
    
        <div class="list-group list-group-flush my-3">
            <hr class="mx-3">
            <a href="#" class="list-group-item list-group-item-action bg-transparent text-secondary">
                <i class="bi bi-moon me-2 fs-5"></i>
                <span class="sidebar-text">Dark mode</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action bg-transparent text-secondary">
                <i class="bi bi-box-arrow-left me-2 fs-5"></i>
                <span class="sidebar-text">Logout</span>
            </a>
        </div>
    </div>
    <div id="page-content-wrapper">
        <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <div class="container-fluid">
                <button class="btn btn-primary d-block d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
                    <i class="bi bi-list"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    </div>
            </div>
        </nav>
        <div class="container-fluid px-4">
            </div>
    </div>
    </div>

<div class="offcanvas offcanvas-start d-lg-none" tabindex="-1" id="offcanvasSidebar" aria-labelledby="offcanvasSidebarLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasSidebarLabel">Turan Tech</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <div class="list-group list-group-flush my-3">
            <a href="{{ url('/dashboard') }}" class="list-group-item list-group-item-action bg-transparent {{ Request::is('dashboard') ? 'active' : '' }}">
                <i class="bi bi-house-door-fill me-2 fs-5"></i>
                <span class="sidebar-text">Home</span>
            </a>
    
            <a href="{{ url('/booking') }}" class="list-group-item list-group-item-action bg-transparent {{ Request::is('booking') ? 'active' : '' }}">
                <i class="bi bi-calendar-check me-2 fs-5"></i>
                <span class="sidebar-text">Booking</span>
            </a>
    
            <a href="#" class="list-group-item list-group-item-action bg-transparent text-secondary">
                <i class="bi bi-globe me-2 fs-5"></i>
                <span class="sidebar-text">Explore</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action bg-transparent text-secondary">
                <i class="bi bi-chat-dots me-2 fs-5"></i>
                <span class="sidebar-text">Message</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action bg-transparent text-secondary">
                <i class="bi bi-question-circle me-2 fs-5"></i>
                <span class="sidebar-text">Support</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action bg-transparent text-secondary">
                <i class="bi bi-currency-dollar me-2 fs-5"></i>
                <span class="sidebar-text">Payment</span>
            </a>
        </div>
    
        <div class="list-group list-group-flush my-3">
            <hr class="mx-3">
            <a href="#" class="list-group-item list-group-item-action bg-transparent text-secondary">
                <i class="bi bi-moon me-2 fs-5"></i>
                <span class="sidebar-text">Dark mode</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action bg-transparent text-secondary">
                <i class="bi bi-box-arrow-left me-2 fs-5"></i>
                <span class="sidebar-text">Logout</span>
            </a>
        </div>
    </div>
</div>