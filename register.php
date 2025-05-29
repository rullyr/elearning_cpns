<?php
session_start();
require 'core/connection.php'; // Koneksi ke database

// Cek jika user sudah login
if (isset($_SESSION['id_user'])) {
    header('Location: dashboard.php'); // Redirect ke dashboard jika sudah login
    exit;
}

// Inisialisasi variabel untuk pesan error
$error = "";
$success = "";

// Proses form registrasi
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nama = trim($_POST['name']);
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);
    $konfirmasi_password = trim($_POST['konfirmasi_password']);

    // Validasi input
    if (!empty($nama) && !empty($email) && !empty($password) && !empty($konfirmasi_password)) {
        if ($password === $konfirmasi_password) {
            // Cek apakah email sudah terdaftar
            $query = "SELECT * FROM pengguna WHERE email = ?";
            $stmt = $koneksi->prepare($query);

            if ($stmt === false) {
                $error = "Gagal menyiapkan query: " . $koneksi->error;
            } else {
                $stmt->bind_param('s', $email);
                $stmt->execute();
                $result = $stmt->get_result();

                if ($result->num_rows > 0) {
                    $error = "Email sudah terdaftar!";
                } else {
                    // Hash password
                    $hashed_password = password_hash($password, PASSWORD_BCRYPT);

                    // Simpan data ke database
                    // **PERUBAHAN PENTING DI SINI:** Ubah 'username' menjadi 'Username' (sesuai database)
                    $insert_query = "INSERT INTO pengguna (nama, email, password) VALUES (?, ?, ?)";
                    $insert_stmt = $koneksi->prepare($insert_query);

                    if ($insert_stmt === false) {
                        $error = "Gagal menyiapkan query insert: " . $koneksi->error;
                    } else {
                        // Pastikan urutan dan tipe parameter sesuai dengan kolom: Username (string), Email (string), Password (string)
                        $insert_stmt->bind_param('sss', $nama, $email, $hashed_password);

                        if ($insert_stmt->execute()) {
                            $success = "Registrasi berhasil! Silakan login.";
                            header("Location: login.php");
                            exit();
                        } else {
                            $error = "Terjadi kesalahan saat menyimpan data: " . $insert_stmt->error;
                        }
                        $insert_stmt->close();
                    }
                }
                $stmt->close();
            }
        } else {
            $error = "Password dan konfirmasi password tidak cocok!";
        }
    } else {
        $error = "Semua kolom wajib diisi!";
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

    <title>Belajar</title>

    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">


    <link rel="stylesheet" href="assets/css/fontawesome.css">
    <link rel="stylesheet" href="assets/css/templatemo-scholar.css">
    <link rel="stylesheet" href="assets/css/owl.css">
    <link rel="stylesheet" href="assets/css/animate.css">
    <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
</head>

<body>

    <div id="js-preloader" class="js-preloader">
        <div class="preloader-inner">
            <span class="dot"></span>
            <div class="dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
    <header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                        <a href="index.html" class="logo">
                            <h1>Belajar</h1>
                        </a>
                        <ul class="nav">
                            <li class="scroll-to-section"><a href="#top" class="active">Home</a></li>
                            <li class="scroll-to-section"><a href="#courses">Courses</a></li>
                            <li class="scroll-to-section"><a href="#contact">Register Now!</a></li>
                        </ul>
                        <a class='menu-trigger'>
                            <span>Menu</span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    <div class="contact-us section" id="contact">
        <div class="container">
            <?php if (!empty($error)): ?>
                <p class="error" style="color: red;"><?php echo htmlspecialchars($error); ?></p>
            <?php endif; ?>
            <?php if (!empty($success)): ?>
                <p class="success" style="color: green;"><?php echo htmlspecialchars($success); ?></p>
            <?php endif; ?>
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="contact-us-content">
                        <form id="contact-form" action="" method="post">
                            <div class="row">
                                <div class="col-lg-12">
                                    <fieldset>
                                        <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Email" required="">
                                    </fieldset>
                                </div>
                                <div class="col-lg-12">
                                    <fieldset>
                                        <input type="name" name="name" id="name" placeholder="Name" autocomplete="on" required>
                                    </fieldset>
                                </div>
                                <div class="col-lg-12">
                                    <fieldset class="password-field">
                                        <input type="password" name="password" id="password" placeholder="Kata Sandi" autocomplete="on" required>
                                    </fieldset>
                                </div>
                                <div class="col-lg-12">
                                    <fieldset class="password-field">
                                        <input type="password" name="konfirmasi_password" id="konfirmasi_password" placeholder="Ulangi Kata Sandi" autocomplete="on" required>
                                    </fieldset>
                                </div>
                                <button type="submit" id="form-submit" class="orange-button">Register</button>
                            </div>
                        </form>
                        <div class="row">
                            <a href="login.php" class="m-auto mt-3 text-white">Already Have An Account? Login Here</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
        .password-field {
            display: flex;
            align-items: center;
        }

        .eye-icon {
            justify-self: end;
        }
    </style>

    <footer>
        <div class="container">
            <div class="col-lg-12">
                <p>Copyright © 2025 Scholar Organization. All rights reserved. &nbsp;&nbsp;&nbsp;</p>
            </div>
        </div>
    </footer>

    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/isotope.min.js"></script>
    <script src="assets/js/owl-carousel.js"></script>
    <script src="assets/js/counter.js"></script>
    <script src="assets/js/custom.js"></script>

    <script>
        const passwordField = document.getElementById('password');
        const togglePassword = document.getElementById('togglePassword');

        // Pastikan togglePassword ada sebelum menambahkan event listener
        if (togglePassword) {
            togglePassword.addEventListener('click', (e) => {
                // toggle the type attribute
                const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordField.setAttribute('type', type);

                // toggle the eye icon
                togglePassword.classList.toggle('fa-eye-slash');
            });
        }
    </script>


</body>

</html>