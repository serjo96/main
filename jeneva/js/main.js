//search fild
$(document).on('focusin', '.search-btn', function(){
  $('.search-btn').addClass('focus-fild');
});

$(document).on('focusout', '.search-btn', function(){
  $('.search-btn').removeClass('focus-fild');
});


//delivery toggle

$(document).on('click', '.js-pay-toggle', function(){
  $('.pay').addClass('active-category');
  $('.delivery').removeClass('active-category');
 
});

$(document).on('click', '.js-delivery-toggle', function(){
  $('.delivery').addClass('active-category');
  $('.pay').removeClass('active-category');
});

$(document).on('click', '.js-delivery-more', function(){
  $('.dilevery-list').slideToggle();
});