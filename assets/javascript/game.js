var diamond = 0;
var saphire = 0;
var tanzanite = 0;
var opal = 0;
var totalScore = 0;
var computerChoice = 0
var win = 0;
var losses = 0;

computerChoice = Math.floor((Math.random() * 140) + 30);
$("#random").html(computerChoice);

diamond = Math.floor((Math.random() * 11) + 1);
console.log(diamond + " :diamond");

saphire = Math.floor((Math.random() * 11) + 1);
console.log(saphire + " :saphire");

tanzanite = Math.floor((Math.random() * 11) + 1);
console.log(tanzanite + " :tanzanite");

opal = Math.floor((Math.random() * 11) + 1);
console.log(opal + " :opal");

function scoreTest() {
    if (totalScore == computerChoice) {
        win ++;
        swal({
            title: "You win!!!!",
            text: "The Number was " + computerChoice,
            icon: "success",
            button: "High Five!!!",
          });
        $("#wins").html("Wins: " + win);
        setTimeout(reset, 4000);
    } else if (totalScore > computerChoice) {
        var difference = totalScore - computerChoice;
        losses ++;
        swal({
            title: "You suck",
            text: "You Went Over The Number By " + difference,
            icon: "warning",
            button: "Try Again :(",
          });
        $("#losses").html("Losses: " + losses);
        setTimeout(reset, 4000);
    }
}

function reset () {
    diamond = 0;
    saphire = 0;
    tanzanite = 0;
    opal = 0;
    totalScore = 0;
    computerChoice = 0;
    $("#score").html(totalScore);

    computerChoice = Math.floor((Math.random() * 140) + 30);
    $("#random").html(computerChoice);

    diamond = Math.floor((Math.random() * 10) + 1);
    console.log(diamond + " :diamond");

    saphire = Math.floor((Math.random() * 10) + 1);
    console.log(saphire + " :saphire");

    tanzanite = Math.floor((Math.random() * 10) + 1);
    console.log(tanzanite + " :tanzanite");
    
    opal = Math.floor((Math.random() * 10) + 1);
    console.log(opal + " :opal");
}


$("#diamond").click(function () {
    totalScore = totalScore + diamond;
    $("#score").html(totalScore);
    scoreTest(totalScore);
});

$("#saphire").click(function () {
    totalScore = totalScore + saphire;
    $("#score").html(totalScore);
    scoreTest(totalScore);
});


$("#tanzanite").click(function () {
    totalScore = totalScore + tanzanite;
    $("#score").html(totalScore);
    scoreTest(totalScore);
});

$("#opal").click(function () {
    totalScore = totalScore + opal;
    $("#score").html(totalScore);
    scoreTest(totalScore);
});





