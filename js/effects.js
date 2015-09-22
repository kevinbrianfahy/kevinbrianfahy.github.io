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
        j: $('.curtaintop').animate({'top': '-65px'}),
        k: $('.curtaintop').animate({'top': '25px'}, 'slow'),
        l: $('.curtaintop').animate({'top': '-65px'}, 'slow'),
        m: $('.curtaintop').animate({'top': '5px'}, 'slow'),
        n: $('.curtaintop').animate({'top': '0px'}, 'fast'),
        o: $('.curtainleft').delay(1500).show().animate({'left': '180px'}, 7500),
        p: $('.curtainright').delay(1500).show().animate({'right': '160px'}, 7500),
        q: $('#playbutton').show(),
        r: $('#exitbutton').show(),
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
    /*
    $('#projects img').on({mouseenter: function() { 
        var imageid = $(this).attr('data-');
        $('#' + imageid).show().animate({'right': '10%'}, 1500);
        },
        mouseleave: function() {
        var imageid = $(this).attr('data-');
        $('#' + imageid).animate({'right': '-100%'});
        }
    });
    */
});
/*
var playvideo = document.getElementById('myvid');
    var needPlayButton = document.getElementById('playbutton');
    needPlayButton.addEventListener('click', function() {
        playvideo.play();
    });
    var exitvideo = document.getElementById('exitbutton');
    exitvideo.addEventListener('click', function() {
        playvideo.pause();
    });
*/

/*
var projects = document.querySelectorAll('#projects img');
    projects[0].addEventListener('mouseenter', function () {
    var description = document.getElementById('zen').style.display = 'block';
    }),
    projects[0].addEventListener('mouseleave', function() {
    var description = document.getElementById('zen').style.display = 'none';
    })
*/

var projects = document.querySelectorAll('#projects img');
for (var i=0; i<projects.length; i++) {
    projects[i].addEventListener('mouseenter', function () {
        var description = document.getElementById('myzen');
        if (this == description) {
            document.getElementById('zen').style.display = 'block';
        }
    })
}

/*
console.log(Object.keys(document));
*/

/*
var projects = document.querySelectorAll('#projects img');
for (var i=0; i<projects.length; i++) {
    projects[i].addEventListener('mouseenter', function () {
    var description = this.getAttribute('data-');
    console.log(description);
    })
}
*/

/*
var projects = document.getElementById('projects');
console.log(projects); //<ul></ul> and all li's in it with id's!!
var gallery = projects.children;
console.log(gallery); // [li, li, li]  an array - interesting
var images = gallery.children; 
console.log(images); // undefined

var gallery1 = projects[1].getAttribute('data-');
console.log(gallery1); // selectors

*/

/*
var images = document.getElementsByTagName('img');
console.log(images);
var gallery = images[0];
console.log(gallery);
images[0].addEventListener('mouseenter', function() {
    var description = this.getAttribute('data-');
    console.log(description);
})
*/

/*
var projects = document.getElementById('projects');
projects.addEventListener('mouseenter', function() {
    console.log(projects.getAttribute('data-'));
   })
 */   

/*
var projects = document.getElementById('projects');
var gallery = projects.children;
gallery.addEventListener('mouseenter', function() { //  not a function - because it's an array??
    var description = this.getAttribute('data-');
    console.log(description); 
})
*/


console.log('hello\nkevin');

