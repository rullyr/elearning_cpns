<?php
session_start();
require 'core/connection.php';
require 'core/auth.php';

$query = "SELECT * FROM user";
$result = mysqli_query($koneksi, $query);
?>

<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
    rel="stylesheet">

  <title>Belajar</title>

  <!-- Bootstrap core CSS -->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">


  <!-- Additional CSS Files -->
  <link rel="stylesheet" href="assets/css/fontawesome.css">
  <link rel="stylesheet" href="assets/css/templatemo-scholar.css">
  <link rel="stylesheet" href="assets/css/owl.css">
  <link rel="stylesheet" href="assets/css/animate.css">
  <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
  <!--

TemplateMo 586 Scholar

https://templatemo.com/tm-586-scholar

-->
</head>

<body>

  <!-- ***** Preloader Start ***** -->
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
  <!-- ***** Preloader End ***** -->

  <!-- ***** Header Area Start ***** -->
  <header class="header-area header-sticky">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <!-- ***** Logo Start ***** -->
            <a href="index.html" class="logo">
              <h1>Belajar</h1>
            </a>
            <!-- ***** Logo End ***** -->
            <!-- ***** Menu Start ***** -->
            <ul class="nav">
              <li class="scroll-to-section"><a href="#top" class="active">Beranda</a></li>
              <li class="scroll-to-section"><a href="#courses">Kelas</a></li>
              <?php if (!isset($_SESSION['id_user'])) { ?>
                <li class="scroll-to-section"><a href="login.php">Login</a></li>
              <?php } else { ?>
                <li class="scroll-to-section"><a href="logout.php">Logout</a></li>
              <?php } ?>
            </ul>
            <a class='menu-trigger'>
              <span>Menu</span>
            </a>
            <!-- ***** Menu End ***** -->
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!-- ***** Header Area End ***** -->

  <div class="main-banner" id="top">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="owl-carousel owl-banner">
            <!-- ***** Item 1 ***** -->
            <div class="item item-1">
              <div class="header-text">
                <span class="category">Belajar Bersama</span>
                <h2>Selamat Datang di Website Belajar Bersama</h2>
                <p>Belajar Bersama merupakan platform belajar online yang berbasis website</p>
              </div>
            </div>
            <!-- ***** Item 2 ***** -->
            <div class="item item-2">
              <div class="header-text">
                <span class="category">Belajar Bersama</span>
                <h2>Welcome to the Belajar Bersama Website</h2>
                <p>Belajar Bersama is a website-based online learning platform</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  <!------------------ ***** courses ***** ------------------>
  <section class="section courses" id="courses" >
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="section-heading">
            <h6>Latest Courses</h6>
            <h2>Kelas Terbaru</h2>
          </div>
        </div>
      </div>
      
      <div class="row event_box">
        <div class="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 design">
          <div class="events_item">

            <div class="thumb">
              <a href="#"><img src="assets/images/course-01.jpg" alt=""></a>
              <span class="category">TIU</span>
            </div>

            <div class="down-content"> <br>
              <?php if (!isset($_SESSION['id_user'])) { ?>
                <a href="login.php"><h4>Tes Intelegensi Umum</h4></a> <?php } else { ?>
                <a href="tiu.php"><h4>Tes Intelegensi Umum</h4></a> <?php } ?>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6  development">
          <div class="events_item">

            <div class="thumb">
              <a href="#"><img src="assets/images/course-02.jpg" alt=""></a>
              <span class="category">TWK</span>
            </div>

            <div class="down-content">
              <?php if (!isset($_SESSION['id_user'])) { ?>
                <a href="login.php"><h4>Tes Wawasan Kebangsaan</h4></a>
              <?php } else { ?>
                <a href="twk.php"><h4>Tes Wawasan Kebangsaan</h4></a>
              <?php } ?>
            </div>

          </div>
        </div>

        <div class="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 design wordpress">
          <div class="events_item">

            <div class="thumb">
              <a href="#"><img src="assets/images/course-03.jpg" alt=""></a>
              <span class="category">TKP</span>
            </div>

            <div class="down-content"> <br>
              <?php if (!isset($_SESSION['id_user'])) { ?>
                <a href="login.php"><h4>Tes Karakteristik Pribadi</h4></a>
              <?php } else { ?>
                <a href="tkp.php"><h4>Tes Karakteristik Pribadi</h4></a>
              <?php } ?>
            </div>

          </div>
        </div>

        <div class="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 design wordpress">
          <div class="events_item">

            <div class="thumb">
              <a href="#"><img src="assets/images/course-04.jpg" alt=""></a>
              <span class="category">TO</span>
            </div>

            <div class="down-content"> <br>
              <?php if (!isset($_SESSION['id_user'])) { ?>
                <a href="login.php"><h4>Try Out</h4></a>
              <?php } else { ?>
                <a href="to.php"><h4>Try Out</h4></a>
              <?php } ?>
            </div>

          </div>
        </div>
        
      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="col-lg-12">
        <p>Copyright © 2025 Scholar Organization. All rights reserved. &nbsp;&nbsp;&nbsp;</p>
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <!-- Bootstrap core JavaScript -->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
  <script src="assets/js/isotope.min.js"></script>
  <script src="assets/js/owl-carousel.js"></script>
  <script src="assets/js/counter.js"></script>
  <script src="assets/js/custom.js"></script>

</body>

</html>