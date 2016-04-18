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
  document.getElementById("output").innerHTML = "0:00:00:00";
}

function increment() {
  if (running == 1){
    setTimeout(function(){
      time++;
      var mins = Math.floor(time/10/60);
      var sec = Math.floor(time/10);
      var hours = Math.floor(time/10/60/60);
      var tenth = time % 10;
      
      if (mins <10){
        mins = '0' + mins;
      }
      
      if (sec < 10) {
        sec = "0" + sec;
      }
      document. getElementById('output').innerHTML = hours + ":" + mins + ":" + sec + ":" + "0" + tenth;
      increment();
      
    }, 100)
  }
}


/*
var timer = {
startTime:0,
out:document.getElementById('time'),
addZeros:function (x,n) {
    while (x.toString().length < n) {
        x = "0" + x;
    }
    return x;
},

getCurrentTime:function(){
 var d = new Date();
 return d.getTime();
},

start:function(){
var ct = this.getCurrentTime();
this.startTime = ct;

var that = this;
 
setInterval(function(){
 that.tick(that);
 },1);
},

print:function(msg)
{
	this.out.innerHTML = msg;
},

msToTime: function (ms) {
    var s  = this.addZeros(Math.floor((ms / 1000)  % 60), 2),
        m  = this.addZeros(Math.floor((ms / 60000)  % 60), 2),
        h    = this.addZeros(Math.floor((ms / 3600000) % 60), 2),
        ms = this.addZeros(Math.floor(ms % 1000), 3);

    return h + ':' + m + ':' + s + ':' + ms;
  },

tick:function(that) {

var ct = that.getCurrentTime();
var diff = ct - that.startTime;

var sTime = that.msToTime(diff);

that.out.innerHTML = sTime;

}


};


timer.start();*/


