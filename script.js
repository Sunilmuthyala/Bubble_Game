var timer = 60; 
score=0;
hitnew=0;

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickedNumber = Number(dets.target.textContent);
    if(clickedNumber === hitnew){
        increaseScore()
        bubbleCode()
        setNewHit()
    }
})

function increaseScore(){
    score +=10
    document.querySelector("#scoreval").textContent=score
}

function setNewHit(){
    hitnew = Math.floor(Math.random()*10);
    document.querySelector("#newHit").textContent=hitnew;
}

function bubbleCode(){
    var clutter="";
for(var i=1; i<=168; i++){
    var rn = Math.floor(Math.random() *10)
    clutter += `<div class="bubble">${rn}</div>`
}
document.querySelector("#pbtm").innerHTML=clutter
}
function runTimer (){
    var timeInt = setInterval(function () {
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
        }else{
            clearInterval(timeInt);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`
        }
    },1000);
}
runTimer();

bubbleCode();

setNewHit()
