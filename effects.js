$(document).ready(function() {
    /*$('#playbutton').on('click', function() {
        $('#myvid').play();
    });*/
    $('video').one({mouseenter: function() {
        $('body').addClass('effects');
        $('.videotext').hide();
        $('.curtaintop').show().animate({'top': '135px'}, 'fast');
        $('.curtaintop').show().animate({'top': '45px'}, 'fast');
        $('.curtaintop').show().animate({'top': '125px'}, 'fast');
        $('.curtaintop').show().animate({'top': '65px'}, 'fast');
        $('.curtaintop').show().animate({'top': '95px'}, 'fast');
        $('.curtaintop').show().animate({'top': '85px'}, 'fast');
        $('.curtaintop').show().animate({'top': '95px'}, 'fast');
        $('.curtainleft').delay(1500).show().animate({'left': '180px'}, 4000);
        $('.curtainright').delay(1500).show().animate({'right': '160px'}, 4000);
        $('.seats').show();
        $('#playbutton').show();
        $('#exitbutton').show();
        /*$('nav').addClass('raiseup').animate({'top': '40px', 'left': '390px'});*/
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
        ended: function() {
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

    $('#exitbutton').on({click: function() {  
        $('body').removeClass('effects');
        $('.videotext').show();
        $('.curtaintop').hide().animate({'top': '0px'});
        $('.curtainleft').hide().animate({'left': '0px'});
        $('.curtainright').hide().animate({'right': '1000px'});
        $('.seats').hide();
        $('#playbutton').hide()
        $('#exitbutton').hide();
        }
    }); 

    $('#semantic').on({mouseenter: function() {
        $('.semantic').show().animate({'right': '10vw'}, 1000);
        },
        mouseleave: function() {
        $('.semantic').animate({'right': '-100vw'}, 1000);
        }
    });

    $('#zen').on({mouseenter: function() { 
        $('.zen').show().animate({'right': '10vw'}, 1000);
        },
        mouseleave: function() {
        $('.zen').animate({'right': '-100vw'}, 1000);
        }
    });
    $('#selectors').on({mouseenter: function() { 
        $('.selectors').show().animate({'right': '10vw'}, 1000);
        },
        mouseleave: function() {
        $('.selectors').animate({'right': '-100vw'}, 1000);
        }
    });
    $('#js').on({mouseenter: function() { 
        $('.js').show().animate({'right': '10vw'}, 1000);
        },
        mouseleave: function() {
        $('.js').animate({'right': '-100vw'}, 1000);
        }
    });
    $('#group').on({mouseenter: function() { 
        $('.group').show().animate({'right': '10vw'}, 1000);
        },
        mouseleave: function() {
        $('.group').animate({'right': '-100vw'}, 1000);
        }
    });


});


var playvideo = document.getElementById('myvid');
var needPlayButton = document.getElementById('playbutton');
needPlayButton.addEventListener('click', function() {
    playvideo.play();
});

var exitvideo = document.getElementById('exitbutton');
exitvideo.addEventListener('click', function() {
    playvideo.pause();
})

/*
$('nav li').on({click: function() { 

<li><a href="resume.html">resum&eacute;</a></li>
<li><a href="contact.html">contact</a></li>
<li><a href="http://kevinbrianfahy.github.io/blog/">blog</a></li>
<li><a href="projects.html">projects</a></li>
*/

