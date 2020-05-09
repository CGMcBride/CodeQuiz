// connecting our HTML id's and classes
const quizContainer = document.getElementById("quiz");

const showScore = document.getElementById("score");
const pressPlay = document.getElementById("play");
const noShow = document.getElementById("noshow");
const qS = document.getElementById("question");
const pickChoice = document.getElementById("choices");

var timeEl = document.querySelector(".time");

const results = document.getElementById("score");
// default values
let currentQuestionIndex = 0;
let score = 0;
let secondsLeft = 75;
let currentAnswer = "";
// potentially run questions as a JSON
var letsPlayQuestions = [
	{
		title:
			"What is JavaScript element that represents either TRUE or FALSE values?",
		choices: ["Boolean", "RegExp", "Event", "Condition"],
		answer: "Boolean",
	},
	{
		title:
			"What is the default behavior called that is used to move declarations to the top the current scope?",
		choices: ["Arranging", "Sorting", "Jumping", "Hoisting"],
		answer: "Hoisting",
	},
	{
		title:
			"What kind of statment is used to execute actions based on a trigger or condition?",
		choices: [
			"Fired Event",
			"Boolean Variable",
			"Default Behaivor",
			"Conditional Statement",
		],
		answer: "Conditional Statement",
	},
	{
		title:
			"What is the object called that lets you work with both dates and time-relaated data?",
		choices: ["Clock", "Time field", "Dates", "Time-warp"],
		answer: "Dates",
	},
	{
		title:
			"What is the element used - and hidden - in code that explains things and makes the content more readable?",
		choices: ["Quotations", "Comparisons", "Comments", "Notes"],
		answer: "Comments",
	},
];

// begin by naming our function adding in questions, quiz container and results
function beginQuiz() {
	noShow.setAttribute("class", "hide");
	quizContainer.removeAttribute("class", "hide");
	createQuestions();
	// start timer
	secondsLeft = 75;
	clearInterval(a);
	setTime();
}

function createQuestions() {
	//new question
	let currentQuestion = letsPlayQuestions[currentQuestionIndex];
	// question
	qS.textContent = currentQuestion.title;
	// answer
	currentAnswer = currentQuestion.answer;
	// choices to render bottons on screen
	currentQuestion.choices.forEach(yourPick);
	// I am calling the function yourPick
	function yourPick(item) {
		pickChoice.innerHTML +=
			"<button class='select' value='" +
			item +
			"' onclick = 'showUp(this.value)' >" +
			item +
			"</button><br /><hr /><br />";
	}
	// check to see if each button has the correct choice selected
}
function showUp(e) {
	console.log(e);
	if (e === currentAnswer) {
		console.log("you are correct");
		pickChoice.innerHTML = "";
		score++;
		currentQuestionIndex++;
		if (currentQuestionIndex < letsPlayQuestions.length) {
			createQuestions();
		} else {
			presentScore();
		}
	} else {
		console.log("you are not correct");
		pickChoice.innerHTML = "";
		score--;
		currentQuestionIndex++;
		if (currentQuestionIndex < letsPlayQuestions.length) {
			createQuestions();
		} else {
			presentScore();
		}
	}
}
function presentScore() {
	quizContainer.setAttribute("class", "hide");
	results.removeAttribute("class", "hide");
	results.innerHTML = "<p>Your total Score is " + score + "</p>";
	setTimeout(goBack, 10000);
	function goBack() {
		results.innerHTML = "";
		results.setAttribute("class", "hide");
		noShow.removeAttribute("class", "hide");
	}
}
// const select = document.querySelector("select");
// document.addEventListener("click", select, function () {
// 	alert("this is working");
// });
// display quiz score

pressPlay.onclick = beginQuiz;
// Set time in a certain amount of time EXECUTE an action
// Set
function setTime(event) {
	// event.preventDefault();

	secondsLeft = 75;
	setInterval(startTime, 1000);

	function startTime() {
		secondsLeft--;
		timeEl.textContent = secondsLeft + " time until gameover";
		if (secondsLeft === 0) {
			clearInterval(startTime);
			pickChoice.innerHTML = "";
			score--;
			currentQuestionIndex++;
			if (currentQuestionIndex < letsPlayQuestions.length) {
				createQuestions();
			} else {
				presentScore();
			}
		}
	}

	// var timerInterval = setInterval(function () {
	// 	secondsLeft = -1;
	// 	timeEl.textContent = secondsLeft + " time until gameover";

	// 	if (secondsLeft === 0) {
	// 		clearInterval(timerInterval);
	// 		sendMessage();
	// 	}
	// }, 1000);
}
