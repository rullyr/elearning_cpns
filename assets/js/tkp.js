const quizData = [
  {
    question: "1. Rekan saya meminta saya memalsukan tanda tangan presensi. Sikap saya... ",
    options: [
      { text: "Meminta rekan lain untuk memalsukan tanda tangannya", value: 1 },
      { text: "Menuruti permintaannya karena dia rekan yang baik", value: 2 },
      { text: "Menolak permintaannya dan membiarkan kolom presensinya kosong ", value: 3 },
      { text: "Melaporkannya pada atasan agar atasan menegurnya", value: 4 },
      { text: "Menegurnya agar tidak melakukan kecurangan presensi", value: 5 },
    ],
  },

  {
    question: "2. Ketika gagal mencapai sesuatu yang diinginkan, saya... ",
    options: [
      { text: "Mencari dengan seksama siapa yang turut bertanggung jawab terhadap kegagalan saya tersebut", value: 2 },
      { text: "Mengambil waktu untuk menenangkan diri", value: 3 },
      { text: "Bersedih hati", value: 1 },
      { text: "Melakukan introspeksi dan memperbaiki kekurangan penyebab kegagalan", value: 5 },
      { text: "Meminta bantuan orang-orang terdekat", value: 4 },
    ],
  },

  {
    question: "3. Rekan saya meminta saya memalsukan tanda tangan presensi. Sikap saya... ",
    options: [
      { text: "Dengan terpaksa menerimanya", value: 3 },
      { text: "Menerimanya dengan sedikit kekecewaan", value: 4 },
      { text: "Menerimanya dengan lapang dada", value: 5 },
      { text: "Membenci diri sendiri", value: 2 },
      { text: "Meratapi diri sendiri", value: 1 },
    ],
  },

  {
    question: "4. Di kantor Anda ada seorang rekan kerja yang ketika menghadapi orang, tidak bisa berkomunikasi dengan baik, egois, sombong, tidak jarang menyakiti perasaan orang ketika berbicara, dan kadang Anda juga merasa kurang dihargai atas pekerjaan dan pencapaian Anda di kantor. Sikap Anda ....",
    options: [
      { text: "Saya memahami karakter teman kerja tersebut dan saya tidak ingin terlalu memikirkan hal tersebut, untuk menghindari masalah saya berusaha menghindar dan tidak berbicara kepadanya dan hanya fokus pada tanggung jawab pekerjaan saya", value: 1 },
      { text: "Saya akan memahami sifat tersebut karena setiap orang memiliki karakter yang berbeda-beda, namun untuk menyadarkan dia saya akan berbicara dan bersikap seperti dirinya agar dia menyadari bahwa sikap dan cara berbicaranya menyakiti perasaan orang lain", value: 2 },
      { text: "Saya memahami bahwa setiap orang tentu memiliki karakter dan sifat yang berbeda-beda termasuk teman kerja saya tersebut, agar tidak merasa tersakiti oleh sikapnya maka saya perlu pintar untuk mengambil hatinya", value: 3 },
      { text: "Saya memahami perbedaan karakter setiap orang, namun saya tidak terlalu memikirkan hal tersebut, yang terpenting saya bisa menempatkan diri sewajarnya dan berbicara seperlunya secara rasional", value: 4 },
      { text: "Memahami perbedaan karakter merupakan suatu hal yang wajar, namun saya harus tetap memberitahunya secara sopan cara berbicara dan bersikap yang baik. Hal tersebut untuk menghindari adanya konflik di tempat kerja dikarenakan ketidaksesuaian dalam bersosialisasi", value: 5 },
    ],
  },

  {
    question: "5. Jika suatu rencana kerja terlihat rumit, maka ....",
    options: [
      { text: "Saya tak mau repot-repot mencobanya", value: 1 },
      { text: "Saya khawatir jika mencobanya dan gagal", value: 2 },
      { text: "Saya minta pendapat istri yang penting saya coba dulu", value: 3 },
      { text: "Saya berani mencobanya setelah mempertimbangkan risikonya", value: 4 },
      { text: "Yang penting saya coba dulu", value: 5 },
    ],
  },

  {
    question: "6. Anda ditugaskan oleh atasan untuk memimpin sebuah tim kerja. Tim Anda akan menjalankan sebuah program yang terbilang tenggat waktunya cukup ketat. Akan tetapi anggota tim kerja yang Anda pimpin memperlihatkan sikap yang cenderung tidak peduli dengan tugas masing-masing yang diemban. Sikap Anda seharusnya ....",
    options: [
      { text: "Melaporkan kepada atasan atas sikap anggota tim yang tidak serius dalam menjalankan kewajiban mereka dalam tim sehingga bisa diberikan teguran dan sanksi", value: 1 },
      { text: "Saya akan serius dan fokus bekerja dan yang terpenting bagian kewajiban saya dalam program tersebut terselesaikan dengan baik, anggota tim akan malu bisa kalah tekun dari saya", value: 3 },
      { text: "Mengingatkan anggota tim yang kurang serius dalam mengerjakan kewajibannya dan sampaikan bahwa bila mereka masih tidak peduli pada tanggung jawabnya, maka saya akan mengeluarkan mereka dari tim kerja", value: 2 },
      { text: "Mengingatkan anggota tim agar mereka sadar akan penyelesaian tanggung jawab yang diemban dan terus memotivasinya agar fokus dalam bekerja", value: 4 },
      { text: "Membagi tugas secara adil dan disesuaikan dengan kemampuan serta kompetensi masing-masing anggota tim", value: 5 },
    ],
  },

  {
    question: "7. Pada suatu malam ketika Anda sedang sibuk bekerja, anak Anda sedang belajar dikamarnya, dan istri Anda sedang memasak untuk hidangan malam keluarga. Tiba-tiba listrik di rumah Anda padam sehingga membuat anak dan istri Anda panik, yang akan Anda lakukan adalah ....",
    options: [
      { text: "Meminta rekan lain untuk memalsukan tanda tangannya", value: 1 },
      { text: "Saya akan mencari penerangan bila tidak ada satupun yang berusaha mencari penerangan alternatif.", value: 2 },
      { text: "Tetap tenang dan menyuruh istri untuk menyalakan penerangan alternatif. Istri yang sedang berada di dapur tentu akan lebih dekat dengan penerangan alternatif.", value: 3 },
      { text: "Mengkhawatirkan anak dan istri yang ketakutan karena gelap, dan mencari penerangan agar mereka tidak ketakutan.", value: 4 },
      { text: "Berinisiatif mencari penerangan agar anak saya tetap bisa belajar dan istri saya juga bisa melanjutkan masak dengan tenang.", value: 5 },
    ],
  },

  {
    question: "8. Sepanjang karier kerja Anda, Anda terlambat masuk kantor ....",
    options: [
      { text: "Sering sekali", value: 1 },
      { text: "Beberapa kali di masa lalu", value: 2 },
      { text: "Satu dua kali", value: 3 },
      { text: "Jarang", value: 4 },
      { text: "Tidak pernah", value: 5 },
    ],
  },

  {
    question: "9. Aturan angka kredit diubah tahun ini ....",
    options: [
      { text: "Menolak perubahan itu karena merepotkan", value: 1 },
      { text: "Perubahan itu memberatkan pegawai", value: 2 },
      { text: "Mempelajari jika mau mengusulkan angka kredit", value: 3 },
      { text: "Saya akan patuh pada aturan", value: 4 },
      { text: "Mempelajari perubahan itu dengan teliti ", value: 5 },
    ],
  },

  {
    question: "10. Anda bekerja di sebuah perusahaan sebagai HRD. Ketika merekrut pegawai baru yang akan bertugas pada bagian pelayanan, Anda lebih mengutamakan seorang pegawai yang ....",
    options: [
      { text: "Memiliki wajah cantik/tampan", value: 1 },
      { text: "Berpakaian rapi", value: 2 },
      { text: "Memiliki pengetahuan umum yang tinggi", value: 3 },
      { text: "Disiplin dan tepat waktu", value: 4 },
      { text: "Memiliki kemampuan berkomunikasi yang baik", value: 5 },
    ],
  },
];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');

let currentQuestion = 0;
let score = 0;
let userAnswers = []; // Array untuk menyimpan jawaban pengguna

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayQuestion() {
  const questionData = quizData[currentQuestion];

  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerHTML = questionData.question;

  const optionsElement = document.createElement('div');
  optionsElement.className = 'options';

  // Mengacak urutan opsi jawaban
  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);

  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement('label');
    option.className = 'option';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = shuffledOptions[i].value;

    const optionText = document.createTextNode(shuffledOptions[i].text);

    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    const answerValue = parseInt(selectedOption.value);
    score += answerValue;
    userAnswers.push({
      question: quizData[currentQuestion].question,
      userAnswer: answerValue,
      correctAnswer: null, // Karena ini tes kepribadian, tidak ada jawaban "benar"
    });
    currentQuestion++;
    selectedOption.checked = false;
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
}

function displayResult() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  resultContainer.innerHTML = `Skor Anda: ${score} dari ${quizData.length * 5}`;
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  userAnswers = [];
  quizContainer.style.display = 'block';
  submitButton.style.display = 'inline-block';
  retryButton.style.display = 'none';
  showAnswerButton.style.display = 'none';
  resultContainer.innerHTML = '';
  displayQuestion();
}

submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);

displayQuestion();