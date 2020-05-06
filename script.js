const quizContainer = document.getElementById("quiz");
const submitQuiz = document.getElementById("submit");
const showScore = document.getElementById("score");
const pressPlay = document.getElementById("play");
const noShow = document.getElementById("noshow");
const qS = document.getElementById("question");
let currentQuestionIndex = 0;
//move this into a separate js file.
var letsPlayQuestions = [
	{
		title: "what color is the grass",
		choices: ["green", "red", "brown", "yellow"],
		answer: "green",
	},
	{
		title: "what color is the sky",
		choices: ["blue", "black", "gray", "red"],
		answer: "blue",
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
