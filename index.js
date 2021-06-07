const button = document.querySelector("#start-btn")
let timeDisplay = document.getElementById("time-remaining")
let userTime = document.getElementById("time-value")
let timeLeft = 10;


button.addEventListener("click", function(event) {

    setInterval(function(){

        if (timeLeft <= 0) {
            clearInterval(timeLeft =0)
        }
       
        timeDisplay.innerText = timeLeft;
        timeLeft -= 1;
        console.log(timeLeft)
},1000);
    
})



