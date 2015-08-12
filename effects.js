$(document).ready(function() {
    $('video').one({mouseenter: function() {
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
        $('#playbutton').show();
        $('#exitbutton').show();
        },
        /*mouseleave: function() {
        $('body').removeClass('effects');
        $('.videotext').show();
        $('.curtaintop').hide().animate({'top': '0px'});
        $('.curtainleft').hide().animate({'left': '0px'});
        $('.curtainright').hide().animate({'right': '0px'});
        $('.seats').hide();
        $('#playbutton').hide();
        }*/
    });

    $('video').on({play: function() {
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
        $('#playbutton').show();
        $('#exitbutton').show();
        },
        pause: function() {
        $('body').removeClass('effects');
        $('.videotext').show();
        $('.curtaintop').hide().animate({'top': '0px'});
        $('.curtainleft').hide().animate({'left': '0px'});
        $('.curtainright').hide().animate({'right': '0px'});
        $('.seats').hide();
        $('#playbutton').hide();
        $('#exitbutton').hide();
        }
    });

});


/* WHY DOESN'T THIS WORK???
$('#playbutton').on('click', function() {
        $('#myvid').play();
    });
*/

var playvideo = document.getElementById('myvid');
var needPlayButton = document.getElementById('playbutton');
needPlayButton.addEventListener('click', function() {
    playvideo.play();
});

var exitvideo = document.getElementById('exitbutton');
exitvideo.addEventListener('click', function() {
    playvideo.pause();
})

