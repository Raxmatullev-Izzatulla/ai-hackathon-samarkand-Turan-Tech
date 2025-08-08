<header class="position-absolute w-100 top-0" style="z-index: 10;">
    <nav class="navbar navbar-expand-lg bg-transparent">
        <div class="container-fluid">
            <a class="navbar-brand d-flex align-items-center text-white fw-bold fs-4" href="#">
                <img src="{{ asset('images/logo2.png') }}" alt="Logo" style="height: 30px; margin-right: 10px;">
            </a>
            
            <button class="navbar-toggler hamburger-toggle border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </button>
            
            <div class="collapse navbar-collapse fullscreen-menu" id="navbarNav"> 
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <a class="nav-link text-white mx-3" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white mx-3" href="#">Tours</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white mx-3" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white mx-3" href="#">Service</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white mx-3" href="#">Contact</a>
                    </li>
                </ul>
                
                <div class="d-flex align-items-center mobile-options">
                    <div class="dropdown me-3">
                        <a class="nav-link text-white dropdown-toggle" href="#" id="currencyDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            USD
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="currencyDropdown">
                            <li><a class="dropdown-item" href="#">EUR</a></li>
                            <li><a class="dropdown-item" href="#">UZS</a></li>
                        </ul>
                    </div>
                    <div class="dropdown me-3">
                        <a class="nav-link text-white dropdown-toggle" href="#" id="languageDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-globe"></i> EN
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="languageDropdown">
                            <li><a class="dropdown-item" href="#">UZ</a></li>
                            <li><a class="dropdown-item" href="#">RU</a></li>
                        </ul>
                    </div>
                    <a href="#" class="btn btn-light rounded-pill px-4">Login</a>
                </div>
            </div>
        </div>
    </nav>
</header>

<style>
/* Header elementi butun sahifa ustida turishi uchun */
header {
    z-index: 999;
}

/* Mobil menyu to'liq ekranni egallashi uchun */
@media (max-width: 991.98px) {
    .navbar-collapse.fullscreen-menu {
        position: fixed;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        overflow: hidden;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(50, 50, 50, 0.9));
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 998;
        padding: 0;
        transition: all 0.5s ease-in-out;
    }
    
    .navbar-collapse.fullscreen-menu.show {
        width: 100vw;
        height: 100vh;
        padding: 2rem;
    }

    /* Navigatsiya linklari uchun stillar */
    .navbar-collapse.fullscreen-menu ul.navbar-nav {
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
        opacity: 0;
        transition: opacity 0.5s ease-in-out 0.3s;
    }

    .navbar-collapse.fullscreen-menu.show ul.navbar-nav {
        opacity: 1;
    }

    .navbar-collapse.fullscreen-menu ul.navbar-nav .nav-item {
        margin-bottom: 20px;
    }
    
    .navbar-collapse.fullscreen-menu .mobile-options {
        flex-direction: column;
        margin-top: 30px;
        opacity: 0;
        transition: opacity 0.5s ease-in-out 0.5s;
    }

    .navbar-collapse.fullscreen-menu.show .mobile-options {
        opacity: 1;
    }
    
    .navbar-collapse.fullscreen-menu .mobile-options .dropdown,
    .navbar-collapse.fullscreen-menu .mobile-options .btn {
        margin-bottom: 15px;
    }
}

/* Hamburger menu tugmasi dizayni va animatsiyasi */
.hamburger-toggle {
    width: 30px;
    height: 20px;
    padding: 0;
    position: relative;
    background: transparent;
    cursor: pointer;
    z-index: 1000;
}

.hamburger-line {
    display: block;
    width: 100%;
    height: 3px;
    background-color: #fff;
    border-radius: 2px;
    position: absolute;
    left: 0;
    transition: transform 0.3s ease, opacity 0.3s ease, top 0.3s ease;
}

.hamburger-toggle[aria-expanded="false"] .hamburger-line:nth-child(1) { top: 0; }
.hamburger-toggle[aria-expanded="false"] .hamburger-line:nth-child(2) { top: 50%; transform: translateY(-50%); }
.hamburger-toggle[aria-expanded="false"] .hamburger-line:nth-child(3) { top: 100%; transform: translateY(-100%); }

.hamburger-toggle[aria-expanded="true"] .hamburger-line:nth-child(1) {
    /* Birinchi chiziqni markazga joylashtirib, 45 gradusga aylantirish */
    transform: rotate(45deg);
    top: 8.5px; /* Tugmaning taxminiy markaziga joylashtirish */
}
.hamburger-toggle[aria-expanded="true"] .hamburger-line:nth-child(2) {
    /* O'rta chiziqni yo'q qilish */
    opacity: 0;
}
.hamburger-toggle[aria-expanded="true"] .hamburger-line:nth-child(3) {
    /* Uchinchi chiziqni markazga joylashtirib, -45 gradusga aylantirish */
    transform: rotate(-45deg);
    top: 8.5px; /* Tugmaning taxminiy markaziga joylashtirish */
}

/* Tugma bosilganda o'chirish */
.hamburger-toggle:focus {
    box-shadow: none;
    outline: none;
}
</style>