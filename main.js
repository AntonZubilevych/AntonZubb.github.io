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
    for(var i = 0 ; i<blocks.length ; i++){
        setTimeout(function (y) {
            console.log(blocks[y]);
            blocks[y].classList.add('show');
            blocks[y].classList.add('zoomIn');
        },i*1000,i);
    }
}


var options = {
    strings: ["","Честність","Довіра","Доступність","Ваш Адвокат <br> Катерина Панчелюга"],
    typeSpeed: 30
};

var typed = new Typed(".element", options);

animatedBlock();

