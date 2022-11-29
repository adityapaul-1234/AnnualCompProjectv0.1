setInterval(function(){
    if (screen.width < 960){
        document.getElementById("Number1").style.width="50%";
        document.getElementById("Number2").style.width="50%"; 
    }
    else {
        document.getElementById("Number1").style.width="30%";
        document.getElementById("Number2").style.width="30%"; 
    }
}, 100);

var player1 = localStorage.getItem("User1");
var player2 = localStorage.getItem("User2");
var operation = null;
var score1 = 0;
var score2 = 0;
var qt = "player1";
var at = "player2";

document.getElementById("player1_score").innerHTML = player1 + ": " + score1;
document.getElementById("player2_score").innerHTML = player2 + ": " + score2;
document.getElementById("player_question").innerHTML = "Question Turn: " + player1;
document.getElementById("player_answer").innerHTML = "Answer Turn: " + player2;

function Send(){
    num1 = document.getElementById("No1").value;
    num2 = document.getElementById("No2").value;
    operation = document.getElementById("cars").value;

    if (operation == "+"){
        ans = parseInt(num1) + parseInt(num2);
    } else if (operation == "-"){
        ans = parseInt(num1) - parseInt(num2);
    } else if (operation == "*"){
        ans = parseInt(num1) * parseInt(num2);
    } else if (operation == "/"){
        ans = parseInt(num1)/parseInt(num2);
    }

    document.getElementById("ques").innerHTML = num1 + operation + num2;
    document.getElementById("No1").value = "";
    document.getElementById("No2").value = "";
}

function Check(){
    answer = document.getElementById("Answer").value;

    if (answer == ""){
    alert("Please enter an answer!");
    } else {
    console.log(answer);
    console.log(ans);
    if (answer == ans){
        if (at == "player1"){
            score1 = score1 + 1;
            document.getElementById("player1_score").innerHTML = player1 + ": " + score1;
            document.getElementById("player2_score").innerHTML = player2 + ": " + score2;
            alert("Correct Answer! Now it is " + player2 + "'s turn to answer");
        }

        if (at == "player2"){
            score2 = score2 + 1;
            document.getElementById("player1_score").innerHTML = player1 + ": " + score1;
            document.getElementById("player2_score").innerHTML = player2 + ": " + score2;
            alert("Correct Answer! Now it is " + player1 + "'s turn to answer");
        }
    }
    else {
        if (at == "player1"){
            alert("Oops! Wrong answer, try next time @" + player1 + ". Now it's " + player2 + "'s turn.");
            } else {
                alert("Oops! Wrong answer, try next time @" + player2 + ". Now it's " + player1 + "'s turn.");
            }
    }

    if (qt == "player1"){
        qt = "player2";
        at = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn: " + player2;
        document.getElementById("player_answer").innerHTML = "Answer Turn: " + player1;
    }
    else {
        qt = "player1";
        at = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn: " + player1;
        document.getElementById("player_answer").innerHTML = "Answer Turn: " + player2;
    }

    document.getElementById("ques").innerHTML = "Question displayed here";
    document.getElementById("Answer").value = "";
}
}