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
    "Approximately how many casualties did the Americans suffer during World War II?",
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
var quest16 = [
    "What was the name of the Moutain on Iwo Jima",
    "Mount Suribachi",
    "Mount Fuji",
    "Mount Surugi",
    "Mount Norikora"];
var quest17 = [
    "What was the name of Hitlers Hideout",
    "Eagles Nest",
    "Konigstuhle",
    "Heidelberger",
    "Krauserlautren"];
var quest18 = [
    "Which General commanded allied forces in Europe?",
    "General Dwight Eisenhower",
    "General George Patton",
    "General Bernard Montgomery",
    "General Mark Clark"];
var quest19 = [
    "In what month did WWII both begin and end?",
    "September",
    "October",
    "November",
    "December"];
var quest20 = [
    "What Event triggered Declarations of War on Germany from France and the United Kingdom?",
    "Invasion of Poland",
    "Annexation of Austria",
    "Annexation of half of Czechoslovakia",
    "Invasion of Belgium"];
var quest21 = [
    "What was the name of the bombing campaign agaisnt London?",
    "The Blitz",
    "The Terror",
    "The Long Night",
    "The Big Smoke"];
var quest22 = [
    "What was Adolf Hitlers title at the outbreak of Hostilities?",
    "Chancellor",
    "President",
    "Supreme Ruler",
    "Dictator"];
var quest23 = [
    "What was the codename for the first American operation in North Africa?",
    "Operation Torch",
    "Operation Villain",
    "Operation Overlord",
    "Operation Barbarossa"];
var quest24 = [
    "Which of these is not an American weapon?",
    "Lee Enfield Rifle",
    "Browning Automatic Rifle",
    "M1 Garand",
    "Thompson Submachine Gun"];
var quest25 = [
    "Which nations forces captured Berlin?",
    "USSR",
    "UK",
    "USA",
    "France"];
var quest26 = [
    "What was the name of the warriors code that led to the ferocity of fighting styles used by the Japanese?",
    "Bushido",
    "Bonzai",
    "Shogunate",
    "Hirohito"];
var quest27 = [
    "The most common weapon used by soldiers on any side was what?",
    "Bolt Action Rifle",
    "Machine Gun",
    "Submachine Gun",
    "Scoped Bolt Action Rifle"];
var quest28 = [
    "The attack on Pearl Harbor did not destory a single ship of this type?",
    "Aircraft Carrier",
    "Battleship",
    "Destroyer",
    "Tanker"];
var quest29 = [
    "This German city was nearly completely wiped out by Fire bombs dropped by the USAF and is referenced in Kurt Vonneguts book 'Slaughterhouse Five'",
    "Dresden",
    "Hamburg",
    "Berlin",
    "Heidelberg"];
var quest30 = [
    "The Highest award a service member could get from the USA was this medal",
    "Medal of Honor",
    "Gold Star",
    "Croix de Guerre",
    "Distinguished Service Cross"];

var questionsArray = [quest1, quest2, quest3, quest4, quest5, quest6, quest7, quest8, quest9, quest10, quest11, quest12, quest13, quest14, quest15, quest16, quest17, quest18, quest19, quest20, quest21, quest22, quest23, quest24, quest25, quest26, quest27, quest28, quest29, quest30];

var rightAnswer = 0;

var correct = 0;

var delayNewQuestion;

var timeLeft = 3;

var fulltime = 90;

$(document).ready(function() {
    $(".answer1").val(1);
    $(".answer2").val(2);
    $(".answer3").val(3);
    $(".answer4").val(4);


    // function
    var newQuestion = function() {
        var randomValue = Math.floor(Math.random() * questionsArray.length);
        var pickedQuestion = questionsArray[randomValue];

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

        
    }; // next question


    var delaying = function () {

            var down = setInterval(function() {

                timeLeft--;

                if( timeLeft <= 0 ) {
                    clearInterval(down);
                    newQuestion();
                }
            }, 1000);
    };

    var grabScore = function () {
        alert("Score " + correct);
    }
        var timer = setInterval(function () {
            fulltime--;

            if(fulltime <= 0){
                clearInterval(timer);
                alert("Game Over");

            grabScore();

            }
        }, 1000); 
    

    var startGame = function() {
            if(parseInt($(this).val()) === rightAnswer) {
                $(this).html("<h1>Correct!</h1>");
                correct ++;
                $(".correct").html(correct);

                delaying();
           
            } else {

                $(this).html("<h1>Incorrect!</h1>");
                delaying();
            }

    };
            
    newQuestion();


    $(".answer").on("click", startGame);
});
