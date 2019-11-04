function introView() {
    return `<div class="introView">
  <p>Beauty and skin care routines are more scientific that you might think. Let's take a test to figure out how much you know about the chemistry behind your skin care regimen.</p>
  <button type="button" id="beginTest">Begin Test</button>
</div>`;
};

function questionView(store) {
    return `<div id="questionView"
    <form id="questionPage" class="view">
        <div id="question">${questions[store.currentQuestion].question}</div>
        <p>Question ${store.currentQuestion + 1} / ${questions.length}</p>
        <ul>
        <li><input id="1" type="radio" name="answerToQuestion" value="${questions[store.currentQuestion].answers[0]}" checked/> <label for="1">${questions[store.currentQuestion].answers[0]}</label></li>
        <li><input id="2" type="radio" name="answerToQuestion" value="${questions[store.currentQuestion].answers[1]}" /> <label for="2">${questions[store.currentQuestion].answers[1]}</label></li>
        <li><input id="3" type="radio" name="answerToQuestion" value="${questions[store.currentQuestion].answers[2]}" /> <label for="3">${questions[store.currentQuestion].answers[2]}</label></li>
        <li><input id="4" type="radio" name="answerToQuestion" value="${questions[store.currentQuestion].answers[3]}" /> <label for="4">${questions[store.currentQuestion].answers[3]}</label></li>
        </ul>
        <button type="submit" id="submitButton">Submit</button>
    </form></div>`;
};

function feedbackViewCorrect(store) {
    return `<div id ="feedbackViewCorrect" class="view">
        <p>That was correct!</p>
        <p>Total Score: ${store.score}</p>
        <p>Question ${store.currentQuestion + 1} / ${questions.length}</p>
        <button type="button" id="nextQuestionButton">${store.currentQuestion === 4 ? "Complete Test" : "Next Question"}</button>
    </div>`;
};

function feedbackviewIncorrect(store) {
    return `<div id ="feedbackViewIncorrect" class="view">
        <p>That was incorrect, the correct answer was ${questions[store.currentQuestion].correctAnswer}</p>
        <p>Total Score: ${store.score}</p>
        <p>Question ${store.currentQuestion + 1} / ${questions.length}</p>
        <button type="button" id="nextQuestionButton">${store.currentQuestion === 4 ? "Complete Test" : "Next Question"}</button>
    </div>`
};

function resultsView() {
    return `<div id ="resultsView" class="view">
        <p>You completed the test!</p>
        <p>Total Score: ${store.score} / 5</p>
        <button type="button" id="retakeButton">Retake Test</button>
    </div>`;
}

function beginTestOnClick() {
    $('#beginTest').on('click', function (event) {
        store.view = "questionView";
        render(store);
    });
};

function submitAnswerOnClick() {
    $('#submitButton').on('click', function (event) {
        const answerInputs = document.getElementsByName('answerToQuestion');
        let selectedAnswer;

        for (let i = 0; i < answerInputs.length; i++) {
            if (answerInputs[i].checked) {
                selectedAnswer = answerInputs[i].value;
            }
        }

        if (questions[store.currentQuestion].correctAnswer === selectedAnswer) {
            store.view = "feedbackViewCorrect";
            store.score++;
        } else {
            store.view = "feedbackViewIncorrect";
        }

        render(store);
    });
};


function nextQuestionOnClick() {
    $('#nextQuestionButton').on('click', function (event) {
        if((store.currentQuestion + 1) < questions.length) {
            store.view = "questionView";
            store.currentQuestion++;
        }
        else {
            store.view = "resultsView";
        }
        // else, view should be results view and we don't have to increment
        render(store);
    });
};


function retakeTestOnClick() {
    $('#retakeButton').on('click', function (event) {
        store.view = "introView";
        store.score = 0;
        store.currentQuestion = 0;
        render(store);
    });
};


$('.view').on('submit', function (event) {
    event.preventDefault();
});


let store = {
    currentQuestion: 0,
    view: "introView",
    score: 0
};

const questions = [
    {
        question: "What is L-Ascorbic Acid?",
        answers: [
            "Vitamin C",
            "Vitamin A",
            "A Retinoid",
            "Vitamin E"
        ],
        correctAnswer: "Vitamin C"
    },

    {
        question: "Which type of exfoliators are best for oily skin types?",
        answers: [
            "Manual exfoliation (scrubs, brushes, and etc.)",
            "Salicylic Acid",
            "Lactic Acid",
            "Glycolic acid"
        ],
        correctAnswer: "Salicylic Acid"
    },

    {
        question: "Fill in the blank: Hyaluronic Acid can bind up to ___ times its weight in water?",
        answers: [
            "50",
            "75",
            "100",
            "200"
        ],
        correctAnswer: "100"
    },

    {
        question:
            "Which of the below is NOT an example of a 'chemical' sunscreen?",
        answers: [
            "Avobenzone",
            "Octocrylene",
            "Oxybenzone",
            "Zinc Oxide"
        ],
        correctAnswer:
            "Zinc Oxide"
    },

    {
        question:
            "Which of the follow has the smallest molecular size?",
        answers: [
            "Glycolic Acid",
            "Lactic Acid",
            "Salicylic Acid",
            "Mandelic Acid"
        ],
        correctAnswer:
            "Glycolic Acid"
    }
];


function render(store) {
    switch (store.view) {
        case "introView":
            $('#view-outlet').html(introView());
            beginTestOnClick();
            break;
        case "questionView":
            $('#view-outlet').html(questionView(store));
            submitAnswerOnClick();
            break;
        case "feedbackViewCorrect":
            $('#view-outlet').html(feedbackViewCorrect(store));
            nextQuestionOnClick();
            break;
        case "feedbackViewIncorrect":
            $('#view-outlet').html(feedbackviewIncorrect(store));
            nextQuestionOnClick();
            break;
        case "resultsView":
            $('#view-outlet').html(resultsView());
            retakeTestOnClick();
            break;
        default:
            $('#view-outlet').html(introView());
            beginTestOnClick();
            break;
    };
};

$(document).ready(function () {
    render(store);
});