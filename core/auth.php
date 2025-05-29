<?php
// Mulai sesi
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

// Sertakan file koneksi database
require 'connection.php';

// Fungsi untuk login pengguna
function login($email, $password)
{
    global $koneksi;

    // Pastikan koneksi berhasil sebelum melanjutkan
    if ($koneksi->connect_error) {
        // Log atau tangani error koneksi di sini jika perlu
        error_log("Error koneksi di auth.php: " . $koneksi->connect_error);
        return false; // Gagal login karena koneksi bermasalah
    }

    // Cegah SQL Injection
    $email = mysqli_real_escape_string($koneksi, $email);
    // Password tidak perlu di-escape_string jika akan di-hash/verify
    // $password = mysqli_real_escape_string($koneksi, $password); // Hapus baris ini jika password tidak di-escape untuk hashing

    // Query untuk memeriksa email
    // Ubah 'user' menjadi 'pengguna' dan 'id' menjadi 'id_pengguna'
    $query = "SELECT id_pengguna, email, password FROM pengguna WHERE email = '$email'";
    $result = mysqli_query($koneksi, $query);

    // Periksa apakah query berhasil dieksekusi
    if ($result === false) {
        // Query gagal, tampilkan pesan error SQL (untuk debugging)
        error_log("Error query SQL di auth.php: " . mysqli_error($koneksi));
        return false; // Gagal login karena query bermasalah
    }

    // Periksa apakah email ditemukan
    if (mysqli_num_rows($result) > 0) {
        $user = mysqli_fetch_assoc($result);

        // Verifikasi password
        // Pastikan kolom password di database adalah 'password'
        if (password_verify($password, $user['password'])) {
            // Simpan data pengguna ke sesi
            $_SESSION['id_user'] = $user['id_pengguna']; // Ubah 'id' menjadi 'id_pengguna'
            $_SESSION['email'] = $user['email']; // Tambahkan email ke sesi jika diperlukan

            // Jika ada kolom 'nama' di tabel 'pengguna', tambahkan juga ke sesi
            // $_SESSION['nama'] = $user['nama']; // Aktifkan baris ini jika ada kolom 'nama'

            return true; // Login berhasil
        } else {
            return false; // Password salah
        }
    } else {
        return false; // Email tidak ditemukan
    }
}

// Contoh penggunaan fungsi login (ini hanya untuk testing, bisa dihapus/disesuaikan)
// if (isset($_POST['login_submit'])) {
//     $input_email = $_POST['email'];
//     $input_password = $_POST['password'];

//     if (login($input_email, $input_password)) {
//         echo "Login Berhasil!";
//         // Redirect ke halaman dashboard atau beranda
//         // header("Location: dashboard.php");
//         // exit();
//     } else {
//         echo "Login Gagal: Email atau password salah.";
//     }
// }
?>