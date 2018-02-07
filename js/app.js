$(document).ready(function(){
  var $footer = $('footer');
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
    $footer.css('display','inherit');
    if($resource == activityJSON['question'+number]["answer1"]){
      
      if($("#next_question").length ==0 ){
        $footer.html("<img src='images/Screens/correct_resource.png'><button id='next_question'>NEXT QUESTION</button>");
      }else{$footer.css('display','inherit')};
      
      
      $('#next_question').click(function(){
        $(".resource").css('display', 'none');
        $footer.css('display', 'none');
        
        if($resource == "mirra"){
          $("#resource").append("<div class='page'><img src='images/mirra_pages/mirra_page_1.jpg' alt='mirra1'>"+
              //********* first page
              "<img src='images/mirra_pages/M1_TP1_c.png' alt='m1_tp1_c' class='answer'>"+"<img src='images/mirra_pages/M1_TP1_incorrect.png' alt='m1_tp1_inc' class='answer'>"+
              
              "<img src='images/mirra_pages/M1_TP2_c.png' alt='m1_tp2_c' class='answer'>"+"<img src='images/mirra_pages/M1_TP2_incorrect.png' alt='m1_tp2_inc' class='answer'>"+
              
              "<img src='images/mirra_pages/M1_TP3_c.png' alt='m1_tp3_c' class='answer'><img src='images/mirra_pages/M1_TP3_incorrect.png' alt='m1_tp3_inc' class='answer'></div>"+
              
              //************ seconde page
              "<div class='page'><img src='images/mirra_pages/mirra_page_2.jpg' alt='mirra2'>"+
              
              "<img src='images/mirra_pages/M2_TP1_c.png' alt='m2_tp1_c' class='answer'>"+"<img src='images/mirra_pages/M2_TP1_incorrect.png' alt='m2_tp1_inc' class='answer'>"+
              
              "<img src='images/mirra_pages/M2_TP2_c.png' alt='m2_tp2_c' class='answer'>"+"<img src='images/mirra_pages/M2_TP2_incorrect.png' alt='m2_tp2_inc' class='answer'>"+

              "<img src='images/mirra_pages/M2_TP3_c.png' alt='m2_tp3_c' class='answer'><img src='images/mirra_pages/M2_TP3_incorrect.png' alt='m2_tp3_inc' class='answer'></div>"+
              
              
              //*********** third page
              "<div class='page'><img src='images/mirra_pages/mirra_page_3.jpg' alt='mirra3'>"+
              "<img src='images/mirra_pages/M3_TP1_c.png' alt='m3_tp1_c' class='answer'><img src='images/mirra_pages/M3_TP1_incorrect.png' alt='m3_tp1_inc' class='answer'>"+
              "</div>"+
              
              
              //************ fouth page
              "<div class='page'><img src='images/mirra_pages/mirra_page_4.jpg' alt='mirra4'></div>"+
              
              
              //************ 5 page
              "<div class='page'><img src='images/mirra_pages/mirra_page_5.jpg' alt='mirra5'>"+
              "<img src='images/mirra_pages/M5_TP1_c.png' alt='m5_tp1_c' class='answer'>"+"<img src='images/mirra_pages/M5_TP1_incorrect.png' alt='m5_tp1_inc' class='answer'>"+
              "</div>"+
              
              

              //************ 6 page
              "<div class='page'><img src='images/mirra_pages/mirra_page_6.jpg' alt='mirra6'>"+
              "<img src='images/mirra_pages/M6_TP1_c.png' alt='m6_tp1_c' class='answer'><img src='images/mirra_pages/M6_TP1_incorrect.png' alt='m6_tp1_inc' class='answer'></div>"+
              
              
              //************ 7 page
              "<div class='page'><img src='images/mirra_pages/mirra_page_7.jpg' alt='mirra7'></div>"+
              
              
              //************ 8 page
              "<div class='page'><img src='images/mirra_pages/mirra_page_8.jpg' alt='mirra8'>"+
              "<img src='images/mirra_pages/M8_TP1_c.png' alt='m8_tp1_c' class='answer'>"+"<img src='images/mirra_pages/M8_TP1_incorrect.png' alt='m8_tp1_inc' class='answer'>"+
              "<img src='images/mirra_pages/M8_TP2_c.png' alt='m8_tp2_c' class='answer'>"+"<img src='images/mirra_pages/M8_TP2_incorrect.png' alt='m8_tp2_inc' class='answer'>"+
              "<img src='images/mirra_pages/M8_TP3_c.png' alt='m8_tp3_c' class='answer'>"+"<img src='images/mirra_pages/M8_TP3_incorrect.png' alt='m8_tp3_inc' class='answer'>"
              +"<img src='images/mirra_pages/M8_TP4_c.png' alt='m8_tp4_c' class='answer'>"+"<img src='images/mirra_pages/M8_TP4_incorrect.png' alt='m8_tp4_inc' class='answer'>"+
              "</div>"+
              
              
              //************ 9 page
              "<div class='page'><img src='images/mirra_pages/mirra_page_9.jpg' alt='mirra9'>"+
              "<img src='images/mirra_pages/M9_TP1_c.png' alt='m9_tp1_c' class='answer'>"+"<img src='images/mirra_pages/M9_TP1_incorrect.png' alt='m9_tp1_inc' class='answer'>"+
              "</div>"+
              
              
              //************ 10 page
              "<div class='page'><img src='images/mirra_pages/mirra_page_10.jpg' alt='mirra10'>"+
              "<img src='images/mirra_pages/M10_TP1_c.png' alt='m10_tp1_c' class='answer'>"+"<img src='images/mirra_pages/M10_TP1_incorrect.png' alt='m10_tp1_inc' class='answer'>"+
              "<img src='images/mirra_pages/M10_TP2_c.png' alt='m10_tp2_c' class='answer'>"+"<img src='images/mirra_pages/M10_TP2_incorrect.png' alt='m10_tp2_inc' class='answer'>"+
              "</div>"+
              
              
              //************ 11 page
              "<div class='page'><img src='images/mirra_pages/mirra_page_11.jpg' alt='mirra11'></div>"+
              
              
              //************ 12 page
              "<div class='page'><img src='images/mirra_pages/mirra_page_12.jpg' alt='mirra12'></div>");
              check_tp_result();
        }
        
        else if($resource == "pi"){
              $("#resource").append("<div class='page'><img src='images/pi/nucala_pi_01.jpg' alt='pi1' ></div>"+

                              //********* 2 page
                              "<div class='page'><img src='images/pi/nucala_pi_02.jpg' alt='pi2'>"+
                              "<img src='images/pi/P2_TP1_c.png' alt='pi2_tp1_c'>"+"<img src='images/pi/P2_TP1_incorrect.png' alt='pi2_tp1_inc'>"+
                              "<img src='images/pi/P2_TP2_c.png' alt='pi2_tp2_c'>"+"<img src='images/pi/P2_TP2_incorrect.png' alt='pi2_tp2_inc'>"+
                              "<img src='images/pi/P2_TP3_c.png' alt='pi2_tp3_c'>"+"<img src='images/pi/P2_TP3_c.png' alt='pi2_tp3_inc'>"+
                              "</div>"+
                              
                              //********* 3 page
                              "<div class='page'><img src='images/pi/nucala_pi_03.jpg' alt='pi3'>"+
                              "<img src='images/pi/P3_TP1_c.png' alt='pi3_tp1_c'>"+"<img src='images/pi/P3_TP1_incorrect.png' alt='pi3_tp1_inc'>"+
                              "<img src='images/pi/P3_TP2_c.png' alt='pi3_tp2_c'>"+"<img src='images/pi/P3_TP2_incorrect.png' alt='pi3_tp2_inc'>"+
                              "</div>"+
                              
                              //********* 4 page
                              "<div class='page'><img src='images/pi/nucala_pi_04.jpg' alt='pi4'>"+
                              "<img src='images/pi/P4_TP1_c.png' alt='pi4_tp1_c'>"+"<img src='images/pi/P4_TP1_incorrect.png' alt='pi4_tp1_inc'>"+
                              "<img src='images/pi/P4_TP2_c.png' alt='pi4_tp2_c'>"+"<img src='images/pi/P4_TP2_incorrect.png' alt='pi4_tp2_inc'>"+
                              "</div>"+
                              
                              //*********
                              "<div class='page'><img src='images/pi/nucala_pi_05.jpg' alt='pi5'>"+
                              "<img src='images/pi/P5_TP1_c.png' alt='pi5_tp1_c'>"+"<img src='images/pi/P5_TP1_incorrect.png' alt='pi5_tp1_inc'>"+
                              "</div>"+
                              

                              //*********
                              "<div class='page'><img src='images/pi/nucala_pi_06.jpg' alt='pi6'>"+
                              "<img src='images/pi/P6_TP1_c.png' alt='pi6_tp1_c'>"+"<img src='images/pi/P6_TP1_incorrect.png' alt='pi6_tp1_inc'>"+
                              "</div>"+
                              

                              //*********
                              "<div class='page'><img src='images/pi/nucala_pi_07.jpg' alt='pi7'><img src='images/pi/P7_TP1_c.png' alt='pi7_tp1_c'></div>"+
                              

                              //*********
                              "<div class='page'><img src='images/pi/nucala_pi_08.jpg' alt='pi8'><img src='images/pi/P8_TP1_c.png' alt='pi8_tp1_c'><img src='images/pi/P8_TP2_c.png' alt='pi8_tp2_c'></div>"+
                              

                              //*********
                              "<div class='page'><img src='images/pi/nucala_pi_09.jpg' alt='pi9'><img src='images/pi/P9_TP1_c.png' alt='pi9_tp1_c'></div>"+
                              

                              //*********
                              "<div class='page'><img src='images/pi/nucala_pi_10.jpg' alt='pi10'><img src='images/pi/P10_TP1_c.png' alt='pi10_tp1_c'><img src='images/pi/P10_TP2_c.png' alt='pi10_tp2_c'></div>"+
                              

                              //*********
                              "<div class='page'><img src='images/pi/nucala_pi_11.jpg' alt='pi11'></div>"+
                              

                              //*********
                              "<div class='page'><img src='images/pi/nucala_pi_12.jpg' alt='pi12'></div>"+
                              

                              //*********
                              "<div class='page'><img src='images/pi/nucala_pi_13.jpg' alt='pi13'><img src='images/pi/P13_TP1_c.png' alt='pi13_tp1_c'></div>"+
                              

                              //*********
                              "<div class='page'><img src='images/pi/nucala_pi_14.jpg' alt='pi14'><img src='images/pi/P14_TP1_c.png' alt='pi14_tp1_c'></div>"+
                              

                              //*********
                              "<div class='page'><img src='images/pi/nucala_pi_15.jpg' alt='pi15'><img src='images/pi/P15_TP1_c.png' alt='pi15_tp1_c'></div>"+
                              

                              //*********
                              "<div class='page'><img src='images/pi/nucala_pi_16.jpg' alt='pi16'></div>"+
                              

                              //*********
                              "<div class='page'><img src='images/pi/nucala_pi_17.jpg' alt='pi17'><img src='images/pi/P17_TP1_c.png' alt='pi17_tp1_c'></div>"+
                              

                              //*********
                              "<div class='page'><img src='images/pi/nucala_pi_18.jpg' alt='pi18'><img src='images/pi/P18_TP1_c.png' alt='pi18_tp1_c'></div>"+
                              

                              //*********
                              "<div class='page'><img src='images/pi/nucala_pi_19.jpg' alt='pi19'><img src='images/pi/P19_TP1_c.png' alt='pi19_tp1_c'></div>"+
                              

                              //*********
                              "<div class='page'><img src='images/pi/nucala_pi_20.jpg' alt='pi20'><img src='images/pi/P20_TP1_c.png' alt='pi20_tp1_c'></div>"+
                              

                              //*********
                              "<div class='page'><img src='images/pi/nucala_pi_21.jpg' alt='pi21'><<img src='images/pi/P21_TP1_c.png' alt='pi21_tp1_c'>/div>"+
                              

                              //*********
                              "<div class='page'><img src='images/pi/nucala_pi_22.jpg' alt='pi22'></div>"+
                              

                              //*********
                              "<div class='page'><img src='images/pi/nucala_pi_23.jpg' alt='pi23'></div>"+
                              

                              //*********
                              "<div class='page'><img src='images/pi/nucala_pi_24.jpg' alt='pi24'></div>");
              check_tp_result();
            }
        })
    }
        else{
          $footer.html("<img src='images/Screens/incorrect_resource.png'>");
        } 
  });
  //**************** CHOOSE THE CORRECT RESOURCE ENDS*****************//

  $("body").on("click", ".load_next_scenario", function() {  
       number = number+1;
       console.log(number);
       $("#questions").html(activityJSON['question'+number]["question"]);
       $footer.css('display', 'none');
       $("#resource .page").remove();
       $(".resource").css('display','inherit');
       if(number == 16) {
        $app.css('background-image',"url('/images/congrats.png')")
       }
  })


  function check_tp_result(){
     $('#resource').on('click','.answer',function(){    
     var result = $(this).attr('alt');
     if(result == activityJSON['question'+number]["answer2"]){
        $footer.css('display', 'inherit');
        $("#next_question").remove();
        $footer.html("<img src='images/Screens/correct_datapoint.png'><img src='images/Buttons/load_next_scenario.png' class = 'load_next_scenario'>");
     }
     else{
       $footer.html("<img src='images/Screens/incorrect_datapoint.png' class='incorrect_datapoint'>");
       $footer.css('display','inherit');
       $(this).css('display','none');
       $(this).next().css('display','inherit');
     }
    }) 
  }




});// ********** Document ready ends ***********//




