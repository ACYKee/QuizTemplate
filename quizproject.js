let currentQuestion = 0;
let score = 0;
let num = 0;
let questions = [
   {
	"question": "How many bits are in a byte?",
	"a": "420 bits",
	"b": "8 bits",
	"c": "2 bits",
	"d": "56 bits",
	"image":"quizimages/q1.jpg",
	"answer": "b"
   },
   {
	"question": "Which of the following is a web browser?",
	"a": "C++",
	"b": "Javascript",
	"c": "Google Chrome",
	"d": "Youtube",
	"image":"quizimages/q2.jpg",
	"answer": "c"
   },
   {
	"question": "When was the first computer made?",
	"a": "November 26, 2001",
	"b": "January 1, 2020",
	"c": "December 25, 1969",
	"d": "February 15, 1946",
	"image":"quizimages/q3.jpg",
	"answer": "d"
   },
   {
	"question": "What is the brain of the computer called?",
	"a": "CPU",
	"b": "Mircrosoft",
	"c": "USB",
	"d": "hard drive",
	"image":"quizimages/q4.jpg",
	"answer": "a"
   },
   {
	"question": "What does the CPU stand for?",
	"a": "Computer Processing Unit",
	"b": "Central Peripheral Unit",
	"c": "Central Processing Unit",
	"d": "Computer Processing User",
	"image":"quizimages/q5.jpg",
	"answer": "c"
   },
   {
	"question": "Which mouse click is used to select an item?",
	"a": "Single click",
	"b": "Double click",
	"c": "Right click",
	"d": "Drag and drop",
	"image":"quizimages/q6.jpg",
	"answer": "b"
   },
   {
	"question": "Which of the following is a programming language?",
	"a": "HTTP",
	"b": "HPML",
	"c": "HTML",
	"d": "FTP",
	"image":"quizimages/q7.jpg",
	"answer": "c"
   },
   {
	"question": "Linux is an example of:",
	"a": "Software",
	"b": "Application",
	"c": "Browser",
	"d": "Operating System",
	"image":"quizimages/q8.jpg",
	"answer": "d"
   },
   {
	"question": "Which of the following is an Input device?",
	"a": "Monitor",
	"b": "Keyboard",
	"c": "Printer",
	"d": "Lamp",
	"image":"quizimages/q9.jpg",
	"answer": "b"
   },
   {
	"question": "Mark Zuckerberg is the owner of:",
	"a": "Google",
	"b": "Linux",
	"c": "Facebook",
	"d": "Mcdonalds",
	"image":"quizimages/q10.jpg",
	"answer": "c"
   }
 ];
 
 
 function loadQuestion() {
	 //close lightbox for first question
	if(currentQuestion == 0){
		closeLightBox();
		
	}
    //Load the images
	let img = document.getElementById("image");
	img.src = questions[currentQuestion].image;
	img.style.maxWidth = "80%";
	
	 
   //load the questions and answers
   document.getElementById("question").innerHTML = questions[currentQuestion].question;
   document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
   document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
   document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
   document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
   
 } // loadQuestion
 
 
 function markIt(ans) {
	 
  let message = "";
  num++;
  if(currentQuestion < 9 && ans == questions[currentQuestion].answer){
    
	  //add 1 to the score
	  score++;
	  
	  //display score
	  document.getElementById("score").innerHTML = score + " / " + questions.length;
	  
	  message = "Correct!! Your score is " + score + " / " + questions.length;
	  
  }else{
	  message = "Incorrect.. Your score is " + score + " / " + questions.length;
  }//else
  
	//show message
	document.getElementById("lightbox").style.display = "block";
	
	document.getElementById("message").innerHTML = message;
	
	//move to next question
	currentQuestion++;
	loadQuestion();

	
 }  // markIt
  
function closeLightBox(){
	document.getElementById("lightbox").style.display = "none";
	
}//closeLightBox