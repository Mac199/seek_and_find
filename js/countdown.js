var timer2 = "1:00";
function timer() {
var interval = setInterval(function() {
  var timer = timer2.split(':');
  //by parsing integer, I avoid all extra string processing
  var minutes = parseInt(timer[0], 10);
  var seconds = parseInt(timer[1], 10);
  --seconds;
  minutes = (seconds < 0) ? --minutes : minutes;
  seconds = (seconds < 0) ? 59 : seconds;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  //minutes = (minutes < 10) ?  minutes : minutes;
  // $('.countdown').html(minutes + ':' + seconds);
  // if (minutes < 0) {
  //   clearInterval(interval);
  // };
  //check if both minutes and seconds are 0
  if ((seconds <= 0) && (minutes <= 0)){
    clearInterval(interval);
    $("#app").css('background-image',"url('images/congrats.png')");
    $('#resource .page').remove();
    $("#final_point").html($("#point")).css('display','inherit');
  };
  timer2 = minutes + ':' + seconds;
}, 1000);
} 
