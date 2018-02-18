 //------- VARIABLES -------//

 /* // timer settings
  var data = {
  "productivity": {
      "minutes": "00",
      "seconds": "00"
    }, 
  "downtime": {
      "minutes": "20",
      "seconds": "00"
    }
}

// var data = require('../../data.json');
  // alert(data.productivity.minutes);
  var productiveTime = document.getElementById('productiveTime');
  var productiveMin = data.productivity.minutes;
  var productiveSec = data.productivity.seconds;
  var timer = document.getElementById('timer');
  var DowntimeMin = data.downtime.minutes; // replace later with downtime sliders
  var DowntimeSec = data.downtime.seconds;

  // check for inactivity
  var isActive;
  var start = 0;
  var end = 0;
  var checkPage, checkEnd, onPage, offPage;
  var elapsed, elapsedSeconds, elapsedMinutes;*/
  


    //------- TIMERS -------//
  /*   // Productivity Timer
    if(productiveTime != null){
      productiveTime.innerHTML = productiveMin + ":" + productiveSec;
      startPTimer();
    }

      // Downtime Timer
      if(timer != null){
        timer.innerHTML = DowntimeMin + ":" + DowntimeSec;
      }

  // start productivity timer from 0
  function startPTimer() {
    var presentTime = document.getElementById('productiveTime').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = parseInt(timeArray[0]);
    var s = checkSecond(parseInt(timeArray[1]) + 1);
    if(s == 59) { 
      s = 00;
      m = m + 1;
    }
    document.getElementById('productiveTime').innerHTML = m + ":" + s;
    
    data.productivity.minutes = m;
data.productivity.seconds = s;
data.downtime.minutes = DowntimeMin.toString();
data.downtime.seconds = DowntimeSec.toString();
   alert(data.productivity.minutes);
    setTimeout(startPTimer, 1000);
  }

  // fix formatting of timers
  function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
    if (sec < 0) {sec = "59"};
    return sec;
  }

  // update timers with new values
 function updateTimers() {     // FIX PRODUCTIVITY TIMER VALUES LATER (always increments a little bit, even while off tab)
    productiveMin = parseInt(productiveMin) - elapsedMinutes;
    productiveSec = parseInt(productiveSec) - elapsedSeconds;
    DowntimeMin = parseInt(DowntimeMin) - elapsedMinutes;
    DowntimeSec = parseInt(DowntimeSec) - elapsedSeconds;

  // fix formatting of time
  if (DowntimeSec < 0) {
    DowntimeSec = DowntimeSec + 60;
    DowntimeMin = DowntimeMin - 1;
  } else if (DowntimeSec < 10 && DowntimeSec > 0) {
    DowntimeSec = "0" + DowntimeSec.toString();
  } else if (productiveSec < 0) {
    productiveSec = productiveSec + 60;
    productiveMin = productiveMin - 1;
  } else if (productiveSec < 10 && productiveSec > 0) {
    productiveSec = "0" + productiveSec.toString();
  }

  // set new time values
  if(timer != null) {
    timer.innerHTML = DowntimeMin.toString() + ":" + DowntimeSec.toString();
  } else if (productiveTime != null) {
    productiveTime.innerHTML = productiveMin.toString() + ":" + productiveSec.toString();
    startPTimer();
  }
  } 

  // if downtime is negative, set alarms!!
function checkDowntime() {
  if (DowntimeMin < 0) {
    alert("You've goofed off long enough!");
  }
}*/