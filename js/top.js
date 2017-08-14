$(function () {
    $(".scroller-img").simplyScroll({
        pauseButton: true
    });
    $(".simply-scroll-btn-pause").hide();

    $(".simply-scroll").hover(function () {
        $(".simply-scroll-btn-pause").click();
    })
});







