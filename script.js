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
// let time = letsPlayQuestions.length * 15;

// begin by naming our function adding in questions, quiz container and results
function beginQuiz() {
	noShow.setAttribute("class", "hide");
	quizContainer.removeAttribute("class", "hide");
	createQuestions();
}

let currentAnswer = "";
function createQuestions() {
	setTime();
	//alert("did this work?");
	let currentQuestion = letsPlayQuestions[currentQuestionIndex];

	qS.textContent = currentQuestion.title;
	currentAnswer = currentQuestion.answer;
	// .each loop on currentQuestion.choices to render 4 buttons on the page
	currentQuestion.choices.forEach(yourPick);
	function yourPick(item) {
		pickChoice.innerHTML +=
			"<button class='select' value='" +
			item +
			"' onclick = 'showUp(this.value)' >" +
			item +
			"</button><br /><hr /><br />";
	}
	// make sure thos buttons have same class that you can target
	// var givenAnwer = button.value // green
	// check if the pressed button is the right answer? (if else) if  (givenAnwer === currentQuestion.answer) {write the logic for correct answer} else {.. incorrect answer}
	// currentQuestionIndex ++
	//call function again to show you the next question
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
