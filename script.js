// connecting HTML Ids and Classes
const noShow = document.getElementById("noshow");
const quizContainer = document.getElementById("quiz");
const pressPlay = document.getElementById("play");
const qS = document.getElementById("question");
const pickChoice = document.getElementById("choices");
let timeEl = document.querySelector(".time");
const showScore = document.getElementById("score");
const results = document.getElementById("score");

// default values
let currentQuestionIndex = 0;
let score = 0;
let secondsLeft = 15;
let currentAnswer = "";

// questions = you can run as a JSON
let letsPlayQuestions = [
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
	secondsLeft = 15;
	clearInterval(a);
	setTime();
}

function createQuestions() {
	// new question
	let currentQuestion = letsPlayQuestions[currentQuestionIndex];
	// question
	qS.textContent = currentQuestion.title;
	// answer
	currentAnswer = currentQuestion.answer;
	// choices
	currentQuestion.choices.forEach(yourPick); //here you are calling function "youPick"
	// you can also write this way too
	// currentQuestion.choices.forEach(item){ "everything inside the youPick function" };

	function yourPick(item) {
		pickChoice.innerHTML +=
			"<button class='select' value='" +
			item +
			"' onclick = 'showUp(this.value)' >" +
			item +
			"</button><br /><hr /><br />";
	}
}

// when you click to any choice run showUp function

function showUp(e) {
	timeEl.textContent = "15 seconds left to answer this question";
	// choice is matching with answer then
	if (e === currentAnswer) {
		// yes you are correct
		// make sure you clear out all choices
		pickChoice.innerHTML = "";
		// add score + 1
		score++;
		// add to new question
		currentQuestionIndex++;
		// making sure it's not the last question
		if (currentQuestionIndex < letsPlayQuestions.length) {
			beginQuiz();
		}
		// if it's the last one then you need to show the score
		else {
			presentScore();
		}
	}
	// if it's note then
	else {
		// no you are not correct
		// everything is the same as correct version
		pickChoice.innerHTML = "";
		// only this one, you add score - 1
		score--;
		currentQuestionIndex++;
		if (currentQuestionIndex < letsPlayQuestions.length) {
			beginQuiz();
		} else {
			presentScore();
		}
	}
}

// once you done with all questions then you need to show the result
function presentScore() {
	quizContainer.setAttribute("class", "hide");
	results.removeAttribute("class", "hide");
	results.innerHTML = "<h3>Your total Score is " + score + "</h3>";
	// after 10 seconds you need to go back to main screen
	setTimeout(goBack, 10000);
	function goBack() {
		currentQuestionIndex = 0;
		score = 0;
		secondsLeft = 15;
		currentAnswer = "";
		results.setAttribute("class", "hide");
		noShow.removeAttribute("class", "hide");
	}
}

pressPlay.onclick = beginQuiz;
let a;
function setTime() {
	// first we need a variable that hold setInterval
	// I have created a global variable "a" for that
	a = setInterval(startTime, 1000);
	function startTime() {
		secondsLeft--;
		timeEl.textContent = secondsLeft + " seconds left to answer this question";
		if (secondsLeft === 0) {
			// clearInterval only clear that variable
			// I also have used clearInterval at the beginQuiz() function before starting setTime()
			clearInterval(a);
			pickChoice.innerHTML = "";
			score--;
			currentQuestionIndex++;
			if (currentQuestionIndex < letsPlayQuestions.length) {
				beginQuiz();
			} else {
				presentScore();
			}
		}
	}
}
