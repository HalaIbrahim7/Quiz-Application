var questions = [
    {
        question: "1.What does HTML stand for ?",
        right_answer: "Hyper Text Markup Language",
        answer: ["Hypertext Machine language", "Hypertext and links markup language", "Hyper Text Markup Language", "Hightext machine language."]
    },
    {
        question: "2.What is the difference between XML and HTML?",
        right_answer: "XML is used for exchanging data, HTML is not",
        answer: ["HTML is used for exchanging data, XML is not.", "XML is used for exchanging data, HTML is not", "HTML can have user defined tags, XML cannot", "none of them"]
    }, {
        question: "3.Which of the following HTML Elements is used for making any text bold ?",
        right_answer: "<b>",
        answer: ["<p>", "<i>", "<li>", "<b>"]
    },
    {
        question: "4.Which of the following attributes is used to add link to any element ?",
        right_answer: "href",
        answer: ["link", "ref", "href", "newref"]
    },
    {
        question: "5.HTML program is saved using _ extension.",
        right_answer: ".html",
        answer: [".htl", ".html", ".mlt", ".hmlt"]
    },

];

var countSpan = document.querySelector(" .count span");

var quizInfo = document.querySelector(".quiz-info");

var quizContainer = document.querySelector(".quiz-container");
var markd = document.querySelector(".mark-container");
var infoContainer = document.querySelector(".info");

var quizArea = document.querySelector(".quiz-area");
var answersArea = document.querySelector(".answers-area");

var submitButton = document.querySelector(".submit-button");
var nextButton = document.querySelector(".next-button");
var prevButton = document.querySelector(".prev-button");
var markButton = document.querySelector(".mark-button");

var countDownElement = document.querySelector(".countdown");
var number = document.querySelector(".count");

var resultsContainer = document.querySelector(".results");

var firstname = localStorage.getItem("Firstname");
var lastname = localStorage.getItem("Lastname")


let currentIndex = 0;
let rightAnswers = 0;
let countDownInterval;


function getQuestions() {
    var qCount = questions.length;
    questionsNum(qCount);

    addQuestionData(questions[currentIndex], qCount);

    countDown(200, qCount);

    submitButton.onclick = () => {

        currentIndex++;
        showResult(qCount);
    }

    nextButton.onclick = () => {

        let theRightAnswer = questions[currentIndex].right_answer;
        if (currentIndex < questions.length - 1) {
            currentIndex++;
        }
        checkAnswer(theRightAnswer, qCount);

        quizArea.innerHTML = '';
        answersArea.innerHTML = '';
        addQuestionData(questions[currentIndex], qCount);
    }
    prevButton.onclick = () => {

        if (currentIndex != 0) {
            currentIndex--;
            quizArea.innerHTML = '';
            answersArea.innerHTML = '';
            addQuestionData(questions[currentIndex], qCount);
        }
    }
}
getQuestions();

function questionsNum(num) {
    countSpan.innerHTML = num;
}

function addQuestionData(obj, count) {
    if (currentIndex < count) {
        let questionTitle = document.createElement("h3");
        let questionText = document.createTextNode(obj.question);
        questionTitle.appendChild(questionText);
        quizArea.appendChild(questionTitle);
        for (let i = 0; i <= 3; i++) {
            let mainDiv = document.createElement("div");
            mainDiv.className = "answer";

            let radioInput = document.createElement("input");
            radioInput.name = "question";
            radioInput.type = "radio";
            radioInput.id = `answer_${i}`;
            radioInput.dataset.answer = obj.answer[i];

            let theLabel = document.createElement("label");
            theLabel.htmlFor = `answer_${i}`;
            let theLabelText = document.createTextNode(obj.answer[i]);

            theLabel.appendChild(theLabelText);

            mainDiv.appendChild(radioInput);
            mainDiv.appendChild(theLabel);

            answersArea.appendChild(mainDiv);

        }
    }

}
function checkAnswer(rAnswer, count) {
    let answers = document.getElementsByName("question");
    let theChoosenAnswer;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            theChoosenAnswer = answers[i].dataset.answer;
        }
    }
    if (rAnswer == theChoosenAnswer) {
        rightAnswers++
        console.log("Correct Answer")
    }

}

var x = 0;
function showResult(count) {

    let theResults;
    if (currentIndex === count) {
        x = 1;
        quizArea.remove();
        answersArea.remove();
        submitButton.remove();
        nextButton.remove();
        prevButton.remove();
        quizInfo.remove();
        number.remove();
        markButton.remove();
        markd.remove();

        if (rightAnswers == count) {
            theResults = `<span class='excellent'>Your Grades :</span>  ${rightAnswers} / ${count}`;
        } else if (rightAnswers > count / 2 && rightAnswers < count) {
            theResults = `<span class='good'>Your Grades :</span>  ${rightAnswers} / ${count}`;
        } else {
            theResults = `<span class='fail'>Your Grades :</span>  ${rightAnswers} / ${count}`;

        }

        resultsContainer.innerHTML = `<span class="fullName"> Name : ` + firstname + `&nbsp` + lastname + `</span><br>` + theResults;




    }
}

function countDown(duration, count) {
    if (currentIndex < count) {
        let minutes, seconds;
        countDownInterval = setInterval(function () {
            minutes = parseInt(duration / 60);
            seconds = parseInt(duration % 60);

            minutes = minutes < 10 ? `0${minutes}` : minutes;
            seconds = seconds < 10 ? `0${seconds}` : seconds;
            countDownElement.innerHTML = `Time:${minutes}:${seconds}`;
            if (--duration < 0) {
                if (x == 1) {

                } else {

                    quizArea.remove();
                    answersArea.remove();
                    submitButton.remove();
                    nextButton.remove();
                    prevButton.remove();
                    quizInfo.remove();
                    number.remove();
                    markButton.remove();
                    markd.remove();
                    resultsContainer.innerHTML = `<span class="text" ><center>OOPS! <h2>Time Out </h2></center> </span>` + `<span class="fullName"><br>Name : ` + firstname + `&nbsp` + lastname + `</span>`;

                }

            }
        }, 1000)
    }
}

function mark() {
    markd.innerHTML += `<br><br>Question ${currentIndex + 1}`;
    console.log(currentIndex + 1);
}