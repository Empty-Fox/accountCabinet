$(document).ready(function(){
    $('.select').click(function(event){
        event.stopPropagation();
        $(this).parent(".select-box").toggleClass("open"); 
        $('.selectMenu').toggleClass('show'); 
    }); 
});

$(document).on("click", function () {
    $(".select-box").removeClass("open"); 
    $(".selectMenu ").removeClass('show');
});




  ////////////Click left menu/////////////
  $('.left_menu').on('click', function() {
    if (!$(this).hasClass('clicked_leftMenu')) { // если класса нет
      $(this).addClass('clicked_leftMenu'); // добавляем класс
     
      $(".span_statistic").hide();
      $(".span_payments").hide();
      $(".personal_manager_info").hide();
      $(".main_block").css( "grid-template-columns", ".5fr 3.5fr" );
      $(".personal_manager").css( "padding-left", "20px" );



    } else { // если есть
      $(this).removeClass('clicked_leftMenu'); // убираем класс
     
      $(".span_statistic").show();
      $(".span_payments").show();
      $(".personal_manager_info").show();
      $(".main_block").css( "grid-template-columns", "1fr 3fr" );    
      $(".personal_manager").css( "padding-left", "15px" );


    }
  });


  $(function () {
    $(".form").click(function (e) {
        e.preventDefault();
        $(".dropdownList").slideToggle(500);
        $(".fa-chevron-down").toggleClass("active");
    });
});

///////////////////hamburger_menu
$( document ).ready(function() {

  $( ".cross" ).hide();
  $( ".hamburger_menu" ).hide();
  $( ".hamburger" ).click(function() {
  $( ".hamburger_menu" ).slideToggle( "slow", function() {
  $( ".hamburger" ).hide();
  $( ".cross" ).show();
  $( ".background-color_black" ).show();
  
  });
  });
  
  $( ".cross" ).click(function() {
  $( ".hamburger_menu" ).slideToggle( "slow", function() {
  $( ".cross" ).hide();
  $( ".background-color_black" ).hide();
  $( ".hamburger" ).show();

  });
  });
  
  });