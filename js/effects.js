var drawcurt = function() {
    var commands = {
        a: $('html').addClass('lightson'),
        b: $('body').addClass('fadeblack'),
        c: $('body').addClass('patternfade'),
        d: $('.videotext').hide(),
        e: $('.curtaintop').show().animate({'top': '85px'}, 'fast'),
        f: $('.curtaintop').animate({'top': '-65px'}, 'fast'),
        g: $('.curtaintop').animate({'top': '65px'}, 'fast'),
        h: $('.curtaintop').animate({'top': '-65px'}, 'fast'),
        i: $('.curtaintop').animate({'top': '45px'}, 'fast'),
        j: $('.curtaintop').animate({'top': '-65px'}, 'fast'),
        k: $('.curtaintop').animate({'top': '25px'}, 'fast'),
        l: $('.curtaintop').animate({'top': '-65px'}, 'fast'),
        m: $('.curtaintop').animate({'top': '5px'}, 'fast'),
        n: $('.curtaintop').animate({'top': '-65px'}, 'fast'),
        o: $('.curtaintop').animate({'top': '0px'}, 'fast'),
        p: $('.curtainleft').delay(1500).show().animate({'left': '180px'}, 4000),
        q: $('.curtainright').delay(1500).show().animate({'right': '160px'}, 4000),
        r: $('#playbutton').show(),
        s: $('#exitbutton').show(),
    };
};
var closecurt = function() {
    var commands = {
        a: $('html').removeClass('lightson'),
        b: $('body').removeClass('fadeblack'),
        c: $('body').removeClass('patternfade'), 
        d: $('.videotext').show(),
        e: $('.curtaintop').animate({'top': '-100px'}).hide(),
        f: $('.curtainleft').animate({'left': '-200px'}).hide(),
        g: $('.curtainright').animate({'right': '-200px'}).hide(),
        h: $('#playbutton').hide(),
        i: $('#exitbutton').hide(),
    };
};

$(document).ready(function() {
            /*   curtain commands   */

    $('video').one({mouseenter: function() {
        drawcurt();
        },
    });
    $('video').on({play: function() {
        drawcurt();
        },
        ended: function() {
        closecurt();
        }
    });
    $('#exitbutton').on({click: function() {  
        closecurt();
        }
    }); 
    

            /*   gallery commands    */
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
    var playvideo = document.getElementById('myvid');
    var needPlayButton = document.getElementById('playbutton');
    needPlayButton.addEventListener('click', function() {
        playvideo.play();
    });
    var exitvideo = document.getElementById('exitbutton');
    exitvideo.addEventListener('click', function() {
        playvideo.pause();
    });
});







