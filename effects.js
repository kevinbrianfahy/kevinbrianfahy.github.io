$(document).ready(function() {
  $('.video').on('mouseenter', function() {
    $('body').addClass('effects');
    $('header').addClass('effects');
    $('h1').addClass('name');
  });
  $('.video').on('mouseleave', function() {
    $('body').removeClass('effects');
    $('header').removeClass('effects');
    $('h1').removeClass('name');
  });
});

$(document).ready(function() {

  });
