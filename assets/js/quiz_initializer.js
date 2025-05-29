// assets/js/quiz_initializer.js
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function initializeQuiz(containerId, data) {
    const quizContainer = document.getElementById(containerId);
    // Pastikan elemen-elemen tombol ditemukan dalam konteks container kuis
    const resultContainer = document.getElementById('result-' + containerId.split('-')[1]);
    const submitButton = document.getElementById('submit-' + containerId.split('-')[1]);
    const retryButton = document.getElementById('retry-' + containerId.split('-')[1]);
    const showAnswerButton = document.getElementById('showAnswer-' + containerId.split('-')[1]);


    let currentQuestion = 0;
    let score = 0;
    let incorrectAnswers = [];

    function displayQuestion() {
        // ... (Kode displayQuestion dari sebelumnya, tanpa perubahan)
        const questionData = data[currentQuestion];

        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.innerHTML = questionData.question;

        const optionsElement = document.createElement('div');
        optionsElement.className = 'options';

        const shuffledOptions = [...questionData.options];
        shuffleArray(shuffledOptions);

        for (let i = 0; i < shuffledOptions.length; i++) {
            const option = document.createElement('label');
            option.className = 'option';

            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = containerId + '_quiz'; // ID unik untuk setiap kuis
            radio.value = shuffledOptions[i];

            const optionText = document.createTextNode(shuffledOptions[i]);

            option.appendChild(radio);
            option.appendChild(optionText);
            optionsElement.appendChild(option);
        }

        quizContainer.innerHTML = '';
        quizContainer.appendChild(questionElement);
        quizContainer.appendChild(optionsElement);
    }

    function checkAnswer() {
        // ... (Kode checkAnswer dari sebelumnya, tanpa perubahan)
        const selectedOption = document.querySelector(`input[name="${containerId}_quiz"]:checked`);
        if (selectedOption) {
            const answer = selectedOption.value;
            if (answer === data[currentQuestion].answer) {
                score++;
            } else {
                incorrectAnswers.push({
                    question: data[currentQuestion].question,
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
        // ... (Kode displayResult dari sebelumnya, tanpa perubahan)
        quizContainer.style.display = 'none';
        submitButton.style.display = 'none';
        retryButton.style.display = 'inline-block';
        showAnswerButton.style.display = 'inline-block';
        resultContainer.innerHTML = `Anda mendapatkan ${score} dari ${data.length}!`;
    }

    function retryQuiz() {
        // ... (Kode retryQuiz dari sebelumnya, tanpa perubahan)
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
        // ... (Kode showAnswer dari sebelumnya, tanpa perubahan)
        quizContainer.style.display = 'none';
        submitButton.style.display = 'none';
        retryButton.style.display = 'inline-block';
        showAnswerButton.style.display = 'none';

        let incorrectAnswersHtml = '';
        if (incorrectAnswers.length > 0) {
            incorrectAnswersHtml += `<h3>Jawaban Salah Anda:</h3>`;
            for (let i = 0; i < incorrectAnswers.length; i++) {
                incorrectAnswersHtml += `
                    <p>
                        <strong>Pertanyaan:</strong> ${incorrectAnswers[i].question}<br>
                        <strong>Jawaban Anda:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
                        <strong>Jawaban Benar:</strong> ${incorrectAnswers[i].correctAnswer}
                    </p>
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

    // Hanya tambahkan event listener jika tombol ada
    if (submitButton) submitButton.addEventListener('click', checkAnswer);
    if (retryButton) retryButton.addEventListener('click', retryQuiz);
    if (showAnswerButton) showAnswerButton.addEventListener('click', showAnswer);

    displayQuestion(); // Inisialisasi tampilan kuis saat fungsi dipanggil
}