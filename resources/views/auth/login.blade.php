<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kirish</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <style>
        body {
            background-color: #f8f9fa;
        }
        .login-container {
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
    <div class="container login-container">
        <div class="card p-4 shadow-lg rounded-4">
            <h2 class="text-center mb-4">Welcome to Home</h2>
            <div class="text-center mb-4">
                <img src="{{ asset('images/r.png') }}" alt="Samarkand Camel" class="img-fluid rounded">
            </div>

            <form method="POST" action="{{ route('login') }}">
                @csrf

                <div class="mb-3 position-relative">
                    <span class="form-control-with-icon-icon"><i class="bi bi-envelope"></i></span>
                    <input type="email" class="form-control form-control-lg form-control-with-icon rounded-pill" id="email" name="email" placeholder="Email" required autofocus>
                </div>

                <div class="mb-3 position-relative">
                    <span class="form-control-with-icon-icon"><i class="bi bi-lock"></i></span>
                    <input type="password" class="form-control form-control-lg form-control-with-icon rounded-pill" id="password" name="password" placeholder="Password" required>
                    <a href="#" class="position-absolute end-0 top-50 translate-middle-y me-3 text-secondary text-decoration-none" style="right: 1rem;">
                        <i class="bi bi-eye-slash"></i>
                    </a>
                </div>
                
                <div class="text-end mb-3">
                    <a href="#" class="text-danger text-decoration-none">Forgot password?</a>
                </div>

                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="remember" name="remember">
                    <label class="form-check-label" for="remember">Remember me</label>
                </div>

                <div class="d-grid gap-2 mb-3">
                    <button type="submit" class="btn btn-info btn-lg text-white rounded-pill">Sign in</button>
                </div>
            </form>

            <div class="text-center mt-3">
                Don't have an account yet? <a href="{{ route('register') }}" class="text-danger text-decoration-none">Register now</a>
            </div>

            <div class="d-grid gap-2 mt-4">
                <button class="btn btn-outline-secondary btn-lg rounded-pill d-flex align-items-center justify-content-center">
                    <i class="bi bi-google me-2"></i> Continue with Google
                </button>
                <button class="btn btn-outline-secondary btn-lg rounded-pill d-flex align-items-center justify-content-center">
                    <i class="bi bi-apple me-2"></i> Continue with Apple
                </button>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>