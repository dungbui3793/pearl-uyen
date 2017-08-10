$(document).ready(function(){

    //Check to see if the window is top if not then display button

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});

function changeImage11(){
    document.getElementById('toChange1').src=
        "../img/works-img-3.png";
}
function changeImage12(){
    document.getElementById('toChange1').src=
        "../img/works-img-4.png";
}

function changeImage21(){
    document.getElementById('toChange2').src=
        "../img/works-img-3.png";
}
function changeImage22(){
    document.getElementById('toChange2').src=
        "../img/works-img-4.png";
}

function changeImage31(){
    document.getElementById('toChange3').src=
        "../img/works-img-3.png";
}
function changeImage32(){
    document.getElementById('toChange3').src=
        "../img/works-img-4.png";
}

function changeImage41(){
    document.getElementById('toChange4').src=
        "../img/works-img-3.png";
}
function changeImage42(){
    document.getElementById('toChange4').src=
        "../img/works-img-4.png";
}
