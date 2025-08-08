<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ro'yxatdan o'tish</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <style>
        body {
            background-color: #f8f9fa;
        }
        .register-container {
            max-width: 450px;
            margin-top: 50px;
        }
        .form-control-with-icon {
            padding-left: 2.5rem;
            position: relative;
        }
        .form-control-with-icon-icon {
            position: absolute;
            top: 50%;
            left: 1rem;
            transform: translateY(-50%);
            color: #6c757d;
        }
    </style>
</head>
<body>
    <div class="container register-container">
        <div class="card p-4 shadow-lg rounded-4">
            <h2 class="text-center mb-4">Welcome to Home</h2>
            <div class="text-center mb-4">
                <img src="{{ asset('images/r.png') }}" alt="Home Image" class="img-fluid rounded">
            </div>

            <form method="POST" action="{{ route('register') }}">
                @csrf

                <div class="mb-3 position-relative">
                    <span class="form-control-with-icon-icon"><i class="bi bi-person"></i></span>
                    <input type="text" class="form-control form-control-lg form-control-with-icon rounded-pill" id="name" name="name" placeholder="Full name" required autofocus>
                </div>

                <div class="mb-3 position-relative">
                    <span class="form-control-with-icon-icon"><i class="bi bi-envelope"></i></span>
                    <input type="email" class="form-control form-control-lg form-control-with-icon rounded-pill" id="email" name="email" placeholder="Email" required>
                </div>

                <div class="mb-3 position-relative">
                    <span class="form-control-with-icon-icon"><i class="bi bi-lock"></i></span>
                    <input type="password" class="form-control form-control-lg form-control-with-icon rounded-pill" id="password" name="password" placeholder="Password" required>
                    </div>

                <div class="mb-3 position-relative">
                    <span class="form-control-with-icon-icon"><i class="bi bi-lock"></i></span>
                    <input type="password" class="form-control form-control-lg form-control-with-icon rounded-pill" id="password_confirmation" name="password_confirmation" placeholder="Confirm password" required>
                </div>

                <div class="mb-3 form-check d-flex align-items-center">
                    <input type="checkbox" class="form-check-input mt-0" id="terms" name="terms" required>
                    <label class="form-check-label ms-2" for="terms">
                        By checking the box you agree to our 
                        <a href="#" class="text-danger text-decoration-none">Terms</a> and 
                        <a href="#" class="text-danger text-decoration-none">Conditions</a>
                    </label>
                </div>

                <div class="d-grid gap-2 mb-3">
                    <button type="submit" class="btn btn-info btn-lg text-white rounded-pill">Next</button>
                </div>
            </form>
            
            <div class="text-center mt-3">
                Already a member? <a href="{{ route('login') }}" class="text-danger text-decoration-none">Login in</a>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>