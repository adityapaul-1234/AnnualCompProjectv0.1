var player1 = localStorage.getItem("User1");
var player2 = localStorage.getItem("User2");
var score1 = 0;
var score2 = 0;
var qt = "player1";
var at = "player2";
var word = null;
var check = null;

document.getElementById("player1_score").innerHTML = player1 + ": " + score1;
document.getElementById("player2_score").innerHTML = player2 + ": " + score2;
document.getElementById("player_question").innerHTML = "Question Turn: " + player1;
document.getElementById("player_answer").innerHTML = "Answer Turn: " + player2;

function Send(){
    get_word = document.getElementById("No1").value;
    word = get_word.toLowerCase();
    check = word;
    len = word.length;

    for(var i=1; i<len;i++){
        temp = word.charAt(i);
        word = word.replace(temp, "_");
        i = i + 2;
    }

    document.getElementById("ques").innerHTML = "Your word is: " + word;
    document.getElementById("No1").value = "";
}

function Check_A(){
    temp_answer = document.getElementById("Answer").value;
    answer = temp_answer.toLowerCase();

    if (answer == ""){
        alert("Please enter an answer");
    } else {
        Cross_Check();
    }
}

function Cross_Check(){
        if (answer == check){
            if (at == "player1"){
                score1 = score1 + 1;
                document.getElementById("player1_score").innerHTML = player1 + ": " + score1;
                document.getElementById("player2_score").innerHTML = player2 + ": " + score2;
                alert("Correct Answer @" + player1 + "! Now it is " + player2 + "'s turn to answer");
            }
            else {
                score2 = score2 + 1;
                document.getElementById("player1_score").innerHTML = player1 + ": " + score1;
                document.getElementById("player2_score").innerHTML = player2 + ": " + score2;
                alert("Correct Answer @" + player2 + "! Now it is " + player1 + "'s turn to answer");
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
        document.getElementById("No1").value = "";
}