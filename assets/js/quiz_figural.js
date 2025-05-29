const quizDataFigural = [
    {
        introText: '1. Perhatikan gambar di bawah ini!', // Teks pengantar
        questionImage: 'soal/figural/figural_1.1.png', // Path gambar soal
        options: [
            'soal/figural/figural_1.1a.png',
            'soal/figural/figural_1.1b.png',
            'soal/figural/figural_1.1c.png',
            'soal/figural/figural_1.1d.png'
        ],
        answer: 'soal/figural/figural_1.1b.png', // Path gambar jawaban benar
    },

    {
        introText: '2. Perhatikan gambar di bawah ini!', // Teks pengantar
        questionImage: 'soal/figural/figural_2.2.png', // Path gambar soal
        options: [
            'soal/figural/figural_2.2a.png',
            'soal/figural/figural_2.2b.png',
            'soal/figural/figural_2.2c.png',
            'soal/figural/figural_2.2d.png'
        ],
        answer: 'soal/figural/figural_2.2c.png', // Path gambar jawaban benar
    },
    

    {
        introText: '3. Perhatikan gambar di bawah ini!', // Teks pengantar
        questionImage: 'soal/figural/figural_3.3.png', // Path gambar soal
        options: [
            'soal/figural/figural_3.3a.png',
            'soal/figural/figural_3.3b.png',
            'soal/figural/figural_3.3c.png',
            'soal/figural/figural_3.3d.png'
        ],
        answer: 'soal/figural/figural_3.3d.png', // Path gambar jawaban benar
    },

    {
        introText: '4. Perhatikan gambar di bawah ini!', // Teks pengantar
        questionImage: 'soal/figural/figural_4.4.png', // Path gambar soal
        options: [
            'soal/figural/figural_4.4a.png',
            'soal/figural/figural_4.4b.png',
            'soal/figural/figural_4.4c.png',
            'soal/figural/figural_4.4d.png'
        ],
        answer: 'soal/figural/figural_4.4a.png', // Path gambar jawaban benar
    },

    {
        introText: '5. Perhatikan gambar di bawah ini!', // Teks pengantar
        questionImage: 'soal/figural/figural_5.5.png', // Path gambar soal
        options: [
            'soal/figural/figural_5.5a.png',
            'soal/figural/figural_5.5b.png',
            'soal/figural/figural_5.5c.png',
            'soal/figural/figural_5.5d.png'
        ],
        answer: 'soal/figural/figural_5.5d.png', // Path gambar jawaban benar
    },

    {
        introText: '6. Perhatikan gambar di bawah ini!', // Teks pengantar
        questionImage: 'soal/figural/figural_6.6.png', // Path gambar soal
        options: [
            'soal/figural/figural_6.6a.png',
            'soal/figural/figural_6.6b.png',
            'soal/figural/figural_6.6c.png',
            'soal/figural/figural_6.6d.png'
        ],
        answer: 'soal/figural/figural_6.6b.png', // Path gambar jawaban benar
    },

    {
        introText: '7. Perhatikan gambar di bawah ini!', // Teks pengantar
        questionImage: 'soal/figural/figural_7.7.png', // Path gambar soal
        options: [
            'soal/figural/figural_7.7a.png',
            'soal/figural/figural_7.7b.png',
            'soal/figural/figural_7.7c.png',
            'soal/figural/figural_7.7d.png'
        ],
        answer: 'soal/figural/figural_7.7d.png', // Path gambar jawaban benar
    },

    {
        introText: '8. Perhatikan gambar di bawah ini!', // Teks pengantar
        questionImage: 'soal/figural/figural_8.8.png', // Path gambar soal
        options: [
            'soal/figural/figural_8.8a.png',
            'soal/figural/figural_8.8b.png',
            'soal/figural/figural_8.8c.png',
            'soal/figural/figural_8.8d.png'
        ],
        answer: 'soal/figural/figural_8.8b.png', // Path gambar jawaban benar
    },

    {
        introText: '9. Perhatikan gambar di bawah ini!', // Teks pengantar
        questionImage: 'soal/figural/figural_9.9.png', // Path gambar soal
        options: [
            'soal/figural/figural_9.9a.png',
            'soal/figural/figural_9.9b.png',
            'soal/figural/figural_9.9c.png',
            'soal/figural/figural_9.9d.png'
        ],
        answer: 'soal/figural/figural_9.9c.png', // Path gambar jawaban benar
    },

    {
        introText: '10. Perhatikan gambar di bawah ini!', // Teks pengantar
        questionImage: 'soal/figural/figural_10.10.png', // Path gambar soal
        options: [
            'soal/figural/figural_10.10a.png',
            'soal/figural/figural_10.10b.png',
            'soal/figural/figural_10.10c.png',
            'soal/figural/figural_10.10d.png'
        ],
        answer: 'soal/figural/figural_10.10b.png', // Path gambar jawaban benar
    },
];

