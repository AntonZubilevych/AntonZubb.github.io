/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
   // document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.15)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
   // document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

function animatedBlock(){


        var blocks = document.getElementById('inner_blocks').children;
        for (var i = 0; i < blocks.length; i++) {
            setTimeout(function (y) {
                blocks[y].classList.add('show');
                blocks[y].classList.add('zoomIn');
            }, i * 500, i);
        }
}

function bindAnimation() {
    window.onscroll = function() {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        var width  = document.getElementById('credo').offsetTop;
        var navbar = document.getElementsByClassName('pos-f-t')[0];
        if(scrolled>width){
            animatedBlock();
        }

        if(scrolled>10){
            navbar.classList.add('opacity');
        }else{
            navbar.classList.remove('opacity');
        }
    }
}

function animateCircle() {
    var circle = document.getElementsByClassName('circle')[0];


    circle.classList.add('show');
    circle.classList.add('zoomInRight');
    circle.addEventListener('mouseout' , function () {
        circle.classList.remove('zoomInRight');
        circle.classList.toggle('wobble');

    })
}

function typping() {
    var options = {
        strings: ["","Честність","Довіра","Доступність","Ваш Адвокат <br> Катерина Панчелюга"],
        typeSpeed: 30
    };

    var typed = new Typed(".element", options);
}

typping();
setTimeout(animateCircle,5500);
bindAnimation();
//animatedBlock();

