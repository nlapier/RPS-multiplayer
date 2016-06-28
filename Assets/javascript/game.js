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

    db.ref("player1").once("value")
        .then(function(snapshot) {
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

//Player object constructor
function playerObj(name, wins, choice){
    this.name = name,
    this.wins = wins,
    this.choice = choice
}

//Tracking Variables
var thisUser;
var userName;

var p1Assigned;
var p2Assigned;

//Adds players to the database and to the screen.  Argument should be either "player1" or "player2".
function assignPlayer(player){
    var dbPlayer = new playerObj(userName, 0, "");
    thisUser = player;
    db.ref(player).set(dbPlayer);
    $("#" + player).text(userName);
    thisUser = player;
}

//Determines if players have been assigned, and sets proper player names onscreen.
db.ref("player1").on("value", function(snapshot){
    p1Assigned = snapshot.exists();
});

db.ref("player2").on("value", function(snapshot){
    p2Assigned = snapshot.exists();
});

db.ref().on("value", function(snapshot){
    
    if(p1Assigned){
        var p1Name = snapshot.val().player1.name;
        $("#player1").text(p1Name)
    };

    if(p2Assigned){
        var p2Name = snapshot.val().player2.name;
        $("#player2").text(p2Name)
    };
})

//Adds a user, then replaces the input box on that user's screen with a score box. 
$(".btn").on("click", function(){

    //Grabs the user's inputted name.
    userName = $("input").val();

    //Creates the Score Box title line.
    var scoreBanner = $("<h4>").attr({
        id: 'scoreBanner',
        class: 'text-center'
    });
    scoreBanner.text("Score: ");

    //Creates the actual score display.
    var scoreDisplay = $("<h1>").attr({
        id: "scoreDisplay",
        class: "text-center"
    });
    scoreDisplay.text("0 - 0");

    //Appends the score readout to the screen.
    $("#scoreBox").empty();
    $("#scoreBox").append(scoreBanner);
    $("#scoreBox").append(scoreDisplay);

    //Determine which player the current user should play as.

    console.log("p1Assigned: " + p1Assigned);
    console.log("p2Assigned: " + p2Assigned);

    if (!p1Assigned){assignPlayer("player1")} 
    else if (!p2Assigned){assignPlayer("player2")}
    else (console.log("Seat's taken"))

    return false;
});



