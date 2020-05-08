const quizContainer = document.getElementById("quiz");
const submitQuiz = document.getElementById("submit");
const showScore = document.getElementById("score");
const pressPlay = document.getElementById("play");
const noShow = document.getElementById("noshow");
const qS = document.getElementById("question");
let currentQuestionIndex = 0;
var timeEl = document.querySelector(".time");
var secondsLeft = 75;
//move this into a separate js file.
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
let time = letsPlayQuestions.length * 15;

// begin by naming our function adding in questions, quiz container and results
function beginQuiz() {
	noShow.setAttribute("class", "hide");
	quizContainer.removeAttribute("class", "hide");
	createQuestions();
}
function createQuestions() {
	//alert("did this work?");
	let currentQuestion = letsPlayQuestions[currentQuestionIndex];

	qS.textContent = currentQuestion.title;
	// .each loop on currentQuestion.choices to render 4 buttons on the page
	// make sure thos buttons have same class that you can target
	// var givenAnwer = button.value // green
	// check if the pressed button is the right answer? (if else) if  (givenAnwer === currentQuestion.answer) {write the logic for correct answer} else {.. incorrect answer}
	// currentQuestionIndex ++
	//call function again to show you the next question
}
// display quiz score
// function showScore() {}
pressPlay.onclick = beginQuiz;
// Set time in a certain amount of time EXECUTE an action
// Set
function setTime() {
	var timerInterval = setInterval(function () {
		secondsLeft = -1;
		timeEl.textContent = secondsLeft + " time until gameover";

		if (secondsLeft === 0) {
			clearInterval(timerInterval);
			sendMessage();
		}
	}, 1000);
}
