var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header');
var content = document.getElementById('content');
var showSidebar = false;
var ŭ = 0;
var cnt = 0;
var rep = 0;
var c = document.getElementById('canv');
var $ = c.getContext('2d');
var w = c.width = window.innerWidth;
var h = c.height = window.innerHeight;
var max = Math.min(w, h) / 2 - 10;
var sq_a = new Sq($, {
    x: max - 150,
    y: max - 150,
    mx: max,
    my: max,
    dx: 1,
    dy: 1,
  },{
    x: w / 2,
    y: h / 2
  }, 10, 1, 1);
const sq_b = new Sq($, {
    x: max,
    y: max,
    mx: max,
    my: max,
    dx: 1,
    dy: 1,
  }, {
    x: w / 2,
    y: h / 2
  }, 10, -1, 1);

function toggleSidebar() {
    showSidebar = !showSidebar;
    if (showSidebar) {
        navigationHeader.style.marginLeft = '-10vw';
        navigationHeader.style.animationName = 'showSidebar';
        content.style.filter = 'blur(2px)';
    } else {
        navigationHeader.style.marginLeft = '-100vw';
        navigationHeader.style.animationName = '';
        content.style.filter = '';
    }
}
function closeSidebar() {
    if (showSidebar) {
        showSidebar = true;
        toggleSidebar();
    }
}
window.addEventListener('resize', function(event) {
    if (window.innerWidth > 768 && showSidebar) {
        showSidebar = true;
        toggleSidebar();
    }
});
window.requestAnimFrame = (function(callback) {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback) {
        window.setTimeout(callback, 1000 / 60);
      };
})();

function A() {
    $.clearRect(0, 0, w, h);
    var t = "RainbowPastels ".split("").join(String.fromCharCode(0x2004));
    
    $.font = "5em Poiret One";
    $.shadowColor = 'hsla(0,5%,5%,.5)';
    $.shadowOffsetX = 5;
    $.shadowOffsetY = 5;
    $.fillText(t, w / 2 - 400, h / 2);
    sq_a.next();
    sq_b.next();
};
run();

function run() {
    ŭ -= .5;
    window.requestAnimFrame(A);
    window.requestAnimFrame(run, 60);
}

function draw($, x, y, sq_a, sq_b) {

    $.shadowColor = 'hsla(0,0%,0%,.2)';
    $.shadowBlur = 55;
    $.shadowOffsetX = 25;
    $.shdowOffsetY = 30
    $.fillRect(x - 40, y - 40, 100, 100);

}

function Sq($, rad, mid, num, loc, which) {
    this.next = function() {
        rep++;

        for (var i = 0; i < num; i++) {
            $.fillStyle = 'hsla(' + (ŭ * num / i * .5) + ',100%,75%, 1)';
            var dia = i * (Math.PI / 180) *
            (!cnt || which == 2 ? rep : cnt);

            if (cnt && which == 1) {
                dia += Math.PI / 180 * rep;
            } else if (dia == (2 * Math.PI / num) *
            (num - 1)) {
                cnt = rep;
            }
            var y = mid.y + rad.y * Math.sin(dia * loc);
            var x = mid.x + rad.x * Math.cos(dia * loc);

            draw($, x, y, 0, 0);
        }
        if (cnt) {
            if (rad.x <= -rad.mx || rad.x > rad.mx) {
                rad.dx = -rad.dx;
            }
            if (rad.y <= -rad.my || rad.y > rad.my) {
                rad.dy = -rad.dy;
            }
            rad.x += 1 * rad.dx;
            rad.y += 1 * rad.dy;
        }
    };
}