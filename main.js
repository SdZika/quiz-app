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
//function loadQuestion()

 
    let questionElement = document.getElementById("question");
    let answerElement = document.getElementById("answers");

    //answerElement.innerHTML = ""; // Why this stands for? Because it is falsy value?

    let currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;

    for (let i = 0; i < currentQuestion.answers.length; i++) {
        let button = document.createElement("button");
        button.textContent = currentQuestion.answers[i];
        answerElement.appendChild(button);
    }
    


