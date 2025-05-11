var timer = 60;
var score = 0;
var hitrn = 0;


function increaseScore(){
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function makeBubble(){
  var clutter ="";

for(var i=1; i-109; i++){
  var rn = Math.floor(Math.random()*10)
  clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#p-btm").innerHTML = clutter;
}


function runTimer(){
    var timerint = setInterval(function(){
    if(timer>0){ 
      timer--;
      document.querySelector("#timerval").textContent = timer;
    }else{
      clearInterval(timerint);
      document.querySelector("#p-btm").innerHTML = `<h1>Game Over⏱️`;
    }
  },1000)
}


function getNewHit(){
  hitrn = Math.floor(Math.random()*10);
  document.querySelector("#hitval").textContent = hitrn;
}

document.querySelector("#p-btm").addEventListener("click", function(dets){
  var clicknum = Number(dets.target.textContent);
  if(clicknum===hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
  }

})
runTimer();
makeBubble();
getNewHit();
