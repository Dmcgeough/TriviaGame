
// Code Here:



var quest1 = [
    "What was the name of the fortifications defending Frances Eastern Border from Germany?", 
    "The Maginot Line",
    "The Versailles Line", 
    "Verdun Escarpment",
    "The Locarno Line"];
var quest2 = [
	"What were the names of the beaches that the British attacked on D-Day?",
	"Sword, Gold",
	"Juno, Utah",
	"Omaha, Utah",
	"Sword, Juno"];
var quest3 = [
	"Two Airborne Divisions were dropped behind enemy lines just before the D-Day Landings, what were they?",
	"101st and 82nd",
	"105th and 75th",
	"102nd and 81st",
	"84th and 74th"];
var quest4 = [
	"The nickname Nazi was short for what?",
	"National Socialist German Workers Party",
	"National Party for German Unity",
	"National Party of Germany",
	"National Aryan Zionist Initiative"];
var quest5 = [
	"Which country was not involved in the conflict?",
	"Argentina",
	"China",
	"Indonesia",
	"Italy"];
var quest6 = [
	"During the Pacific Theater fighting against Japan, the United States used a tactic known as what?",
	"Island Hopping",
	"Hit and Run",
	"Blitzkrieg",
	"Shoot and Scoot"];
var quest7 = [
	"Which of these weapons was the standard german rifle?",
	"Karabiner 98k",
	"Gewehr 43",
	"Sturmgewher 44",
	"Machinenpistole 40"];
var quest8 = [
	"What was the first American Island captured by the Japanese?",
	"Wake Island",
	"Midway Island",
	"Papua New Guinea",
	"Truk"];
var quest9 = [
	"What was the nickname of the leader of the Afrika Korps?",
	"Desert Fox",
	"Wild Hare",
	"Sandman",
	"Rattlensake"];
var quest10 = [
	"What was the last desperate attack by the German army against the Americans in the winter of 1944-1945?",
	"The Battle of the Bulge",
	"The Battle of Midway",
	"The Battle of Caen",
	"The Battle of Cherbourg"];
var quest11 = [
	"Which General commanded the feared Afrika Korps army that fought in North Africa?",
	"General Erwin Rommel",
	"General Freidrich Paulus",
	"General Heinz Guderian",
	"General Walter von Model"];
var quest12 = [
	"What was the name of the location where the Allies launched their invasion of France?",
	"Cotentin Peninsula",
	"Cliffs of Dover",
	"Pas de Calias",
	"Port of Brest"];
var quest13 = [
	"The Main Battle Tank the Americans used during the war was called what?",
	"M4 Sherman",
	"M5 Stuart",
	"M26 Pershing",
	"M24 Chaffee"];
var quest14 = [
	"How many casualties did the Americans suffer during World War II?",
	"400,000",
	"500,000",
	"300,000",
	"600,000"];
var quest15 = [
	"During the Battle of Iwo Jima, what American fighting force was exclusively used?",
	"United States Marine Corps",
	"75th Ranger Division",
	"United States 1st Army",
	"101st Airborne Division"];

var questionsArray = [quest1, quest2, quest3, quest4, quest5, quest6, quest7, quest8, quest9, quest10, quest11, quest12, quest13, quest14, quest15];


var randomValue = Math.floor(Math.random() * questionsArray.length);

var pickedQuestion = questionsArray[randomValue];

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
	        console.log(pickedQuestion[0]);
	        console.log(answers[0]);
	    
	        $(".question").html(pickedQuestion[0]);
	        $(".answer1").html(pickedQuestion[answers[0]]);
	        $(".answer2").html(pickedQuestion[answers[1]]);
	        $(".answer3").html(pickedQuestion[answers[2]]);
	        $(".answer4").html(pickedQuestion[answers[3]]);

	    
	}
	$(".answer").on("click", function() {
	        if(parseInt($(this).val()) === rightAnswer) {
	            $(this).html("<h1>Correct!</h1>");
	    	} else {
	            $(this).html("<h1>Incorrect!</h1>");
	        }
	    });
	newQuestion();
});