var questions = [{
    question : "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    choices : [ "The User's machine running a Web browser",
        "The Web server",
        "A central machine deep within Netscape's corporate offices",
        "None of the above"],
    correctAnswer : 0
},{
    question : "Which of the following can't be done with client-side JavaScript?",
    choices : [ "Validating a form",
        "Sending a form's contents by email",
        "Storing the form's contents to a database file on the server",
        "None of the above"],
    correctAnswer : 2
},{
    question : "Using _______ statement is how you test for a specific condition",
    choices : [ "select",
        "if",
        "for",
        "none of the above"],
    correctAnswer : 1
}, {
    question : "The capital of Pakistan is ____________",
    choices : [ "select",
        "London",
        "Lahore",
        "Islamabad"],
    correctAnswer : 2
}, {
    question : "Using _______ statement is how you test for a specific condition",
    choices : [ "select",
        "if",
        "for",
        "none of the above"],
    correctAnswer : 1
}];

var currentQuestion = 0;
var correctAnswers = 0;
var count=0;
var quizOver = false;
displayCurrentQuestion();
document.getElementById("quiz-message").style.display = 'none';
function displayNext() {
    /*Write your code here */
    var ans;
    var radios = document.getElementsByTagName('input');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            ans=radios[i];
           count++;
        }
    }
    if(count === 1)
    {
        count =0;
        if(ans === questions[currentQuestion].correctAnswer )
        {
            correctAnswers++;
        }
        currentQuestion++;

        document.getElementById("question").innerHTML = questions[currentQuestion].question;
        var x= document.getElementById('choice-list');


            x.innerHTML +=  '<li>' + '<input type= "radio" name = "checked"  >' + questions[currentQuestion].choices[0]+ '</li>';
            x.innerHTML +=  '<li>' + '<input type= "radio" name = "checked"  >' + questions[currentQuestion].choices[1]+ '</li>';
            x.innerHTML +=  '<li>' + '<input type= "radio" name = "checked"  >' + questions[currentQuestion].choices[2]+ '</li>';
            x.innerHTML +=  '<li>' + '<input type= "radio" name = "checked"  >' + questions[currentQuestion].choices[3]+ '</li>';

        if(currentQuestion === 5)
        {
            quizOver = true;
            displayScore();

        }
    }
    if(count === 0)
    {
        document.getElementById("quiz-message").style.display = "Select an answer!!";
    }


    

}

function displayCurrentQuestion() {
    /*Write your code here */


    document.getElementById("question").innerHTML = questions[currentQuestion].question;

   for(var i=0; i<4; i++)
    {
        document.getElementById("choice-list").innerHTML +=  "<li>" + '<input type= "radio" name = "checked" >' + questions[currentQuestion].choices[i]+ "</li>";
    }





}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}
function displayScore() {
    document.getElementById("result").innerHTML = "you scored: " + correctAnswers + " out of: " + questions.length;
    document.getElementById("result").style.display = 'block';
}
function hideScore() {
    document.getElementById("result").style.display = 'none';
}