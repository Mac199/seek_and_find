$(document).ready(function(){
console.log(activityJSON);
  var number = 1;
  var $resource;
  $laucn = $("#laucn");
  $app = $("#app");

  $laucn.click(function(){ 
    $("#app").css('background-image',"url('images/select_resource.png')");
    $(".grow").remove();
    $app.append("<img src='images/pi/nucala_pi_01.jpg' alt='pi' class='resource'>"+"<img src='images/mirra_pages/mirra_page_1.jpg' alt='mirra' class='resource'>");
    event.preventDefault();
    timer();
    $("#questions").html(activityJSON["question"+number]['question']);
  });


   //**************** CHOOSE THE CORRECT RESOURCE *****************//
  $('body').on('click','.resource',function(){    
    $resource = $(this).attr("alt");  
    $('footer').css('display','inherit');
    if($resource == activityJSON['question'+number]["answer1"]){
      
      if($("#next_question").length ==0 ){
        $("footer").html("<img src='images/Screens/correct_resource.png'><button id='next_question'>NEXT QUESTION</button>");
      }else{$('footer').css('display','inherit')};
      
      
      $('#next_question').click(function(){
        $(".resource").css('display', 'none');
        $("footer").css('display', 'none');
        
        if($resource == "mirra"){
           console.log("this is mirra");
          $("#resource").append("<img src='images/mirra_pages/mirra_page_1.jpg' alt='mirra1'>"+
              "<img src='images/mirra_pages/mirra_page_2.jpg' alt='mirra2'>"+
              "<img src='images/mirra_pages/mirra_page_3.jpg' alt='mirra3'>"+
              "<img src='images/mirra_pages/mirra_page_4.jpg' alt='mirra4'>"+
              "<img src='images/mirra_pages/mirra_page_5.jpg' alt='mirra5'>"+
              "<img src='images/mirra_pages/mirra_page_6.jpg' alt='mirra6'>"+
              "<img src='images/mirra_pages/mirra_page_7.jpg' alt='mirra7'>"+
              "<img src='images/mirra_pages/mirra_page_8.jpg' alt='mirra8'>"+
              "<img src='images/mirra_pages/mirra_page_9.jpg' alt='mirra9'>"+
              "<img src='images/mirra_pages/mirra_page_10.jpg' alt='mirra10'>"+
              "<img src='images/mirra_pages/mirra_page_11.jpg' alt='mirra11'>"+
              "<img src='images/mirra_pages/mirra_page_12.jpg' alt='mirra12'>");
          choose_tp();
        }
        
        else if($resource == "pi"){
          console.log("this is pi");
              $("#resource").append("<img src='images/pi/nucala_pi_01.jpg' alt='pi1' >"+
                              "<img src='images/pi/nucala_pi_02.jpg' alt='pi2'>"+
                              "<img src='images/pi/nucala_pi_03.jpg' alt='pi3'>"+
                              "<img src='images/pi/nucala_pi_04.jpg' alt='pi4'>"+
                              "<img src='images/pi/nucala_pi_05.jpg' alt='pi5'>"+
                              "<img src='images/pi/nucala_pi_06.jpg' alt='pi6'>"+
                              "<img src='images/pi/nucala_pi_07.jpg' alt='pi7'>"+
                              "<img src='images/pi/nucala_pi_08.jpg' alt='pi8'>"+
                              "<img src='images/pi/nucala_pi_09.jpg' alt='pi9'>"+
                              "<img src='images/pi/nucala_pi_10.jpg' alt='pi10'>"+
                              "<img src='images/pi/nucala_pi_11.jpg' alt='pi11'>"+
                              "<img src='images/pi/nucala_pi_12.jpg' alt='pi12'>"+
                              "<img src='images/pi/nucala_pi_13.jpg' alt='pi13'>"+
                              "<img src='images/pi/nucala_pi_14.jpg' alt='pi14'>"+
                              "<img src='images/pi/nucala_pi_15.jpg' alt='pi15'>"+
                              "<img src='images/pi/nucala_pi_16.jpg' alt='pi16'>"+
                              "<img src='images/pi/nucala_pi_17.jpg' alt='pi17'>"+
                              "<img src='images/pi/nucala_pi_18.jpg' alt='pi18'>"+
                              "<img src='images/pi/nucala_pi_19.jpg' alt='pi19'>"+
                              "<img src='images/pi/nucala_pi_20.jpg' alt='pi20'>"+
                              "<img src='images/pi/nucala_pi_21.jpg' alt='pi21'>"+
                              "<img src='images/pi/nucala_pi_22.jpg' alt='pi22'>"+
                              "<img src='images/pi/nucala_pi_23.jpg' alt='pi23'>"+
                              "<img src='images/pi/nucala_pi_24.jpg' alt='pi24'>");
              choose_tp();
            }
        })
    }
        else{
          $('footer').html("<img src='images/Screens/incorrect_resource.png'>");
        } 
  });
  //**************** CHOOSE THE CORRECT RESOURCE ENDS*****************//

  function choose_tp() {
    if('right touch point'){
      $("footer").css('display', 'inherit');
      $("#next_question").remove();
      $("footer").append("<img src='images/Buttons/load_next_scenario.png' class = 'load_next_scenario'>")
    }
    else{
      alert("keep looping");
    }
  }

  $("body").on("click", ".load_next_scenario", function() {  
       number = number+1;
       console.log(number);
       $("#questions").html(activityJSON['question'+number]["question"]);
       $("footer").css('display', 'none');
       $("#resource img").remove();
       $(".resource").css('display','inherit');
       if(number == 16) {
        $app.css('background-image',"url('/images/congrats.png')")
       }
  })
});// ********** Document ready ends ***********//