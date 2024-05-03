const questions = [
    {
        question: "How much is 2 + 3?",
        answers: [5,  6, 7],
        correct: 0
    },
    {
        question: "How much is 2 * 3?",
        answers: [4, 6, 8],
        correct: 1
    },
    {
        question: "How much is 4 / 2?",
        answers: [0, 1, 2],
        correct: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;
 
 // Why this stands for? Because it is falsy value?

function loadQuestion(){
    const questionElement = document.getElementById("question");
    const answerElement = document.getElementById("answers");
    answerElement.innerHTML = "";

    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;
    
    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        //button.className = "answer";
        button.textContent = answer;
        button.addEventListener("click", () => selectChoice(index));
        answerElement.appendChild(button);
    });
};

function selectChoice(index) {
    const currentQuestion = questions[currentQuestionIndex];
    
    if (index === currentQuestion.correct) {
        score ++;
    }
    currentQuestionIndex ++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        displayScore();
    }
   }

function displayScore() {
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = `Your score is ${score} out of ${questions.length}`
   }

document.getElementById("next-btn").addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        displayScore();
    }
   });
   
document.addEventListener("DOMContentLoaded", loadQuestion); 


