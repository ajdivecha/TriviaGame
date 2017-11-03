$(document).ready(function () {

var questions = [
    q1= {
    question: "On April 18, 1958, the then Brooklyn Dodgers played their first game as the LA Dodgers. What venue served as the site for their opening day game?",
    possibleAnswers: ["1. Dodger Stadium", "2. Los Angeles Coliseum", "3. Athletic Park", "4. Angel Stadium"],
    flags: [false, true, false, false],
    answer: "2. Los Angeles Coliseum",
    value: 2,
    sequence: 1,
    },
    //Los Angeles Coliseum(2) --> Dodger Stadium(1), Athletic Park(3), Angel Stadium(4)

    q2= {
     question: "Which former Red Sox player wore the number 99 for the Dodgers in 2009?", 
     possibleAnswers: ["1. Adrian Gonzalez", "2. David Ortiz", "3. Dave Roberts", "4. Manny Ramirez"],
     flags: [false, false, false, true],
     answer: "4. Manny Ramirez",
     value: 4,
     sequence: 2,
    },
    //Manny Ramirez(4) --> Dave Roberts(3), David Ortiz(2), Adrian Gonzalez(1)

    q3= {
    question: "Who was the manager of the LA Dodgers for the 2008 season?",
    possibleAnswers: ["1. Joe Torre", "2. Tommy Lasorda", "3. Don Mattingly", "4. Dave Roberts"],
    flags: [true, false, false, false],
    answer: "1. Joe Torre",
    value: 1,
    sequence: 3,
    },
    //Joe Torre(1) --> Tommy Lasorda(2), Don Mattingly(3), Dave Roberts(4)

    q4= {
    question: "Who was the captain of the 1978 Dodgers?",
    possibleAnswers: ["1. Dusty Baker", "2. Dave Lopes", "3. Don Sutton", "4. Steve Garvey"],
    flags: [false, true, false, false],
    answer: "2. Davey Lopes",
    value: 2,
    sequence: 4,
    },
       //Davey Lopes(2) --> Dusty Baker(1), Steve Garvey(4), Don Sutton(3)

    q5= { 
    question: "When right fielder, Shawn Green, broke the Dodgers franchise record, in 2001, for most homers in a season, whose record did he beat?",
    possibleAnswers: ["1. Duke Snider", "2. Zack Wheat", "3. Willie Keeler", "4. Gary Sheffield"],
    flags: [false, false, false, true],
    answer: "4. Gary Sheffield",
    value: 4,
    sequence: 5,
    },
    //Gary Sheffield(4) --> Willie Keeler(3), Zack Wheat(2), Duke Snider(1)

    q6= {
    question: "Who wa the first player for the Dodgers franchise to win the NL MVP award?",
    possibleAnswers: ["1. Jackie Robinson", "2. Clayton Kershaw", "3. Sandy Koufax", "4. Dolph Camilli"],
    flags: [false, false, false, true],
    answer: "4. Dolph Camilli",
    value: 4,
    sequence: 6,
    },
    //Dolph Camilli(4) --> Jackie Robinson(1), Sandy Koufax(3), Clayton Kershaw(2)

    q7= {
    question: "Which former Texas Rangers ace pitcher the the Dodgers trade for the season?",
    possibleAnswers: ["1. Yu Darvish", "2. Cole Hamels", "2. Matt Bush", "4. Keone Kela"],
    flags: [true, false, false, false],
    answer: "1. Yu Darvish",
    value: 1,
    sequence: 7,
    },
    //Yu Darvish(1) --> Cole Hamels(2), Matt Bush(3), Keone Kela(4)

    q8= {
    question: "What Dodger set a World Series record when he hit two pinch hit homers in the 1959 World Series?",
    possibleAnswers: ["1. Chuck Essegian", "2. Maury Willis", "3. Frank Howard", "4. Duke Snider"],
    flags: [true, false, false, false],
    answer: "1. Chuch Essegian",
    value: 1,
    sequence: 8,
    },
    //Chuck Essegian(1) --> Maury Willis(2), Frank Howard(3), Duke Snider(4)

    q9= {
    question: "What Dodger of the 20th Century has the highest career strikeout ratio per nine innings pitched with at least two full seasons with the Dodgers?",
    possibleAnswers: ["1. Bob Gibson", "2. Hideo Nomo", "3. Clayton Kershaw", "4. Greg Maddux"],
    flags: [false, true, false, false],
    answer: "2. Hideo Nomo",
    value: 2,
    sequence: 9,
    },
    //Hideo Nomo(2) --> Clayton Kershaw(3), Greg Maddux(4), Bob Gibson(1)

    q10= { 
    question: "From the first Dodgers' game played in Los Angeles (1958), until the end of the 2008 season (50 years later), who managed the team for the most number of full seasons?",
    possibleAnswers: ["1. Dave Roberts", "2. Don Mattingly", "3. Joe Torre", "4. Tommy Lasorda"],
    flags: [false, false, false, true],
    answer: "4. Tommy Lasorda",
    value: 4,
    sequence: 10,
    },
    //Tommy Lasorda(4) --> Joe Torre(3), Don Mattingly(2), Dave Roberts(1)
];

var correct = 0;

var wrong = 0;

var questionIndex = 0;
//so questoins above know where to choose

var questionsArray = [questions[0].question, questions[1].question, questions[2].question, questions[3].question, questions[4].question, questions[5].question, questions[6].question, questions[7].question, questions[8].question, questions[9].question];

var number= 15;
var intervalId;

// my countdown timer
function run() {
    intervalId = setInterval(decrement, 1000);
} 

function decrement () {
    number--;
    $("#timer").text(number);
    if (number === 0) {
        stop();

        number = 15;

        wrong++;
        questionIndex++;
        loadQuestion (questionIndex);
    }
}

function stop() {
    clearInterval(intervalId);
    number = 15;
}

function loadQuestion (x) {
    if (x <= (questionsArray.length)) {
        
        $(".loadQ").text(questionsArray[x]);
        $("#a").text(questions[x].possibleAnswers[0]);
        $("#b").text(questions[x].possibleAnswers[1]);
        $("#c").text(questions[x].possibleAnswers[2]);
        $("#d").text(questions[x].possibleAnswers[3]);
        run();
    }    
}

function endPage () {
    $(".timer").css("visibility", "hidden");
    $("#a").css("visibility", "hidden");
    $("#b").css("visibility", "hidden");
    $("#c").css("visibility", "hidden");
    $("#d").css("visibility", "hidden");
    $(".loadQ").html("You got " + correct + " correct and " + wrong + " wrong");
}

$(".btn").click(function () {
    stop();
    if ($(this).val() == questions[questionIndex].value) {
        correct++;
    } 
    else {
        wrong++;
    }
    questionIndex++;
    if (questionIndex >= questionsArray.length) {
        endPage();
    }
    loadQuestion(questionIndex);

});
loadQuestion (questionIndex);


});





