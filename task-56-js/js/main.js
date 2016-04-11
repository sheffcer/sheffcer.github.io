var time = 0;
var running = 0;

function  startPause() {
  if (running == 0) {
    running = 1;
    increment();
      document.getElementById("startPause").innerHTML = "Pause";
  } else {
    running = 0;
    document.getElementById("startPause").innerHTML = "Resume";
  }
}

function reset() {
  time = 0;
  running = 0;
  document.getElementById("startPause").innerHTML = "Start";
  document.getElementById("output").innerHTML = "00:00:00";
}

function increment() {
  if (running == 1){
    setTimeout(function(){
      time++;
      var mins = Math.floor(time/10/60);
      var sec = Math.floor(time/10 % 60);
      var hours = Math.floor(time/10/60/60);
      var tenth = time % 10;
      
      if (mins <10){
        mins = '0' + sec
      }
      document. getElementById('output').innerHTML = hours + ":" + mins + ":" + sec + ":" + tenth;
      increment();
      
    }, 100)
  }
}