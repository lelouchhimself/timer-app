const button = document.querySelector("#start-btn")
let timeDisplay = document.getElementById("time-remaining")
//let userTime = document.getElementById("time-value").value
let timeLeft = document.getElementById("time-value").value;



button.addEventListener("click", function(event) {

    let timeLeft = document.getElementById("time-value").value;

    setInterval(function(){

        if (timeLeft <= 0) {
            clearInterval(timeLeft =0)
        }
       
        timeDisplay.innerText = timeLeft;
        timeLeft -= 1;
        console.log(timeLeft)
},1000);
    
})


/*
button.addEventListener("click", function(event) {

    let timeLeft = document.getElementById("time-value").value;


    timeDisplay.innerText = timeLeft
})

*/