// assets/js/quiz_initializer.js
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// assets/js/quiz_initializer.js
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function initializeQuiz(containerId, data) {
    const quizContainer = document.getElementById(containerId);
    const quizPrefix = containerId.split('-')[1];
    const resultContainer = document.getElementById('result-' + quizPrefix);
    const submitButton = document.getElementById('submit-' + quizPrefix);
    const retryButton = document.getElementById('retry-' + quizPrefix);
    const showAnswerButton = document.getElementById('showAnswer-' + quizPrefix);

    let currentQuestion = 0;
    let score = 0;
    let incorrectAnswers = [];

    function displayQuestion() {
        const questionData = data[currentQuestion];

        const questionElement = document.createElement('div');
        questionElement.className = 'question';

        // Tambahkan teks pengantar jika ada
        if (questionData.introText) {
            const introTextElement = document.createElement('p');
            introTextElement.innerHTML = questionData.introText;
            questionElement.appendChild(introTextElement);
        }

        // Tambahkan gambar soal jika ada
        if (questionData.questionImage) { // Periksa properti questionImage
            const questionImageElement = document.createElement('img');
            questionImageElement.src = questionData.questionImage;
            questionImageElement.alt = 'Gambar Soal';
            questionImageElement.classList.add('quiz-question-image');
            questionElement.appendChild(questionImageElement);
        }
        // Jika tidak ada gambar soal, dan ada properti 'question' (untuk soal teks)
        else if (questionData.question) {
            questionElement.innerHTML += questionData.question;
        }


        const optionsElement = document.createElement('div');
        optionsElement.className = 'options';

        const shuffledOptions = [...questionData.options];
        shuffleArray(shuffledOptions);

        for (let i = 0; i < shuffledOptions.length; i++) {
            const option = document.createElement('label');
            option.className = 'option';

            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = containerId + '_quiz';
            radio.value = shuffledOptions[i]; // Nilai opsi adalah path gambar atau teks

            option.appendChild(radio);

            // UBAH INI: Deteksi apakah opsi adalah path gambar berdasarkan prefix 'soal/'
            if (shuffledOptions[i].startsWith('soal/')) { // Deteksi path gambar Anda
                const optionImage = document.createElement('img');
                optionImage.src = shuffledOptions[i];
                optionImage.alt = 'Opsi ' + (i + 1);
                optionImage.classList.add('quiz-option-image');
                option.appendChild(optionImage);
            } else {
                // Jika bukan gambar, tampilkan sebagai teks biasa
                const optionText = document.createTextNode(shuffledOptions[i]);
                option.appendChild(optionText);
            }

            optionsElement.appendChild(option);
        }

        quizContainer.innerHTML = '';
        quizContainer.appendChild(questionElement);
        quizContainer.appendChild(optionsElement);
    }

    function checkAnswer() {
        const selectedOption = document.querySelector(`input[name="${containerId}_quiz"]:checked`);
        if (selectedOption) {
            const answer = selectedOption.value;
            if (answer === data[currentQuestion].answer) {
                score++;
            } else {
                incorrectAnswers.push({
                    introText: data[currentQuestion].introText || '',
                    questionImage: data[currentQuestion].questionImage || '',
                    questionText: data[currentQuestion].question || '',
                    incorrectAnswer: answer,
                    correctAnswer: data[currentQuestion].answer,
                });
            }
            currentQuestion++;
            selectedOption.checked = false;
            if (currentQuestion < data.length) {
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
        showAnswerButton.style.display = 'inline-block';
        resultContainer.innerHTML = `Anda mendapatkan ${score} dari ${data.length}!` +
                                     `<br><p>Klik "Show Answer" untuk melihat jawaban yang salah.</p>`;
    }

    function retryQuiz() {
        currentQuestion = 0;
        score = 0;
        incorrectAnswers = [];
        quizContainer.style.display = 'block';
        submitButton.style.display = 'inline-block';
        retryButton.style.display = 'none';
        showAnswerButton.style.display = 'none';
        resultContainer.innerHTML = '';
        displayQuestion();
    }

    function showAnswer() {
        quizContainer.style.display = 'none';
        submitButton.style.display = 'none';
        retryButton.style.display = 'inline-block';
        showAnswerButton.style.display = 'none';

        let incorrectAnswersHtml = '';
        if (incorrectAnswers.length > 0) {
            incorrectAnswersHtml += `<h3>Jawaban Salah Anda:</h3>`;
            for (let i = 0; i < incorrectAnswers.length; i++) {
                const q = incorrectAnswers[i];
                incorrectAnswersHtml += `
                    <div style="margin-bottom: 20px; border: 1px solid #ddd; padding: 10px;">
                        <p><strong>${q.introText}</strong></p>
                `;
                if (q.questionImage) {
                    incorrectAnswersHtml += `<img src="${q.questionImage}" alt="Soal" class="quiz-question-image" style="max-width: 200px; display: block; margin: 10px auto;">`;
                } else if (q.questionText) {
                    incorrectAnswersHtml += `<p>${q.questionText}</p>`;
                }
                incorrectAnswersHtml += `
                        <p><strong>Jawaban Anda:</strong>
                `;
                // UBAH INI: Deteksi apakah jawaban salah adalah path gambar
                if (q.incorrectAnswer.startsWith('soal/')) {
                    incorrectAnswersHtml += `<img src="${q.incorrectAnswer}" alt="Jawaban Anda" class="quiz-option-image" style="max-width: 100px;">`;
                } else {
                    incorrectAnswersHtml += ` ${q.incorrectAnswer}`;
                }
                incorrectAnswersHtml += `
                        </p>
                        <p><strong>Jawaban Benar:</strong>
                `;
                // UBAH INI: Deteksi apakah jawaban benar adalah path gambar
                if (q.correctAnswer.startsWith('soal/')) {
                    incorrectAnswersHtml += `<img src="${q.correctAnswer}" alt="Jawaban Benar" class="quiz-option-image" style="max-width: 100px;">`;
                } else {
                    incorrectAnswersHtml += ` ${q.correctAnswer}`;
                }
                incorrectAnswersHtml += `
                        </p>
                    </div>
                `;
            }
        } else {
            incorrectAnswersHtml += `<p>Hebat! Tidak ada jawaban yang salah.</p>`;
        }

        resultContainer.innerHTML = `
            <p>Anda mendapatkan ${score} dari ${data.length}!</p>
            ${incorrectAnswersHtml}
        `;
    }

    if (submitButton) submitButton.addEventListener('click', checkAnswer);
    if (retryButton) retryButton.addEventListener('click', retryQuiz);
    if (showAnswerButton) showAnswerButton.addEventListener('click', showAnswer);

    displayQuestion();
}