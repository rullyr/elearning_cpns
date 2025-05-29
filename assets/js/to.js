const quizData = [
    {
        question: '1. Andal = ...',
        options: [{text: 'Bebal'}, {text: 'Tebal'}, {text: 'Tangguh'}, {text: 'Dampak'}, {text: 'Kampak'}], // Tambahkan {text: ...}
        answer: 'Tangguh',
    },

    {
        question: '2. Mudun = ...',
        options: [{text: 'Setuju'}, {text: 'Berakal'}, {text: 'Beradab'}, {text: 'Mufakat'}, {text: 'Madun'}],
        answer: 'Beradab',
    },

    {
        question: '3. Canggih = ...',
        options: [{text: 'Kompleks'}, {text: 'Sukar'}, {text: 'Sulit'}, {text: 'Mutakhir'}, {text: 'Rumit'}],
        answer: 'Mutakhir',
    },

    {
        question: '4. Warta = ...',
        options: [{text: 'Berita'}, {text: 'Harta'}, {text: 'Benda'}, {text: 'Cerita'}, {text: 'Tahta'}],
        answer: 'Berita',
    },

    {
        question: '5. Krusial >< ...',
        options: [{text: 'Untung'}, {text: 'Genting'}, {text: 'Gawat'}, {text: 'Sepele'}, {text: 'Khawatir'}],
        answer: 'Sepele',
    },

    {
        question: '6. Kontan >< ...',
        options: [{text: 'Hutang'}, {text: 'Kutang'}, {text: 'Konten'}, {text: 'Bayar'}, {text: 'Layar'}],
        answer: 'Hutang',
    },

    {
        question: '7. Dekadensi ><...',
        options: [{text: 'Kemajuan'}, {text: 'Kemunduran'}, {text: 'Kolaborasi'}, {text: 'Keberlanjutan'}, {text: 'Kemerosotan'}],
        answer: 'Kemajuan',
    },

    {
        question: '8. Semua tamu undangan harus memakai gaun saat pesta. Riona mengikuti pesta dan tidak memakai gaun.',
        options: [{text: 'Peserta pesta bukan hanya tamu undangan saja.'}, 
                {text: 'Riona adalah penyelenggara pesta.'}, 
                {text: 'Beberapa tamu undangan tidak memakai gaun saat pesta.'}, 
                {text: 'Ada tamu undangan yang tidak mengikuti pesta.'}],
        answer: 'Peserta pesta bukan hanya tamu undangan saja.',
    },

    {
        question: '9. Semua hewan adalah makhluk hidup. Semua hewan memerlukan makanan. Kuda makan rumput.',
        options: [{text: 'Hanya kuda yang merupakan hewan pemakan rumput.'}, 
                {text: 'Beberapa hewan tidak memerlukan makanan.'}, 
                {text: 'Kuda tidak membutuhkan makanan.'}, 
                {text: 'Kuda adalah makhluk hidup pemakan rumput.'}],
        answer: 'Kuda adalah makhluk hidup pemakan rumput.',
    },

    {
        question: '10. Iwan lebih tinggi daripada amir. Amir lebih tinggi daripada Yudi dan Bandi. Joko lebih tinggi daripada Amir dan Ridwan. Tidak ada yang tingginya sama. Jika Bandi lebih tinggi daripada Ridwan, maka ...',
        options: [{text: 'Bandi lebih tinggi daripada Joko'}, 
                {text: 'Amir lebih tinggi daripada Ridwan'}, 
                {text: 'Yudi lebih tinggi daripada Ridwan'}, 
                {text: 'Joko lebih tinggi daripada Iwan'}],
        answer: 'Amir lebih tinggi daripada Ridwan',
    },

    {
        question: '11. Riska, pemain bulutangkis Detik Badminton Club, dapat melakukan service forehand dengan baik. Setiap pemain yang bisa melakukan service forehand dengan baik dapat melakukan dropshot akurat. Kesimpulan yang benar adalah ...',
        options: [{text: 'Beberapa pemain bulutangkis Detik Badminton Club tidak dapat melakukan service forehand dengan baik tetapi dapat melakukan dropshot yang akurat.'}, 
                {text: 'Semua pemain bulutangkis Detik Badminton Club dapat melakukan service forehand dengan baik dan dropshot yang akurat.'}, 
                {text: 'Beberapa pemain bulutangkis Detik Badminton Club dapat melakukan service forehand dengan baik dan dropshot yang akurat.'}, 
                {text: 'Semua pemain bulutangkis dapat melakukan service forehand dengan baik dan dropshot yang akurat.'}],
        answer: 'Beberapa pemain bulutangkis Detik Badminton Club dapat melakukan service forehand dengan baik dan dropshot yang akurat.',
    },

    {
        question: '12. Bila naik kereta api, harus membayar kontan atau memakai tiket abonemen. Badu naik kereta api padahal tidak membayar kontan. Kesimpulan yang tepat adalah ...',
        options: [{text: 'Badu membayar dengan tiket abonemen.'}, 
                {text: 'Badu tidak mempunyai tiket abonemen.'}, 
                {text: 'Badu tidak mempunyai uang kontan.'}, 
                {text: 'Badu membayar kontan untuk naik kereta api.'}],
        answer: 'Badu membayar dengan tiket abonemen.',
    },

    {
        question: '13. Suatu seri angka sebagai berikut: 1, 3, 7, 13, 21, ..., seri selanjutnya adalah ...',
        options: [{text: '26'}, {text: '25'}, {text: '31'}, {text: '30'}],
        answer: '31',
    },

    {
        question: '14. Suatu seri huruf sebagai berikut: A, C, E, B, D, F, D, ....',
        options: [{text: 'A'}, {text: 'F'}, {text: 'G'}, {text: 'P'}],
        answer: 'F',
    },

    {
        question: '15. 4, 11, 30, 8, 19, 29, 16, 27, 28, ..., ..., ...',
        options: [{text: '32, 34, 35'}, {text: '33, 34, 35'}, {text: '32, 34, 37'}, {text: '32, 35, 27'}],
        answer: '32, 35, 27',
    },

    {
        question: '16. ..., ..., 122, 134, 268, 280',
        options: [{text: '49, 61'}, {text: '61, 44'}, {text: '44, 57'}, {text: '35 dan 87'}],
        answer: '49, 61',
    },

    {
        question: '17. 5, 7, 11, 13, 17, 19, 23, ...',
        options: [{text: '25, 28'}, {text: '25, 29'}, {text: '25, 27'}, {text: '25, 26'}],
        answer: '25, 29',
    },

    {
        question: '18. Pada saat ini, harga satu lusin kelereng dan sepuluh kilogram salak adalah sama. Jika harga satu lusin kelereng telah naik sebesar 10% dan harga salak naik sebesar 2%, maka untuk membeli satu lusin kelereng dan sepuluh kilogram salak diperlukan tambahan uang sebesar .....',
        options: [{text: '12%'}, {text: '7%'}, {text: '6%'}, {text: '10%'}],
        answer: '6%',
    },

    {
        question: '19. Seorang pekerja dibayar Rp 800 per jam. Ia bekerja dari pukul 08.00-16.00. ia akan mendapat tambahan sebesar 50% per jam jika bekerja melampaui pukul 16.00. Jika ia memperoleh Rp 8.000 pada hari itu, pukul berapa ia pulang?',
        options: [{text: '17.25'}, {text: '18.20'}, {text: '16.20'}, {text: '17.20'}],
        answer: '17.20',
    },

    {
        question: '20. Seorang pengrajin merencanakan untuk membuat beberapa tas dan keranjang dari bahan bambu. Jumlah kedua macam barang tersebut adalah 48 buah. Jumlah keranjang direncanakan tiga kali jumlah tas. Berapakah jumlah keranjang yang akan dibuat?',
        options: [{text: '36'}, {text: '46'}, {text: '54'}, {text: '63'}],
        answer: '36',
    },

    {
        question: '21. Suatu selokan mempunyai penampang berbentuk trapesium dengan panjang sisi-sisi sejajarnya 3 m dan 1,5 m dan panjang selokan 15 km. Berapakah volume air maksimum yang dapat ditampung oleh selokan, jika tinggi selokan 0,2 m?',
        options: [{text: '6750 m3'}, {text: '675 m3'}, {text: '67,5 m3'}, {text: '6,75 m3'}],
        answer: '6750 m3',
    },

    {
        question: '22. Diketahui lamanya belajar mandiri siswa sebanding dengan nilai ujian. Jika siswa dengan nilai ujian 90 melakukan belajar mandiri 12 jam/hari, maka lamanya belajar mandiri siswa dengan nilai 60 adalah ...',
        options: [{text: '6 jam/hari'}, {text: '8 jam/hari'}, {text: '24 jam/hari'}, {text: '18 jam/hari'}],
        answer: '8 jam/hari',
    },

    {
        question: '23. Jika 2x = 64 dan 3y = 81, manakah pernyataan berikut yang benar?',
        options: [{text: 'x > y'}, {text: 'x < y'}, {text: 'x = y'}, {text: 'x ≠ y'}],
        answer: 'x > y',
    },

    {
        question: '24. Jika x = 2,4 – 1,98 + 0,009 dan y = 5,08, maka ...',
        options: [{text: 'Hubungan x dan y tak dapat ditentukan'}, {text: 'x ≠ y'}, {text: 'x = y'}, {text: 'x > y'}],
        answer: 'x = y',
    },

    {
        question: '25. Suatu mobil menempuh jarak 7 km dalam 15 menit. Berapakah rata-rata jarak tempuh mobil dalam 1 jam?',
        options: [{text: '26 km'}, {text: '20 km'}, {text: '28 km'}, {text: '22 km'}],
        answer: '28 km',
    },

    {
        question: '26. Edward berjalan selama 2 jam dan menempuh jarak 8,7 km. Pada paruh jam pertama ditempuh 3 km, paruh jam ke-2 ditempuh 1 km, paruh jam ke-3 ditempuh 4,5 km. Berapakah km ditempuh pada paruh jam ke-4?',
        options: [{text: '100 m'}, {text: '200 m'}, {text: '2000 m'}, {text: '1000 m'}],
        answer: '200 m',
    },

    {
        question: '27. Dari suatu kelas yang terdiri atas 40 orang siswa diperoleh nilai rata-rata kelas 7,00 untuk mata pelajaran matematika saja. Jika nilai 5 siswa tertinggi dengan rata-rata 8,50 dan 10 nilai siswa terendah dengan rata-rata 6,00 dikeluarkan, berapa nilai rata-rata siswa sisanya?',
        options: [{text: '7,60'}, {text: '7,80'}, {text: '7,10'}, {text: 'Salah semua'}],
        answer: '7,10',
    },

    {
        question: '28. RUMAH: ATAP = ... : ...',
        options: [{text: 'Kaki: Kaus'}, {text: 'Kepala: Helm'}, {text: 'Album: Foto'}, {text: 'Jari: Cincin'}, {text: 'Atap: Genteng'}],
        answer: 'Kepala: Helm',
    },

    {
        question: '29. PEREMPUAN: KEBAYA= LAKI-LAKI:...',
        options: [{text: 'Sepatu'}, {text: 'Baju'}, {text: 'Topi'}, {text: 'Jas'}, {text: 'Jaket'}],
        answer: 'Jas',
    },

    {
        question: '30. TELLER : BANK = ... : RESTORAN',
        options: [{text: 'Masakan'}, {text: 'Pelayan'}, {text: 'Minuman'}, {text: 'Bartender'}, {text: 'Menu'}],
        answer: 'Pelayan',
    },

    {
        question: '31. LAMPU : GELAP= MAKANAN:...',
        options: [{text: 'Lapar'}, {text: 'Kenyang'}, {text: 'Kayang'}, {text: 'Penuh'}, {text: 'Keruh'}],
        answer: 'Lapar',
    },

    {
        question: "32. Perhatikan gambar berikut! <br>",
        image: "soal/figural/figural_1.png", // Misalnya, path ke gambar
        options: [
            {text: '(A)'},
            {text: '(B)'},
            {text: '(C)'},
            {text: '(D)'},
            {text: '(E)'},
        ],
        answer: '(E)',
    },

    {
        question: "33. Perhatikan gambar berikut! <br>",
        image: "soal/figural/figural_2.png", // Misalnya, path ke gambar
        options: [
            {text: '(A)'},
            {text: '(B)'},
            {text: '(C)'},
            {text: '(D)'},
            {text: '(E)'},
        ],
        answer: '(B)',
    },

    {
        question: "34. Perhatikan gambar berikut! <br>",
        image: "soal/figural/figural_3.png", // Misalnya, path ke gambar
        options: [
            {text: '(A)'},
            {text: '(B)'},
            {text: '(C)'},
            {text: '(D)'},
            {text: '(E)'},
        ],
        answer: '(C)',
    },

    {
        question: "35. Perhatikan gambar berikut! <br>",
        image: "soal/figural/figural_4.png", // Misalnya, path ke gambar
        options: [
            {text: '(A)'},
            {text: '(B)'},
            {text: '(C)'},
            {text: '(D)'},
            {text: '(E)'},
        ],
        answer: '(A)',
    },

    {
        question: '36. Bangsa Indonesia adalah bangsa yang anti terhadap segala penjajah. Hal ini sesuai dengan pembukaan UUD 1945...',
        options: [{text: 'Alinea pertama'}, {text: 'Alinea kedua'}, {text: 'Alinea ketiga'}, {text: 'Alinea keempat'}],
        answer: 'Alinea pertama',
    },

    {
        question: '37. Berdasarkan Pasal 30 ayat (2), usaha pertahan dan keamanan negara tugas dari...',
        options: [{text: 'Tiap warga negara'}, {text: 'TNI AD, AL, dan AU'}, {text: 'TNI dan Polri sebagai kekuatan utama, dan rakyat sebagai kekuatan pendukung'}, {text: 'Seluruh rakyat yang tinggal di Indonesia'}],
        answer: 'TNI dan Polri sebagai kekuatan utama, dan rakyat sebagai kekuatan pendukung',
    },

    {
        question: '38. Berikut ini yang merupakan contoh peran serta positif warga negara dalam kegiatan pemerintah adalah...',
        options: [{text: 'Menunjukkan kekayaan.'}, {text: 'Membayar pajak tepat pada waktunya.'}, {text: 'Membangun hotel-hotel berbintang.'}, {text: 'Memberikan bantuan kepada para korban bencana alam.'}],
        answer: 'Membayar pajak tepat pada waktunya.',
    },

    {
        question: '39. Hari Kesaktian Pancasila diperingati setiap tanggal...',
        options: [{text: '1 Juni'}, {text: '22 Juni'}, {text: '30 September'}, {text: '1 Oktober'}],
        answer: '1 Oktober',
    },

    {
        question: '40. Sumpah Pemuda merupakan titik balik pemuda Indonesia untuk bersatu demi mewujudkan Indonesia merdeka. Tokoh yang membacakan Sumpah Pemuda adalah...',
        options: [{text: 'Amir Syarifudin'}, {text: 'Moh Yamin'}, {text: 'Djojo Marsaid'}, {text: 'Soegondo Djojopoespito'}],
        answer: 'Soegondo Djojopoespito',
    },

    {
        question: '41. Pada periode awal Kemerdekaan Indonesia sebelum MPR, DPR, dan DPA dibentuk, segala kekuasaan lembaga tersebut dijalankan oleh...',
        options: [{text: 'Presiden dan menteri'}, 
                {text: 'Presiden dan wakil presiden'}, 
                {text: 'Presiden dengan bantuan Komite Nasional'}, 
                {text: 'Presiden, menteri, dan BPK'}],
        answer: 'Presiden dengan bantuan Komite Nasional',
    },

    {
        question: '42. Pada periode awal kemerdekaan Indonesia terjadi beberapa penyimpangan terhadap ketentuan UUD 1945. Contoh penyimpangan pada awal kemerdekaan Indonesia adalah...',
        options: [{text: 'Lembaga-lembaga negara dipimpin oleh presiden'}, 
                {text: 'Membentuk DPA dan MA dengan penerapan presiden'}, 
                {text: 'Terjadi perubahan sistem kabinet presidensial menjadi kabinet parlementer'}, 
                {text: 'Membentuk MPRS yang anggotanya diangkat dan diberhentikan presiden'}],
        answer: 'Terjadi perubahan sistem kabinet presidensial menjadi kabinet parlementer',
    },

    {
        question: '43. Negara Kesatuan Republik Indonesia yang lahir pada 17 Agustus 1945 belum sempurna sebagai negara jika ditinjau dari segi...',
        options: [{text: 'Ilmu politik'}, {text: 'Ilmu sosial'}, {text: 'Ilmu budaya'}, {text: 'Hukum tata negara'}],
        answer: 'Hukum tata negara',
    },

    {
        question: '44. Di Indonesia presiden memegang fungsi rangkap, yaitu sebagai kepala negara dan kepala pemerintahan. Menurut UUD 1945, presiden dibantu oleh...',
        options: [{text: 'Menteri-menteri'}, 
                {text: 'Wakil presiden'}, 
                {text: 'Ketua partai'}, 
                {text: 'Sekretaris kabinet.'}],
        answer: 'Menteri-menteri',
    },

    {
        question: '45. Contoh pelaksanaan politik luar negeri yang bebas dan aktif berdasarkan Pancasila adalah...',
        options: [{text: 'Ikut campur dan memihak salah satu blok'}, 
                {text: 'Pengiriman pasukan perdamaian ke wilayah konflik'}, 
                {text: 'Memberi bantuan senjata kepada negara yang bertikai'}, 
                {text: 'Menghimpun negara sepaham dan seideologi'}],
        answer: 'Pengiriman pasukan perdamaian ke wilayah konflik',
    },

    {
        question: '46. Pancasila wajib diterima dan dipatuhi oleh seluruh lapisan masyarakat tanpa terkecuali maka Pancasila tergolong pada ideologi yang...',
        options: [{text: 'Tertutup'}, {text: 'Terbuka'}, {text: 'Progresif'}, {text: 'Kontemporer'}],
        answer: 'Tertutup',
    },

    {
        question: '47. Fungsi dan filsafat Pancasila dalam hubungan dengan ideologi-ideologi di dunia adalah sebagai...',
        options: [{text: 'Perbandingan perkembangan ideologi'}, {text: 'Penyaringan masuknya ideologi asing'}, {text: 'Perpaduan filsafat dan ideologi'}, {text: 'Perebutan hegemoni filsafat'}],
        answer: 'Penyaringan masuknya ideologi asing',
    },

    {
        question: '48. Hubungan antara Pancasila dan Proklamasi Kemerdekaan adalah...',
        options: [{text: 'Pancasila memberi motivasi perjuangan kemerdekaan'}, {text: 'Pancasila menjadi dasar perumusan Teks Proklamasi'}, {text: 'Teks Proklamasi dirumuskan bersama dengan Pancasila'}, {text: 'Proklamasi Kemerdekaan menjadi dasar berlakunya Pancasila'}],
        answer: 'Proklamasi Kemerdekaan menjadi dasar berlakunya Pancasila',
    },

    {
        question: '49. Salah satu sumbangan yang diberikan Sumpah Pemuda adalah...',
        options: [{text: 'Memberi penghargaan kepada tradisi etnik'}, {text: 'Meningkatkan kesadaran berbangsa'}, {text: 'Saling menghargai di kalangan suku-suku bangsa'}, {text: 'Kesadaran akan kebhinekaan'}],
        answer: 'Meningkatkan kesadaran berbangsa',
    },

    {
        question: '50. Pemerintah telah menetapkan kewajiban wajib belajar pendidikan dasar 9 tahun. Yang dimaksud pendidikan 9 tahun adalah...',
        options: [{text: 'Pendidikan yang terdiri atas prasekolah, SD, dan SMP'}, {text: 'Pendidikan tingkat SMP 3 tahun yang dihapus dan diintegrasikan menjadi SD tahun'}, {text: 'Pendidikan tingkat SD 6 tahun dan SMP 3 tahun'}, {text: 'Pendidikan SD dan SMP yang sama-sama menjadi 9 tahun'}],
        answer: 'Pendidikan tingkat SD 6 tahun dan SMP 3 tahun',
    },

    {
        question: '51. Undang-Undang Dasar Negara Republik Indonesia Tahun 1945 merupakan hukum dasar Indonesia. Undang-undang dasar ini diamandemen pada 1999-2022. Alasan pokok yang menjadi penyebab dilakukan amandemen terhadap UUD 1945 adalah...',
        options: [{text: 'Menyesuaikan dengan paham liberalis dan komunis'}, {text: 'Menyesuaikan dengan kehidupan baru negara Indonesia'}, {text: 'Keinginan bangsa Indonesia memberikan kekuasaan lebih besar kepada DPR'}, {text: 'Pasal-pasal dalam undang-undang dasar sudah tidak sesuai perkembangan zaman.'}],
        answer: 'Menyesuaikan dengan kehidupan baru negara Indonesia',
    },

    {
        question: '52. Dasar ikatan hidup bermasyarakat yang telah dijunjung tinggi oleh nenek moyang bangsa Indonesia adalah...',
        options: [{text: 'Gotong royong'}, {text: 'Kerja keras'}, {text: 'Sama rata'}, {text: 'Toleransi'}],
        answer: 'Gotong royong',
    },

    {
        question: '53. Persatuan Indonesia merupakan suatu faktor kunci yang menentukan terwujudnya kemerdekaan Indonesia. Oleh karena itu, realisasi persatuan Indonesia harus bersifat...',
        options: [{text: 'Statis'}, {text: 'Dinamis'}, {text: 'Materialistis'}, {text: 'Materialistis'}],
        answer: 'Dinamis',
    },

    {
        question: '54. Bangsa Indonesia tumbuh dan berkembang dalam suatu proses sampai membentuk negara Republik Indonesia. Pernyataan tersebut menunjukkan kesatuan...',
        options: [{text: 'Nasib'}, {text: 'Sejarah'}, {text: 'Wilayah'}, {text: 'Kebudayaan'}],
        answer: 'Sejarah',
    },

    {
        question: '55. Pertahanan merupakan salah satu bidang urusan pemerintah pusat. Tugas dari pemerintah pusat dalam bidang pertahanan adalah...',
        options: [{text: 'Memberi grasi'}, {text: 'Membentuk kepolisian negara'}, {text: 'Menetapkan keamanan nasional'}, {text: 'Menetapkan kebijakan untuk wajib militer'}],
        answer: 'Menetapkan keamanan nasional',
    },

    {
        question: '56. Pancasila sebagai suatu ideologi tidak bersifat kaku dan tertutup, namun bersifat reformatif, dinamis, dan terbuka. Hal ini dimaksudkan bahwa ideologi Pancasila adalah bersifat ....',
        options: [{text: 'aktual, dinamis, dan antisipatif'}, {text: 'aktual, statis, dan antisipatif'}, {text: 'aktual, statis, dan responsif'}, {text: 'aktual, dinamis, dan preventif'}],
        answer: 'aktual, dinamis, dan antisipatif',
    },

    {
        question: '57. Pancasila disahkan oleh PPKI sebagai dasar filsafat negara Republik Indonesia pada tanggal ....',
        options: [{text: '18 Agustus 1945'}, {text: '8 Agustus 1945'}, {text: '18 Agustus 1944'}, {text: '17 Agustus 1945'}],
        answer: '18 Agustus 1945',
    },

    {
        question: '58. Teks-teks yang termuat dalam konstitusi yang kemudian dikenal sebagai UUD 1945 adalah hasil perumusan apa yang terjadi di dalam kehidupan bermasyarakat. Keberadaan konstitusi dalam negara pada prinsipnya untuk ....',
        options: [{text: 'Membatasi kekuasaan pemerintah'}, {text: 'Memberikan kekuasaan tak terbatas pada pemerintah'}, {text: 'Kekuasaan parlemen di atas lembaga hukum'}, {text: 'Kekuasaan hukum di atas parlemen'}],
        answer: 'Membatasi kekuasaan pemerintah',
    },

    {
        question: '59. Hukum perdata adalah hukum yang mengatur hubungan antara orang yang satu dengan orang yang lain dengan menitikberatkan kepada kepentingan perseorangan. Ciri-ciri hukum perdata adalah sebagai berikut, kecuali ....',
        options: [{text: 'Mengatur hubungan antara anggota masyarakat dengan negara yang mengatur tata tertib masyarakatnya'}, 
                {text: 'Mengatur hubungan antara orang yang satu dengan orang yang lain'}, 
                {text: 'Mengatur hukum keluarga, hukum harta kekayaan, dan hukum waris'}, 
                {text: 'Korban berlaku sebagai penggugat'}],
        answer: 'Mengatur hubungan antara anggota masyarakat dengan negara yang mengatur tata tertib masyarakatnya',
    },

    {
        question: '60. Pemberontakan PKI di Madiun, dipimpin oleh ....',
        options: [{text: 'Amir Syarifudin'}, {text: 'Kartosuwiryo'}, {text: 'Amir Fatah'}, {text: 'Amir Hamzah'}],
        answer: 'Amir Syarifudin',
    },

    {
        question: '61. Sumber hukum Indonesia dibagi menjadi dua, yaitu sumber hukum material dan sumber hukum formal. Berikut yang termasuk sumber hukum formal, kecuali ....',
        options: [{text: 'Undang-undang'}, {text: 'Traktat'}, {text: 'Pancasila'}, {text: 'Keputusan Hakim'}],
        answer: 'Pancasila',
    },

    {
        question: '62. Sekretariat ASEAN berada di ....',
        options: [{text: 'Bangkok'}, {text: 'Manila'}, {text: 'Singapura'}, {text: 'Jakarta'}],
        answer: 'Jakarta',
    },

    {
        question: '63. Perkembangan Perhimpunan Indonesia menjadi organisasi politik terutama merupakan hasil usaha ....',
        options: [{text: 'Sutomo'}, {text: 'Muhammad Hatta'}, {text: 'Sukiman Wiryosanjoyo'}, {text: 'Soekarno'}],
        answer: 'Muhammad Hatta',
    },

    {
        question: '64. Konstitusi Indonesia yang dikenal sebagai UUD 1945 dalam konteks klasifikasi konstitusi adalah konstitusi yang ....',
        options: [{text: 'Tertulis, fleksibel, solid'}, {text: 'Tertulis, fleksibel, rigid'}, {text: 'Tertulis, toleran, solid'}, {text: 'Tertulis, toleran, rigid'}],
        answer: 'Tertulis, fleksibel, rigid',
    },

    {
        question: '65. Ideologi Pancasila berdasar pada hakikat sifat kodrat manusia sebagai makhluk individu dan makhluk sosial. Oleh karena itu, ideologi Pancasila mengakui kebebasan hak-hak masyarakat. Kebebasan manusia dalam rangka demokrasi tidak melampaui hakikat nilai-nilai ....',
        options: [{text: 'Ketuhanan'}, {text: 'Kebersamaan'}, {text: 'Kerakyatan'}, {text: 'Keadlian'}],
        answer: 'Ketuhanan',
    },

    {
        question: "66. Rekan saya meminta saya memalsukan tanda tangan presensi. Sikap saya... ",
        options: [
        { text: "Meminta rekan lain untuk memalsukan tanda tangannya", value: 1 },
        { text: "Menuruti permintaannya karena dia rekan yang baik", value: 2 },
        { text: "Menolak permintaannya dan membiarkan kolom presensinya kosong ", value: 3 },
        { text: "Melaporkannya pada atasan agar atasan menegurnya", value: 4 },
        { text: "Menegurnya agar tidak melakukan kecurangan presensi", value: 5 },
        ],
        type: "TKP", // Tambahkan tipe soal TKP
    },

    
    {
        question: "67. Ketika Anda mengalami kegagalan dalam meminta maaf atas kesalahan yang Anda lakukan, sikap Anda adalah ....",
        options: [
        { text: "Tidak berani meminta maaf lagi", value: 1 },
        { text: "Bimbang apakah meminta maaf lagi itu perlu", value: 2 },
        { text: "Meminta bantuan orang lain menjadi penengah", value: 3 },
        { text: "Berusaha meminta maaf lagi berharap dimaafkan", value: 4 },
        { text: "Berusaha meminta maaf lagi, sampai dimaafkan", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "68. Saya mengetahui bahwa atasan saya di kantor melakukan rekayasa laporan keuangan untuk kepentingan pribadi. Sikap saya sebaiknya ....",
        options: [
        { text: "Wajar karena hal tersebut sering terjadi di kantor mana pun", value: 1 },
        { text: "Hal semacam itu memang sudah menjadi tradisi yang tidak baik di lingkungan kerja manapun. ", value: 2 },
        { text: "Hanya dalam hati saja saya tidak menyetujui hal tersebut", value: 3 },
        { text: "Tidak ingin terlibat dalam proses rekayasa tersebut dan sebisa mungkin mengingatkan bahwa hal itu tidak baik", value: 4 },
        { text: "Melaporkan atasan tersebut kepada pihak yang berwenang", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "69. Perusahaan tempat saya bekerja sedang mengalami masalah internal, sikap saya ....",
        options: [
        { text: "Bagaimanapun juga publik berhak tahu, oleh karenanya saya beberkan masalah internal tersebut kepada publik", value: 1 },
        { text: "Saya tentu saja berusaha menjaga keamanan posisi saya agar tidak terusik", value: 2 },
        { text: "Saya berusaha agar diri saya jangan sampai terkena imbasnya", value: 3 },
        { text: "Biarlah pimpinan yang mengambil keputusan", value: 4 },
        { text: "Saya berusaha memberikan gagasan pemecahan masalah kepada pimpinan, sambil menjaga kerahasiaan masalah internal ini", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "70. Agar suatu kegiatan berhasil dilaksanakan, sikap Anda adalah ....",
        options: [
        { text: "Menggunakan cara yang biasa saya pakai", value: 1 },
        { text: "Minta bimbingan guru dalam melaksanakan kegiatan tersebut", value: 2 },
        { text: "Menyesuaikan dengan kondisi yang sedang berjalan", value: 3 },
        { text: "Mencontoh orang lain yang sukses mengerjakan pekerjaan serupa", value: 4 },
        { text: "Mempelajari jenis kegiatan tersebut sebelum memulai kegiatan", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "71. Atasan yang Anda sukai adalah ....",
        options: [
        { text: "Tidak terlalu membantu menyelesaikan tugas, namun sebaliknya berharap saya menyelesaikan pekerjaan tanpa sering berkonsultasi kepadanya", value: 1 },
        { text: "Sangat disiplin dan selalu meminta saya menunggu keputusan yang diambilnya sebelum suatu dilaksanakan", value: 2 },
        { text: "Senantiasa mendelegasikan wewenangnya pada bawahan", value: 3 },
        { text: "Selalu menanyakan pendapat dan ide dari bawahan sebagai bahan masukan untuk suatu pekerjaan yang dilakukannya", value: 4 },
        { text: "Selalu memberi petunjuk yang jelas atas pekerjaan yang akan bawahan kerjakan.", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "72. Berpindah-pindah pekerjaan adalah hal yang wajar?",
        options: [
        { text: "Saya menyukai pekerjaan saya, tetapi jika ada pekerjaan yang lebih baik saya tidak ragu untuk pindah.", value: 1 },
        { text: "Pekerjaan saya saat ini tidak dapat menjamin masa depan saya.", value: 2 },
        { text: "Saya tidak berpendapat bahwa karyawan harus setia terhadap perusahaannya.", value: 3 },
        { text: "Saya meyakini nilai-nilai yang mengatakan bahwa loyalitas terhadap pekerjaan adalah sikap yang terpuji.", value: 4 },
        { text: "Saya meyakini bahwa loyalitas itu penting sehingga saya merasakan pentingnya tanggung jawab moral karyawan.", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "73. Bulan depan ada kesempatan untuk ikut kompetensi dalam bidang saya senangi, maka saya",
        options: [
        { text: "Tidak, ikut saja daripada kalah", value: 1 },
        { text: "Tidak ikut kompetisi", value: 2 },
        { text: "Ikut jika ada kemungkinan saya menang", value: 3 },
        { text: "Saya ikut, karena saya pasti memenangkan persaingan", value: 4 },
        { text: "Mempersiapkan diri guna memenangkan persaingan", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "74. Jika Anda dituntut untuk menyelesaikan pekerjaan lebih cepat dari biasanya, maka tindakan Anda seharusnya...",
        options: [
        { text: "Meninggalkan pekerjaan tersebut.", value: 1 },
        { text: "Menolak tuntutan tersebut.", value: 2 },
        { text: "Menyuruh orang lain yang dapat mengerjakan tugas tersebut lebih cepat dari Anda.", value: 3 },
        { text: "Mengerjakan semampu Anda.", value: 4 },
        { text: "Mengerjakan dengan penuh tanggung jawab dan seoptimal mungkin.", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "75. Saat saya sibuk dengan pekerjaan, ada unit kerja lain meminta saya untuk mencari file karyawan segera. Maka yang akan saya lakukan....",
        options: [
        { text: "Melaporkan pada atasan Anda karena mengganggu aktivitas Anda.", value: 1 },
        { text: "Meminta bagian lain untuk mencari sendiri.", value: 2 },
        { text: "Menunda-nunda mencari file tersebut.", value: 3 },
        { text: "Mencari secara bersama-sama file tersebut.", value: 4 },
        { text: "Segera mencari file yang diminta.", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "76. Ketika sedang lelah dengan pekerjaan di kantor, Anda akan...",
        options: [
        { text: "Keluar ruangan", value: 1 },
        { text: "Bermain game", value: 2 },
        { text: "Makan di kantin", value: 3 },
        { text: "Mendengarkan musik", value: 4 },
        { text: "Tidur sejenak", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "77. Di kantor Anda terdapat banyak sekali kertas bekas, maka Anda akan...",
        options: [
        { text: "Membiarkannya", value: 1 },
        { text: "Membakarnya", value: 2 },
        { text: "Membuangnya saja", value: 3 },
        { text: "Menjualnya", value: 4 },
        { text: "Membuatnya kertas baru", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "78. Untuk memenuhi kebutuhan gizi anak Anda, Anda sering...",
        options: [
        { text: "Memberikannya makanan instan", value: 1 },
        { text: "Mengajaknya makan di restoran", value: 2 },
        { text: "Membelikannya buah-buahan segar", value: 3 },
        { text: "Menanam sayuran sendiri", value: 4 },
        { text: "Memasak bersamanya", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "79. Jika Anda menjadi bagian dari tim SAR yang kebetulan tersesat di suasana bencana, yang akan Anda lakukan untuk keluar dari situasi tersebut adalah....",
        options: [
        { text: "Menangis dan menyesal karena bergabung dengan tim SAR yang tersesat.", value: 1 },
        { text: "Mencoba untuk tenang sambil berharap bantuan akan segera datang.", value: 2 },
        { text: "Mengikuti petunjuk ketua rombongan untuk keluar dari kesulitan tersebut.", value: 3 },
        { text: "Mencoba menghubungi penjaga Posko, untuk memandu mencari jalan keluar.", value: 4 },
        { text: "Mengajak tim untuk mencari alternatif solusi mencari jalan keluar.", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "80. Setelah dilakukan penelusuran ternyata bendahara Anda melakukan korupsi. Sebagai atasan yang akan Anda lakukan adalah...",
        options: [
        { text: "Memecatnya", value: 1 },
        { text: "Mengintrogasinya tentang alasan melakukan korupsi", value: 2 },
        { text: "Meminta pertanggung jawaban karyawan tersebut.", value: 3 },
        { text: "Meminta karyawan tersebut mengembalikan uang hasil korupsi tersebut.", value: 4 },
        { text: "Melaporkannya ke pihak berwajib.", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "81. Salah satu staf Anda terbukti melakukan tindak gratifikasi, maka tindakan Anda adalah...",
        options: [
        { text: "Melupakan kejadian tersebut.", value: 1 },
        { text: "Membiarkan perbuatan tersebut.", value: 2 },
        { text: "Memaklumi kejadian tersebut sebagai bentuk kekhilafan.", value: 3 },
        { text: "Menasehatinya agar tidak terjadi peristiwa tersebut di lain hari.", value: 4 },
        { text: "Menindak secara tegas untuk memberikan efek jera.", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "82. Staf Anda berniat untuk mengundurkan diri, padahal kinerjanya sangat baik. Sebagai atasan, tindakan yang akan Anda lakukan adalah...",
        options: [
        { text: "Membiarkannya mengundurkan diri karena merupakan hak.", value: 1 },
        { text: "Memberikan fasilitas yang diinginkan oleh karyawan tersebut. ", value: 2 },
        { text: "Menaikkan gaji dan tunjangan agar tidak jadi mengundurkan diri.", value: 3 },
        { text: "Mempertahankan karyawan tersebut agar tidak mengundurkan diri.", value: 4 },
        { text: "Mencoba untuk menanyakan alasan pengunduran dirinya, jika memungkinkan meminta karyawan tersebut untuk tetap bertahan di kantor.", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "83. Jika komputer rekan Anda rusak dan ia meminjam komputer Anda untuk menyelesaikan pekerjaannya yang mendesak, maka tindakan Anda adalah....",
        options: [
        { text: "Meminjamkan komputer Anda dengan rasa kesal.", value: 1 },
        { text: "Menolak permintaannya secara halus.", value: 2 },
        { text: "Memintanya agar meminjam komputer rekan Anda yang lain.", value: 3 },
        { text: "Menyuruhnya menghubungi tim IT agar segera dibantu.", value: 4 },
        { text: "Meminjamkan komputer sambil menghubungi IT agar segera mendapat bantuan. ", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "84. Saat sedang bekerja, mendadak salah satu keluarga saya menelepon dan meminta bantuan. Yang saya lakukan....",
        options: [
        { text: "Tidak peduli", value: 1 },
        { text: "Menelefon anggota keluarga tersebut dan memintanya menunggu jam pulang kerja", value: 2 },
        { text: "Segera pergi dan menghampiri anggota keluarga saya tersebut", value: 3 },
        { text: "Meminta izin kepada atasan untuk pergi jika diizinkan pergi", value: 4 },
        { text: "Meminta izin kepada atasan untuk pergi dan tetap pergi walaupun tak diizinkan", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "85. Atasan saya menanyakan tanggapan saya tentang teman sejawat saya, yang saya katakan......",
        options: [
        { text: "Tidak mengatakan apa-apa", value: 1 },
        { text: "Mengatakan hal yang buruk saja tentang teman saya", value: 2 },
        { text: "Mengatakan hal yang baik saja tentang teman saya", value: 3 },
        { text: "Mengatakan apa adanya tentang teman saya", value: 4 },
        { text: "Mengatakan hal yang baik terlebih dahulu lalu memberitahukan kekurangannya", value: 5 },
        ],
    },

    {
        question: "86. Saat sedang jam istirahat siang, yang saya lakukan....",
        options: [
        { text: "Pergi keluar kantor", value: 1 },
        { text: "Tidur", value: 2 },
        { text: "Mengerjakan tugas yang belum selesai", value: 3 },
        { text: "Membaca media informasi (Buku, Majalah, Internet)", value: 4 },
        { text: "Makan siang dan menunaikan ibadah", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "87. Anda adalah seorang pegawai bidang kesehatan. Seseorang ingin membeli obat-obatan tertentu yang harus menggunakan resep dokter karena bisa membahayakan kesehatan. Dia tidak mempunyai resep itu. Namun, orang tersebut memaksa ingin membelinya dan dia memberikan sejumlah uang kepada Anda agar mau memberikan obat tersebut. Apa yang Anda lakukan?",
        options: [
        { text: "Anda menerima uang tersebut dan memberikan obatnya.", value: 1 },
        { text: "Anda memberikan obat tersebut kepadanya karena tak ada yang tahu.", value: 2 },
        { text: "Anda ragu-ragu keputusan apa yang Anda ambil.", value: 3 },
        { text: "Anda berkonsultasi kepada rekan sejawat dulu.", value: 4 },
        { text: "Anda menolaknya dengan mantap.", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "88. Seorang oknum staf personalia menawarkan bantuan kepada Anda untuk bisa diterima menjadi pegawai di tempat tersebut dengan cara memberikan dana dengan jumlah tertentu. Sikap Anda adalah ....",
        options: [
        { text: "Menerima tawaran tersebut sebab persaingan memang sangat ketat.", value: 1 },
        { text: "Mencoba terlebih dahulu dengan cara resmi sebelum melalui cara seperti itu.", value: 2 },
        { text: "Mempertimbangkan terlebih dahulu segala sesuatunya.", value: 3 },
        { text: "Meminta pertimbangan orang tua dan pihak-pihak yang lebih berpengalaman.", value: 4 },
        { text: "Menolaknya karena Anda ingin diterima dengan cara yang sah, bukan dengan suap, agar rezeki Anda sebagai pegawai nanti tetap halal.", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "89. Seberapa pentingkah kekompakan tim bagi Anda?",
        options: [
        { text: "Penting tapi bukan yang utama.", value: 1 },
        { text: "Biasa saja karena kita di dunia profesional tidak begitu perlu kedekatan.", value: 2 },
        { text: "Tidak terlalu penting karena yang penting adalah target tercapai.", value: 3 },
        { text: "Sangat penting, walaupun tujuan tercapai lebih lama tetapi kedekatan individu harus terbangun kuat.", value: 4 },
        { text: "Cukup penting karena itu merupakan dorongan mencapai tujuan tim.", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "90. Sebagai seorang pemimpin, apakah mengomunikasikan perasaan itu penting?",
        options: [
        { text: "Tidak perlu, pemimpin bertanggung jawab akan progres kinerja bukan tentang permasalahan pribadi.", value: 1 },
        { text: "Tidak perlu, pemimpin dilihat dari kinerja.", value: 2 },
        { text: "Perlu karena bisa jadi hal tersebut menghambat.", value: 3 },
        { text: "Terkadang perlu jika dalam kondisi yang memang dibutuhkan.", value: 4 },
        { text: "Sangat perlu karena perasaan akan mempengaruhi hasil kinerja dan kedekatan antar personil sangat dibutuhkan.", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "91. Mana hal yang lebih penting menurut Anda sebagai pemimpin?",
        options: [
        { text: "Menarik minat orang lain untuk bergabung dalam tim", value: 1 },
        { text: "Kinerja dan progres", value: 2 },
        { text: "Peka terhadap kebutuhan orang lain.", value: 3 },
        { text: "Merasakan bersama kinerja tim", value: 4 },
        { text: "Lead by example", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "92. Jika terdapat masalah di dalam tim, bagaimana cara pemimpin yang seharusnya menyelesaikannya?",
        options: [
        { text: "Keputusan pemimpin adalah mutlak", value: 1 },
        { text: "Pemimpin membiarkan anggotanya memilih keputusan", value: 2 },
        { text: "Pemimpin melihat keputusan yang paling logis", value: 3 },
        { text: "Pemimpin membiarkan keputusan dengan pilihan terbanyak", value: 4 },
        { text: "Mendiskusikan dengan anggota lainnya", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "93. Anda sering mengingatkan bawahan Anda untuk tidak melakukan kekeliruan pekerjaan kantor ....",
        options: [
        { text: "Karena Anda atasannya, peraturan tersebut tidak berlaku bagi Anda sendiri", value: 1 },
        { text: "Peraturan tersebut khusus untuk pegawai setingkat dia", value: 2 },
        { text: "Anda sesekali melakukan kekeliruan tersebut", value: 3 },
        { text: "Lebih baik Anda tidak melakukan kekeliruan tersebut", value: 4 },
        { text: "Anda pun tidak boleh melakukan kekeliruan tersebut", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "94. Jika suatu rencana terlihat rumit maka ....",
        options: [
        { text: "Anda khawatir jika mencobanya dan gagal", value: 1 },
        { text: "Anda tak mau repot-repot mencobanya", value: 2 },
        { text: "Yang penting Anda coba dulu", value: 3 },
        { text: "Anda minta pendapat orang lain dan yang penting Anda coba dulu", value: 4 },
        { text: "Anda berani mencobanya setelah mempertimbangkannya", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "95. Seberapa sering gagasan Anda diterima dan dijalankan dengan baik oleh tim atau rekan kerja Anda?",
        options: [
        { text: "Anda bukan tipe orang penghasil ide", value: 1 },
        { text: "Anda jarang mengungkapkan ide", value: 2 },
        { text: "Kadang-kadang, jika memang ide baik itu muncul", value: 3 },
        { text: "Sering, kebanyakan gagasan Anda unik sehingga dapat diterima", value: 4 },
        { text: "Selalu, gagasan Anda cemerlang dan selalu diterima", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "96. Di saat sedang presentasi, tiba-tiba ponsel Anda bergetar menerima panggilan/pesan singkat, maka reaksi Anda ....",
        options: [
        { text: "Seketika keluar meninggalkan ruang untuk mengangkat telepon", value: 1 },
        { text: "Langsung berani membuka apa yang barusan Anda terima", value: 2 },
        { text: "Segera men-silent agar tak mengganggu presentasi", value: 3 },
        { text: "Memerintahkan rekan sebelah untuk membuka isi ponsel Anda", value: 4 },
        { text: "Mohon ijin kepada audiens untuk mengangkat telepon sementara waktu", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "97. Di masa pensiun Anda, Anda senang jika ....",
        options: [
        { text: "Berkumpul dengan anak dan cucu Anda", value: 1 },
        { text: "Tidak bergantung pada anak dan cucu Anda", value: 2 },
        { text: "Hidup tenang tanpa bergantung pada siapa pun di panti wreda", value: 3 },
        { text: "Berbuat kebaikan demi kepentingan bersama", value: 4 },
        { text: "Bisa mendirikan rumah ibadah bagi mereka yang kurang beruntung", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "98. Ketika Anda melihat pelanggan yang kesulitan mengisi formulir, maka yang Anda lakukan adalah ....",
        options: [
        { text: "Memintanya bertanya kepada pelanggan lain", value: 1 },
        { text: "Bersabar menunggu sampai ia selesai", value: 2 },
        { text: "Meminta satpam membantu", value: 3 },
        { text: "Mengijinkan untuk membawa formulir tersebut pulang dan diisi di rumah", value: 4 },
        { text: "Memandu cara pengisian formulir tersebut", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "99. Rekan dari kantor cabang menemui Anda karena membutuhkan bantuan. Pada saat itu Anda harus pulang karena ada acara keluarga di rumah. Maka tindakan yang Anda lakukan adalah ....",
        options: [
        { text: "Meminta maaf karena tidak bisa membantu", value: 1 },
        { text: "Mengajak tamu Anda makan bersama di kantor", value: 2 },
        { text: "Menunda acara bersama keluarga", value: 3 },
        { text: "Menyuruh rekan Anda yang lain untuk membantunya", value: 4 },
        { text: "Menyelesaikan urusan dengan tamu, kemudian menepati janji bersama keluarga", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "100. Pada saat rapat dengan klien, teman Anda lupa membawa proposal tim Anda. Maka sikap Anda adalah ....",
        options: [
        { text: "Membatalkan rapat", value: 1 },
        { text: "Memarahinya karena ceroboh", value: 2 },
        { text: "Menjadwal ulang rapat", value: 3 },
        { text: "Memintanya mengambil proposal yang tertinggal", value: 4 },
        { text: "Mengirimkannya lewat kurir", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "101. Bagaimana Anda bersikap kepada rekan kerja yang lebih tua usianya dari Anda?",
        options: [
        { text: "Sering bercanda bahkan kelewatan", value: 1 },
        { text: "Merasa kaku", value: 2 },
        { text: "Biasa saja", value: 3 },
        { text: "Sudah sangat akrab seperti teman sebaya", value: 4 },
        { text: "Bercanda tetapi dalam batas kewajaran", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "102. Di lingkungan kerja yang baru ....",
        options: [
        { text: "Saya menunggu rekan kerja yang ingin berkenalan", value: 1 },
        { text: "Jika saya membutuhkan bantuan baru saya akan berkenalan", value: 2 },
        { text: "Saya perlu waktu untuk mengenal rekan-rekan kerja yang baru", value: 3 },
        { text: "Jika ada yang ingin berkenalan tentunya saya senang sekali", value: 4 },
        { text: "Saya langsung mampu akrab dengan rekan kerja baru saya", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "103. Ketika gagal mencapai sesuatu yang saya inginkan, saya ....",
        options: [
        { text: "Mencari dengan seksama siapa yang turut bertanggung jawab terhadap kegagalan saya tersebut", value: 1 },
        { text: "Bersedih hati", value: 2 },
        { text: "Meminta bantuan kepada lebih banyak orang", value: 3 },
        { text: "Mengambil waktu untuk menenangkan diri", value: 4 },
        { text: "Melakukan introspeksi dan memperbaiki upaya", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "104. Apa yang Anda rasakan dan lakukan saat menerima pujian dari atasan Anda?",
        options: [
        { text: "Saya merasa sulit menerima pujian tersebut karena menurut saya itu berlebihan", value: 1 },
        { text: "Saya merasa biasa saja", value: 2 },
        { text: "Saya merasa sedikit tersipu karena hal tersebu", value: 3 },
        { text: "Saya merasa senang dan bangga atas pencapaian saya", value: 4 },
        { text: "Saya merasa bersyukur dan puas atas hasil kerja saya", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "105. Sebagai seorang pemimpin apakah Anda selalu memberitahu setiap informasi kepada anggota?",
        options: [
        { text: "Hanya memberitahukan jika ditanya", value: 1 },
        { text: "Selalu, karena transparansi itu penting dalam tim", value: 2 },
        { text: "Hanya menginformasikan secara umum dan tersirat", value: 3 },
        { text: "Saya tidak pernah menginformasikannya karena itu adalah kewajiban saya sebagai pemimpin", value: 4 },
        { text: "Tidak semua informasi, hanya hal bersifat umum dan yang lain berhak untuk mengetahui", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "106. Bagaimana Anda membagi tugas kepada rekan dan bawahan Anda?",
        options: [
        { text: "Saya membaginya sesuai posisi masing-masing", value: 1 },
        { text: "Saya membaginya sesuai minat dan keinginan", value: 2 },
        { text: "Saya membaginya sesuai kepribadian dan sifat", value: 3 },
        { text: "Saya membaginya sesuai keahlian dan keterampilan", value: 4 },
        { text: "Saya membaginya dengan pertimbangan minat dan kemampuan", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "107. Apa pendapat Anda tentang waktu?",
        options: [
        { text: "Santai dan berusaha sebaik mungkin", value: 1 },
        { text: "Tepat waktu adalah segalanya", value: 2 },
        { text: "Harus dapat memanfaatkan waktu semaksimal mungkin secara otomatis", value: 3 },
        { text: "Tepat waktu adalah cara menghargai orang lain maka membuat perencanaan", value: 4 },
        { text: "Berusaha sebaik mungkin memanfaatkan waktu", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "108. Jika Anda memiliki seorang anak, maka Anda akan ....",
        options: [
        { text: "Menitipkannya di sekolah sepanjang hari", value: 1 },
        { text: "Mendidiknya seperti Anda dididik", value: 2 },
        { text: "Menitipkannya di sekolah yang terkenal", value: 3 },
        { text: "Menitipkannya di sekolah yang dekat dengan rumah", value: 4 },
        { text: "Mendidiknya sendiri di rumah Anda", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "109. Seberapa sering Anda menyisihkan waktu untuk merencanakan dan berpikir tentang pekerjaan Anda?",
        options: [
        { text: "Saya hampir tidak pernah menyisihkan waktu untuk merencanakan dan berpikir tentang pekerjaan", value: 1 },
        { text: "Saat saya membutuhkan berpikir ulang maka daya akan mengatur kembali pekerjaan saya", value: 2 },
        { text: "Terkadang saya memikirkannya saat waktu senggang", value: 3 },
        { text: "Saya selalu menjadwalkan rutin untuk evaluasi dan merencanakan ulang walaupun tidak rutin", value: 4 },
        { text: "Saya selalu rutin mengevaluasi diri dan memikirkan kembali seminggu sekali", value: 5 },
        ],
        type: "TKP",
    },

    {
        question: "110. Bagaimana pribadi Anda menyelesaikan sebuah masalah?",
        options: [
        { text: "Selalu meminta bantuan orang lain", value: 1 },
        { text: "Menyelesaikannya sendiri", value: 2 },
        { text: "Berusaha mungkin diselesaikan sendiri, jarang meminta tolong orang lain", value: 3 },
        { text: "Meminta pertolongan dan bersama-sama menyelesaikan namun terkadang menyelesaikan sendiri", value: 4 },
        { text: "Saya berusaha menyelesaikan sendiri sambil meminta tolong orang lain", value: 5 },
        ],
        type: "TKP",
    },
];

const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
const submitButton = document.getElementById("submit");
const retryButton = document.getElementById("retry");
const showAnswerButton = document.getElementById("showAnswer");
const timerDisplay = document.getElementById("timer");

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];
const quizDuration = 110 * 60; // 110 menit dalam detik
let timeLeft = quizDuration;
let timerId;
const pointsPerQuestion = 5; // Setiap soal default bernilai 5 poin
let userAnswers = []; // Array untuk menyimpan jawaban pengguna

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayQuestion() {
  const questionData = quizData[currentQuestion];
  const questionElement = document.createElement("div");
  questionElement.className = "question";
  questionElement.innerHTML = questionData.question;

  if (questionData.image) {
    const imageElement = document.createElement("img");
    imageElement.src = questionData.image;
    imageElement.alt = "Soal Gambar";
    imageElement.style.maxWidth = "300px";
    questionElement.appendChild(imageElement);
  }

  const optionsElement = document.createElement("div");
  optionsElement.className = "options";

  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);

  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement("label");
    option.className = "option";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "quiz";
    radio.value =
      questionData.type === "TKP" ? shuffledOptions[i].value : shuffledOptions[i].text; // Perbedaan perlakuan

    if (shuffledOptions[i].image) {
      const optionImage = document.createElement("img");
      optionImage.src = shuffledOptions[i].image;
      optionImage.alt = `Pilihan ${i + 1}`;
      optionImage.style.maxWidth = "100px";
      option.appendChild(optionImage);
    }

    const optionText = document.createTextNode(shuffledOptions[i].text);
    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  quizContainer.innerHTML = "";
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    const questionData = quizData[currentQuestion];
    const answer = selectedOption.value; // Simpan jawaban user
    userAnswers.push(answer);

    if (questionData.type === "TKP") {
      // Jika soal TKP, gunakan nilai dari opsi yang dipilih
      const selectedValue = parseInt(selectedOption.value);
      score += selectedValue;
    } else {
      // Jika soal biasa, periksa jawaban benar
      if (answer === questionData.answer) {
        score += pointsPerQuestion;
      } else {
        incorrectAnswers.push({
          question: questionData.question,
          incorrectAnswer: answer,
          correctAnswer: questionData.answer,
        });
      }
    }

    currentQuestion++;
    selectedOption.checked = false;
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      clearInterval(timerId);
      displayResult();
    }
  }
}

function displayResult() {
  quizContainer.style.display = "none";
  submitButton.style.display = "none";
  retryButton.style.display = "inline-block";
  showAnswerButton.style.display = "inline-block";
  resultContainer.innerHTML = `Skor Anda: ${score} dari ${
    quizData.length * pointsPerQuestion
  }!`;
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  userAnswers = []; // Reset jawaban user
  timeLeft = quizDuration;
  quizContainer.style.display = "block";
  submitButton.style.display = "inline-block";
  retryButton.style.display = "none";
  showAnswerButton.style.display = "none";
  resultContainer.innerHTML = "";
  displayQuestion();
  startTimer();
}

function showAnswer() {
  quizContainer.style.display = "none";
  submitButton.style.display = "none";
  retryButton.style.display = "inline-block";
  showAnswerButton.style.display = "none";

  let incorrectAnswersHtml = "";
  for (let i = 0; i < incorrectAnswers.length; i++) {
    const questionData = quizData[i];
    const userAnswer = userAnswers[i];

    incorrectAnswersHtml += `<p><strong>Pertanyaan:</strong> ${questionData.question}<br>`;

    if (questionData.type === "TKP") {
      // Tampilkan detail opsi dan jawaban user untuk soal TKP
      incorrectAnswersHtml += "<strong>Opsi dan Nilai:</strong><br>";
      questionData.options.forEach((option) => {
        incorrectAnswersHtml += `- ${option.text} (Nilai: ${option.value})<br>`;
      });
      incorrectAnswersHtml += `<strong>Jawaban Anda:</strong> ${
        questionData.options.find((opt) => opt.value == userAnswer)?.text ||
        "Tidak dijawab"
      }<br>`; // Tambahkan ini
      const bestOption = questionData.options.reduce((a, b) =>
        a.value > b.value ? a : b
      );
      if (userAnswer != bestOption.value) {
        incorrectAnswersHtml += `<strong>Jawaban Terbaik:</strong> ${bestOption.text} (Nilai: ${bestOption.value})`;
      }
    } else {
      // Tampilkan jawaban benar untuk soal biasa
      incorrectAnswersHtml += `<strong>Jawaban Anda:</strong> ${userAnswer}<br>`;
      incorrectAnswersHtml += `<strong>Jawaban Benar:</strong> ${questionData.answer}`;
    }

    incorrectAnswersHtml += `</p>`;
  }

  resultContainer.innerHTML = `
    <p>Skor Anda: ${score} dari ${
      quizData.length * pointsPerQuestion
    }!</p>
    <p>Detail Jawaban:</p>
    ${incorrectAnswersHtml}
  `;
}

function startTimer() {
  timerId = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timerDisplay.innerHTML = `${minutes}:${
        seconds < 10 ? "0" : ""
      }${seconds}`;
    } else {
      clearInterval(timerId);
      displayResult();
    }
  }, 1000);
}

submitButton.addEventListener("click", checkAnswer);
retryButton.addEventListener("click", retryQuiz);
showAnswerButton.addEventListener("click", showAnswer);

displayQuestion();
startTimer();