
$('.str_inp input').focus(function () {
    $('.left-side').addClass('foc_blue');
  }).blur(function () {
    $('.left-side').removeClass('foc_blue');
  });
  
$('.clear-mtrx').on('click', function() {
  $(this).closest('input[type=text]').get(0).reset();
});