var timer2 = $("#timer").text();
function timer() {
var interval = setInterval(function() {
  var timer = timer2.split(':');
  var minutes = parseInt(timer[0], 10);
  var seconds = parseInt(timer[1], 10);
  --seconds;
  minutes = (seconds < 0) ? --minutes : minutes;
  seconds = (seconds < 0) ? 59 : seconds;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  $('.countdown').html(minutes + ':' + seconds);
  
  //********* loccalStorage *************//
  //localStorage.setItem("time", $("#timer").text());
  

  if (minutes < 0) {
    clearInterval(interval);
  };
  //check if both minutes and seconds are 0
  if ((seconds <= 0) && (minutes <= 0) || ($("#correct_count").text() == 15)){
    congrats(interval, seconds);
}
  timer2 = minutes + ':' + seconds;
}, 1000);
} 

function congrats(interval, seconds){
    clearInterval(interval);
    $point = $("#point").text();
    $("#app").css('background-image',"url('images/congrats.png')");
    $('#resource .page, .resource').remove();
    $("#final_point").html($point).css('display','inherit');
    $("#correct_count").css('display','inherit');
    $("#time_remaining").html($("#timer").text());
    $("footer").remove();
    if(seconds>0){
      $("#time_bonus").html(seconds*100);
    }else{$("#time_bonus").html("0")}
    $("#total").html( $("#time_bonus").text()+$("#final_point").text() );
  }