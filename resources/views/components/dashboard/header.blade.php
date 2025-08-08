<nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
    <div class="d-flex align-items-center me-auto">
        <div>
            <h2 class="fs-2 m-0 fw-bold">Hello {{ Auth::user()->name }}!</h2>
            <p class="text-muted mb-0">Welcome back and explore new trips</p>
        </div>
    </div>
    
    <div class="d-flex align-items-center ms-auto">
        <div class="input-group me-3" style="max-width: 300px;">
            <span class="input-group-text bg-white border-end-0"><i class="bi bi-search"></i></span>
            <input type="text" class="form-control border-start-0" placeholder="Tourlar Yuki Manzaralar is coming...">
        </div>
        
        <div class="dropdown me-3">
            <button class="btn btn-light rounded-circle p-2 position-relative" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-bell-fill fs-5"></i>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger p-1">
                    <span class="visually-hidden">New alerts</span>
                </span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Bildirishnoma 1</a></li>
                <li><a class="dropdown-item" href="#">Bildirishnoma 2</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Barcha bildirishnomalar</a></li>
            </ul>
        </div>
        
        <div class="dropdown">
            <a href="#" class="d-flex align-items-center text-dark text-decoration-none dropdown-toggle" id="dropdownUser" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="{{ asset('https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg') }}" alt="User Profile" width="40" height="40" class="rounded-circle border border-primary">
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownUser">
                <li><a class="dropdown-item" href="#">Profilim</a></li>
                <li><a class="dropdown-item" href="#">Sozlamalar</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><form action="{{ route('logout') }}" method="POST">
                    @csrf
                    <button type="submit" class="dropdown-item">Chiqish</button>
                </form></li>
            </ul>
        </div>
    </div>
</nav>