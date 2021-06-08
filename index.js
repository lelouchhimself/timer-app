const button = document.querySelector("#start-btn")
let timeDisplayMinutes = document.getElementById("time-remaining")
let timeDisplaySeconds = document.getElementById("time-remaining2")
//let userTime = document.getElementById("time-value").value
//let timeLeft = document.getElementById("time-value").value;
let timeLeftSec = 59;
let timeLeftMin = 25;




button.addEventListener("click", function(event) {

    setInterval(function(){

        if (timeLeftSec <= 0) {
            clearInterval(timeLeftSec = 59);
        }

        if (timeLeftSec == 59) {
            timeLeftMin -= 1;
        } 
       
        timeDisplaySeconds.innerText = timeLeftSec;
        timeDisplayMinutes.innerText = timeLeftMin;
        timeLeftSec -= 1;
        console.log(timeLeft)
},1000);
    
})


/*
button.addEventListener("click", function(event) {

    let timeLeft = document.getElementById("time-value").value;


    timeDisplay.innerText = timeLeft
})

*/







