<section class="position-relative vh-100 text-white d-flex align-items-center justify-content-center text-center">
    <div class="position-absolute w-100 h-100" style="
        background-image: url('https://as1.ftcdn.net/v2/jpg/02/15/23/66/1000_F_215236697_yrN1p3n0QEBXulwDuRB2frZWDB6SvWQj.jpg');
        background-size: cover;
        background-position: center;
        filter: brightness(0.6);
        z-index: -1;
    "></div>

    <div class="container z-index-1">
        <h1 class="display-1 fw-bold text-shadow mb-5 samarkand-title" style="
            position: absolute;
            top: 10%;
            left: 50%;
            transform: translateX(-50%);
            letter-spacing: 5px;
        ">Samarkand</h1>
        
        <form id="tourForm" action="{{ route('tour.generate') }}" method="POST">
            @csrf
            <div class="card bg-white rounded-5 shadow-lg p-2 p-md-3">
                <div class="d-flex flex-column flex-lg-row align-items-center">
                    
                    <div class="d-flex flex-grow-1 p-2 border-end-lg text-dark align-items-center w-100">
                        <div class="me-2">
                            <i class="bi bi-wallet" style="font-size: 1.5rem;"></i>
                        </div>
                        <div class="text-start flex-grow-1">
                            <small class="text-muted d-block">Funding</small>
                            <select class="form-select border-0 px-0 fw-bold" name="funding">
                                @for ($i = 100; $i <= 1000; $i += 100)
                                    <option>${{ $i }}</option>
                                @endfor
                            </select>
                        </div>
                    </div>

                    <div class="d-flex flex-grow-1 p-2 border-end-lg text-dark align-items-center w-100">
                        <div class="me-2">
                            <i class="bi bi-calendar" style="font-size: 1.5rem;"></i>
                        </div>
                        <div class="text-start flex-grow-1">
                            <small class="text-muted d-block">Check in</small>
                            <input type="date" class="form-control border-0 px-0 fw-bold" name="check_in" value="2024-01-02">
                        </div>
                    </div>

                    <div class="d-flex flex-grow-1 p-2 border-end-lg text-dark align-items-center w-100">
                        <div class="me-2">
                            <i class="bi bi-calendar" style="font-size: 1.5rem;"></i>
                        </div>
                        <div class="text-start flex-grow-1">
                            <small class="text-muted d-block">Check Out</small>
                            <input type="date" class="form-control border-0 px-0 fw-bold" name="check_out" value="2024-01-02">
                        </div>
                    </div>

                    <div class="d-flex flex-grow-1 p-2 border-end-lg text-dark align-items-center w-100">
                        <div class="me-2">
                            <i class="bi bi-person" style="font-size: 1.5rem;"></i>
                        </div>
                        <div class="text-start flex-grow-1">
                            <small class="text-muted d-block">Guest</small>
                            <div class="dropdown">
                                <a class="nav-link fw-bold text-dark dropdown-toggle" href="#" id="guestDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    2 adults, 2 children
                                </a>
                                <div class="dropdown-menu p-3" aria-labelledby="guestDropdown">
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <span>Adults:</span>
                                        <div class="input-group input-group-sm w-50">
                                            <button class="btn btn-outline-secondary" type="button" onclick="updateGuestCount('adults', -1)">-</button>
                                            <input type="text" class="form-control text-center" value="2" readonly id="adultsCount" name="adults">
                                            <button class="btn btn-outline-secondary" type="button" onclick="updateGuestCount('adults', 1)">+</button>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span>Children:</span>
                                        <div class="input-group input-group-sm w-50">
                                            <button class="btn btn-outline-secondary" type="button" onclick="updateGuestCount('children', -1)">-</button>
                                            <input type="text" class="form-control text-center" value="2" readonly id="childrenCount" name="children">
                                            <button class="btn btn-outline-secondary" type="button" onclick="updateGuestCount('children', 1)">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="p-2 flex-shrink-0">
                        <button type="submit" class="btn btn-dark rounded-5 px-4 py-2 d-flex align-items-center">
                            <i class="bi bi-search text-white me-2" style="font-size: 1.2rem;"></i>
                            <span class="fw-bold">Generator TOURS</span>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</section>
<style>
    /* ... (oldingi stillar) ... */
    .text-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    }
    .border-end-lg {
        border-right: 1px solid #dee2e6;
    }
    @media (max-width: 992px) {
        .border-end-lg {
            border-right: none !important;
            border-bottom: 1px solid #dee2e6;
        }
    }
      .text-shadow {
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    }
    .border-end-lg {
        border-right: 1px solid #dee2e6;
    }
    
    .samarkand-title {
        font-size: 6rem; /* Katta ekranlar uchun standart o'lcham */
    }

    @media (max-width: 992px) {
        .border-end-lg {
            border-right: none !important;
            border-bottom: 1px solid #dee2e6;
        }

        .samarkand-title {
            font-size: 3rem; /* Planshet o'lchami uchun kichikroq */
        }
    }

    @media (max-width: 768px) {
        .samarkand-title {
            font-size: 2.5rem; /* Mobil o'lchami uchun yanada kichikroq */
        }
    }
    
    @media (max-width: 991.98px) {
        .position-relative.vh-100 .container {
            padding-top: 15vh; /* h1 va forma orasidagi masofa */
        }

        .position-relative.vh-100 .container h1 {
            top: 5%; /* Mobil o'lchamda sarlavha yuqoriroq joylashadi */
            transform: translateX(-50%);
        }
    }
</style>

<script>
    function updateGuestCount(type, change) {
        const inputId = type + 'Count';
        const inputElement = document.getElementById(inputId);
        let count = parseInt(inputElement.value);

        if (count + change >= 0) {
            count += change;
            inputElement.value = count;
        }

        updateGuestDropdownText();
    }

    function updateGuestDropdownText() {
        const adultsCount = document.getElementById('adultsCount').value;
        const childrenCount = document.getElementById('childrenCount').value;
        const dropdownLink = document.getElementById('guestDropdown');
        dropdownLink.innerText = `${adultsCount} adults, ${childrenCount} children`;
    }
</script>