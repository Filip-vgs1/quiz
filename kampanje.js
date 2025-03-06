const quizData = [
    {
        question: "Hvilken prosentandel av dødsulykker i Norge i 2024 var knyttet til bruk av alkohol eller narkotika?",
        options: ["A) 20 %", "B) 10 %", "C) 35 %", "D) 5 %"],
        answer: "A) 20 %"
    },
    {
        question: "Hvor mange personer ble tatt for fyllekjøring i Norge i 2024?",
        options: ["A) 11 428", "B) 5 000", "C) 20 000", "D) 8 200"],
        answer: "A) 11 428"
    },
    {
        question: "Hva er den tillatte promillegrensen for sjåfører i Norge?",
        options: ["A) 0,2 promille", "B) 0,5 promille", "C) 0,8 promille", "D) 0,1 promille"],
        answer: "A) 0,2 promille"
    },
    {
        question: "Hvilken straff er IKKE gitt for fyllekjøring i Norge?",
        options: ["A) Tap av førerkort", "B) Lønnsøkning", "C) Store bøter", "D) Fengselsstraff"],
        answer: "B) Lønnsøkning"
    },
    {
        question: "Hvor mange kjøreturer per dag blir gjort av sjåfører med en promille over grensen i Norge?",
        options: ["A) 14 000", "B) 1 000", "C) 50 000", "D) 5 500"],
        answer: "A) 14 000"
    }
];

const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
const restartButton = document.getElementById("restart");

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestionIndex < quizData.length) {
        const item = quizData[currentQuestionIndex];
        quizContainer.innerHTML = `
            <div class="quiz-question">
                <h3>${currentQuestionIndex + 1}. ${item.question}</h3>
                <div class="quiz-options">
                    ${item.options.map(option => 
                        `<button onclick="checkAnswer('${option}')">${option}</button>`
                    ).join("")}
                </div>
            </div>
        `;
    } else {
        showResult();
    }
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    const buttons = document.querySelectorAll(".quiz-options button");

    buttons.forEach(button => {
        if (button.innerText === correctAnswer) {
            button.classList.add("correct");
        } else if (button.innerText === selectedOption) {
            button.classList.add("incorrect");
        }
        button.disabled = true;
    });

    if (selectedOption === correctAnswer) {
        score++;
    }

    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 1000);
}

function showResult() {
    quizContainer.innerHTML = "";
    resultContainer.innerHTML = `Du fikk ${score} av ${quizData.length} riktige!`;
    restartButton.style.display = "block";
}

loadQuestion();
