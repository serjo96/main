
$('.str_inp input').focus(function () {
    $('.left-side').addClass('foc_blue');
  }).blur(function () {
    $('.left-side').removeClass('foc_blue');
  });
  
$(document).on("click",".clear-mtrx", function(){ 
  $(".str_inp input").val(""); 
});