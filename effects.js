$(document).ready(function() {
  $('video').on({mouseenter: function() {
    $('body').addClass('effects');
    $('.videotext').hide();
    $('.curtaintop').show().animate({'top': '95px'}, 'fast');
    $('.curtaintop').show().animate({'top': '45px'}, 'fast');
    $('.curtaintop').show().animate({'top': '95px'}, 'fast');
    $('.curtaintop').show().animate({'top': '65px'}, 'fast');
    $('.curtaintop').show().animate({'top': '95px'}, 'fast');
    $('.curtaintop').show().animate({'top': '85px'}, 'fast');
    $('.curtaintop').show().animate({'top': '95px'}, 'fast');
    $('.curtainleft').delay(1500).show().animate({'left': '180px'}, 2500);
    $('.curtainright').delay(1500).show().animate({'right': '160px'}, 2500);
    $('.seats').show();
    },
    mouseleave: function() {
    $('body').removeClass('effects');
    $('.videotext').show();
    $('.curtaintop').hide().animate({'top': '0px'});
    $('.curtainleft').hide().animate({'left': '0px'});
    $('.curtainright').hide().animate({'right': '0px'});
    $('.seats').hide();
    }
  });
});


