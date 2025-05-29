<?php
session_start();
require 'core/connection.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com" rel="preconnect">
  <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

  <title>Belajar</title>

  <!-- Bootstrap core CSS -->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">


  <!-- Additional CSS Files -->
  <link rel="stylesheet" href="assets/css/fontawesome.css">
  <link rel="stylesheet" href="assets/css/templatemo-scholar.css">
  <link rel="stylesheet" href="assets/css/owl.css">
  <link rel="stylesheet" href="assets/css/animate.css">
  <link href="assets/css/main.css" rel="stylesheet">
  <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
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
              <li class="scroll-to-section"><a href="index.php">Beranda</a></li>
              <li class="scroll-to-section"><a href="tiu.php">TIU</a></li>
              <li class="scroll-to-section"><a href="twk.php" class="active">TWK</a></li>
              <li class="scroll-to-section"><a href="tkp.php">TKP</a></li>
              <li class="scroll-to-section"><a href="to.php">TryOut</a></li>
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

  <!-- ***** Header Area End ***** -->

  <div class="main-banner" id="top">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="owl-carousel owl-banner">
            <!-- ***** Item 1 ***** -->
            <div class="item item-1">
              <div class="header-text">
                <span class="category">TWK</span>
                <h2>Test Wawasan Kebangsaan</h2>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Tabs Section -->
  <section id="tabs" class="tabs section">

    <div class="container" data-aos="fade-up" data-aos-delay="100">

      <div class="row">
        <div class="col-lg-3">
          <ul class="nav nav-tabs flex-column">
            <li class="nav-item">
              <a class="nav-link active show" data-bs-toggle="tab" href="#tab-1">Integritas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#tab-2">Implementasi Pancasila</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#tab-3">Implementasi UUD 1945</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#tab-4">Bela Negara</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#tab-5">Nasionalisme</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-9 mt-4 mt-lg-0">
          <div class="tab-content">

            <div class="tab-pane active show" id="tab-1">
              <iframe width="850" height="500" src="https://www.youtube.com/embed/LUjbyKnb4H4?si=sZlsyEYzqWXq9pCm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <div id="quiz-integritas"></div>
                    <div id="result-integritas" class="result"></div>
                    <button id="submit-integritas" class="button">Submit</button>
                    <button id="retry-integritas" class="button hide">Retry</button>
                    <button id="showAnswer-integritas" class="button hide">Show Answer</button>
                  </div>
                </div>
            </div>

            <div class="tab-pane" id="tab-2">
              <div class="row">
                <div class="col-lg-8 details order-2 order-lg-1">
                  <iframe width="850" height="500" src="https://www.youtube.com/embed/CENfOAukFLs?si=XJrAdIklyIrSJ15w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      <div id="quiz-pancasila"></div>
                      <div id="result-pancasila" class="result"></div>
                      <button id="submit-pancasila" class="button">Submit</button>
                      <button id="retry-pancasila" class="button hide">Retry</button>
                      <button id="showAnswer-pancasila" class="button hide">Show Answer</button>
                </div>
              </div>
            </div>

            <div class="tab-pane" id="tab-3">
              <div class="row">
                <div class="col-lg-8 details order-2 order-lg-1">
                  <iframe width="850" height="500" src="https://www.youtube.com/embed/pgOufbI1iYI?si=oUTrQoCStXhoG8mW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      <div id="quiz-uud"></div>
                      <div id="result-uud" class="result"></div>
                      <button id="submit-uud" class="button">Submit</button>
                      <button id="retry-uud" class="button hide">Retry</button>
                      <button id="showAnswer-uud" class="button hide">Show Answer</button>
                </div>
              </div>
            </div>

            <div class="tab-pane" id="tab-4">
              <div class="row">
                <div class="col-lg-8 details order-2 order-lg-1">
                  <iframe width="850" height="500" src="https://www.youtube.com/embed/pErwfen8kUM?si=Yr3IpVX7jp132kbX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      <div id="quiz-belneg"></div>
                      <div id="result-belneg" class="result"></div>
                      <button id="submit-belneg" class="button">Submit</button>
                      <button id="retry-belneg" class="button hide">Retry</button>
                      <button id="showAnswer-belneg" class="button hide">Show Answer</button>
                </div>
              </div>
            </div>

            <div class="tab-pane" id="tab-5">
              <div class="row">
                <div class="col-lg-8 details order-2 order-lg-1">
                  <iframe width="850" height="500" src="https://www.youtube.com/embed/3-eY4rwZAnA?si=D_BAGiiDZ_7J5MOq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      <div id="quiz-nasionalisme"></div>
                      <div id="result-nasionalisme" class="result"></div>
                      <button id="submit-nasionalisme" class="button">Submit</button>
                      <button id="retry-nasionalisme" class="button hide">Retry</button>
                      <button id="showAnswer-nasionalisme" class="button hide">Show Answer</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>

  </section>
  <!-- /Tabs Section -->

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
  <script src="assets/js/quiz_initializer.js"></script>
  
  <script src="assets/js/quiz_integritas.js"></script>
  <script>
      // Pastikan DOM sudah dimuat sebelum memanggil fungsi kuis
      document.addEventListener('DOMContentLoaded', function() {
          initializeQuiz('quiz-integritas', quizDataInteg);
      });
  </script>

  <script src="assets/js/quiz_pancasila.js"></script>
  <script>
      // Pastikan DOM sudah dimuat sebelum memanggil fungsi kuis
      document.addEventListener('DOMContentLoaded', function() {
          initializeQuiz('quiz-pancasila', quizDataPancasila);
      });
  </script>

  <script src="assets/js/quiz_uud.js"></script>
  <script>
      // Pastikan DOM sudah dimuat sebelum memanggil fungsi kuis
      document.addEventListener('DOMContentLoaded', function() {
          initializeQuiz('quiz-uud', quizDataUUD);
      });
  </script>

  <script src="assets/js/quiz_belneg.js"></script>
  <script>
      // Pastikan DOM sudah dimuat sebelum memanggil fungsi kuis
      document.addEventListener('DOMContentLoaded', function() {
          initializeQuiz('quiz-belneg', quizDataBelneg);
      });
  </script>

  <script src="assets/js/quiz_nasionalisme.js"></script>
  <script>
      // Pastikan DOM sudah dimuat sebelum memanggil fungsi kuis
      document.addEventListener('DOMContentLoaded', function() {
          initializeQuiz('quiz-nasionalisme', quizDataNasionalisme);
      });
  </script>

</body>

</html>