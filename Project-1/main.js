let playbtn = document.getElementById("StartStopBtn");
let resetbtn = document.getElementById("ResetBtn");

let seconds = 0;
let minutes = 0;
let hours = 0;
let leading_hours = 0;
let leading_minutes = 0;
let leading_seconds = 0;

function StopWatch() {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    leading_seconds = "0" + seconds.toString();
  } else {
    leading_seconds = seconds;
  }
  
  if (minutes < 10) {
    leading_minutes = "0" + minutes.toString();
  } else {
    leading_minutes = minutes;
  }
  
  if (hours < 10) {
    leading_hours = "0" + hours.toString();
  } else {
    leading_seconds = hours;
  }

  let displayTimer = (document.getElementById("timer").innerText = `${leading_hours}:${leading_minutes}:${leading_seconds}`);
}

let timerStatus = 'stopped';
let timerIntervel = null;

playbtn.addEventListener('click',function(){
    if(timerStatus === 'stopped'){
        timerIntervel = window.setInterval(StopWatch,1000);
        timerStatus='started';
        document.getElementById('StartStopBtn').innerHTML = "<i class = 'fa fa-pause' id = 'pause'></i>";
    }

    else{
        window.clearInterval(timerIntervel);
        document.getElementById('StartStopBtn').innerHTML = "<i class = 'fa fa-play' id = 'play'></i>";
        timerStatus = 'stopped';
    }
})

resetbtn.addEventListener('click',function(){
    seconds = 0;
    minutes = 0;
    hours = 0;
    window.clearInterval(timerIntervel);
    document.getElementById('StartStopBtn').innerHTML = "<i class = 'fa fa-play' id = 'play'></i>";
    document.getElementById('timer').innerHTML="00:00:00";
    timerStatus = 'stopped';
})

