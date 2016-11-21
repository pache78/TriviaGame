//Trivia Questions & correct answers //
var questions = [{
question: 'How many points does a Compass have?',
answers: ['16 points', '32 points'],
correctAnswer: 0
},

{
question: 'How many American cents make up a dime?',
answer:['5 cents', '10 cents'],
correctAnswer: 1
}

{
question: 'How many strings does a cello have?',
answer:['6 strings', '4 strings'],
correctAnswer: 1
}

{
question: 'How many lines should a limerick have?',
answer: ['5 lines', '12 lines' ],
correctAnswer: 0
}

{
question: 'How many symphonies did Beethoven compose?',
answer: ['9 symphonies', '2 symphonies'],
correctAnswer: 0
}

]

if (userAnswer == questions[0].answer[correctAnswers])
  correct++;
else
  incorrect++;


//vars to help display itmes in function below, begins at 0.//
var numCorrect;
var numIncorrect;
var unanswered;


//The start of the game begins with 0.//
function newGame() {
numCorrect = 0;
numIncorrect = 0;
unanswered = 0;

// Start of function of every second.//
var timer = {
	time: 30,
	start:function(){
		counter = setInterval(timer.count,1000)
	},

//Decreased by 1 sec.//	
	count:function(){
		timer.time--;
		$('#minSecs').html(timer.time)
	}
}


}


