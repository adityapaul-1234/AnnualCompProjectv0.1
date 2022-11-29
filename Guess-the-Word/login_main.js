function AddUser(){
    var User1 = document.getElementById("user1").value;
    var User2 = document.getElementById("user2").value;

    if (User1 == ""){
        window.alert("Please enter a username");
    } else if (User2  == ""){
        window.alert("Please enter a username");
    } else{
        localStorage.setItem("User1", User1);
        localStorage.setItem("User2", User2);
        window.location = "mainpage_index.html";
    }
}

setInterval(function(y){
    height = screen.height;
    cal = (80/100)*height;
    final = Math.round(cal);
    document.getElementById("main").style.height = final + "px";   
}, 1000);

setInterval(function(x){
    width = screen.width;
    cal_width = (90/100)*width;
    final_width = Math.round(cal_width);
    document.getElementById("main").style.width = final_width + "px";   
}, 1000);