//js
function populate()
{
	if(quiz.isEnded())
	{
		showscore();
	}
	else
	{	//Show Question
		var ele=document.getElementById("question");
		ele.innerHTML=quiz.questionIndex+1+") "+quiz.getQuestionIndex().text;

		//show Options
		var choices=quiz.getQuestionIndex().choices;
		for(var i=0;i<choices.length;i++)
		{
			 var ele=document.getElementById("ch"+i);
			 ele.innerHTML=choices[i];
			 guess("btn"+i,choices[i]);
		}

		showProgress();
	}
};

function guess(id,guess)
{
	var btn=document.getElementById(id);
	btn.onclick= function(){
		quiz.guess(guess);
		populate();
	}
}

function showProgress(){
	var curr=quiz.questionIndex+1;
	var ele=document.getElementById("progress");
	ele.innerHTML="Question"+curr+" of "+quiz.questions.length;

}

function showscore(){
	var gameoverHtml = "<div class='p-5'><h1 class='text-center font-weight-bold'>Result</h1>";
	gameoverHtml+= "<h2 id='score' class='text-center'>Your Scores: "+quiz.score+"</h2></div>";
	var ele=document.getElementById("quiz");
	ele.innerHTML=gameoverHtml;
}
var questions=[
new Question("Full form of 'OS' is",["Order of significance","Operating system","Open software","Optical Sensor"],"Operating system"),
new Question("The ribbon is used in",["Laser Printer","Plotter","Ink-jet printer","Dot Matrix printer"],"Dot Matrix printer"),
new Question("Full form of 'DOCOMO' ?",["Do Connect over Mobile","Do Communications Over the Mobile network","Dongle Communication Over Mobile","Do Communication Or More"],"Do Communications Over the Mobile network"),
new Question("Joystick is used to ?",["Move cursor on the screen","Computer games","Both a and b","None of these"],"Both a and b"),
new Question("What type of memory is volatile ?",["Cache","RAM","ROM","Hard Drive"],"RAM")
];

var quiz= new Quiz(questions);

populate();