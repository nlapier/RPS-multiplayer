/* Holding Area
    if (p1.name){
        console.log("p2");
        p2.name = input;
       $("#p2").text(input);

    } else{
        console.log("p1");
        p1.name = input;
       $("#p1").text(input);
    }
*/




// Initialize Firebase
var config = {
    apiKey: "AIzaSyCICumjmJWEeFOlY39Zh-8zzHFY-xta8nY",
    authDomain: "rps-multiplayer-40946.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-40946.firebaseio.com",
    storageBucket: "rps-multiplayer-40946.appspot.com",
};

firebase.initializeApp(config);

var db = firebase.database();
var storage = firebase.storage();


//User tracking
function user(name, wins, choice){
    this.name = name,
    this.wins = wins,
    this.choice = choice
}

//Adds a user, then replaces the input box on that user's screen with a score box. 
$(".btn").on("click", function(){

    var input = $("input").val();

    //Creates the Score Box title line
    var scoreBanner = $("<h4>").attr({
        id: 'scoreBanner',
        class: 'text-center'
    });
    scoreBanner.text("Score: ");

    //Creates the actual score display
    var scoreDisplay = $("<h1>").attr({
        class: "text-center", 
        id: "scoreDisplay"
    });
    scoreDisplay.text("0 - 0");

    //Appends the score readout to the screen
    $("#scoreBox").empty();
    $("#scoreBox").append(scoreBanner);
    $("#scoreBox").append(scoreDisplay);

    // db.ref("players").push(new user(input, 0))

    return false;
})

// db.ref().on("value", function(snapshot){

// })


  // $("img").on("click", function(){


  // })