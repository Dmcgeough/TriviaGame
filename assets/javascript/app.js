wicked001
[5:05 PM] 
// Code Here:



var test = [
    "What is the airspeed velocity of an unladen swallow?", 
    "African or European?", 
    "1.21 gigawatts", 
    "200kmph",
    "124.274mph"];

var rightAnswer = 0;

$(document).ready(function() {
    $(".answer1").val(1);
    $(".answer2").val(2);
    $(".answer3").val(3);
    $(".answer4").val(4);

// function
var newQuestion = function() {

    var answers = [1, 2, 3, 4];
    var temp = 0;
    var current = 3;

    do {
        var rand = Math.floor(Math.random() * 4);
        temp = answers[current];
        answers[current] = answers[rand];
        answers[rand] = temp;
        current --;
    } while (current !== 0);

        rightAnswer = answers.indexOf(1) + 1;
    
        $(".question").html(test[0]);
        $(".answer1").html(test[answers[0]]);
        $(".answer2").html(test[answers[1]]);
        $(".answer3").html(test[answers[2]]);
        $(".answer4").html(test[answers[3]]);
    }

    $(".answer").on("click", function() {
        if(parseInt($(this).val()) === rightAnswer) {
            $(this).html("<h1>You got it Right!</h1>");
        } else {
            $(this).html("<h1>Wrong!</h1>");
            }
    });
newQuestion();
});